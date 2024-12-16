let navItems = document.querySelectorAll(".nav-link");
navItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    // Remove 'active' class from all nav items
    navItems.forEach((item) => item.classList.remove("active"));

    // Add 'active' class to the clicked nav item
    navItem.classList.add("active");
  });
});
