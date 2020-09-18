<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: *");

  require("conexion.php");
  $link = returnlink();

  //Datos URL
  $orden = $_GET['orden'];
  $destinatario = $_GET['destinatario'];
  $destino = $_GET['destino'];
  $direccion = $_GET['direccion'];
  $tienda = $_GET['tienda'];


  //Query de Base de datos
  $query = "INSERT INTO orden values('$orden', '$destinatario', '$destino', '$direccion', '$tienda', '1', DEFAULT)";
  $result = pg_query($link, $query);
  echo "Su orden ha sido exitosa.";
?>