
      
       

     //---------------------------------------------------
          const iconos = document.querySelectorAll('.btn-outline-info');
                    
          function resaltar(){
            
            for (let i = 0; i < iconos.length; i++) {
                        
                   setTimeout(mover1 =>{
                    if(i===0){
                      iconos[i].style.color= "black";
                    }else{
                      iconos[i].style.color= "white";
                    }
                  },1000);
                   
                setTimeout(mover2 =>{
                  if(i===1){
                    iconos[i].style.color= "black";
                  }else{
                    iconos[i].style.color= "white";
                  }
                },2000);

                  setTimeout(mover2 =>{
                    if(i===2){
                      iconos[i].style.color= "black";
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
       
//-----------------------------------------------------------------------------
            const cajas = document.getElementsByTagName('div');
            const mapa = document.getElementById('mapa')
           // console.log(mapita)
      document.addEventListener("click",(e)=> {
         
        if(!e.target.matches(".collapsed")) {
            // tiene collpased cuando esta cerrado o se cierra
            
            for (let i = 0; i < cajas.length; i++) {
            
                   if (cajas[i].matches('.collapse') && cajas[i].matches('.show')) {
                   
                            cajas[i].classList.remove("show");
                            
                   }
                }
              
             
        }

      // visualizar el mapa
      if(e.target.matches("#mapa")) {         
        console.log('se mostrara el  mapa')
        const mapita =document.getElementsByClassName('mapa')[0];

         mapita.classList.add('mostrar');

      }

          });