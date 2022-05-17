type = "text/javascript"

function updateClock() {
    let now = new Date();
    let dname = now.getDay(),
        hou = now.getHours(),
        min = now.getMinutes(),
        sec = now.getSeconds()

    Number.prototype.pad = function(digits) {
        for (var n = this.toString(); n.length < digits; n = 0 + n);
        return n;
    }

    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let ids = ['dayname', 'hours', 'minutes', 'seconds']
    let values = [week[dname], hou.pad(2), min.pad(2), sec.pad(2)];
    for (i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);
}
initClock();
updateClock();