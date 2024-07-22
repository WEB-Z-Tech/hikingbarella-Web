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

  const currentPath = window.location.pathname.split("/").pop();
  navLinkItems.forEach((link) => {
    if (link.getAttribute("href") === currentPath || (currentPath === '' && link.getAttribute("href") === 'index.html')) {
      link.classList.add("active");
    }
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementById('counter');
  const incrementButton = document.getElementById('increment');
  const decrementButton = document.getElementById('decrement');
  
  let count = 0;

  incrementButton.addEventListener('click', () => {
    count++;
    counter.value = count;
  });

  decrementButton.addEventListener('click', () => {
    count--;
    counter.value = count;
  });
});




