var textos=[
    "Lionel Messi VS Australia",
    "Camino a la perdición",
    "Paseando en bicicleta",
    "Vias de el tren"
   ]
   
   
   function cargarfoto(img, txt){
   document.getElementById("galeria").src="https://picsum.photos/id/"+img+"/400/400";
   document.getElementById("mitexto").innerHTML=textos[txt];
   }
