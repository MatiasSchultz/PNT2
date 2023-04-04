const condiciones = [
    {condicion:"Debe haber pelota", valor:true},
    {condicion:"El equipo A tiene 11 jugadores", valor:true},
    {condicion:"El equipo B tiene 11 jugadores", valor:false},
    {condicion:"Todos los jugadores son mayores de 18", valor:true},
    {condicion:"Las condiciones climaticas son buenas", valor:false},]
;

function seJuega(){
    let seguir = true;
    let i = 0;
    while (seguir && i<condiciones.length){
        if(!condiciones[i].valor){
            seguir = false;
            alert("No se cumple la siguiente condicion: "+condiciones[i].condicion);
        }
        else{
            i++;
        }
    }

    if(seguir){
        alert("El partido se juega");
    }else{
        alert("El partido no se juega");
    }
}
