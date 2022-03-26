console.log("Hello World");
var cyobj = document.querySelector('.current-year');
const d = new Date();
var year = d.getFullYear();
cyobj.innerHTML = year;
console.log(cyobj);

var isClosed = true; 
var navbtn = document.querySelector('.m-hamburger');
console.log(navbtn);
var navlist = document.querySelector('.m-nav-list');
console.log(navbtn);
navbtn.addEventListener('click', ()=>{
    if(isClosed){
        isClosed = false;
        navbtn.classList.remove("cross-animation");
        navlist.style.display= 'none';
      }else{
        isClosed = true;
        navbtn.classList.add("cross-animation");
        navlist.style.display='block';
    }
})



const content = document.querySelector('#main');




 gridGallery({
  // gallery selector
  selector: "#mSelector",
  // enable dark mode
  // or "horizontal"
//   layout: "square",
  darkMode: true,
  // space between images
  gapLength: 0,
  // row height
  // column width
//   rowHeight: 180,
  columnWidth: 250
  
 });
