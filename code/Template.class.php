<?php
namespace Urx\Code;

class Template{
    private $Name;
    
    // --- --- --- --- ---
    function __construct($name){
        $this->Name = $name;
    }
    // --- --- --- --- ---
    function __get($name){
        switch($name){
            case 'Data' : return $this->getMyData();
            case 'Path' : return $this->getMyPath();
        }
    }
    
    // --- --- --- --- ---
    private function getMyPath(){
        return $this->Name . '.twig';
    }
    
    // --- --- --- --- ---
    private function getMyData(){
        
    }
}
?>