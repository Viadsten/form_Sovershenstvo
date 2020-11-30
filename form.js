
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
var nextprev = $('.owl-nav');
var dotsWrp = $('.dots-wrp');
function nextPrev(n) {

  var x = document.getElementsByClassName("tab");

  if (n == 1 && !validateForm(currentTab)) return false;
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
  if ((currentTab == 3)&&(window.matchMedia('(min-width: 50px)').matches)){
    btnWrp.css('margin-top', '160px');
    }
  if ((currentTab == 3)&&(window.matchMedia('(min-width: 850px)').matches)){
    regForm[0].classList.add("color-bg");
    btnWrp.css('margin-top', '90px');
    }else{ regForm[0].classList.remove("color-bg");}
    if ((currentTab == 3)&&(window.matchMedia('(min-width: 950px)').matches)){
      btnWrp.css('margin-top', '-49px');
      }
    if ((currentTab == 4)&&(window.matchMedia('(max-width: 800px)').matches)){
      btnWrp.css('margin-top', '30px');
      }
      if ((currentTab == 1)||(currentTab == 2)){
        nextprev.css('padding-top', '100px');
        }
    if ((currentTab == 4)&&(window.matchMedia('(min-width: 800px)').matches)){
      btnWrp.css('margin-top', '-62px');
      }
      if ((currentTab == x.length - 1)&&(window.matchMedia('(max-width: 700px)').matches)){
        btnWrp.css('margin-top', '210px');
      }
    if ((currentTab == x.length - 1)&&(window.matchMedia('(min-width: 700px)').matches)){
      btnWrp.css('margin-top', '0px');
    }
    if ((currentTab == x.length - 1)&&(window.matchMedia('(min-width: 1000px)').matches)){
      btnWrp.css('margin-top', '-130px');
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
function validateForm(currentTab) {
  var x, y, i, valid = true;

  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  b = x[currentTab].getElementsByClassName("radio");
  ch = x[currentTab].getElementsByClassName("color-check");
  for (i = 0; i < y.length; i++) {

    if(($("input[name='matereal']:checked").length == 0)&&(currentTab == 0)){
      valid = false;
      alert('Выберите один из вариантов.');
      break;
    }
    if(($("input[name='person']:checked").length == 0)&&(currentTab == 1)){
      alert('Выберите один из вариантов.');
      valid = false;
      break;
    }
    if(($("input[name='style']:checked").length == 0)&&(currentTab == 2)){
      valid = false;
      alert('Выберите один из вариантов.');
      break;
    }
    if (($("input[name='color']:checked").length == 0)&&(currentTab == 3)&&(y[i].value == "")){
      alert('Выберите цвет обоев.')
      valid = false;
      break;
    }
    if (($("input[name='width']:checked").length == 0)&&(currentTab == 4)){
      alert('Выберите ширину обоев.')
      valid = false;
      break;
    }

  }
  for (i = 0; i < y.length - 1; i++) {
    if ((y[i].value == "")&&(currentTab == 5)){
      alert('Заполните все поля');
      console.log(y[i].value == "")
      valid = false;
      break;
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
    margin: 40,
    nav:true,
    autoplay:true,
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
      1200:{
        items:5
      }
  }
  });
})



$(document).ready(function(){
  $(".owl-carousel--2").owlCarousel({
    smartSpeed: 500,
    margin: 50,
    nav:true,
    autoplay:true,
    responsive:{
      0:{
          items:1
      },
      600:{
        items:2
      },
      1150:{
        items:3
      }
  }
  });
})


var checkbox = $(".color-check--label");
var checkboxColor =       ['#f5f5dc', '#30d5c8', '#9b2d30', '#42aaff', '#ffff00', '#008000', '      ' , '#ffd700', '#964b00', '#ff0000', '#dc143c', '#ffa500', '#ffe5b4', '       ', '#ffc0cb', '#c0c0c0', '#808080', '#0000ff', '#c8a2c8', '#8b00ff', '#002137', '#000000', '#808000', '#9acd32', '#7fffd4', '#884535', '#ffffff', '#cd5b45'];
var checkboxBorderColor = ['#f6f6df', '#99eae3', '#cc9696', '#a0d4ff', '#f7f9a0', '#7fbf7f', '#b4a99d', '#ffeb7f', '#caa57f', '#fc8584', '#ee889c', '#ffd27f', '#fef2d9', '#7f7f7f', '#ffdfe5', '#dfdfdf', '#bfbfbf', '#8a87fa', '#e3d0e4', '#c57fff', '#7f909b', '#777169', '#c0c083', '#cce699', '#befce9', '#d6bfb9', '#bfbfbf', '#e2aaa0'];


for (i=0; i < checkbox.length; i++){
  if (i == 6){
    checkbox[i].style.background = "url('img/multicolor.png')";
    checkbox[i].style.backgroundPosition="center";
    checkbox[i].style.borderColor = checkboxBorderColor[i];
    i++;
  }else if(i == 13){
    checkbox[i].style.background = "url('img/BandW.png')";
    checkbox[i].style.backgroundPosition="center";
    checkbox[i].style.borderColor = checkboxBorderColor[i];
    i++;
  }
  checkbox[i].style.background = checkboxColor[i];
  checkbox[i].style.borderColor = checkboxBorderColor[i];
}

