const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');
const colorMap={
    sky:'#97efe9',
    ash:'#A7C4C2',
    'purple-1':'#66023C',
    'purple-2':'#4A001F',
    'purple-3':'#2D001F',
}

buttons.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const color=colorMap[e.target.id];
        if(color){
            body.style.backgroundColor=color;
        }
    })
})
