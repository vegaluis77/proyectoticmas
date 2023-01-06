
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