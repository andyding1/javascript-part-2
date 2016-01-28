function randomNumber(num) {
    var number = Math.ceil(Math.random()*num);
    return number;
}
function randomType() {
    var number = randomNumber(3);
    var type;
    switch(number){
        case 1:
            type = 'grass';
            return type;
        case 2:
            type = 'rocks';
            return type;
        case 3:
            type = 'water';
            return type;
    }
}
function randomCondition() {
    var number = randomNumber(3);
    var condition;
    switch(number){
        case 1:
            condition = 'burning';
            return condition;
        case 2:
            condition = 'normal';
            return condition;
        case 3:
            condition = 'frozen';
            return condition;
    }
}
//constructor for Tile
function Tile(x,y){
    this.x = x,
    this.y = y,
    this.height = randomNumber(3),
    this.type = randomType(),
    this.condition = randomCondition();
}
Tile.prototype = {
    freeze: function(){
        if(this.condition === 'burning'){
            this.condition = 'normal';
        }else if(this.condition === 'normal')
            this.condition = 'frozen';
        else {
            if(this.height !== 3){
                this.height++;
            }
        }
    },
    burn: function(){
        if(this.condition === 'frozen'){
            this.condition = 'normal';
        }else if(this.condition === 'normal')
            this.condition = 'burning';
        else {
            if(this.height !== 0){
                this.height--;
            }
        }
    }
};

//Creating a tile array of all 400 tiles
var tileArray = [];
for (var i=0;i<20;i++) {
    var row =[];
    for (var j=0;j<20;j++) {
        row.push(new Tile(i,j));
    }
    tileArray.push(row);
}

//Randomly Burn and Freeze Tiles
tileArray.forEach(function(element){
    element.forEach(function(tile){
        var burnNumber = randomNumber(2);
            if(burnNumber===1){
                tile.burn();
            }
        var freezeNumber = randomNumber(2);
            if(freezeNumber===1){
                tile.freeze();
            }
    });
});

//Creating the map to display the heights well on the terminal
tileArray.forEach(function(element){
    var map = [];
    element.forEach(function(tile){
        map.push(tile.height);
    });
    console.log(map);
});
