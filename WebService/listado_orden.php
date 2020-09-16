<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $link=returnlink();
  
  $registros = pg_query($link,"SELECT * FROM Orden");
  $vec=[];
  while ($reg=pg_fetch_assoc($registros))  
  {
    $vec[]=$reg;
  }
  $cad=json_encode($vec);
  echo $cad;
  header('Content-Type: application/json');