var tablaCliente = localStorage.getItem("tablaClienteStorage");
tablaCliente = JSON.parse(tablaCliente);
if (tablaCliente == null) {
    var tablaCliente = [];
}


var idForm = localStorage.getItem("idForm");
idForm = JSON.parse(idForm)
if (idForm == null) {
    var idForm = 0;
}
cargarPagina();

function guardar() {
    console.log("Presiono guardar");
    var objCliente = JSON.stringify({
        idCliente: (idForm > 0) ? idForm : (tablaCliente.length + 1),
        nombre: document.getElementById("txtNombre").value,
        apellido: document.getElementById("txtApellido").value,
        telefono: document.getElementById("txtTelefono").value,
        direccion: document.getElementById("txtDireccion").value,
        correo: document.getElementById("txtCorreoE").value,
        estado: document.getElementById("cboEstado").value
    });
    console.log(objCliente);

    //Editar campos dentro del formulario
    if (idForm > 0) {
        for (const i in tablaCliente) {
            var varCliente = JSON.parse(tablaCliente[i]);
            if (varCliente.idCliente == idForm) {
                tablaCliente[i] = objCliente;
                break;
            }
        }
    } else {
        //Nuevo clientes
        tablaCliente.push(objCliente);
    }

    localStorage.setItem("tablaClienteStorage", JSON.stringify(tablaCliente));
    window.location.replace("form-reg-mens.html");
}

function cargarPagina() {
    if (idForm > 0) {
        //sacar datos de  la fila de la tabla y ponerlo en el formulario
        for (const i in tablaCliente) {
            var varCliente = JSON.parse(tablaCliente[i]);
            if (varCliente.idCliente == idForm) {
                document.getElementById("txtIdClientes").value = varCliente.idCliente;
                document.getElementById("txtNombre").value = varCliente.nombre;
                document.getElementById("txtApellido").value = varCliente.apellido;
                document.getElementById("txtTelefono").value = varCliente.telefono;
                document.getElementById("txtDireccion").value = varCliente.direccion;
                document.getElementById("txtCorreoE").value = varCliente.correo;
                document.getElementById("cboEstado").value = varCliente.estado;
                break;
            }
        }
    }
}



/// guardar los cambios
function guardar2() {
    //////
    Swal.fire({
        title: 'Guardar',
        html: '¿Desea Guardar los cambios?',
        showDenyButton: true,
        confirmButtonText: 'Si',
        denyButtonText: 'No',
    }).then((result) => {
        if (result.isConfirmed) {
            console.log("Presiono guardar");
            var objCliente = JSON.stringify({
                idCliente: (idForm > 0) ? idForm : (tablaCliente.length + 1),
                nombre: document.getElementById("txtNombre").value,
                apellido: document.getElementById("txtApellido").value,
                telefono: document.getElementById("txtTelefono").value,
                direccion: document.getElementById("txtDireccion").value,
                correo: document.getElementById("txtCorreoE").value,
                estado: document.getElementById("cboEstado").value
            });
            console.log(objCliente);

            //Editar campos dentro del formulario
            if (idForm > 0) {
                for (const i in tablaCliente) {
                    var varCliente = JSON.parse(tablaCliente[i]);
                    if (varCliente.idCliente == idForm) {
                        tablaCliente[i] = objCliente;
                        break;
                    }
                }
            } else {
                //Nuevo clientes
                tablaCliente.push(objCliente);
            }

            localStorage.setItem("tablaClienteStorage", JSON.stringify(tablaCliente));
            Swal.fire('Cabios guardados', '', 'success').then(
                (result) => {
                    window.location.replace("form-reg-mens.html");
                }
            );        
            
        } else if (result.isDenied) {
            Swal.fire('Cabios no guardados', '', 'info');
            
        }
    });

    ////
}