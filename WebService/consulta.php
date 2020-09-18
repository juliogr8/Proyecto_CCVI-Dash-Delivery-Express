<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: *");


  require("conexion.php");
  $link = returnlink();
  
  //Datos de URL
  $destino = $_GET['destino'];
  $formato = $_GET['formato'];
  
 //Query de la base de datos 
  $query = "SELECT Cod_Postal FROM destino WHERE Cod_Postal = '$destino'";
  
  $result = pg_query($link, $query);
  
  //Si el código postal no está en la base de datos, no hay cobertura.
  if(pg_num_rows($result)>0){

  //Hay cobertura, formato XML
    if($formato == "XML") {
      echo "<consultaprecio>
              <courrier>Dash Delivery Express</courrier>
              <destino>$destino</destino>
              <cobertura>TRUE</cobertura>
              <costo>30.00</costo>
            </consultaprecio>";
    }

  //Hay Cobertura, formato JSON
    elseif ($formato == "JSON") {
      echo "{\"consultaprecio\" :
        { \"courrier\" : \"Dash Delivery Express\" ,
          \"destino\" : \"$destino\" ,
          \"cobertura\" : \"TRUE\" ,
          \"costo\" : \"30.00\"
        }
      }";
    }
    else {
      echo "El formato deseado no está disponible";
    }
  }
  else {

  //No hay cobertura, formato XML
    if($formato == "XML") {
      echo "<consultaprecio>
              <courrier>Dash Delivery Express</courrier>
              <destino>$destino</destino>
              <cobertura>FALSE</cobertura>
              <costo>0</costo>
            </consultaprecio>";
    }

  //No hay cobertura, formato json
    elseif ($formato == "JSON") {
      echo "{\"consultaprecio\" :
        { \"courrier\" : \"Dash Delivery Express\" ,
          \"destino\" : \" $destino \" ,
          \"cobertura\" : \"FALSE\" ,
          \"costo\" : \"30.00\"
        }
      }";
    }
    else {
      echo "El formato deseado no está disponible";
    }
  }
  
?>