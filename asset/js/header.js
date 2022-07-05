// Xử lí đóng mở nút search/ nav --> OK
var navSearchBtn = document.querySelector(".search-btn div");
var navAccountBtn = document.querySelector(".account-btn div");
var showInputNav = document.querySelector(".part-show");
var showAccountNav = document.querySelector(".box-account");

navSearchBtn.onclick = showInputSearch;
navAccountBtn.onclick = showAccount;

function showInputSearch() {
  showInputNav.classList.toggle("show");
}
function showAccount() {
  showAccountNav.classList.toggle("show");
}

// phần js scroll header --> OK
const windowHeight = window.innerHeight;
var header = document.querySelector(".header");
var infoHottline = document.querySelector(".info-hottline");
var btnToHeadPage = document.querySelector(".btn-to-headpage");

window.onscroll = scrollHeader;
btnToHeadPage.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
function scrollHeader() {
  let sliders = document.querySelector(".sliders").getBoundingClientRect().top;
  let infoHottlineHeight = infoHottline.clientHeight;

  if (sliders < -infoHottlineHeight) {
    header.classList.add("active");
  } else {
    if (sliders === 0) {
      header.classList.remove("active");
    }
  }
  if (sliders < -400) {
    btnToHeadPage.style.display = "block";
  } else {
    btnToHeadPage.style.display = "none";
  }
}
