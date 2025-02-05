let balloon = document.getElementById('balloon');
        let size = 200;
        let colors = ['red', 'green', 'blue'];
        let colorIndex = 0;
        function updateBalloon() {
    balloon.style.width = size + 'px';
    balloon.style.height = size + 'px';
    balloon.style.backgroundColor = colors[colorIndex];
    balloon.style.borderRadius = '50%';
}
        

        balloon.onclick = function() {
            if (size + 10 <= 420) {
                size += 10;
                colorIndex = (colorIndex + 1) % colors.length; 
            } else {
               
                size = 200;
                colorIndex = 0; 
            }
            updateBalloon();
        }
        balloon.onmouseleave = function() {
            if (size > 200) {
                size -= 5;
            }
            updateBalloon();
        }

        updateBalloon();