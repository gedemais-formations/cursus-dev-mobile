import('./main');

let btnPause = document.querySelector('.pause');
let btnPlay;
let btnAction = true;


console.log(btnPause);



btnPause.addEventListener('click', ()=>{

    
    if(btnAction == true){
     btnAction = false;
    clearTimeout(action);
    btnPlay =   btnPause.innerText='Play';
                btnPause.classList.remove("pause");
                btnPause.classList.add("play");
    
   
    console.log(btnPlay)

    }


    
    
    btnPause.addEventListener('click', ()=>{
    
    if(btnAction == false){ 
        action = setInterval(async function tick() {
            draw_background();
            update_model();
            update_view();
        }, 100);
        
        
        btnPause.innerText='Pause';
        btnPause.classList.remove("play");
        btnPause.classList.add("pause");
    }
    
    
   
})
})

btnAction = true
