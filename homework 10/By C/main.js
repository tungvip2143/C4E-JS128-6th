type = "text/javascript"

function updateClock() {
    var now = new Date();
    var dname = now.getDay(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds()

    Number.prototype.pad = function(digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n
    }

    var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var ids = ['dayname', 'hours', 'minutes', 'seconds']
    var values = [week[dname], hou.pad(2), min.pad(2), sec.pad(2)];
    for (var i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}
initClock();
updateClock();