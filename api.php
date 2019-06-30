<?php 

include_once 'employees.php';

if((isset($_GET['funcion']) && !empty($_GET['funcion'])) || (isset($_POST['funcion']) && !empty($_POST['funcion'])) ) {
    if(isset($_GET['funcion']) && !empty($_GET['funcion'])){
        $funcion = $_GET['funcion'];
    }else{
        $funcion = $_POST['funcion'];
    }
    

    switch($funcion) {
        case "getEmployees": 
            
            echo Api::getEmployees();
            break;
        case "search":
            $dato = $_GET["buscar"];
            echo Api::search($dato);
            break;
        case "delete":
            $id=$_GET['id'];
            echo Api::deleteEmployee($id);
            break;
        case "update":
            $id = $_POST['id'];
            $name = $_POST['name'];
            $last_name = $_POST['last_name'];
            $email = $_POST['email'];
            $phone = $_POST['phone'];
            echo Api::updateEmployee($id,$name,$last_name,$email,$phone);
            break;
        case "newEmployee":
            $name = $_POST['name'];
            $last_name = $_POST['last_name'];
            $email = $_POST['email'];
            $phone = $_POST['phone'];
            echo Api::newEmployee($name,$last_name,$email,$phone);
            break;
    }
}

class Api{

    public static function getEmployees(){
        $employee = new Employee();
        $empleados = array();
        $empleados['employees'] = array();

        $response = $employee->getAllEmployees();
        
        if($response->num_rows){
            foreach ($response as $empleado) {
                array_push($empleados['employees'],array('id'=>$empleado['id'],'nombre'=>$empleado['name'],'apellido'=>$empleado['last_name'],'email'=>$empleado['email'],'telefono'=>$empleado['phone']));
            }
        }
        return json_encode($empleados);
    }
    
    public static function search($buscar){
        $employee = new Employee();
        $busqueda= array();
        $response = $employee->search($buscar);
        if($response->num_rows){
            foreach ($response as $empleado) {
                array_push($busqueda,array('id'=>$empleado['id'],'nombre'=>$empleado['name'],'apellido'=>$empleado['last_name'],'email'=>$empleado['email'],'telefono'=>$empleado['phone']));
            }
        }
        //var_dump($busqueda);
        return json_encode($busqueda);
    }

    public static function deleteEmployee($id){
        $employee = new Employee();
        $employee->deleteEmp($id);
        return self::getEmployees();
    }

    public static function updateEmployee($id,$name,$last_name,$email,$phone){
        $employee =  new Employee();
        $employee->updateEmp($id,$name,$last_name,$email,$phone);
        return self::getEmployees();
    }

    public static function newEmployee($name,$last_name,$email,$phone){
        $employee =  new Employee();
        $employee->newEmp($name,$last_name,$email,$phone);
        return self::getEmployees();
    }
}


?>