String.prototype.hasSpace = function() {
    return this.indexOf(' ') !== -1;
}

String.prototype.isEmpty = function() {
    return this.length > 0 ? false : true
}