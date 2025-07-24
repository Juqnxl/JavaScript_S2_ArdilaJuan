// ###################
// ###### DIA 4 ######
// ###################

// Hamburguesas

let pedidos = [];

function mMenu(){(`=============================================
          Simulador de gasto diario          
=============================================
Seleccione una opción:

1. Registrar nuevo gasto
2. Lista de gastos
3. Actualizar gasto
4. Eliminar gasto
5. Salir
=============================================`);

let opcion = prompt(menu);
switch(opcion){
    case `1`;
    registroPedido();
    break;
    case `2`;
    listaGastos();
    break;
    case `3`;
    actulizarGasto();
    break;
    case `4`;
    eliminarGasto();
    break;
    case `5`;
    alert(`Gracias por usar la aplicacion`);
    return;
    default;
    alert(`Opcion no valida`);
}
}

// Desarrollado por : Juan ardila - C.C:1.097.496.297