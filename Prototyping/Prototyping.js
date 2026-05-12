function createUse(username,score){
    this.username = username;
    this.score = score;
}
//we create a increment fun in createUse fun Object like (map,reduce,filture)
createUse.prototype.increment = function(){
    this.score++ ; //this ne bhi bulaya uska score increment kr
}
createUse.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}

//creteUse madhe increment,printMe property aali aahe pn 
//p1 madhe value tranfer kartana aapn ti bolalo nahi ki hi addition property alli aahe
//batane ke liye we use new keyword
const p1 = createUse("piyush",20);
// p1.printMe(); //TypeError: Cannot read properties of undefined (reading 'printMe')

const p2 =new createUse("amey",10);
p2.printMe(); //works properly

function createUse(username,score){
    this.username = username;
    this.score = score;
}
//we create a increment fun in createUse fun Object like (map,reduce,filture)
createUse.prototype.increment = function(){
    this.score++ ; //this ne bhi bulaya uska score increment kr
}
createUse.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}

//creteUse madhe increment,printMe property aali aahe pn 
//p1 madhe value tranfer kartana aapn ti bolalo nahi ki hi addition property alli aahe
//batane ke liye we use new keyword
const p1 = createUse("piyush",20);
// p1.printMe(); //TypeError: Cannot read properties of undefined (reading 'printMe')


const p2 =new createUse("amey",10);
p2.printMe(); //works properly