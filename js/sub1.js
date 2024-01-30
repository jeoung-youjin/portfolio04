//fetch로 json 불러오기

const exBox = document.querySelector(".exhibition")
const boBox = document.querySelector(".bookstore")
const cuBox  = document.querySelector(".cultural-space")
const crBox=document.querySelector(".creation")

fetch("../js/contents.json")
.then((response) => response.json())
.then((json)=> {
  exhibition = json.전시관;
   let exList = ``
   exhibition.forEach(element => {
    exList += `
    <li class="curation-list">
    <a href="#">
      <em>${element.분류}</em>
      <address>${element.위치}</address>
    </a>
    <div class="curation-info">
      <strong>${element.이름}</strong>
      <p>${element.설명}</p>
      <div class="curation-button">
        <button class="mark" type="button">
          <span class="hide">북마크</span>
        </button>
        <button class="like" type="button">
          <span class="hide">마음에 들어요</span>
        </button>              
        <span>${element.좋아요수}</span>
      </div>
    </div>
  </li>
    `
   });
   exBox.innerHTML=exList;

   bookStore = json.독립서점;
   let boList =``
   bookStore.forEach(element => {
    boList += `
    <li class="curation-list">
    <a href="#">
      <em>${element.분류}</em>
      <address>${element.위치}</address>
    </a>
    <div class="curation-info">
      <strong>${element.이름}</strong>
      <p>${element.설명}</p>
      <div class="curation-button">
        <button class="mark" type="button">
          <span class="hide">북마크</span>
        </button>
        <button class="like" type="button">
          <span class="hide">마음에 들어요</span>
        </button>              
        <span>${element.좋아요수}</span>
      </div>
    </div>
  </li>
    `
   })
   boBox.innerHTML=boList
   console.log(boBox)

   cultural = json.복합문화공간;
   cuList =``
   cultural.forEach(element => {
    cuList +=`
    <li class="curation-list">
    <a href="#">
      <em>${element.분류}</em>
      <address>${element.위치}</address>
    </a>
    <div class="curation-info">
      <strong>${element.이름}</strong>
      <p>${element.설명}</p>
      <div class="curation-button">
        <button class="mark" type="button">
          <span class="hide">북마크</span>
        </button>
        <button class="like" type="button">
          <span class="hide">마음에 들어요</span>
        </button>              
        <span>${element.좋아요수}</span>
      </div>
    </div>
  </li>
    `
   })
   cuBox.innerHTML=cuList

   creationList = json.창작
   crList =``
   creationList.forEach(element=>{
    crList +=`
    <li class="curation-list">
    <a href="#">
      <em>${element.분류}</em>
      <address>${element.위치}</address>
    </a>
    <div class="curation-info">
      <strong>${element.이름}</strong>
      <p>${element.설명}</p>
      <div class="curation-button">
        <button class="mark" type="button">
          <span class="hide">북마크</span>
        </button>
        <button class="like" type="button">
          <span class="hide">마음에 들어요</span>
        </button>              
        <span>${element.좋아요수}</span>
      </div>
    </div>
  </li>
    `
   })
   crBox.innerHTML=crList
})

//클릭 이벤트

const curationBts = document.querySelectorAll(".curation > p")
const curationBoxs = document.querySelectorAll(".curation-box > ul")

curationBts.forEach((curationBt,index)=>{
  curationBt.addEventListener("click",function(){
    for(const curationBt of curationBts){curationBt.classList.remove("on")}
    for(const curationBox of curationBoxs){curationBox.classList.remove("on")}
    curationBoxs[index].classList.add("on")
    this.classList.add("on")
  })
});
curationBts[0].click();

