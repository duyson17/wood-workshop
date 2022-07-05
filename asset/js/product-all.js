var closeSidebarProductAll = document.querySelectorAll(
  ".sidebar-product-all .remove-btn"
);
var openSidebarProductAll = document.querySelectorAll(
  ".sidebar-product-all .add-btn"
);
var formSelectProductAll = document.querySelectorAll(
  ".sidebar-product-all .form-select"
);

for (let index = 0; index < closeSidebarProductAll.length; index++) {
  closeSidebarProductAll[index].onclick = function () {
    console.log("dong");
    closeSidebarProductAll[index].style.display = "none";
    openSidebarProductAll[index].style.display = "block";
    formSelectProductAll[index].style.display = "none";
  };
  openSidebarProductAll[index].onclick = function () {
    console.log("mo");
    closeSidebarProductAll[index].style.display = "block";
    openSidebarProductAll[index].style.display = "none";
    formSelectProductAll[index].style.display = "block";
  };
}
