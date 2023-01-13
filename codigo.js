
      
       

     //---------------------------------------------------
          const iconos = document.querySelectorAll('.btn-outline-info');
                    
          function resaltar(){
            
            for (let i = 0; i < iconos.length; i++) {
                        
                   setTimeout(mover1 =>{
                    if(i===0){
                      iconos[i].style.color= "aqua";
                    }else{
                      iconos[i].style.color= "white";
                    }
                  },1000);
                   
                setTimeout(mover2 =>{
                  if(i===1){
                    iconos[i].style.color= "aqua";
                  }else{
                    iconos[i].style.color= "white";
                  }
                },2000);

                  setTimeout(mover2 =>{
                    if(i===2){
                      iconos[i].style.color= "aqua";
                    }else{
                      iconos[i].style.color= "white";
                    }
                  },3000);              
            }
               
          }
        
         
          const repetir=   setInterval(resaltar,4000)
          /*---------si se neceita parar la ocilacion de los iconos
          function parar(){
            clearInterval(repetir);
          }
          parar()
        */
       
//-------------------------COLAMPSE MOSTRAR----------------------------------------------------
            const cajas = document.getElementsByTagName('div');
          
      document.addEventListener("click",(e)=> {
         
        if(!e.target.matches(".collapsed")) {
            // tiene collpased cuando esta cerrado o se cierra
            
            for (let i = 0; i < cajas.length; i++) {
            
                   if (cajas[i].matches('.collapse') && cajas[i].matches('.show')) {
                   
                            cajas[i].classList.remove("show");
                            
                   }
                }
              
             
        }
          });

   //-----------------------class sonido-------------------------------
  class Sound {
     constructor(){
       this.sonido = new Audio();
      this.sonido.src="sound/pop_.ogg";
      this.sonido.muted= true;
     }
     daleplay(){
      this.sonido.muted=false;
      this.sonido.play();
     }

  }

  //---------------------ICONOS DE MENSAJES-------------------------------------        


  const numero = document.getElementById("numero");
  const wsp = document.getElementById("wsp");
  const tlgrm = document.getElementById("tlgram");

    

   numero.addEventListener("mouseenter", (event) => {
  
    let burbuja = new Sound();
    burbuja.daleplay();    
  

  wsp.style.color = "chartreuse";
  tlgrm.style.color = "#909ffd";

  wsp.classList.remove("ocultar");
  tlgrm.classList.remove("ocultar");
 
  // reset 
  setTimeout(() => {
    
    wsp.style.color ="";
    tlgrm.style.color ="";

    wsp.classList.add('ocultar');
    tlgrm.classList.add('ocultar');




  }, 5000);
},true );

