let color;

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = 'red';
    /* Cambiar a color 1 */
    } else if (event.key === 's') {
        color = 'yellow';
    /* Cambiar a color 2 */
    } else if (event.key === 'd') {
        color = 'blue';
    }
});

function pintar(id, colorseleccionado){
        let color = document.getElementById(id)
        color.style.backgroundColor = colorseleccionado
    }

document.getElementById('box1').addEventListener('click', function(){
    pintar('box1', color)
})
document.getElementById('box2').addEventListener('click', function(){
    pintar('box2', color)
})
document.getElementById('box3').addEventListener('click', function(){
    pintar('box3', color)
})
document.getElementById('box4').addEventListener('click', function(){
    pintar('box4', color)
})


