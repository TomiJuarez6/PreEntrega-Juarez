let edades;
let promedio;
let suma = 0;
let nEdades;

function solicitarEdades(){
    let nEdades = parseInt(prompt("Ingrese las edades a promediar"));

    for(i = 0; i < nEdades; i++){
        let edades = parseInt(prompt("Ingrese la edad: " + i));
        suma = suma + edades;
    }

    promedio = suma / nEdades;
}

solicitarEdades();

if(promedio >= 18){
    alert("El promedio de las edades supera los 18 años");
}else {
    alert("El promedio de las edades no supera los 18 años");
}