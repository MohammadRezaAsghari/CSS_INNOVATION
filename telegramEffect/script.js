  
        document.getElementById('button').addEventListener('click' , function(e) {
            
            let div = document.querySelector('.btn');
            let span = document.createElement('span');
            span.className = 'bubble';
            span.style.left = `${e.offsetX}px`;
            span.style.top = `${e.offsetY}px`;
            console.log(e.offsetX);
            console.log(e.offsetY);
            
            
            

            div.appendChild(span);
            

            let spans = document.querySelectorAll('span');
            console.log(spans);
            setTimeout(function() {
                span.remove();
            },400);
            
        });
        