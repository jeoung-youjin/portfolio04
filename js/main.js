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
    delay: 1500,
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
function NoticeList(place,tit,day,imgLink){
  this.place=place;
  this.tit=tit;
  this.day=day;
  this.imgLink=imgLink
} 

let noticeList01=new NoticeList("구래청년지원센터 김포창공","[모임] 셀프제작클래스: 모자이크우드 (청노치)","2023-12-30 ~2024. 1. 5.","/portfolio04/img/notice-img02.jfif")
let noticeList02=new NoticeList("김포아트홀","[공연] 크리스마스 콘서트 with 하모나이즈","2023-12-25","/portfolio04/img/notice-img03.jfif")
let noticeList03=new NoticeList("CICA미술관","[전시] 조예지 개인전","2023-12-20 ~12. 24","/portfolio04/img/notice-img04.jfif")
let noticeList04=new NoticeList("김포아트홀","[공연] ON세대 송년콘서트 시즌1","2023-12-30","/portfolio04/img/notice-img01.jfif")

let noticeSlide = document.querySelector(".notice-swiper .swiper-wrapper")
let noticeLists=[noticeList01,noticeList02,noticeList03,noticeList04]
let noList =``

for(const noticeList of noticeLists){
  noList +=`
  <div class="swiper-slide slide">
  <a href="#">
    <div class="notice-txt">
      <em>${noticeList.place}</em>
      <strong>${noticeList.tit}</strong>
      <span>${noticeList.day}</span>
      <p>자세히 보기</p>
    </div>
    <div class="notice-img"><img src="${noticeList.imgLink}" alt></div>
  </a>
</div>
  `
}
noticeSlide.innerHTML = noList

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


// course-box 생성형 함수로 삽입 
// 리팩토링 생각해보기

function Course(tabImg ,tabTit , tabDes){
  this.tabImg=tabImg;
  this.tabTit=tabTit;
  this.tabDes=tabDes
}

let course01 = new Course("/portfolio04/img/course_tab_list_img1-1.jpg","버드나무 갤러리","버드나무와 함께 숨쉬는 마을 갤러리")
let course02 = new Course("/portfolio04/img/course_tab_list_img1-2.jpg","김포 다도 박물관","차 한잔과 함께 누구나 어울릴 수 있는 공간")
let course03 = new Course("/portfolio04/img/course_tab_list_img1-3.jpg","홍정애갤러리 소풍","따뜻한 위로를 건네며 하루하루를 소풍으로 만드는 공간")
let course04 = new Course("/portfolio04/img/course_tab_list_img1-4.jpg","작은 미술관 보구곶","작지만 크고, 끝이지만 시작인 곳. 마을에 들어서는 순간 느껴지는 힐링의 내음")

let course = document.querySelector(".course-box01 > .swiper-wrapper")
let courseList = [course01,course02,course03,course04]
let coList = ``

for(const course of courseList){
  coList += `
  <div class="swiper-slide">
  <a href="#">
    <div class="course-box-img"><img src="${course.tabImg}" alt></div>
    <div class="course-box-des">
      <strong>${course.tabTit}</strong>
      <p>${course.tabDes}</p>
    </div>
  </a>
</div>
  `
}
course.innerHTML=coList

let courseSe01= new Course("/portfolio04/img/course_tab_list_img2-2.jpg","외할머니의 부엌","꽃과 정원을 사랑하는 외할머니의 따뜻한 정원")
let courseSe02= new Course("/portfolio04/img/course_tab_list_img2-3.jpg","한지 이야기","한지와 닥나무의 맥을 이어가는 베이커리 카페형 체험장")
let courseSe03= new Course("/portfolio04/img/course_tab_list_img2-4.jpg","민들레와 달팽이","장애인과 비장애인의 경계, 사람과 사람 사이의 경계를 넘어가는 공간")
let courseSe04= new Course("/portfolio04/img/course_tab_list_img2-1.jpg","덕포진교육박물관","타임머신을 타고 어린시절로 돌아간 듯 한 시공간 여행 선물")

let courseSe = document.querySelector(".course-box02 > .swiper-wrapper")
let courseSes = [courseSe01,courseSe02,courseSe03,courseSe04]
let coSeList =``

for(const courseSe of courseSes){
  coSeList +=`
  <div class="swiper-slide">
  <a href="#">
    <div class="course-box-img"><img src="${courseSe.tabImg}" alt></div>
    <div class="course-box-des">
      <strong>${courseSe.tabTit}</strong>
      <p>${courseSe.tabDes}</p>
    </div>
  </a>
</div>
  `
}
courseSe.innerHTML = coSeList


let courseTh01= new Course("/portfolio04/img/course_tab_list_img3-1.jpg","CICA미술관","테이스트바 카페에 인더스트리얼의 감성을 품은 공간")
let courseTh02= new Course("/portfolio04/img/course_tab_list_img3-3.jpg","책방짙은","좋아할수록 짙어지는 공간, 사람들의 색과 함께 어우러지는 공간")
let courseTh03= new Course("/portfolio04/img/course_tab_list_img3-4.jpg","산책공방","다시 새로운 생명을 불어넣는 공간")
let courseTh04= new Course("/portfolio04/img/course_tab_list_img1-2.jpg","민들레와 달팽이","한지와 닥나무의 맥을 이어가는 베이커리 카페형 체험장")

let courseTh = document.querySelector(".course-box03 > .swiper-wrapper")
let courseThs = [courseTh01,courseTh02,courseTh03,courseTh04]
let coThList=``

for(const courseTh of courseThs){
  coThList +=`
  <div class="swiper-slide">
  <a href="#">
    <div class="course-box-img"><img src="${courseTh.tabImg}" alt></div>
    <div class="course-box-des">
      <strong>${courseTh.tabTit}</strong>
      <p>${courseTh.tabDes}</p>
    </div>
  </a>
</div>
  `
}
courseTh.innerHTML = coThList

let courseFo01 = new Course("/portfolio04/img/course_tab_list_img4-1.jpg","포지티브 아트센터","감각적이고 공간에서 만나는 예술 전시")
let courseFo02 = new Course("/portfolio04/img/course_tab_list_img4-2.jpg","북변갤러리","마을전체가 근현대문화유산으로 가득한 북변동을 살리기 위한 문화프로젝트")
let courseFo03 = new Course("/portfolio04/img/course_tab_list_img4-3.jpg","게으른 정원","천천히, 그리고 느긋하게 위로를 읽는 책방")
let courseFo04 = new Course("/portfolio04/img/course_tab_list_img4-4.jpg","화창한 서점&카페","화창한 날 책과 함께하는 한가한 시간을 갖고 싶을 때, 세상과 소통하는 작은 창")
let courseFo05 = new Course("/portfolio04/img/course_tab_list_img4-5.jpg","보름산 미술관","오래된 물건에 숨을 불어넣어 잊힌 것들을 기억하는 공간")
let courseFo = document.querySelector(".course-box04 > .swiper-wrapper")
let courseFos = [courseFo01,courseFo02,courseFo03,courseFo04]
let coFoList=``

for(const courseFo of courseFos){
  coFoList+=`
<div class="swiper-slide">
  <a href="#">
    <div class="course-box-img"><img src="${courseFo.tabImg}" alt></div>
    <div class="course-box-des">
      <strong>${courseFo.tabTit}</strong>
      <p>${courseFo.tabDes}</p>
    </div>
  </a>
</div>
  `
}
courseFo.innerHTML =coFoList

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

