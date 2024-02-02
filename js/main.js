var swiper = new Swiper(".notice-swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next"
  },
  autoplay: {
     delay: 5000,
     disableOnInteraction: false,
   },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2.3,
      spaceBetween: 20,
    },
  },
});

var swiper = new Swiper(".course-box", {
  slidesPerView: 3,
  spaceBetween: 160,
  loop: true,
  freeMode: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    200:{
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".course-list-wrap", {
  slidesPerView: 3,
  spaceBetween: 160,
  loop: true,
  freeMode: true,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    200:{
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1080: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});


// notice 리스트 삽입
let noticeSlide = document.querySelector(".notice-swiper .swiper-wrapper")
fetch("../portfolio04/js/main.json")
.then((response) => response.json())
.then((json)=>{
  data=json.공지;
  let noList=``;
  data.forEach(element => {
    noList +=
    makeNoticeTemp(element);
  })
  noticeSlide.innerHTML=noList
})

function makeNoticeTemp(element){
  return`
  <div class="swiper-slide slide">
  <a href="#">
    <div class="notice-txt">
      <em>${element.장소}</em>
      <strong>${element.이름}</strong>
      <span>${element.기간}</span>
      <p>자세히 보기</p>
    </div>
    <div class="notice-img"><img src="${element.이미지}" alt></div>
  </a>
</div>
`
}

// course 스와이퍼 클릭이벤트
let tabButtons = document.querySelectorAll('.course-bt > .course-list-wrap > .swiper-wrapper > .course-list');
let tabBoxs = document.querySelectorAll('.course-box-list > .course-box');

tabButtons.forEach((eachButton,index)=>{
  eachButton.addEventListener('click',function(){
    for(const tabButton of tabButtons){tabButton.classList.remove("on");}
    for(const tabBox of tabBoxs){tabBox.classList.remove("on")}
    tabBoxs[index].classList.add("on")
    this.classList.add("on")
  })
});
tabButtons[0].click();


// course-box 
let course = document.querySelector(".course-box01 > .swiper-wrapper")
let courseSe = document.querySelector(".course-box02 > .swiper-wrapper")
let courseTh = document.querySelector(".course-box03 > .swiper-wrapper")
let courseFo = document.querySelector(".course-box04 > .swiper-wrapper")

fetch("../portfolio04/js/course.json")
.then((response) => response.json())
.then((json)=>{
  data=json.코스1;
  let coList=``;
  data.forEach(element => {
    coList+=
    makeCourseTemp(element);
  });
  course.innerHTML=coList

  data=json.코스2
  let coSeList =``
  data.forEach(element => {
    coSeList+=
    makeCourseTemp(element);
  })
  courseSe.innerHTML=coSeList;

  data=json.코스3;
  let coThList=``
  data.forEach(element =>{
    coThList+=
    makeCourseTemp(element);
  })
  courseTh.innerHTML=coThList;

  let coFoList=``
  data=json.코스4
  data.forEach(element=>{
    coFoList +=
    makeCourseTemp(element);
  })
  courseFo.innerHTML =coFoList
})

//함수 생성
function makeCourseTemp(listname){
  return`
  <div class="swiper-slide">
    <a href="#">
      <div class="course-box-img"><img src="${listname.이미지}" alt></div>
      <div class="course-box-des">
        <strong>${listname.장소명}</strong>
        <p>${listname.설명}</p>
      </div>
    </a>
  </div>
    `
}


// 태그리스트 적용
const tagList =document.querySelector(".tag-list")
const tag = ["다른세상만나기","내곁의자연","여기서인생샷","우리친구할래요","추억한스푼","새로운재능발견","동네사랑방,책방","작지만큰예술공간","김포특색","힐링코스","감성공간","예술감성채우기","친구와함께","아이와함께"];
let tagGroup=``

for(i=0; i< tag.length;i++){
  tagGroup +=`
  <li>
  <a href="#">#<em>${tag[i]}</em></a>
  </li>
  `
}
tagList.innerHTML=tagGroup

