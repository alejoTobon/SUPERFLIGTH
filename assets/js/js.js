let imgTickete = document.getElementById("ImgTickete");

imgTickete.hidden = true;

let descripcion = document.getElementById("descripcion")




let btnCalcular = document.getElementById("calcular")



let Fun_Calcular = () =>{
    let destino = document.getElementById("destinos").value;
    let cantidadPasajeros = document.getElementById("cantidadPasajeros").value;
    let pesoMaletas = document.getElementById("pesoMaletas").value;
    let silla = document.getElementById("sillas").value;
    imgTickete.hidden = false;
let precioDestino=0;
let precioMaleta=0
let precioSilla =0;
let total = 0;

if(destino == "Medellin"){
precioDestino = 100000;


}else if(destino == "Cartagena"){

    precioDestino = 120000;
}else if(destino == "Santa Marta"){

    precioDestino = 150000;
}else if(destino == "Bogota"){

    precioDestino = 80000;
}else if(destino == "Villavicencio"){

    precioDestino = 170000;
}

if(pesoMaletas > 50){
precioMaleta = pesoMaletas-50;
precioMaleta = precioMaleta*15000;

}
if(silla== "Ejecutivo"){

precioSilla = 20000;

}else if(silla== "VIP"){

    precioSilla = 40000;

}
total = precioDestino + precioMaleta+ precioSilla;
total = total * parseInt(cantidadPasajeros);

descripcion.innerHTML = `El precio al destino ${destino} es : ${precioDestino} <br>
El precio por tus maletas es : ${precioMaleta} <br>
El precio por la silla ${silla} es: ${precioSilla} <br>
El precio total a pagar es: ${total}

`

}










btnCalcular.addEventListener("click",Fun_Calcular);