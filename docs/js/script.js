window.addEventListener("keypress", (e)=>{
    console.log(e.keyCode)
    if(e.keyCode == 101){
        console.log("go back")
        window.history.back()
    }
})


console.log("yes")