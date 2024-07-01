function show(){
    let name=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let mob=document.querySelector("#mob").value;
    let pass=document.querySelector("#pass").value;
    let cpass=document.querySelector("#cpass").value;
    console.log(name,email,mob,pass,cpass);
    return false;
}