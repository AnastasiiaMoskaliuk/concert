document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("popupClose");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    if (form.checkValidity()) {
      popup.style.display = "flex"; 

      const url = form.action + "?" + new URLSearchParams(new FormData(form)).toString();
      window.open(url, "_blank"); 
      form.reset();
    }
  });

  closeBtn.addEventListener("click", () => popup.style.display = "none");
  window.addEventListener("click", (e) => {
    if (e.target === popup) popup.style.display = "none";
  });
});
