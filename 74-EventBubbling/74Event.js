let button = document.getElementById("btn")


button.addEventListener("click", () => {
    // alert("i was clicked"); 
    document.querySelector(".box").innerHTML = "hey you are clicked <b>enjoy your clicked</b>"
    const op = document.querySelector(".box12");
    op.style.display = "block"
})
button.addEventListener("keydown", (e) => {
    // console.log(e)
    console.log(e.key,e.keyCode)
})

// const slide = document.querySelector('.slidebar')
//     slide.style.display = 'block'