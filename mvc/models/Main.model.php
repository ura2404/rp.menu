<?php
namespace Urx\Mvc\Models;

class Main extends Common {
    function getData(){
        return array_replace_recursive(parent::getData(),[
            'pass' => $this->getMyPass()
        ]);
    }
    
    // --- --- --- --- ---
    private function getMyPass(){
        $Path = __ROOT__ . '/config.json';
        if(!file_exists($Path)) return;
        
        $Pass = json_decode(file_get_contents($Path),true)['pass'];
        return md5($Pass);
    }
}

?>