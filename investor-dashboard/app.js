// ---------------------------------------------------------------------------
// Property Investor Dashboard — rendering, search, filters, sort, charts.
// All data comes from data.js (PROPERTIES, STATUS_META, STATUS_ORDER, PROFIT_TREND).
// ---------------------------------------------------------------------------

const fmtMoney = (n) =>
  n == null ? "—" : n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

const fmtDate = (iso) => {
  if (!iso) return "—";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
};

const todayISO = new Date().toISOString().slice(0, 10);
const daysBetween = (iso) => Math.round((new Date(iso + "T00:00:00") - new Date(todayISO + "T00:00:00")) / 86400000);

const ACTIVE_STATUSES = ["analyzing", "offer", "contract", "purchased", "renovating", "listed"];
const OWNED_STATUSES = ["purchased", "renovating", "listed"];

// ---------------------------------------------------------------------------
// State
// ---------------------------------------------------------------------------
const state = {
  search: "",
  status: "all",
  type: "all",
  sortKey: "pipeline",
  sortDir: "asc",
};

// ---------------------------------------------------------------------------
// KPIs
// ---------------------------------------------------------------------------
function computeKPIs() {
  const found = PROPERTIES.filter((p) => p.status === "found").length;
  const evaluating = PROPERTIES.filter((p) => ["analyzing", "offer"].includes(p.status)).length;
  const underContract = PROPERTIES.filter((p) => p.status === "contract").length;
  const owned = PROPERTIES.filter((p) => OWNED_STATUSES.includes(p.status));
  const sold = PROPERTIES.filter((p) => p.status === "sold");

  const followUpsDue = PROPERTIES.filter((p) => p.followUpDate && daysBetween(p.followUpDate) <= 3);
  const overdue = followUpsDue.filter((p) => daysBetween(p.followUpDate) < 0);

  const realizedProfit = sold.reduce((sum, p) => sum + (p.actualProfit || 0), 0);
  const projectedProfit = owned.reduce((sum, p) => sum + (p.estProfit || 0), 0);
  const portfolioValue = owned.reduce((sum, p) => sum + (p.arv || 0), 0);

  const roiList = sold
    .filter((p) => p.purchasePrice)
    .map((p) => (p.actualProfit / (p.purchasePrice + (p.rehabBudget || 0))) * 100);
  const avgRoi = roiList.length ? roiList.reduce((a, b) => a + b, 0) / roiList.length : 0;

  return [
    { label: "Properties Found", value: found, delta: `${evaluating} being evaluated`, accent: "var(--blue)" },
    { label: "Under Contract", value: underContract, delta: `${evaluating} in analysis/offer`, accent: "var(--orange)" },
    { label: "Currently Owned", value: owned.length, delta: `${fmtMoney(projectedProfit)} projected profit`, accent: "var(--purple)" },
    { label: "Sold / Flipped", value: sold.length, delta: "all-time closed deals", accent: "var(--green)" },
    { label: "Follow-ups Due", value: followUpsDue.length, delta: `${overdue.length} overdue`, deltaClass: overdue.length ? "down" : "up", accent: "var(--red)" },
    { label: "Realized Profit", value: fmtMoney(realizedProfit), delta: "sum of closed deals", accent: "var(--green)" },
    { label: "Avg ROI (Sold)", value: `${avgRoi.toFixed(1)}%`, delta: "profit / total cash in", accent: "var(--blue)" },
    { label: "Portfolio Value", value: fmtMoney(portfolioValue), delta: "ARV of owned properties", accent: "var(--cyan)" },
  ];
}

function renderKPIs() {
  const grid = document.getElementById("kpiGrid");
  grid.innerHTML = computeKPIs()
    .map(
      (k) => `
      <div class="kpi-card" style="--accent:${k.accent}">
        <div class="kpi-label">${k.label}</div>
        <div class="kpi-value">${k.value}</div>
        <div class="kpi-delta ${k.deltaClass || ""}">${k.delta}</div>
      </div>`
    )
    .join("");
}

// ---------------------------------------------------------------------------
// Filters
// ---------------------------------------------------------------------------
function renderStatusPills() {
  const wrap = document.getElementById("statusPills");
  const counts = { all: PROPERTIES.length };
  STATUS_ORDER.forEach((s) => (counts[s] = PROPERTIES.filter((p) => p.status === s).length));

  const pills = ["all", ...STATUS_ORDER].map((s) => {
    const label = s === "all" ? "All" : STATUS_META[s].label;
    return `<span class="pill ${state.status === s ? "active" : ""}" data-status="${s}">${label} (${counts[s]})</span>`;
  });
  wrap.innerHTML = pills.join("");
  wrap.querySelectorAll(".pill").forEach((el) =>
    el.addEventListener("click", () => {
      state.status = el.dataset.status;
      renderStatusPills();
      renderTable();
    })
  );
}

function renderTypeFilter() {
  const select = document.getElementById("typeFilter");
  const types = [...new Set(PROPERTIES.map((p) => p.propertyType))].sort();
  select.innerHTML =
    `<option value="all">All types</option>` + types.map((t) => `<option value="${t}">${t}</option>`).join("");
  select.value = state.type;
  select.addEventListener("change", () => {
    state.type = select.value;
    renderTable();
  });
}

function matchesSearch(p, q) {
  if (!q) return true;
  const haystack = [p.address, p.city, p.state, p.zip, p.owner, p.source, p.propertyType, STATUS_META[p.status].label, p.notes]
    .join(" ")
    .toLowerCase();
  return haystack.includes(q.toLowerCase());
}

function getFilteredProperties() {
  return PROPERTIES.filter(
    (p) =>
      matchesSearch(p, state.search) &&
      (state.status === "all" || p.status === state.status) &&
      (state.type === "all" || p.propertyType === state.type)
  );
}

// ---------------------------------------------------------------------------
// Table
// ---------------------------------------------------------------------------
function sortProperties(list) {
  const dir = state.sortDir === "asc" ? 1 : -1;
  return [...list].sort((a, b) => {
    if (state.sortKey === "pipeline") {
      const diff = STATUS_ORDER.indexOf(a.status) - STATUS_ORDER.indexOf(b.status);
      if (diff !== 0) return diff * dir;
      return (a.followUpDate || "9999").localeCompare(b.followUpDate || "9999");
    }
    let av = a[state.sortKey];
    let bv = b[state.sortKey];
    if (av == null) av = state.sortKey === "followUpDate" ? "9999-99-99" : -Infinity;
    if (bv == null) bv = state.sortKey === "followUpDate" ? "9999-99-99" : -Infinity;
    if (typeof av === "string") return av.localeCompare(bv) * dir;
    return (av - bv) * dir;
  });
}

function followUpClass(iso) {
  if (!iso) return "";
  const d = daysBetween(iso);
  if (d < 0) return "overdue";
  if (d <= 3) return "soon";
  return "";
}

function followUpText(iso) {
  if (!iso) return "—";
  const d = daysBetween(iso);
  if (d < 0) return `${fmtDate(iso)} (${Math.abs(d)}d overdue)`;
  if (d === 0) return `${fmtDate(iso)} (today)`;
  return `${fmtDate(iso)} (${d}d)`;
}

function renderTable() {
  const body = document.getElementById("propTableBody");
  const filtered = sortProperties(getFilteredProperties());
  document.getElementById("emptyState").hidden = filtered.length !== 0;
  document.getElementById("searchCount").textContent = state.search ? `${filtered.length} match${filtered.length === 1 ? "" : "es"}` : "";

  body.innerHTML = filtered
    .map((p) => {
      const meta = STATUS_META[p.status];
      const profit = p.status === "sold" ? p.actualProfit : p.estProfit;
      const profitClass = profit == null ? "" : profit >= 0 ? "profit-pos" : "profit-neg";
      const roi = p.purchasePrice ? (profit / (p.purchasePrice + (p.rehabBudget || 0))) * 100 : null;
      return `
      <tr>
        <td>
          <div class="addr-primary">${p.address}</div>
          <div class="addr-secondary">${p.city}, ${p.state} ${p.zip}</div>
        </td>
        <td><span class="status-badge" style="background:${meta.color}22;color:${meta.color}">${meta.label}</span></td>
        <td>${p.propertyType}</td>
        <td>${p.source}</td>
        <td>${fmtMoney(p.purchasePrice)}</td>
        <td>${fmtMoney(p.arv)}</td>
        <td class="${profitClass}">${fmtMoney(profit)}</td>
        <td>${roi == null ? "—" : roi.toFixed(1) + "%"}</td>
        <td><span class="followup-date ${followUpClass(p.followUpDate)}">${followUpText(p.followUpDate)}</span></td>
      </tr>`;
    })
    .join("");
}

function initSortHeaders() {
  document.querySelectorAll("th[data-sort]").forEach((th) => {
    th.addEventListener("click", () => {
      const key = th.dataset.sort;
      if (state.sortKey === key) {
        state.sortDir = state.sortDir === "asc" ? "desc" : "asc";
      } else {
        state.sortKey = key;
        state.sortDir = "asc";
      }
      document.querySelectorAll("th[data-sort]").forEach((h) => h.classList.remove("sorted"));
      th.classList.add("sorted");
      renderTable();
    });
  });
}

// ---------------------------------------------------------------------------
// Follow-ups panel
// ---------------------------------------------------------------------------
function renderFollowups() {
  const list = PROPERTIES.filter((p) => p.followUpDate)
    .sort((a, b) => a.followUpDate.localeCompare(b.followUpDate))
    .slice(0, 8);

  const overdueCount = list.filter((p) => daysBetween(p.followUpDate) < 0).length;
  document.getElementById("overdueTag").textContent = `${overdueCount} overdue`;

  document.getElementById("followupList").innerHTML = list
    .map(
      (p) => `
      <li class="followup-item">
        <div class="followup-item-top">
          <span class="followup-addr">${p.address}</span>
          <span class="followup-date ${followUpClass(p.followUpDate)}">${followUpText(p.followUpDate)}</span>
        </div>
        <div class="followup-note">${p.followUpNote || ""}</div>
      </li>`
    )
    .join("");
}

// ---------------------------------------------------------------------------
// Charts
// ---------------------------------------------------------------------------
Chart.defaults.color = "#8a93ab";
Chart.defaults.borderColor = "#1f2740";
Chart.defaults.font.family = "-apple-system, Segoe UI, Inter, Roboto, Helvetica, Arial, sans-serif";

function initCharts() {
  const pipelineCounts = STATUS_ORDER.map((s) => PROPERTIES.filter((p) => p.status === s).length);
  new Chart(document.getElementById("pipelineChart"), {
    type: "bar",
    data: {
      labels: STATUS_ORDER.map((s) => STATUS_META[s].label),
      datasets: [{ data: pipelineCounts, backgroundColor: STATUS_ORDER.map((s) => STATUS_META[s].color), borderRadius: 6 }],
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        x: { ticks: { font: { size: 10 } }, grid: { display: false } },
        y: { beginAtZero: true, ticks: { precision: 0 }, grid: { color: "#1f2740" } },
      },
    },
  });

  const cumulative = [];
  PROFIT_TREND.reduce((acc, p, i) => (cumulative[i] = acc + p.profit), 0);
  new Chart(document.getElementById("profitChart"), {
    data: {
      labels: PROFIT_TREND.map((p) => p.month),
      datasets: [
        { type: "bar", label: "Monthly Profit", data: PROFIT_TREND.map((p) => p.profit), backgroundColor: "#22c55e99", borderRadius: 6, yAxisID: "y" },
        { type: "line", label: "Cumulative", data: cumulative, borderColor: "#3b82f6", backgroundColor: "#3b82f6", tension: 0.35, pointRadius: 3, yAxisID: "y1" },
      ],
    },
    options: {
      plugins: { legend: { display: true, position: "bottom", labels: { boxWidth: 10, font: { size: 10 } } } },
      scales: {
        x: { grid: { display: false } },
        y: { position: "left", grid: { color: "#1f2740" }, ticks: { callback: (v) => "$" + v / 1000 + "k" } },
        y1: { position: "right", grid: { display: false }, ticks: { callback: (v) => "$" + v / 1000 + "k" } },
      },
    },
  });

  const activeProps = PROPERTIES.filter((p) => p.status !== "sold");
  const typeCounts = {};
  activeProps.forEach((p) => (typeCounts[p.propertyType] = (typeCounts[p.propertyType] || 0) + 1));
  const typeColors = ["#3b82f6", "#22c55e", "#a78bfa", "#f59e0b", "#ef4444", "#22d3ee"];
  new Chart(document.getElementById("typeChart"), {
    type: "doughnut",
    data: {
      labels: Object.keys(typeCounts),
      datasets: [{ data: Object.values(typeCounts), backgroundColor: typeColors, borderWidth: 0 }],
    },
    options: {
      cutout: "68%",
      plugins: { legend: { position: "bottom", labels: { boxWidth: 10, font: { size: 10 } } } },
    },
  });

  const sourceCounts = {};
  PROPERTIES.forEach((p) => (sourceCounts[p.source] = (sourceCounts[p.source] || 0) + 1));
  const sourceEntries = Object.entries(sourceCounts).sort((a, b) => b[1] - a[1]);
  new Chart(document.getElementById("sourceChart"), {
    type: "bar",
    data: {
      labels: sourceEntries.map((e) => e[0]),
      datasets: [{ data: sourceEntries.map((e) => e[1]), backgroundColor: "#a78bfa", borderRadius: 6 }],
    },
    options: {
      indexAxis: "y",
      plugins: { legend: { display: false } },
      scales: {
        x: { beginAtZero: true, ticks: { precision: 0 }, grid: { color: "#1f2740" } },
        y: { grid: { display: false }, ticks: { font: { size: 10 } } },
      },
    },
  });
}

// ---------------------------------------------------------------------------
// Init
// ---------------------------------------------------------------------------
function init() {
  document.getElementById("todayLabel").textContent = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  renderKPIs();
  renderStatusPills();
  renderTypeFilter();
  initSortHeaders();
  renderTable();
  renderFollowups();
  initCharts();

  document.getElementById("searchInput").addEventListener("input", (e) => {
    state.search = e.target.value.trim();
    renderTable();
  });
}

document.addEventListener("DOMContentLoaded", init);
