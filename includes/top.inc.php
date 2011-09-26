<?php
ob_start('ob_gzhandler');
function __autoload($class_name)
{
    require_once 'classes/' . $class_name . '.class.php';
}

try {
    Lessc::ccompile('css/style.less', 'css/style.css');
} catch (Exception $ex) {
    exit('Lessc fatal error:<br />'.$ex->getMessage());
}
