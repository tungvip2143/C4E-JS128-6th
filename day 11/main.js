Number.prototype.pad = function(digits) {
    for (let n = this.toString(); n.length < digits; n = 0 + n);
    return n;
    console.log(n)
}