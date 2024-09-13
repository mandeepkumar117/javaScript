function sub(){
    let name=document.getElementById('#name').value;
    let mob=document.getElementById('#mob').value;
    let adres=document.getElementById('#adres').value;
    let email=document.getElementById('#email').value;
    let pass=document.getElementById('#pass').value;
    let cpass=document.getElementById('#cpass').value;
    let likb=document.getElementById('#lkd').value;
    let gib=document.getElementById('#gib').value;
    let card=`<section id="biodata">
        <div id="bio">
            <div>${name}</div>
            <div>${mob}</div>
            <div>${adres}</div>
            <div>${email}</div>
            <div>${pass}</div>
            <div>${cpass}</div>
            <div>${likb}</div>
            <div>${gib}</div>
        </div>
    </section>`;
    let store=document.getElementById('output');
    store.innerHTML=card;
    return false;
}