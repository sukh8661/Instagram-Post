var con = document.querySelector("#container")
var img = document.querySelector("#img")
var like = document.querySelector("#like")
var heart = document.querySelector("#heart")
var save = document.querySelector("#save")
var count = 0
var count1 = 0

img.addEventListener("dblclick", function() {
    like.style.transform = "translate(-50%, -95%) scale(1.5)";
    heart.className = "ri-heart-fill";
    heart.style.color = "#fe0103";

    setTimeout(function() {
        like.style.transform = "translate(-50%, -95%) scale(0)";
    }, 1000);
})

heart.addEventListener("click", function() {
    if (count === 0) {
        heart.className = "ri-heart-fill";
        heart.style.color = "#fe0103";
        count = 1;
    } else {
        heart.className = "ri-heart-line";
        heart.style.color = "#000";
        count = 0;
    }
});

save.addEventListener("click", function() {
    if (count1 === 0) {
        save.className = "ri-bookmark-fill";
        save.style.color = "#black";
        count1 = 1;
    } else {
        save.className = "ri-bookmark-line";
        save.style.color = "#000";
        count1 = 0;
    }
});