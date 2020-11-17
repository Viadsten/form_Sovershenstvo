
var currentTab = 0;
showTab(currentTab);

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].classList.add("tab-active");

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

  fixStepIndicator(n)
}
var lastTab = $('body');
var regForm = $('#regForm');
var nextBtn = $('#nextBtn');
var btnWrpBg = $('.form-btn--bg');
var dotsWrp = $('.dots-wrp');
function nextPrev(n) {

  var x = document.getElementsByClassName("tab");

  if (n == 1 && !validateForm()) return false;
  x[currentTab].classList.remove("tab-active");
  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }
  var btnWrp = $('.form-btn__wrp');
  showTab(currentTab);


  if ((currentTab == 1)||(currentTab == 2)||(currentTab == 4)){
    btnWrp.css('margin-top', '120px');
  }
  else{
    btnWrp.css('margin-top', '180px');
  }
  if ((currentTab == 3)&&(window.matchMedia('(max-width: 550px)').matches)){
    btnWrp.css('margin-top', '150px');
    }
  if ((currentTab == 3)&&(window.matchMedia('(min-width: 850px)').matches)){
    x[currentTab].classList.add("color-bg");
    btnWrp.css('margin-top', '40px');
    }
    if ((currentTab == 4)&&(window.matchMedia('(max-width: 800px)').matches)){
      btnWrp.css('margin-top', '30px');
      }
    if ((currentTab == 4)&&(window.matchMedia('(min-width: 800px)').matches)){
      btnWrp.css('margin-top', '50px');
      }
      if ((currentTab == x.length - 1)&&(window.matchMedia('(max-width: 700px)').matches)){
        btnWrp.css('margin-top', '210px');
      }
    if ((currentTab == x.length - 1)&&(window.matchMedia('(min-width: 700px)').matches)){
      btnWrp.css('margin-top', '0px');
    }

  if ((currentTab == x.length - 1)){
    console.log(currentTab);
    lastTab[0].classList.add("tab-last");
    x[currentTab].classList.add("tab-last");
    regForm[0].classList.add("tab-last");
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
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  b = x[currentTab].getElementsByClassName("radio");
  ch = x[currentTab].getElementsByClassName("color-check");
  for (i = 0; i < y.length; i++) {
    if ((y[i].value == "")){
      y[i].className += " invalid";
      valid = false;
    }

  }
  for (i = 0; i < y.length; i++) {
    if (((y[i].checked) == true)&&(y[i].type == "radio")){
      break;
    }else if((y[i].type == "radio")&&(i == y.length - 1)&&((y[i].checked) == false)){
      y[i].className += " invalid";
      alert('Выберите один из вариантов.')
      valid = false;
    }
// проверка checkbox
    if (((((y[i].checked) == true)&&(y[i].type == "checkbox"))||(y[i].value != ""))){
      valid = true;
      break;
    }else if ((y[i].type == "checkbox")&&(i == y.length - 1)&&((y[i].checked) == false)){
      y[i].className += " invalid";

      alert('Выберите цвет.')
      valid = false;
    }
  }


  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid;
}

function fixStepIndicator(n) {
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
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

