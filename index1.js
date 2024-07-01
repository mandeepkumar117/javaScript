function home(){
   // window.location.href="index.html";
    // window.open("index.html")//you can use both method
   let h=window.innerHeight;
   let b=window.innerWidth;
   console.log(h,b);
}
function run(){
    let x=window.event.clientX;
    let y=window.event.clientY;
    console.log(x,y);
}
function windowexample(){
    let number1=parseInt(window.prompt("Enter number 1"));
    let number2=parseInt(window.prompt("Enter number 2"));
    window.alert(number1+number2);
}
function windowexample1(){
    let number1=window.prompt("Enter username");
    let number2=parseInt(window.prompt("Enter password"));
    window.alert(number1+"\n"+number2);
    if(number1 && number2){
        window.alert("succesfully login");
    }
    else{
        window.alert("data not found");
    }

    
}
function show(){
    let str="hello sir";
    let store=document.getElementById("div1");
    store.innerHTML=str;
}