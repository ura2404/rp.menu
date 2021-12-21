<?php
namespace Urx\Mvc\Models;

class Main extends Common {
    function getData(){
        return array_replace_recursive(parent::getData(),[
            'pass' => $this->getMyPass(),
            'container' => $this->getMyContainer(),
            'emails' => $this->getMyEmails(),
            'journal' => $this->getMyJournal(),
        ]);
    }
    
    // --- --- --- --- ---
    private function getMyPass(){
        $Path = __ROOT__ . '/config.json';
        if(!file_exists($Path)) return;
        
        $Pass = json_decode(file_get_contents($Path),true)['pass'];
        return md5($Pass);
    }
    
    // --- --- --- --- ---
    private function getMyContainer(){
        $Path = __ROOT__ . '/config.json';
        if(!file_exists($Path)) return;
        return json_decode(file_get_contents($Path),true)['container'];
    }
    
    // --- --- --- --- ---
    private function getMyEmails(){
        $Path = __ROOT__ . '/config.json';
        if(!file_exists($Path)) return;
        return json_decode(file_get_contents($Path),true)['emails'];
    }
    
    // --- --- --- --- ---
    private function getMyJournal(){
        $Path = __ROOT__ . '/config.json';
        if(!file_exists($Path)) return;
        return json_decode(file_get_contents($Path),true)['journal'];
    }
}

?>