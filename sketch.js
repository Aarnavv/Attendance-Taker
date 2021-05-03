function check(btn) {
    btn.style.backgroundColor = "green";
    btn.style.color = "black";

    var touchtime = 0;
    var delay = 500;
    var action = null;
    $(".click").on("click", function () {
        // Double Click
        if ((new Date().getTime() - touchtime) < delay) {
            clearTimeout(action)
            btn.style.backgroundColor = "red";
            btn.style.color = "black";

            touchtime = 0;
        }
        // Single Click
        else {
            touchtime = new Date().getTime();
            action = setTimeout(function () {}, delay);
        }
    });
}