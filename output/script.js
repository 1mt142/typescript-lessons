/*
console.log("Hello TS From JS");
const country ="upay"

function mul(a:number,b:number){
  return a*b;
}
console.log(mul(2,3));

// array
// any
// const listOfArray:any[]=["a","b"]
// string or number
const listOfArray:(string|number)[]=["a","b"]
listOfArray.push(1)
console.log(listOfArray);

// object
let c:object;
c={
  name:"String",
  phone:1323,
}
//
let obj:{name:string,age:number,isOk:boolean};


obj={
  name:"adsa",
  age:345,
  isOk:true
}
console.log(obj);


let myFunc:Function;

myFunc=()=>{
  console.log("ok");
  
}
myFunc()

// c is optional params
const optionalParam=(a:string,b:string,c?:string)=>{
  console.log(`Hello ${a} ${b}`);
}

optionalParam("Imtiaz","Khandoker","Ok");


// define return type

const returnType = (a:number,b:number):number=>{
  return a+b;
}
console.log(returnType(23,45));

// Type Aliases
type stringOrNumber=string|number;
type userType={name:string;age:number}

const userDetails = (id:stringOrNumber,user:userType)=>{
  console.log(`user id is ${id},name is ${user.name} and age is ${user.age}`);
}

const sayHello=(user:userType)=>{
  console.log(`Hello ${user.age>50 ? "Sir" :"Mr."} ${user.name}`);
  
}

userDetails("2432r3",{name:"Imtiaz",age:234})
sayHello({name:"Imtiaz",age:234})


// Function Signature
let add:(x:number,y:number)=>number; //this is function signature

add=(inputOne:number,inputTwo:number)=>{
  return inputOne+inputTwo
}

let cal:(x:number,y:number,c:string)=>number;

cal=(a:number,b:number,c:string)=>{
  if(c==='ok'){
    return a+b
  }
  else{
    return a-b
  }
}

console.log(cal(5,6,"ok"));


// class

class Player {
  name:string;
  age:number

  constructor(n:string,a:number){
    this.name=n;
    this.age=a
  }

  play(){
    console.log(`${this.name} and age is ${this.age}`);
  }
}

const mashrafi=new Player("Mashrafi",45);
console.log(mashrafi);

const players:Player[]=[]

players.push(mashrafi)

// Access Modifier

class AccessModifier {
  private name:string;
  readonly age:number;
  public country:string;

  constructor(n:string,a:number,c:string){
    this.name=n;
    this.age=a
    this.country=c
  }

  play(){
    console.log(`${this.name} and age is ${this.age}`);
  }
}

const newPlay=new AccessModifier("Imtiaz",65,"Bangladesh");
console.log(newPlay);

*/
import { Player } from "./classes/Player.js";
const mashrafi = new Player("mashrafi", 40, "Bangladesh");
const sakib = new Player("sakib", 38, "Bangladesh");
console.log(sakib.age);
console.log(sakib.country);
const players = [];
players.push(sakib);
players.push(mashrafi);
function drawRectangle(options) {
    let width = options.width;
    let length = options.length;
}
const pr = drawRectangle({ width: 30, length: 45 });
console.log(pr);
let sak;
sak = new Player("Imtiaz", 32, "UK");
// enum
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["FAILURE"] = 1] = "FAILURE";
    RType[RType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    RType[RType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(RType || (RType = {}));
const res1 = {
    status: 200,
    type: RType.SUCCESS,
    data: 'test'
};
console.log(res1);
// Tuples
let a = [3, "ok", { p: 3 }];
//tuples example
let b = [4, "string", { x: 3 }];
