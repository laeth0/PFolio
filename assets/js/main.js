let serviseSection= document.getElementById("service")
let portfolioSection= document.getElementById("portfolio")
let resumeSection= document.getElementById("resume")
let contactSection= document.getElementById("contact")
let navBar=document.querySelector(".navbar")
let changeSection=document.getElementById("change-nav")
let scrollToTop=document.querySelector(".scrollToTop")
let links=document.querySelectorAll("nav .nav-link")
let loading=document.querySelector(".loading");
scrollToTop.style.opacity="0"

document.querySelector(".navbar button").addEventListener("click",function(){
    if(this.getAttribute("aria-expanded") == "true"){
        navBar.classList.add("backgroundNavbar")
    }
    else{
        if(window.scrollY <=0){
            navBar.classList.remove("backgroundNavbar")
        }
    }
});


if(window.scrollY >0){
    navBar.classList.add("backgroundNavbar")
}
window.addEventListener("scroll",()=>{
    if(window.scrollY >0){
        navBar.classList.add("backgroundNavbar")
    }
    if(window.scrollY <=0){
        navBar.classList.remove("backgroundNavbar")
    }

    if(window.scrollY >= 100){
        scrollToTop.style.opacity="1"
    }
    else{
        scrollToTop.style.opacity="0"
    }
})

scrollToTop.addEventListener("click",()=>{
     window.scroll({  // window.scroll take an object
        top:0,
        behavior:"smooth"
    })
})

links.forEach((e)=>{
e.addEventListener("click",(ele)=>{
    let currentID=ele.target.getAttribute("href")
    let targetSection=document.querySelector(currentID)

    ele.preventDefault();
    window.scroll({  // window.scroll take an object
        top:targetSection.offsetTop,
        behavior:"smooth"
    })
    links.forEach((element)=>{
        element.classList.remove("active")
    })

    ele.target.classList.add("active");
    console.log(ele);
})
})


document.body.style.overflow="hidden"
window.addEventListener("load",()=>{
    setTimeout(function(){
        loading.style.opacity="0"
        loading.style.visibility="hidden"
        document.body.style.overflow="auto"
    },2000)
})

document.querySelectorAll(".about .numbers span").forEach((ele)=>{
    let start=0
    let x=setInterval(()=>{
        start++
        ele.innerHTML=start
        if(start == ele.getAttribute("data"))
        clearInterval(x)
    } ,10)
        
})









































































































