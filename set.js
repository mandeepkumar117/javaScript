//setinterval 
//settimeout ------> time duration once


// setTimeout(fun,3000);



// function fun(){
//     let design = ``;
//     window.alert("heelo")
// }

// setInterval(fun1,1000)

// let count = 0;

// function fun1(){
//     count++;
//     console.log(count)
// }

setInterval(fun1,100)

let count = 0;

function fun1(){
    count++;
    

    if(count<=60){
        document.querySelector('#ans').innerHTML = count;
    }
}






