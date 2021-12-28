<?php
namespace Urx\Mvc\Models;

class Main2 extends Common {
    private $Config;
    
    function getData(){
        $Path = __ROOT__ . '/config.json';
        if(!file_exists($Path)) die('Не найден файл конфигурации.');
        $this->Config = json_decode(file_get_contents($Path),true);
        
        return array_replace_recursive(parent::getData(),[
            'pass' => md5($this->Config['pass']),
            'container' => $this->Config['container'],
            'data' => $this->Config['data'],
        ]);
    }

}
?>