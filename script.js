document.querySelector("[name='phone']");
let scroller = document.getElementById("scroller")

window.onscroll = function () {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        scroller.style.display = "block";
    } else {
        scroller.style.display = "none";
    }
}


scroller.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
    //descontinuada
    document.body.scrollTop = 0;
}
)
