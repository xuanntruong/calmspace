"use strict";

// const subTitles = document.getElementsByClassName('subTitle');
// const container = document.getElementsByClassName('container');

// for(let i=0; i < subTitles.length; i++) {
//     subTitles[i].addEventListener("click", function(){
//         if(subTitles[i].className === "subTitle") {
//             for(let j=0; j<subTitles.length; j++){
//                 if(i != j){
//                     subTitles[j].className = "subTitle";
//                 }
//             }
//             subTitles[i].className = "subTitle active";
//         } else if(subTitles[i].className === "subTitle active") {
//             subTitles[i].className = "subTitle";
//         }
//     })
// }

$(document).ready(function(){
    $(".subTitle").click(function() {
        $(this).next().slideToggle(200);
        $(this).toggleClass("active");

        console.log(this.className);
        if(this.className === "subTitle active"){
            $(this).parent().siblings().children(".subTitle").next().slideUp(200);
            $(this).parent().siblings().children(".subTitle").attr('class', 'subTitle');
        }
    }); 
});


const accordionContent = document.querySelectorAll(".accordion-content");
accordionContent.forEach((item, index) => {
    let header = item.querySelector("header");
    header.addEventListener("click", () =>{
        item.classList.toggle("open");
        let description = item.querySelector(".description");
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
            item.querySelector("i").classList.replace("fa-plus", "fa-minus");
        }else{
            description.style.height = "0px";
            item.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
        removeOpen(index); //calling the funtion and also passing the index number of the clicked header
    })
})
function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");
            let des = item2.querySelector(".description");
            des.style.height = "fit-content";
            item2.querySelector("i").classList.replace("fa-minus", "fa-plus");
        }
    })
}