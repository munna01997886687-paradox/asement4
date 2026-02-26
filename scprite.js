function updateCounts() {
  const cards = document.querySelectorAll(".job-card");
  const total = cards.length;

  const interview = document.querySelectorAll(
    ".job-card[data-status='interview']"
  ).length;

  const rejected = document.querySelectorAll(
    ".job-card[data-status='rejected']"
  ).length;

  const visible = [...cards].filter(
    (card) => card.style.display !== "none"
  ).length;

  document.getElementById("totalCount").innerText = total;
  document.getElementById("interviewCount").innerText = interview;
  document.getElementById("rejectedCount").innerText = rejected;
  document.getElementById("visibleCount").innerText = visible;
}

function setStatus(btn, status) {
  const card = btn.closest(".job-card");
  const badge = card.querySelector(".badge");

  card.setAttribute("data-status", status);

  if (status === "interview") {
    badge.textContent = "INTERVIEW";
    badge.className = "badge badge-success mt-3";
  }

  if (status === "rejected") {
    badge.textContent = "REJECTED";
    badge.className = "badge badge-error mt-3";
  }

  updateCounts();
}

function filterJobs(type) {
  const cards = document.querySelectorAll(".job-card");

  cards.forEach((card) => {
    if (type === "all") {
      card.style.display = "block";
    } else {
      card.style.display =
        card.getAttribute("data-status") === type ? "block" : "none";
    }
  });

  updateCounts();
}

function deleteJob(btn) {
  const card = btn.closest(".job-card");
  card.remove();
  updateCounts();
}

updateCounts();