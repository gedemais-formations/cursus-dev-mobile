import('./main');



/***************Button play and pause ********************************/
let btnPause = document.querySelector('.pause');
let btnPlay;
let btnAction = true;


btnPause.addEventListener('click', ()=>{

    
    if(btnPause.innerText == 'Pause'){
     btnAction = false;
    clearTimeout(action);
                 btnPause.innerText='Play';
                btnPause.classList.remove("pause");
                btnPause.classList.add("play");
    
   

    }else{ 
            action = setInterval(async function tick() {
            draw_background();
            update_model();
            update_view();
            cycle_live = document.querySelector('.cycle_live').innerText=`le nombre de cycle de vie est de : ${livecycle++}`
          }, 100);
        
        btnPause.innerText='Pause';
        btnPause.classList.remove("play");
        btnPause.classList.add("pause");
       
    }
    
})


/***************Button Recommence  reload ********************************/

let load = document.querySelector('.load').addEventListener('click',()=>{location.reload()})



/*******************  Button dead or alive  ********************************* */

function Change_Color(btn_color){

  let btn;

  if(btn_color == 'dead'){

    btn = document.getElementById(btn_color);
    console.log(btn.value);

    dead_color = btn.value;

  }else if(btn_color == 'alive') {


    btn = document.getElementById(btn_color);
    alive_color = btn.value;


  }

}


/*********************** Cycle de vie ******************************** */




