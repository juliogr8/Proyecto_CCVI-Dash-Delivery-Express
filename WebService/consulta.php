<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: *");

  require("conexion.php");
  $link = returnlink();
  $destino = $_GET['destino'];
  $formato = $_GET['formato'];
  $query = "SELECT Cod_Postal FROM destino WHERE Cod_Postal = '$destino'";
  $result = pg_query($link, $query);
  if(pg_num_rows($result)>0){
    if($formato == "xml") {
      echo "<consultaprecio>
              <courrier>Dash Delivery Express</courrier>
              <destino>$destino</destino>
              <cobertura>TRUE</cobertura>
              <costo>30.00</costo>
            </consultaprecio>";
    }
    elseif ($formato == "json") {
      echo "{“consultaprecio” :
              { “courrier” : “Dash Delivery Express” ,
                “destino” : “ $destino ” ,
                “cobertura” : “TRUE” ,
                “costo” : “30.00”
              }
            }";
    }
    else {
      echo "El formato deseado no está disponible";
    }
  }
  else {
    if($formato == "xml") {
      echo "<consultaprecio>
              <courrier>Dash Delivery Express</courrier>
              <destino>$destino</destino>
              <cobertura>FALSE</cobertura>
              <costo>0</costo>
            </consultaprecio>";
    }
    elseif ($formato == "json") {
      echo "{“consultaprecio” :
        { “courrier” : “Dash Delivery Express” ,
          “destino” : “ $destino ” ,
          “cobertura” : “FALSE” ,
          “costo” : “30.00”
        }
      }";
    }
    else {
      echo "El formato deseado no está disponible";
    }
  }
  
?>