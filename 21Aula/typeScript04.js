var PongRacket = /** @class */ (function () {
    function PongRacket(x, y) {
        this.x = 0;
        this.y = 0;
        this.width = 20;
        this.height = 100;
        this.x = x;
        this.y = y;
    }
    PongRacket.prototype.moveUp = function () {
        if (this.y > 0) {
            this.y -= 20;
        }
    };
    PongRacket.prototype.moveDown = function () {
        if (this.y + this.height + 20 <= 900) {
            this.y += 20;
        }
    };
    return PongRacket;
}());
