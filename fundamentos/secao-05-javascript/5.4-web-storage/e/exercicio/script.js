window.onload = function(){
    let elementSelect = document.querySelector('select');
    elementSelect.addEventListener('change', function(){
        document.body.style.backgroundColor = elementSelect.value;
        
        localStorage.setItem('backgroundcolor', elementSelect.value);
    });

    let elementSelectText = document.querySelectorAll('select')[1];
    let text = document.getElementById('text');
    elementSelectText.addEventListener('change', function(){
        text.style.color = elementSelectText.value;

        localStorage.setItem('textcolor', elementSelectText.value);
    });

    let fontSize1 = document.getElementById('font');
    fontSize1.addEventListener('change', function(){
        text.style.fontSize = `${fontSize1.value}px`;

        localStorage.setItem('size-font', `${fontSize1.value}px`);
    })

    let recuperaCorPag = localStorage.getItem('backgroundcolor');
    document.body.style.backgroundColor = recuperaCorPag;
    
    let recuperaCorText = localStorage.getItem('textcolor');
    text.style.color = recuperaCorText;
    
    let recuperaTamanhoFont = localStorage.getItem('size-font');
    text.style.fontSize = recuperaTamanhoFont;
}