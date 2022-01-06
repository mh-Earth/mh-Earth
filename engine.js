function activebutton(index){

    let navbnt = document.getElementsByClassName("icon")

    for (let i = 0; i < navbnt.length; i++) {

        navbnt[i].classList.remove("active")
    }

    navbnt[index].classList.add("active")
    



}


function scrollTO(){

    let a = document.getElementById("sMedia")
    a.scrollIntoView();
    activebutton(0)
    
}
activebutton(4)


// modile js


let navbox = document.getElementsByClassName("navbox")[0]
let repDiv = document.getElementsByClassName("repDiv")[0]
let faplus = document.getElementsByClassName("fa-plus")[0] 
repDiv.addEventListener("click",function(){
    
    navbox.classList.toggle("active")
    if(faplus.style.transform == "rotate(315deg)"){

        faplus.style.transform = "rotate(0deg)"
    }

    else{
        faplus.style.transform = "rotate(315deg)"
    }


});









