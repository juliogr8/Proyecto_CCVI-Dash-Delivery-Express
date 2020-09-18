<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  $user = $params->user;
  $pass = $params->password;
  
  require("conexion.php");
  $link=returnlink();
  $query = "SELECT username, pass FROM Users WHERE username ='$user' and pass='$pass'";
  $result = pg_query($link,$query);

  class Result {}
  $response = new Result();
  $response->resultado = '';  
  if(pg_num_rows($result)>0){
    $response->resultado = 'OK';
    $response->mensaje = 'Bienvenido!';
  }else{
    $response->resultado = 'Fallido';
  }
  
  echo json_encode($response);
  header('Content-Type: application/json');
 