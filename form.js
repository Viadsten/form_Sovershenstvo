/*$(document).ready(function(){
  let position = 0;
  let slidesToShow = 1;
  const slidesToScroll = 1;
  const container = $('.slider-container');
  const track = $('.slider-track');
  const item = $('.slider-item');
  const btnPrev = $('.btn-prev');
  const btnNext = $('.btn-next');
  const itemsCount = item.length;
  let itemWidth = (container.width()) / slidesToShow;
  let movePosition = slidesToScroll * (itemWidth);



const mediaQuery650 = window.matchMedia('(min-width: 650px)')
if (mediaQuery650.matches) {
  slidesToShow = 2;
  NewsResize();
}

const mediaQuery950 = window.matchMedia('(min-width: 950px)')
if (mediaQuery950.matches) {
  slidesToShow = 3;
  NewsResize();
}
const mediaQuery1200 = window.matchMedia('(min-width: 1200px)')
if (mediaQuery1200.matches) {
  slidesToShow = 4;
  NewsResize();
}

function NewsResize(){
  itemWidth = (container.width()) / slidesToShow;
  movePosition = slidesToScroll * (itemWidth);
};

  item.each(function(index, item){
    $(item).css({
        minWidth: itemWidth,
    });
  });

  btnPrev.click(function(){
    const itemsLeft = Math.abs(position) / itemWidth;

    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
  });
  btnNext.click(function(){
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth)  / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
    setPosition();
    checkBtns();
  });

  const setPosition = () => {
    track.css({
      transform: `translateX(${position}px)`
    });
  };

  const checkBtns = () => {
    btnPrev.prop('disabled', position === 0);
    btnNext.prop(
      'disabled',
      position <= -(itemsCount - slidesToShow) * itemWidth
    )
  }

});*/




var currentTab = 0; // Текущая вкладка будет первой вкладкой (0)
showTab(currentTab); // Отображение текущей вкладки

function showTab(n) {
  // Эта функция отобразит указанную вкладку формы ...
  var x = document.getElementsByClassName("tab");
  x[n].classList.add("tab-active");
  // ... и зафиксируйте кнопки Назад/Вперед:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Отправить";
  } else {
    document.getElementById("nextBtn").innerHTML = "Далее";
  }
  // ... и запустите функцию, которая отображает правильный индикатор шага:
  fixStepIndicator(n)
}
var lastTab = $('body');
var regForm = $('#regForm');
var nextBtn = $('#nextBtn');
var btnWrpBg = $('.form-btn--bg');
var dotsWrp = $('.dots-wrp');
function nextPrev(n) {
  // Эта функция определит, какую вкладку отображать
  var x = document.getElementsByClassName("tab");
  // Выйдите из функции, если какое-либо поле на вкладке текущий является недопустимым:
  if (n == 1 && !validateForm()) return false;
  // Скрыть текущую вкладку:
  x[currentTab].classList.remove("tab-active");
  // Увеличение или уменьшение текущей вкладки на 1:
  currentTab = currentTab + n;
  // если вы дошли до конца формы... :
  if (currentTab >= x.length) {
    //...форма будет отправлена:
    document.getElementById("regForm").submit();
    return false;
  }
  var btnWrp = $('.form-btn__wrp');
  // В противном случае отобразите правильную вкладку:
  showTab(currentTab);


  if ((currentTab == 1)||(currentTab == 2)||(currentTab == 4)){
    btnWrp.css('margin-top', '120px');
  }
  else{
    btnWrp.css('margin-top', '180px');
  }
  if ((currentTab == 3)){
    x[currentTab].classList.add("color-bg");
    btnWrp.css('margin-top', '100px');
    }
  if ((currentTab == 3)&&(window.matchMedia('(min-width: 850px)'))){
    x[currentTab].classList.add("color-bg");
    btnWrp.css('margin-top', '10px');
    }

    if ((currentTab == 4)&&(window.matchMedia('(min-width: 800px)'))){
      btnWrp.css('margin-top', '50px');
      }

    if ((currentTab == x.length - 1)){
      btnWrp.css('margin-top', '0px');

    }

  if ((currentTab == x.length - 1)){
    console.log(currentTab);
    lastTab[0].classList.add("tab-last");
    x[currentTab].classList.add("tab-last");
    regForm[0].classList.add("tab-last");
    btnWrp.css('margin-top', '0px');
    btnWrpBg[0].classList.add("tab-last");
    dotsWrp[0].classList.add("tab-last");
  }
  else{
    lastTab[0].classList.remove("tab-last");
    x[currentTab].classList.remove("tab-last");
    regForm[0].classList.remove("tab-last");
    btnWrpBg[0].classList.remove("tab-last");
    dotsWrp[0].classList.remove("tab-last");
  }


}

function validateForm() {
  // Эта функция занимается проверкой полей формы
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  b = x[currentTab].getElementsByClassName("radio");
  ch = x[currentTab].getElementsByClassName("color-check");
  // Цикл, который проверяет каждое поле ввода на текущей вкладке:
  for (i = 0; i < y.length; i++) {
    // Если поле пустое...
    if ((y[i].value == "")){
      // добавьте в поле "invalid" класс:
      y[i].className += " invalid";
      // и установите текущий допустимый статус в false:
      valid = false;
    }

  }
  for (i = 0; i < y.length; i++) {
    if (((y[i].checked) == true)&&(y[i].type == "radio")){
      // добавьте в поле "invalid" класс:
      break;
    }else if((y[i].type == "radio")&&(i == y.length - 1)&&((y[i].checked) == false)){
      y[i].className += " invalid";
      alert('Выберите один из вариантов.')
      // и установите текущий допустимый статус в false:
      valid = false;
    }
// ТУТ ПРОВЕРКА ДЛЯ ЧЕКБОКСОВ. ОНА НЕ РАБОТАЕТ((((((((
    if (((((y[i].checked) == true)&&(y[i].type == "checkbox"))||(y[i].value != ""))){
      valid = true;
      break;
    }else if ((y[i].type == "checkbox")&&(i == y.length - 1)&&((y[i].checked) == false)){
      y[i].className += " invalid";

      alert('Выберите цвет.')
      valid = false;
    }
  }


  // Если действительный статус равен true, отметьте шаг как завершенный и действительный:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // верните действительный статус
}

function fixStepIndicator(n) {
  // Эта функция удаляет "активный" класс всех шагов...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... и добавляет "активный" класс к текущему шагу:
  x[n].className += " active";
}



$(document).ready(function(){
  $(".owl-carousel--1").owlCarousel({
    smartSpeed: 500,
    margin: 15,
    nav:true,
    responsive:{
      0:{
          items:1
      },
      500:{
          items:2
      },
      750:{
        items:3
      },
      1050:{
        items:4
      },
      1290:{
          items:5
      }
  }
  });
})



$(document).ready(function(){
  $(".owl-carousel--2").owlCarousel({
    smartSpeed: 500,
    margin: 15,
    nav:true,
    responsive:{
      0:{
          items:1
      },
      600:{
        items:2
      },
      1050:{
        items:3
      }
  }
  });
})


var checkbox = $(".color-check--label");
var checkboxColor =       ['#f5f5dc', '#30d5c8', '#9b2d30', '#42aaff', '#ffff00', '#008000', '#ffd700', '#964b00', '#ff0000', '#dc143c', '#ffa500', '#ffe5b4', '#ffc0cb', '#c0c0c0', '#808080', '#0000ff', '#c8a2c8', '#8b00ff', '#000000', '#808000', '#9acd32', '#7fffd4', '#884535', '#ffffff'];
var checkboxBorderColor = ['#f5f5dc', '#99eae3', '#cc9696', '#a0d4ff', '#f7f9a0', '#7fbf7f', '#ffeb7f', '#caa57f', '#fc8584', '#ee889c', '#ffd27f', '#fef2d9', '#ffdfe5', '#dfdfdf', '#bfbfbf', '#8a87fa', '#e3d0e4', '#c57fff', '#777169', '#c0c083', '#cce699', '#befce9', '#d6bfb9', '#bfbfbf'];

for (i=0; i < checkbox.length; i++){
  checkbox[i].style.backgroundColor = checkboxColor[i];
  checkbox[i].style.borderColor = checkboxBorderColor[i];
}

