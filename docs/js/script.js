// // window.addEventListener("keydown", (e)=>{
// //     console.log(e.keyCode)
// //     if(e.keyCode == 101){
// //         console.log("go back")
// //         window.history.back()
// //     }
// // })

// function isPage(term) {
//     return window.location.href.indexOf(term) > -1
// }



// window.onload = function(){
    
//     if(isPage('/index.html')){
//         console.log("yes")
//         greeting()
//     }
//     function greeting(date = new Date()){
//         console.log(' yes')
//        const hour =  date.getHours()

//         const greeting = document.querySelector('span[data-daytime-greeting]')

//         if(hour <= 11){      
//             greeting.textContent = "Goedenmorgen"
//         }else if(hour <= 17){
//             greeting.textContent = "Goedenmiddag"
//         }else if(hour <= 23){
//             greeting.textContent = "Goedenavond"
//         }else if(hour <= 3){
//             greeting.textContent = "Goedenacht"
//         }else{
//             greeting.textContent = "Goedendag"
//         }
//     }
    
   
//     window.addEventListener("focus", function(e){
//         console.log(e.target)
//         e.scrollIntoView()
//     })
   

// }



window.addEventListener("focusin", function(e){
    console.log(e)
    e.target.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
})

// // console.log("yes")