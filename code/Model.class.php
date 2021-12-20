<?php
namespace Urx\Code;

class Model{
    private $Name;
    
    // --- --- --- --- ---
    function __construct($name){
        $this->Name = $name;
    }
    
    // --- --- --- --- ---
    function __get($name){
        switch($name){
            case 'Data' : return $this->getMyData();
        }
    }
    
    // --- --- --- --- ---
    private function getMyData(){
        //$Path = __ROOT__ . '/mvc/models/' . $this->Name . '.php';
        //if(!file_exists($Path)) return;
        //var_dump($Path);
        //require_once($Path);
        
        $Cl = '\Urx\Mvc\Models\\' . ucfirst($this->Name);
        //var_dump($Cl);
        
        return (new $Cl)->getData();
    }
    
}

?>