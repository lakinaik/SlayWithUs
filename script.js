// ==========sticky navbar==========
let navbar = document.querySelector(".navbar");
window.addEventListener('scroll',()=>{
    if(window.scrollTo > 10){
        navbar.classList.toggle("open")
    }
})

let menu_icon = document.getElementById("menu-icon");
let overlay = document.querySelector(".overlay");
let sidebar = document.querySelector(".sidebar");

menu_icon.addEventListener('click',()=>{
    overlay.style.display = "block";
    sidebar.classList.add("open");
})
overlay.addEventListener('click',()=>{
    sidebar.classList.remove("open");
    overlay.style.display = "none";
})

// =======sidebar-Dropdwon==========
let sidebar_dropdown = document.querySelector(".side-drop-down");
let side_dropdown_btn = document.querySelector(".side-drop-down-btn");
side_dropdown_btn.addEventListener('click',()=>{
    sidebar_dropdown.classList.toggle("open")
})


// ============search box=============

let searchbtn = document.getElementById("search");
let searchBox = document.querySelector(".search-box");
searchbtn.addEventListener('click',(e)=>{
    e.preventDefault
    searchBox.classList.toggle("open");
})