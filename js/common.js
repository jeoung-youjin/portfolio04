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
let fNotice = document.querySelector(".f-notice-slide > .swiper-wrapper")
fetch("../portfolio04/js/main.json")
.then((response) => response.json())
.then((json)=>{
  data = json.하단공지;
  let noList = '';
  data.forEach(element => {
    noList +=
    makeFNoticeTemp(element);
  });
  fNotice.innerHTML=noList
})


function makeFNoticeTemp(element){
  return`
  <div class="swiper-slide">
  <strong>${element.공지명}</strong>
  <span>${element.기간}</span>
</div>
  `;
}