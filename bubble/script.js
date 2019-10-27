// 1.objects and function borrowing

var john = {
    name : 'john',
    birthday: 1990,
    job: 'Desginer',
    calculateAge: function(){
        console.log(2018 - this.birthday);
    }
}

console.log(john);
john.calculateAge();

var jane = {
    name : 'jane',
    birthday: 2000,
    job: 'programmer',
//    calculateAge: function(){
//        console.log(2018 - this.birthday);
//    }
}
//function borrowing
jane.calculateAge = john.calculateAge;
jane.calculateAge();




// 2. function constructor

var Person = function(name , birthday , job){
    this.name = name;
    this.birthday = birthday;
    this.job = job;
    this.calculateAge = function(){
        console.log(2018 - this.birthday);
    }
}

var steve = new Person('steve' , 1990 , 'designer');
var jane = new Person('jane' , 1994 , 'programmer');

console.log(steve);
console.log(jane);

 3. object.create

var person = {
   calculateAge:function(){
     console.log(2018 - this.birthday);  
   },
}


var ali = Object.create(person , {
    name : {value :'ali'},
    lastname : {value :'something'},
});
console.log(ali);




// 4. prototyping



var Person = function(name , birthday , job){
    this.name = name;
    this.birthday = birthday;
    this.job = job;
}
Person.prototype.calculateAge = function(){
        console.log(2018 - this.birthday);
    }

var john = new Person('john' , 1990 , 'desginer');
console.log(john);




// 5.primitives vs objects

var a = 40;
var b = a;
a = 30;
console.log(a);
console.log(b);

var obj1 = {
    number : 10
}
var obj2 = obj1;
obj1.number = 20;
console.log(obj1.number);
console.log(obj2.number);






// 6. closure concept with 
//counter-dillema : function : add() ; counter++


//function add(){
//    var counter = 0;
//    counter+=1;
//    return counter;
//}

var counter = 0;
var add = (function(){
    var counter = 0;
    return function(){
        counter+=1;
        return counter;
    }
})();

add();
add();
add();
add();





//function plus(){
//    counter+=2;
//}
//plus();
//console.log(counter);






// 7.DOM Manipulation








// 8.talkig about project and some guidance about starting point;