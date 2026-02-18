var btn = document.getElementById('btn'),
 aside = document.getElementById('aside'),

contador=0;

function cambio()
{ if(contador==0)
    { 
        
    aside.classList.add('red')
    contador=1;
    }

    else{aside.classList.remove('red')
    contador=0;
}
    
    }



btn.addEventListener('BUSCAR',cambio,true)

console.log("haciendo pruebas");