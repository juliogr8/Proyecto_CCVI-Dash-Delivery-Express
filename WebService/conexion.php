
<?php

//Conexión a servidor de base de datos.

function returnlink(){
$link = pg_connect("host=localhost dbname=Dash_Delivery_DB port=5432 user=postgres password=jujos");
return $link;
}
