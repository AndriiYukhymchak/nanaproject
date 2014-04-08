var menu = function (img) {
    this.img = img;
    this.f = null;
};
menu.prototype.show = function (context, x, y) {
    context.drawImage(this.img, x, y);
}