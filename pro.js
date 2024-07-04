document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggle-btn");
  const navLinks = document.getElementById("nav-links");

  toggleBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  const navLinkItems = document.querySelectorAll("nav ul li a");

  navLinkItems.forEach((link) => {
    link.addEventListener("click", function () {
      navLinkItems.forEach((navLink) => navLink.classList.remove("active"));
      this.classList.add("active");
      navLinks.classList.remove("show");
    });
  });
});
