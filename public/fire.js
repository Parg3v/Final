class Fire extends LivingCreature{
    constructor(x, y, index){
        super(x, y, index);
        this.time = 20;
        
    }
    mul() {
        this.time--;
        this.multiply++;
        var newCell = random(this.chooseCell(1));
        if (this.multiply >= 8 && newCell) {           
            var newFire = new Fire(newCell[0], newCell[1], this.index);
            FireArr.push(newFire);
            matrix[newCell[1]][newCell[0]] = 6;
            this.multiply = 0;
        }
    }
}