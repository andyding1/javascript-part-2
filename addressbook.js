function Person(firstName, lastName){
    this.firstName = firstName,
    this.lastName = lastName,
    this.emails = [];
}
function Email(address, type){
    this.address= address;
    switch(type){
        case 'home':
            this.type='home';
            break;
        case 'work':
            this.type='work';
            break;
        default:
            this.type='other';
    }
}
Person.prototype = {
    addEmail: function(address,type){
        this.emails.push(new Email(address,type));
    }
};
var person1 = new Person('Andy','Ding');
person1.addEmail('andyding@yahoo.com','home');
person1.addEmail('ading@eoriginal.com','work');
console.log(person1);