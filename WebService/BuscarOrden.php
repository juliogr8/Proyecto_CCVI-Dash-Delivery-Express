<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require("conexion.php");
  $link=returnlink();
  $no_orden = $_GET['no_orden'];
  $registros=pg_query($link,"SELECT o.no_orden as no_orden, o.destinatario as destinatario, d.ciudad as ciudad, o.direccion, o.costo as costo, s.id_status as id_status, s.status as stat FROM Orden o, Destino d, Status s WHERE no_orden='$no_orden' and (o.id_status = s.id_status) and (o.cod_postal = d.cod_postal);");
  if($reg=pg_fetch_assoc($registros))  
  {
    $vec[]=$reg;
  }
  $cad=json_encode($vec);
  echo $cad;
  header('Content-Type: application/json');
?>