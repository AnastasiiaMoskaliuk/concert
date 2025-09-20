document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.querySelector(".js-open-menu");
  const closeBtn = document.querySelector(".js-close-menu");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuLinks = mobileMenu.querySelectorAll("a"); 

  openBtn.addEventListener("click", () => {
    mobileMenu.classList.add("active");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
});
