function show(){
    let name=document.querySelector("#name").value;
    let email=document.querySelector("#email").value;
    let mob=document.querySelector("#mob").value;
    let pass=document.querySelector("#pass").value;
    let cpass=document.querySelector("#cpass").value;
    console.log(name,email,mob,pass,cpass);
    if(name===""){
        window.alert("please eneter name");
        document.querySelector('#name').focus();
        return false;
    }
    else if(email===""){
        window.alert("please eneter email");
        document.querySelector('#email').focus();
        return false;
    }
    else if(!(email.includes('@gmail.com')|| email.includes('@yahoo.com')|| email.includes('@outlook/com'))){
        window.alert("email field must have @ and .com");
        document.querySelector('#email').focus();
        return false;
    }
    else if(mob===""){
        window.alert("please eneter mobile no");
        document.querySelector('#mob').focus();
        return false;
    }
    else if(isNaN(mob)){
        window.alert("number should be numeric only");
        document.querySelector('#mob').focus();
        return false;
    }
    else if(mob.length!==10){
        window.alert("number should be 10 digit");
        document.querySelector('#mob').focus();
        return false;
    }
    else if(pass===""){
        window.alert("please eneter password");
        document.querySelector('#pass').focus();
        return false;
    }
    else if(cpass===""){
        window.alert("please eneter confirm password");
        document.querySelector('#cpass').focus();
        return false;
    }
    else if(!pass.match('[/@#$%^&*()+]')){
        window.alert("not a strong password,it should contain special character");
        return false;
    }
    else if(!pass.match('[/1234567890]')){
        window.alert("not a strong password,it should contain numeric digit");
        return false;
    }
    else if(!pass.match('[/asdfghjklqwertyuiopmnbvcxz]')){
        window.alert("not a strong password,it should contain lower case");
        return false;
    }
    else if(!pass.match('[/ASDFGHJKLOPIUYTREWQZXCVBNM]')){
        window.alert("not a strong password,it should contain upper case");
        return false;
    }
    else if(pass.length<8){
        window.alert("passowrd atleast 8 or more chatracter");
        return false;
    }
    else if(pass !==cpass){
        window.alert("password and confirm password not matched");
        document.querySelector('#pass').value="";
        document.querySelector('#cpass').value="";
        document.querySelector('#pass').focus(); 
        return false;
    }
}