window.onload = getEmployees();

function getEmployees() {
    $.ajax({
        url: "api.php",
        method: "GET",
        async: true,
        data: {
            funcion: "getEmployees"
        },
        dataType: "json",
        success: (respuesta) => {
            document.getElementById('empleados').innerHTML = '';
            respuesta.employees.forEach(element => {
                document.getElementById('empleados').innerHTML += "<tr><td>" + element['id'] + "</td><td>" 
                + element['nombre'] + "</td><td>" + element['apellido'] + "</td><td>" + element['email'] + "</td><td>" + element['telefono'] 
                + "</td><td><p class='text-primary' onclick=deleteEmployee('"+element['id']+"')>Eliminar</p><p class='text-primary' onclick=showModal('"+element['id']+"','"+element['nombre']+"','"+element['apellido']+"','"+element['email']+"','"+element['telefono']+"')>Editar</p></td></tr>";
            });
        }
    });
}

function cambio() {
    $.ajax({
        url: "api.php",
        method: "GET",
        async: true,
        data: {
            funcion: "search",
            buscar: document.getElementById('search').value
        },
        dataType: "json",
        success: (respuesta) => {
            document.getElementById('empleados').innerHTML = "";
            respuesta.forEach(element => {
                document.getElementById('empleados').innerHTML += "<tr><td>" + element['id'] + "</td><td>" 
                + element['nombre'] + "</td><td>" + element['apellido'] + "</td><td>" + element['email'] + "</td><td>" + element['telefono'] 
                + "</td><td><p class='text-primary' onclick=deleteEmployee('"+element['id']+"')>Eliminar</p><p class='text-primary' onclick=showModal('"+element['id']+"','"+element['nombre']+"','"+element['apellido']+"','"+element['email']+"','"+element['telefono']+"')>Editar</p></td></tr>";
            });
        }
    });
}

function updateEmployee(){
    $('#Modal').modal('hide');
    $.ajax({
        url: "api.php",
        method: "POST",
        async: true,
        data: {
            funcion: "update",
            id : document.getElementById('id').value,
            name : document.getElementById('name').value,
            last_name : document.getElementById('last_name').value,
            email: document.getElementById('email').value,
            phone : document.getElementById('phone').value
        },
        dataType: "json",
        success: (respuesta) => {
            document.getElementById('empleados').innerHTML = '';
            respuesta.employees.forEach(element => {
                document.getElementById('empleados').innerHTML += "<tr><td>" + element['id'] + "</td><td>" 
                + element['nombre'] + "</td><td>" + element['apellido'] + "</td><td>" + element['email'] + "</td><td>" + element['telefono'] 
                + "</td><td><p class='text-primary' onclick=deleteEmployee('"+element['id']+"')>Eliminar</p><p class='text-primary' onclick=showModal('"+element['id']+"','"+element['nombre']+"','"+element['apellido']+"','"+element['email']+"','"+element['telefono']+"')>Editar</p></td></tr>";
            });
            
        }
    });
}

function deleteEmployee(val){
    $.ajax({
        url: "api.php",
        method: "GET",
        async: true,
        data: {
            funcion: "delete",
            id:val
        },
        dataType: "json",
        success: (respuesta) => {
            document.getElementById('empleados').innerHTML = '';
            respuesta.employees.forEach(element => {
                document.getElementById('empleados').innerHTML += "<tr><td>" + element['id'] + "</td><td>" 
                + element['nombre'] + "</td><td>" + element['apellido'] + "</td><td>" + element['email'] + "</td><td>" + element['telefono'] 
                + "</td><td><p class='text-primary' onclick=deleteEmployee('"+element['id']+"')>Eliminar</p><p class='text-primary' onclick=showModal('"+element['id']+"','"+element['nombre']+"','"+element['apellido']+"','"+element['email']+"','"+element['telefono']+"')>Editar</p></td></tr>";
            });
        }
    });
}

function showModal(id,name,last_name,email,phone){
    $('#Modal').modal('show');
    document.getElementById('id').value=id;
    document.getElementById('name').value=name;
    document.getElementById('last_name').value=last_name;
    document.getElementById('email').value=email;
    document.getElementById('phone').value=phone;
    

}
function showModal2(){
    $('#Modal2').modal('show');
        document.getElementById('newName').value='';
        document.getElementById('newLast_name').value='';
        document.getElementById('newEmail').value='';
        document.getElementById('newPhone').value='';
}

function newEmployee(){
    $('#Modal2').modal('hide');
    $.ajax({
        url: "api.php",
        method: "POST",
        async: true,
        data: {
            funcion: "newEmployee",
            name : document.getElementById('newName').value,
            last_name : document.getElementById('newLast_name').value,
            email: document.getElementById('newEmail').value,
            phone : document.getElementById('newPhone').value
        },
        dataType: "json",
        success: (respuesta) => {
            document.getElementById('empleados').innerHTML = '';
            respuesta.employees.forEach(element => {
                document.getElementById('empleados').innerHTML += "<tr><td>" + element['id'] + "</td><td>" 
                + element['nombre'] + "</td><td>" + element['apellido'] + "</td><td>" + element['email'] + "</td><td>" + element['telefono'] 
                + "</td><td><p class='text-primary' onclick=deleteEmployee('"+element['id']+"')>Eliminar</p><p class='text-primary' onclick=showModal('"+element['id']+"','"+element['nombre']+"','"+element['apellido']+"','"+element['email']+"','"+element['telefono']+"')>Editar</p></td></tr>";
            });
            
        }
    });
}