function toggle() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var plus = document.getElementById("plus");
  plus.classList.toggle("active");
}

function toggle2() {
  var back = document.getElementById("back");
  back.classList.toggle("active");
  var front = document.getElementById("front");
  front.classList.toggle("active");
}

function toggle3() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var forms = document.getElementById("forms");
  forms.classList.toggle("active");
}

function toggle4() {
  var blur = document.getElementById("blur");
  blur.classList.toggle("active");
  var login = document.getElementById("login");
  login.classList.toggle("active");
}

function readMore() {
  var more = document.getElementById("more");
  var dots = document.getElementById("dots");
  var swit = document.getElementById("swit");
  var swit2 = document.getElementById("swit2");

  if (dots.style.display === "none") {
    more.style.display = "none";
    dots.style.display = "inline";
    swit2.classList.remove("active");
    swit.classList.add("active");
  } else {
    more.style.display = "inline";
    dots.style.display = "none";
    swit.classList.remove("active");
    swit2.classList.add("active");
  }
}

let tab = function () {
  let tabNav = document.querySelectorAll(".tabs-nav__item"),
    tabContent = document.querySelectorAll(".tab"),
    tabName;

  console.log(tabNav);

  tabNav.forEach((item) => {
    item.addEventListener("click", selectTabNav);
  });

  function selectTabNav() {
    console.log("selectedTab");
    tabNav.forEach((item) => {
      item.classList.remove("is-active");
    });
    this.classList.add("is-active");
    tabName = this.getAttribute("data-tab-name");
    selectTabContent(tabName);
  }

  function selectTabContent(tabName) {
    tabContent.forEach((item) => {
      item.classList.contains(tabName)
        ? item.classList.add("is-active")
        : item.classList.remove("is-active");
    });
  }
};
document.addEventListener("DOMContentLoaded", () => tab());

var money = document.getElementById("money");
var search2 = document.getElementById("search2");

$("#search-input").keyup(function (e) {
  if (!!e.target.value) {
    if (money.style.display === "none" || !money.style.display) {
      money.style.display = "inline";
    }
  } else {
    money.style.display = "none";
  }
});


function f_Date(el, n) {
  el.value = el.value.replace(/[^0-9]/g, "");
  if (el.value.length > n) el.value = el.value.substr(n);
  if (el.value.length == n) el.nextSibling.nextSibling.focus();
}



$(document).ready(function () {
  $("#date").inputmask({ mask: "99/99" });
});

$(document).ready(function () {
  $("#email").inputmask({
    mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
    greedy: false,
    clearMaskOnLostFocus: false,
    onBeforeWrite: function (event, buffer, caretPos, opts) {
      buffer.forEach(function (item, i, buffer) {
        if (item == "@") {
          buffer[i + 1] = "g";
          buffer[i + 2] = "m";
          buffer[i + 3] = "a";
          buffer[i + 4] = "i";
          buffer[i + 5] = "l";
          buffer[i + 6] = ".";
          buffer[i + 7] = "c";
          buffer[i + 8] = "o";
          buffer[i + 9] = "m";
          buffer.length = i + 10;
        }
      });
    },
  });
});

$(document).ready(function () {
  $("#email2").inputmask({
    mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
    greedy: false,
    clearMaskOnLostFocus: false,
    onBeforeWrite: function (event, buffer, caretPos, opts) {
      buffer.forEach(function (item, i, buffer) {
        if (item == "@") {
          buffer[i + 1] = "g";
          buffer[i + 2] = "m";
          buffer[i + 3] = "a";
          buffer[i + 4] = "i";
          buffer[i + 5] = "l";
          buffer[i + 6] = ".";
          buffer[i + 7] = "c";
          buffer[i + 8] = "o";
          buffer[i + 9] = "m";
          buffer.length = i + 10;
        }
      });
    },
  });
});

function changeTab(ref) {
  try {
    if (ref.getAttribute("data-tab") == "login") {
      document.getElementById("form-body").classList.remove("active");
      ref.parentNode.classList.remove("signup");
    } else {
      document.getElementById("form-body").classList.add("active");
      ref.parentNode.classList.add("signup");
    }
  } catch (msg) {
    console.log(msg);
  }
}
