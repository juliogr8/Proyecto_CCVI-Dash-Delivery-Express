<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  require("conexion.php");
  $link=returnLink();
  

  pg_query($link,"UPDATE Orden SET id_status='$params->id_status'");
    
  
  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'Cambio de Estado actualizado.';

  header('Content-Type: application/json');
  echo json_encode($response);  