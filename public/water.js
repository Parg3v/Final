class Water extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.multiply = 8;
    }
    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(6));
        if (this.multiply >= 3 && newCell) {
            var newWater = new Water(newCell[0], newCell[1], this.index);
            WaterArr.push(newWater);
            matrix[newCell[1]][newCell[0]] = 7;
            this.multiply = 0;
        }
    }
    eat() {
        var fire = this.chooseCell(6);
        var newCell = random(fire);
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 7;

            for (var i in FireArr) {
                if (newX == FireArr[i].x && newY == FireArr[i].y) {
                    FireArr.splice(i, 1);
                    break;
                }
            }
            this.mul();
        }
    }

    die() {
        matrix[this.y][this.x] = 1;
        for (var i in WaterArr) {
            if (this.x == WaterArr[i].x && this.y == WaterArr[i].y) {
                WaterArr.splice(i, 1);
                break;
            }
        }
    }
}