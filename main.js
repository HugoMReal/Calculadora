function Calcular(){

let operando1 = Number(document.getElementById("operando1").value);

let operador = document.getElementById("opciones").value;

let operando2 = Number(document.getElementById("operando2").value);

// al asignarle el valor number permite hacer calculos con flotantes//

if(isNaN (operando1) || isNaN(operando2)) {   

    alert("Error: debe ingresar números como operandos");

    res = "";

    // Comienza la validación de datos, primero confirma si son números//

} else if (operador == "/" && operando2 == 0) {
    
    alert("Error: el operando 2 debe ser distinto de 0");

    res = "";

    // Luego comprueba que no se divida por cero// 

} else if (operando1 == "" || operando2 == "" ){

    alert ("Error: colocar valores a los operandos, no puede tener espacios");

    res = "";
    
    // Termina con las comprobación de input del usuario con que no haya campos vacíos// 

} else {

   res = 0;

   switch (operador) {

    case "seleccion":

        alert("Selecione una operación");

        res ="" ;

        break;

        // Si no selecciona una operación advierte error//

    case "+":

        res = operando1 + operando2;

        break;

    case "-":

        res = operando1 - operando2;

        break;

    case "*":

        res = operando1 * operando2;

        break;

    case "/":

        res = operando1/ operando2;

        break;

    default:

        alert("Error");

        break;
   }
    
}

if(res.toString().includes("e")){

    alert("La cantidad de digitos del resultado es muy grande");

    res="";

    // Para evitar notación científica convierte el resultado cadena de texto y busca la letra e//

}

if(res.toString()=="" ){

    document.getElementById("operando1").value="";

    document.getElementById("opciones").value="seleccion";

    document.getElementById("operando2").value="";

    document.getElementById("resultado").innerHTML = "Resultado";

    // Cuando ocurre un error, la calculadora vuelve al estado inicial//

} else {

      document.getElementById("resultado").innerHTML = res;

}

}

function Limpiar(){

    document.getElementById("operando1").value="";

    document.getElementById("opciones").value="seleccion";

    document.getElementById("operando2").value="";

    document.getElementById("resultado").innerHTML = "Resultado";

    // Borra los datos colocados y vuelve al estado inicial//
    
}
