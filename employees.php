<?php 

include_once 'connection.php';

class Employee extends Connection{
    
     public function getAllEmployees(){

        return $this->connect()->query('select * from employees');
        
    }

    public function search($datos){
        return $this->connect()->query('select * from employees where name like "%'.$datos.'%" or last_name like "%'.$datos.'%" or email like "%'.$datos.'%" or phone like "%'.$datos.'%"');
    }

    public function deleteEmp($id){
        $this->connect()->query('delete from employees where id = '.$id);
    }

    public function updateEmp($id,$name,$last_name,$email,$phone){
        $this->connect()->query('update employees set name ="'.$name.'", last_name ="'.$last_name.'", email = "'.$email.'", phone = "'.$phone.'" where id = '.$id);
    }

    public function newEmp($name,$last_name,$email,$phone){
        $this->connect()->query('insert into employees (id, name, last_name, email, phone) values (default, "'.$name.'","'.$last_name.'","'.$email.'","'.$phone.'")');

    }
}




?>