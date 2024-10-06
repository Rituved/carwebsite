const productImg = document.getElementById("product-img");
const btn = document.getElementsByClassName("btn");
const changeimg = document.getElementById("changeimg")
const btn2 = document.getElementsByClassName("btn2");
function getImages(){
  btn[0].addEventListener("click", () => {
        productImg.src = "image/1.jpg";
    }) 
    btn[1].addEventListener("click", () => {
        productImg.src = "image/11.jpg";
    })
  
btn[2].addEventListener("click", () => {
        productImg.src = "image/12.jpg";
    })

}

getImages();

function getsecondeimg(){
  btn2[0].addEventListener("click",()=>{
changeimg.src="image/1.jpg";
  })
  btn2[1].addEventListener("click",()=>{
    changeimg.src="image/11.jpg";
      })
 btn2[2].addEventListener("click",()=>{
        changeimg.src="image/12.jpg";
          })     
}
getsecondeimg()

let wrongmenu = document.getElementById("wrongmenu")
let menu = document.getElementById("menu")
let nav =document.getElementById("secondnav")
function a(){
  nav.style.display="none"
}
function b(){
nav.style.display="block"
}