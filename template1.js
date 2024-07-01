function sub(){
    let name=document.getElementById('name').value;
    let college=document.getElementById('college').value;
    let card=` <section id="card">
        <div id="d1">
            <div>${name}</div>
            <div>
                <img src="https://wallup.net/wp-content/uploads/2016/03/10/319576-photography-landscape-nature-water-grass-trees-plants-sunrise-lake.jpg" alt="">
            </div>
        </div>
        <div>My Name is ${name}.I have done my diploma from ${college} in 2023</div>
    </section>`;
    let store=document.getElementById('output');
    store.innerHTML=card;
    return false;
}