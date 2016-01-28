function randomNumber() {
    var number = Math.floor(Math.random()*3);
    return number;
}
function randomType() {
    var number = randomNumber();
    var type;
    switch(number){
        case 0:
            type = 'grass';
            return type;
        case 1:
            type = 'rocks';
            return type;
        case 2:
            type = 'water';
            return type;
    }
}
function randomCondition() {
    var number = randomNumber();
    var condition;
    switch(number){
        case 0:
            condition = 'burning';
            return condition;
        case 1:
            condition = 'normal';
            return condition;
        case 2:
            condition = 'frozen';
            return condition;
    }
}

function Tile(x,y){
    this.x = x,
    this.y = y,
    this.height = randomNumber(),
    this.type = randomType(),
    this.condition = randomCondition();
}

var tile1 = new Tile(5,25);
console.log(tile1);