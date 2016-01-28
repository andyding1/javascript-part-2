function randomPower() {
    var number = Math.floor(Math.random()*100);
    return number;
}
function Warrior(nm,gend){
    this.name = nm,
    this.gender = gend,
    this.level = 1,
    this.weapon = 'wooden sword',
    this.power = randomPower();
}

Warrior.prototype = {
    fight: function(){
        console.log(this.name + " who is a " + this.gender + " rushes to the arena with " + this.weapon + " at level " + this.level + " and a power level of " + this.power);
    },
    faceoff: function(opponent){
        if(this.power>opponent.power){
            console.log(this.name + " won the fight with a power level of " + this.power + " compared to " + opponent.name + " who has a power level of " + opponent.power);
        } else if (this.power<opponent.power){
            console.log(this.name + " lost the fight with a power level of " + this.power + " compared to " + opponent.name + " who has a power level of " + opponent.power);
        }
        else {
            console.log("Both warriors attacked with their wooden swords and due to an equal power level of " + this.power + " and " + opponent.power + ", they both blew up");
        }
    }
};

var warrior1 = new Warrior('Andy', 'M');
var warrior2 = new Warrior('Faith', 'F');
var warrior3 = new Warrior('Bonnie', 'F');
var warrior4 = new Warrior('Will', 'M');
warrior1.fight();
warrior1.faceoff(warrior2);
warrior3.faceoff(warrior4);