<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: *");

  require("conexion.php");
  $link = returnlink();

  //Datos URL
  $orden = $_GET['orden'];
  $tienda = $_GET['tienda'];
  $formato = $_GET['formato'];

  //Datos de Base de Datos
  $query = "SELECT id_status FROM orden WHERE no_orden = '$orden'";
  $result = pg_query($link, $query);
  $status = "";


  while ($line = pg_fetch_assoc($result)) {

    $status = $line["id_status"];
//devolver estátus en formato xml
    if($formato == "xml") {
        echo "<orden>
                <courrier>Dash Delivery Express</courrier>
                <orden>$orden</orden>
                <status>$status</status>
            </orden>
        ";
      }

//devolver estátus en formato json
      elseif ($formato == "json") {
        echo "{“orden” :
                { “courrier” : “Dash Delivery Express”,
                    “orden” : “ $orden ”,
                 “status” : “ $status ”
                }
            }";
      }
      else {
        echo "El formato deseado no está disponible";
      }

  }
?>