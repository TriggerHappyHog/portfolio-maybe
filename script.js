document.addEventListener('mousemove', function(ev){
    document.getElementById('acab').style.transform = 'translateY('+(ev.clientY-20)+'px)';
    document.getElementById('acab').style.transform += 'translateX('+(ev.clientX-120)+'px)';
    let mousex = event.clientX; 
    let mousey = event.clientY;
    document.getElementById('acab').innerHTML = "X: " + mousex + " Y: " + mousey;
},false);