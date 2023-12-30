let display = document.querySelector('input');
    let buttons = document.querySelectorAll('button');
    let buttonarr = Array.from(buttons);
    let info = "";
    buttonarr.forEach(btn =>{
        btn.addEventListener('click', (e)=>{

            if(e.target.innerHTML === 'AC'){
                info = '';
                display.value = info;
            }
            else if(e.target.innerHTML === 'DEL'){
                info = info.substring(0,info.length-1);
                display.value = info;
            }
            else if(e.target.innerHTML === '='){
                info = eval(info);
                display.value = info;
            }
            else{
                info += e.target.innerHTML;
                display.value = info;
            }
        })
    })