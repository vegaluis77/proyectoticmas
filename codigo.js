     const cajas = document.getElementsByTagName('button');


      document.addEventListener("click",(e)=> {
         
        if(e.target.matches(".collapsed")) {
            // tiene collpased cuando esta cerrado o se cierra
           
            for (let i = 0; i < cajas.length; i++) {
                if (cajas[i].matches('.collapsed')) {
                  
                  cajas[i].classList.add("ver");
                  cajas[i].classList.remove("fuera");
                }
              }
        }else {
            // no tiene collpased cuando se abre
            for (let i = 0; i < cajas.length; i++) {
                if (cajas[i].matches('.collapsed')) {
                 
                    cajas[i].classList.add("fuera");
                    cajas[i].classList.remove("ver");
                }
              }
        }

       

      });