<?php
define('__ROOT__',realpath(dirname(__FILE__).'/..'));

spl_autoload_register(function($className){
    if(class_exists($className)) return;
    
    $Arr = explode('\\',$className);
    array_shift($Arr);
    $Cl = array_pop($Arr);
    
    if(count($Arr) == 2 && $Arr[1] == 'Models') $Ext = '.model.php';
    else $Ext = '.class.php';
    
    $Path = __ROOT__ . '/' . strtolower(implode('/',$Arr)) . '/' . $Cl . $Ext;

    if(!file_exists($Path)) return;
    require_once($Path);
    
},true,true);
?>