var swiper = new Swiper(".f-notice-slide", {
  direction: "vertical",
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// all 메뉴 
const allMenu = document.querySelector(".all-menu > button")
const allWrap = document.querySelector(".all-menu-open")
const allBg = document.querySelector(".all-menu-bg")
const body = document.getElementsByTagName('body')[0];


allMenu.addEventListener("click",()=>{
  allWrap.classList.toggle("on"),
  allBg.classList.toggle("on")
  body.classList.toggle('scrollLock');
})

//f-notice 리스트 적용 
const fNotice = document.querySelector(".f-notice-slide > .swiper-wrapper")
function Notice(tit,day){
  this.tit=tit;
  this.day=day;
}

const notice01 = new Notice("청춘굿즈 할머니가 그리는 고양이 굿즈 준비","2023-07-17")
const notice02 = new Notice("[공지] 책방 짙은: 8월 스케줄 안내","2023-08-01")
const notice03 = new Notice("[공지] 8/22, 23, 24 (화,수,목) 휴관합니다!","2023-08-07")
const notice04 = new Notice("[공지] ᯽영업일 공지 안내᯽","2023-08-28")
const notice05 = new Notice("[공지] 키즈랩 9월 프로그램 안내","2023-08-31")
const notice06 = new Notice("[공지] 책방 짙은 9월 일정 안내","2023-09-05")
const notice07 = new Notice("[공지] 김포아트빌리지 아트센터 추석연휴 운영안내","2023-09-26")
const notice08 = new Notice("[전시] 우리는 공공합니다","2023-11-25")
const notice09 = new Notice("12월 책방시간표","2023-1214")
const notice10 = new Notice("[공지] 12월 24일 야간개장 셔틀버스 운행 안내","2023-12-21")

notices=[notice01,notice02,notice03,notice04,notice05,notice06,notice07,notice08,notice08,notice10]
noGroup=``

for(const notice of notices){
  noGroup +=`
  <div class="swiper-slide">
  <strong>${notice.tit}</strong>
  <span>${notice.day}</span>
</div>
  `
}
fNotice.innerHTML=noGroup
