class PongRacket{
    x: number = 0;
    y: number = 0;
    width: number = 20;
    height: number = 100;

    constructor(x: number, y: number){
        this.x = x;
        this.y = y;
    }

    moveUp():void{//função nao retorna nada
        if (this.y > 0) {
            this.y -= 20;
        }
    }
    moveDown():void{
        if (this.y + this.height + 20 >= 900) {
            this.y += 20;
        }
    }
}
