"use strict"
function add()
{
var num=23;
var num1=48;
let num2=34;
const num3=45;
console.log(num+num1);
}
function run(){
    // var num1="mandeep";
    // var num1="kumar";
    // let num1="deepak";
    // num1="patel";
    const num1="deepak";
    console.log(num1)
}
run();
function datatype()
{
    let num=12n;
    let num1=12n;
    console.log(typeof(num))
    console.log(num+num1)
}
function data_type()
{
    let num1=null;
    console.log(num1);
    let Symbol1=Symbol("mandeep");
    let Symbol2=Symbol("mandeep");
    console.log(Symbol1==Symbol2);
}
data_type();

const call_arrow_function=()=>{
    window,alert("function called")
}
function comp(){
    let a=45;
    let b="45";
    console.log(a==b);
    console.log(a===b)//here check data type
}
comp();