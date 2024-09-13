function colorgenerator(){
    let color_array=["https://tse2.mm.bing.net/th?id=OIP.CSThJ0qpV3XKsURD0iKZ0AHaEK&pid=Api&P=0&h=180",
        "http://www.pixelstalk.net/wp-content/uploads/2016/08/Cool-Nature-Background-Images-4523x2590.jpg",
        "https://images.pexels.com/photos/443446/pexels-photo-443446.jpeg?cs=srgb&dl=snow-landscape-mountains-443446.jpg&fm=jpg",
        "https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Amazing-Background-Images-Nature.jpg",
        "https://wallpapercave.com/wp/wp2858563.jpg",
        "http://www.pixelstalk.net/wp-content/uploads/2016/08/Wonderful-Nature-Colorful-Scene-HD.jpg"];
    let len=color_array.length;
    let ran=Math.random();
    let mul=ran*len;
    let ind=Math.floor(mul);
    let output=color_array[ind];
    let store=document.querySelector('#box');
    store.style.backgroundImage=`url(${output})`;
}