
function TxtType(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loop = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.deleting = false;
    // ensure there's a single .wrap child we update
    this.wrap = el.querySelector('.wrap');
    if (!this.wrap) {
        this.wrap = document.createElement('span');
        this.wrap.className = 'wrap';
        el.appendChild(this.wrap);
    }
    this.tick();
}

TxtType.prototype.tick = function() {
    var i = this.loop % this.toRotate.length;
    var full = this.toRotate[i];

    if (this.deleting) this.txt = full.substring(0, this.txt.length - 1);
    else this.txt = full.substring(0, this.txt.length + 1);

    // update only textContent of the wrap
    this.wrap.textContent = this.txt;

    var delta = 200 - Math.random() * 100;
    if (this.deleting) delta /= 2;

    if (!this.deleting && this.txt === full) {
        delta = this.period;
        this.deleting = true;
    } else if (this.deleting && this.txt === '') {
        this.deleting = false;
        this.loop++;
        delta = 500;
    }

    var self = this;
    setTimeout(function() { self.tick(); }, delta);
};

document.addEventListener('DOMContentLoaded', function() {
    var els = document.getElementsByClassName('typewrite');
    for (var i = 0; i < els.length; i++) {
        var toRotate = els[i].getAttribute('data-type');
        var period = els[i].getAttribute('data-period');
        if (toRotate) new TxtType(els[i], JSON.parse(toRotate), period);
    }
});
