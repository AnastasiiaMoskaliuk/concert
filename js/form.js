document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("ticketModal");
  const closeBtn = document.getElementById("modalClose");
  const form = document.getElementById("ticketForm");
  const cityInput = document.getElementById("city");

  document.querySelectorAll(".btn-ticket, [data-modal-open]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      modal.classList.add("show");

      const row = e.target.closest("tr");
      if (row) {
        const city = row.querySelector("td").innerText;
        cityInput.value = city;
      } else {
        cityInput.value = "";
      }
    });
  });

  closeBtn.addEventListener("click", () => modal.classList.remove("show"));

  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("show");
  });

  form.addEventListener("submit", (e) => {});
});
