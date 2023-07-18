let button = document.getElementById("btn");
let pallete = ["#d3d3d3","#6f759d","#f3e5b4","#a0f5a7","#ff7c8f","#8f9558"];
let header =document.getElementById("header1");
let main= document.querySelector('.main');
let random = 0;
const clickHandler=()=>{
    console.log("clicked");
    header.textContent=pallete[random];
    random=Math.floor(Math.random()*4);
    changeColor();
}
const changeColor=()=>{
    main.style.backgroundColor=pallete[random];
}
button.addEventListener("click",clickHandler);
