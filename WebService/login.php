<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  require("conexion.php");
  $link=returnlink();
  
  $result = pg_query($link,"SELECT username FROM Admin WHERE username = '$params->user' and(password = '$params->password'");

  class Result {}

  $response = new Result();
  $response->resultado = '';

  header('Content-Type: application/json');
  echo json_encode($response);