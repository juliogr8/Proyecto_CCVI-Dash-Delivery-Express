<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  require("conexion.php");
  $link=returnlink();
  

  pg_query($link,"INSERT INTO Orden VALUES (DEFAULT,'$params->destinatario','$params->cod_postal', '$params->direccion',DEFAULT, DEFAULT,DEFAULT,DEFAULT)");
//$result = pg_query($link, "SELECT SUM(CURRVAL('orden_no_orden_seq')+1))"  
  
  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'Orden Exitosa!';

  header('Content-Type: application/json');
  echo json_encode($response);