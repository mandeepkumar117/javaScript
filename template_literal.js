function shownav(){
    let num=45;
    let nav =`<ul class="navstyle">
        <li><a href="#">HOME ${num}</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">CONTENT</a></li>
        <li><a href="#">BLOG</a></li>
    </ul>`;
    let store=document.getElementById("output");
    store.innerHTML=nav;
}