let accordion = document.getElementsByClassName("accordion");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function (e) {
        if (accordion[i].classList.contains("show")) {
            accordion[i].classList.add("hide");
            accordion[i].classList.remove("show");
        } else {
            accordion[i].classList.add("show");
            accordion[i].classList.remove("hide");
        }
    });
}
