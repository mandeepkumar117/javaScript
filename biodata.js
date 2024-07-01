function sub(){
    let name=document.getElementById('name').value;
    let college=document.getElementById('college').value;
    let mob=document.getElementById('mob').value;
    let email=document.getElementById('email').value;
    let pass=document.getElementById('pass').value;
    let card=`<section id="biodata">
        <div id="bio">
            <div>${name}</div>
            <div>${college}</div>
            <div>${mob}</div>
            <div>${email}</div>
            <div>${pass}</div>
        </div>
    </section>`;
    let store=document.getElementById('output');
    store.innerHTML=card;
    return false;
    
} 