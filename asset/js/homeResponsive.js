var openSidebar = document.querySelector(".menu-responsive > .menu-icon");
var closeSidebar = document.querySelector(".sidebar-main > .close-btn");
var sidebarMain = document.querySelector(".sidebar-main");
var sidebar = document.querySelector(".sidebar");
openSidebar.onclick = function () {
  sidebar.classList.add("active");
  sidebarMain.classList.add("open");
};
closeSidebar.onclick = function () {
  sidebar.classList.remove("active");
  sidebarMain.classList.remove("open");
};

var showAllProductSidebar = document.querySelector(".sidebar-all-product ul");
var showNewsSidebar = document.querySelector(".sidebar-new ul");
var plusAllProductSidebar = document.querySelector(
  ".sidebar-all-product .plus-btn"
);
var removeAllProductSidebar = document.querySelector(
  ".sidebar-all-product .remove-btn"
);
var plusNewsSidebar = document.querySelector(".sidebar-new .plus-btn");
var removeNewsSidebar = document.querySelector(".sidebar-new .remove-btn");

plusAllProductSidebar.onclick = function () {
  showAllProductSidebar.style.display = "block";
  plusAllProductSidebar.style.display = "none";
  removeAllProductSidebar.style.display = "block";
};
removeAllProductSidebar.onclick = function () {
  showAllProductSidebar.style.display = "none";
  plusAllProductSidebar.style.display = "block";
  removeAllProductSidebar.style.display = "none";
};
plusNewsSidebar.onclick = function () {
  showNewsSidebar.style.display = "block";
  plusNewsSidebar.style.display = "none";
  removeNewsSidebar.style.display = "block";
};
removeNewsSidebar.onclick = function () {
  showNewsSidebar.style.display = "none";
  plusNewsSidebar.style.display = "block";
  removeNewsSidebar.style.display = "none";
};
