let userInfo = document.querySelector("#userinfo");
let user = prompt("Adınızı Giriniz.");
userInfo.innerHTML = `${user}`;


function showTime() {
    var date = new Date();
    var day = date.getDay();
    var days = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"];
    var hour = date.getHours();
    hour = hour < 10 ? "0" + hour : hour;
    var minute = date.getMinutes();
    minute = minute < 10 ? "0" + minute : minute;
    var second = date.getSeconds();
    second = second < 10 ? "0" + second : second;
    var current = hour + ":" + minute + ":" + second + " " + days[day];
    document.getElementById("myClock").innerHTML = current;
}
setInterval("showTime()", 1000);