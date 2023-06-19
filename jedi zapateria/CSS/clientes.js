//Sirve para traer los datos del formulario
var tablaCliente = localStorage.getItem("tablaClienteStorage");
tablaCliente=JSON.parse(tablaCliente);
if(tablaCliente==null){
    var tablaCliente = [];
}
listar();
function listar(){
   console.log("Ingresando a listar");
   var dataFila = '';
   if(tablaCliente.length > 0){
       for(const i in tablaCliente){
           var varCliente=JSON.parse(tablaCliente[i]);
           dataFila += "<tr>";
           dataFila += "<td>"+varCliente.idCliente+"</td>";
           dataFila += "<td>"+varCliente.nombre+"</td>";
           dataFila += "<td>"+varCliente.apellido+"</td>";
           dataFila += "<td>"+varCliente.telefono+"</td>";
           dataFila += "<td>"+varCliente.direccion+"</td>";
           dataFila += "<td>"+varCliente.correo+"</td>";
           dataFila += "<td>"+varCliente.estado+"</td>";
           
           dataFila +="<td>"+
           "<button type='button' class='btn btn-warning' onclick='abrirForm("+varCliente.idCliente+")'>EDITAR</button>"+
           "<button type='button' class='btn btn-info' onclick='eliminarItem("+varCliente.idCliente+")'>ELIMINAR</button>"+
           "</td>";
           dataFila += "</tr>";
       }
       document.getElementById("dataCliente").innerHTML = dataFila;
   }else{
       document.getElementById("dataCliente").innerHTML = "<tr><td colspan='7'>No hay datos</td></tr>";
   }
}

//Sirve para abrir un formulario
function abrirForm(idForm){
    localStorage.setItem("idForm", JSON.stringify(idForm));
    window.location.replace("form-regis-clientes.html");
    }

function eliminarItem(idItem){
        for(const i in tablaCliente){
            var varCliente=JSON.parse(tablaCliente[i]);
            if(varCliente.idCliente == idItem){
                tablaCliente.splice(i,1);
                localStorage.setItem("tablaClienteStorage", JSON.stringify(tablaCliente));
            }
        }
        listar();
    }