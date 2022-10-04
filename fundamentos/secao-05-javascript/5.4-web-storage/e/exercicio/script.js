window.onload = function(){

    let corMenu = document.getElementById('oi');

    let elementSelect = document.querySelector('#colorSelect');
    elementSelect.addEventListener('change', function(){
        document.body.style.backgroundColor = elementSelect.value;
        
        localStorage.setItem('backgroundcolor', elementSelect.value);
        corMenuWhite();
        corMenuBlack();
    });

    let elementSelectText = document.querySelector('#fontSelect');
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

    let lineHeight1 = document.getElementById('line');
    lineHeight1.addEventListener('change', function(){
        text.style.lineHeight = `${lineHeight1.value}%`;

        localStorage.setItem('line-height', `${lineHeight1.value}%`);
    })

    let familyFo = document.getElementById('fam');
    familyFo.addEventListener('change', function(){
        text.style.fontFamily = `${familyFo.value}`;

        localStorage.setItem('font-family', `${familyFo.value}`);
    })
     
    function corMenuBlack(){
        if (localStorage.getItem('backgroundcolor') === 'white'){
            corMenu.style.color = 'black';
        }
    }

    function corMenuWhite(){
        if (localStorage.getItem('backgroundcolor') === 'black'){
            corMenu.style.color = 'white';
        }
    }
    

    let recuperaCorPag = localStorage.getItem('backgroundcolor');
    document.body.style.backgroundColor = recuperaCorPag;
    
    let recuperaCorText = localStorage.getItem('textcolor');
    text.style.color = recuperaCorText;
    
    let recuperaTamanhoFont = localStorage.getItem('size-font');
    text.style.fontSize = recuperaTamanhoFont;

    let recuperaEspacamentoLine = localStorage.getItem('line-height');
    text.style.lineHeight = recuperaEspacamentoLine;

    let recuperaFamily = localStorage.getItem('font-family');
    text.style.fontFamily = recuperaFamily;

    
}

function colorMenu() {
    if (recuperaCorPag === 'black') {
        recuperaCorText = 'white';
    }
}
