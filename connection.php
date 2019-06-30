<?php

class Connection{
    private $host;
    private $database;
    private $user;
    private $password;
    private $connection;


    public function __construct(){
        $this->host='localhost';
        $this->database='emkode';
        $this->user='root';
        $this->passord='';
        $this->connection;
    }

    public function connect(){
        $connection = mysqli_connect($this->host,$this->user,$this->password,$this->database);

        if(!$connection){
            echo "Error, no se pudo establecer una conexión";
            exit;
        }
        return $connection;
    }
    public function disconnect(){
        $connection->close();
    }
}

?>