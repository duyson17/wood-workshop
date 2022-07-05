// Xử lí tắt modal --> OK
var closeModal = document.querySelector(".register-modal > .close-btn");
var modal = document.querySelector(".modal");

closeModal.onclick = function () {
  modal.style.display = "none";
};

// phần js slide. --> OK
var dots = document.querySelectorAll(".dot");
var slides = document.querySelectorAll(".slide");

var currIndexSlide = 0;

dots.forEach(function (element, index) {
  element.onclick = function () {
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("active");
      dots[i].classList.remove("active");
    }
    dots[index].classList.add("active");
    slides[index].classList.add("active");
  };
});
function slideActive() {
  if (currIndexSlide >= slides.length) {
    currIndexSlide = 0;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
    dots[i].classList.remove("active");
  }
  dots[currIndexSlide].classList.add("active");
  slides[currIndexSlide].classList.add("active");
  currIndexSlide++;
}
slideActive();
setInterval(slideActive, 5000);

// phần show discount product --> Tạm, rảnh có thẻ fix lại cho mượt
const showDiscountProduct = document.querySelector(".discount-product-show");
var columnProducts = showDiscountProduct.querySelectorAll(".col.l-6");
var nextDiscountProduct =
  showDiscountProduct.querySelector(".next-product-show");
var prevDiscountProduct =
  showDiscountProduct.querySelector(".prev-product-show");

var currIndexShowDiscount = 0;
var widthLoadStart = window.innerWidth;
console.log("widthLoadStart: " + widthLoadStart);

if (widthLoadStart < 470) {
  showDiscountActiveMini();
  nextDiscountProduct.onclick = function () {
    currIndexShowDiscount++;
    if (currIndexShowDiscount > columnProducts.length - 1) {
      currIndexShowDiscount = 0;
    }
    showDiscountActiveMini();
  };
  prevDiscountProduct.onclick = function () {
    currIndexShowDiscount--;
    if (currIndexShowDiscount < 0) {
      currIndexShowDiscount = columnProducts.length - 1;
    }
    showDiscountActiveMini();
  };
} else {
  showDiscountActive();
  nextDiscountProduct.onclick = function () {
    currIndexShowDiscount++;
    if (currIndexShowDiscount >= columnProducts.length - 1) {
      currIndexShowDiscount = 0;
    }
    showDiscountActive();
  };
  prevDiscountProduct.onclick = function () {
    currIndexShowDiscount--;
    if (currIndexShowDiscount < 0) {
      currIndexShowDiscount = columnProducts.length - 2;
    }
    showDiscountActive();
  };
}
window.onresize = function name() {
  var width = window.innerWidth;
  console.log(width);
  if (width <= 470) {
    showDiscountActiveMini();
    nextDiscountProduct.onclick = function () {
      currIndexShowDiscount++;
      if (currIndexShowDiscount > columnProducts.length - 1) {
        currIndexShowDiscount = 0;
      }
      showDiscountActiveMini();
    };
    prevDiscountProduct.onclick = function () {
      currIndexShowDiscount--;
      if (currIndexShowDiscount < 0) {
        currIndexShowDiscount = columnProducts.length - 1;
      }
      showDiscountActiveMini();
    };
  } else {
    showDiscountActive();
    nextDiscountProduct.onclick = function () {
      currIndexShowDiscount++;
      if (currIndexShowDiscount >= columnProducts.length - 1) {
        currIndexShowDiscount = 0;
      }
      showDiscountActive();
    };
    prevDiscountProduct.onclick = function () {
      currIndexShowDiscount--;
      if (currIndexShowDiscount < 0) {
        currIndexShowDiscount = columnProducts.length - 2;
      }
      showDiscountActive();
    };
  }
};
function showDiscountActiveMini() {
  console.log("nhỏ");
  for (let i = 0; i < columnProducts.length; i++) {
    columnProducts[i].classList.remove("product-show");
  }
  columnProducts[currIndexShowDiscount].classList.add("product-show");
}
function showDiscountActive() {
  console.log("lớn");
  for (let i = 0; i < columnProducts.length; i++) {
    columnProducts[i].classList.remove("product-show");
  }
  columnProducts[currIndexShowDiscount].classList.add("product-show");
  columnProducts[currIndexShowDiscount + 1].classList.add("product-show");
}

// phần show comment customer --> OK

var shopInfoDots = document.querySelectorAll(".shop-info-dot");
var cmtCustomer = document.querySelectorAll(".customer");

var currIndexCmtCustomer = 0;
function cmtCustomerActive() {
  currIndexCmtCustomer++;
  if (currIndexCmtCustomer >= cmtCustomer.length) {
    currIndexCmtCustomer = 0;
  }

  for (let i = 0; i < cmtCustomer.length; i++) {
    cmtCustomer[i].classList.remove("show");
    cmtCustomer[currIndexCmtCustomer].classList.add("show");
    shopInfoDots[i].classList.remove("active");
    shopInfoDots[currIndexCmtCustomer].classList.add("active");
  }
}
cmtCustomerActive();

setInterval(cmtCustomerActive, 5000);

// phần featured --> OK
var tabs = document.querySelectorAll(".tab");
var tabContents = document.querySelectorAll(".tabcontent");
var showLoading = document.querySelector(".show-loading");
console.log(showLoading);

var currIndexFeature = 0;

tabs.forEach(function (element, index) {
  element.onclick = function () {
    showLoading.style.display = "block";
    setTimeout(() => {
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
        tabContents[i].classList.remove("show");
      }
      currIndexFeature = index;
      showFeaturedContent();
      showLoading.style.display = "none";
    }, 700);
  };
});
function showFeaturedContent() {
  tabs[currIndexFeature].classList.add("active");
  tabContents[currIndexFeature].classList.add("show");
}
showFeaturedContent();

// phần button kéo lên đầu trang --> OK

// phần show articles --> Mới làm đối phó thôi :)))): PHẢI LÀM LẠI
const articlesMainContent = document.querySelector(".articles-main-content");
var columnNew = articlesMainContent.querySelectorAll(".col.l-4.m-6.c-6.min-12");
var nextArticles = articlesMainContent.querySelector(".next-articles-show");
var prevArticles = articlesMainContent.querySelector(".prev-articles-show");

var currIndexArticles = 0;
var qualityColumnNew = columnNew.length;

showArticlesActive();
nextArticles.onclick = function () {
  currIndexArticles++;
  if (currIndexArticles > qualityColumnNew - 3) {
    currIndexArticles = 0;
  }
  showArticlesActive();
};
prevArticles.onclick = function () {
  currIndexArticles--;
  if (currIndexArticles < 0) {
    currIndexArticles = qualityColumnNew - 3;
  }
  showArticlesActive();
};

function showArticlesActive() {
  for (let i = 0; i < columnNew.length; i++) {
    columnNew[i].classList.remove("articles-show");
    columnNew[currIndexArticles].classList.add("articles-show");
    columnNew[currIndexArticles + 1].classList.add("articles-show");
    columnNew[currIndexArticles + 2].classList.add("articles-show");
  }
}

// var app = {
//     slides: [
//         {
//             src: 'https://theme.hstatic.net/1000263110/1000337803/14/ms_banner_img1.jpg?v=1422',
//             title: 'KHUYẾN MÃI LỚN',
//             content: '(giảm tới 50% tất cả các mặt hàng trong dịp đặc biệt nhằm tri ân khách hàng đã ủng hộ các sản phẩm của chúng tôi)'
//         },
//         {
//             src: 'https://theme.hstatic.net/1000263110/1000337803/14/ms_banner_img2.jpg?v=1422',
//             title: 'THIẾT KẾ ẤN TƯỢNG, ĐỘC ĐÁO',
//             content: 'Chúng tôi mang đến những thiết kế độc đáo cho không gian sống của bạn thêm mới mẻ'
//         },
//         {
//             src: 'https://theme.hstatic.net/1000263110/1000337803/14/ms_banner_img3.jpg?v=1422',
//             title: 'SỰ KẾT HỢP MỚI MẺ',
//             content: 'Với những sáng tạo không ngừng, chúng tôi luôn kết hợp các sản phẩm đẹp mắt, phù hợp và ấn tượng'
//         }
//     ],
//     render: function render(app) {
//         console.log(app);
//         var html = app.slides.map(function (slide) {
//             return `<div class="slide">
//                         <img class="slide-img" src="${slide.src}" alt="">
//                         <div class="background-blur">
//                             <div class="content-slide">
//                                 <h1>${slide.title}</h1>
//                                 <h5>${slide.content}
//                                 </h5>
//                                 <button>
//                                     <a href="#">XEM THÊM</a>
//                                 </button>
//                             </div>
//                         </div>
//                     </div>`
//         })
//         document.querySelector('.sliders').innerHTML = htmls.join('');
//     }
// }
// app.render
