<?php
namespace Urx\Mvc\Models;

class Main2 extends Common {
    private $Config;
    
    function getData(){
        $Path = __ROOT__ . '/config.json';
        if(!file_exists($Path)) die('Не найден файл конфигурации.');
        $this->Config = json_decode(file_get_contents($Path),true);
        
        return array_replace_recursive(parent::getData(),[
            'error' => $this->Config ? null : 'Не определена конфигураця системы',
            'pass' => md5($this->Config['login']['pass']),
            'login' => md5($this->Config['login']),
            'prompt' => $this->Config['prompt'],
            
            'init' => $this->Config['init'],
            'container' => $this->Config['container'],
            'data' => $this->getMyData()
        ]);
    }
    
    // --- --- --- --- ---
    private function getMyData(){
        $Arr = [];
        $Data = $this->Config['data'];
        
        $_label = function($code) use($Data){
            $Pos = strpos($code,':');
            $Code = $Pos ? substr($code,0,$Pos) : $code;
            
            $Label = null;
            array_map(function($value) use($Code,&$Label){
                array_map(function($value) use($Code,&$Label){
                    if($Code !== $value[0]) return;
                    $Label = $value[1];
                    return;
                },$value);
            },$Data);
            
            return $Label;
        };
        
        array_map(function($code,$value) use(&$Arr,$_label){
            $Arr[$code] = [
                'label' => $_label($code),
                'data' => $value
            ];
        },array_keys($Data),array_values($Data));
        
        return $Arr;
    }

}
?>