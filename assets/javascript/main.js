const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
console.log(closeMenu);
const navigation__menu = document.querySelector(".navigation__menu");

openMenu.addEventListener("click", () => {
  navigation__menu.classList.remove("activeMenu");
});
closeMenu.addEventListener("click", () => {
  navigation__menu.classList.add("activeMenu");
});
navigation__menu.addEventListener("click", (e) => {
  if (e.target === navigation__menu) {
    navigation__menu.classList.add("activeMenu");
  }
});
// FILTER
const openFilter = document.getElementById("openFilter");
console.log(openFilter);
const closeFilter = document.getElementById("closeFilter");
const sidebar = document.querySelector(".sidebar");

openFilter.addEventListener("click", () => {
  sidebar.classList.remove("activeFilter");
  closeFilter.style.display = "block";
});
closeFilter.addEventListener("click", () => {
  sidebar.classList.add("activeFilter");
});
sidebar.addEventListener("click", (e) => {
  if (e.target === sidebar) {
    sidebar.classList.add("activeFilter");
  }
});

// RANGE INPUT

var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");

function setLeftValue() {
  var _this = inputLeft,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbLeft.style.left = percent + "%";
  range.style.left = percent + "%";
}
setLeftValue();

function setRightValue() {
  var _this = inputRight,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbRight.style.right = 100 - percent + "%";
  range.style.right = 100 - percent + "%";
}
setRightValue();

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

inputLeft.addEventListener("mouseover", function () {
  thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", function () {
  thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", function () {
  thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", function () {
  thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", function () {
  thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", function () {
  thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", function () {
  thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", function () {
  thumbRight.classList.remove("active");
});

// show pop up detail

const products__item_contain_view = document.querySelectorAll(
  ".products__item_contain_view"
);
console.log(products__item_contain_view);

products__item_contain_view.forEach((node) => {
  node.addEventListener("click", (e) => {
    // e.stopPropagation();
    e.preventDefault();
    console.log("products__item_contain_view");
  });
});

const products_item_contain_view = document.querySelector(
  ".products__item_contain_view"
);
products_item_contain_view.addEventListener("click", (e) => {
  e.preventDefault();
});

// multi slider
$("#carousel-example").on("slide.bs.carousel", function (e) {
  /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 5;
  var totalItems = $(".carousel-item").length;

  if (idx >= totalItems - (itemsPerSlide - 1)) {
    var it = itemsPerSlide - (totalItems - idx);
    for (var i = 0; i < it; i++) {
      // append slides to end
      if (e.direction == "left") {
        $(".carousel-item").eq(i).appendTo(".carousel-inner");
      } else {
        $(".carousel-item").eq(0).appendTo(".carousel-inner");
      }
    }
  }
});
