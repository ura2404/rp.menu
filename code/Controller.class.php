<?php
namespace Urx\Code;

require_once 'Twig/autoload.php';

class Controller {
    private $Templates;    // путь к папке с шаблонами
    private $Template;
    private $Model;
    private $Twig;
    
    // --- --- --- --- ---
    function __construct(Template $template, Model $model){
        $this->Template = $template;
        $this->Model = $model;
        
        $this->Templates = __ROOT__.'/mvc/templates';
        
        $this->Twig = new \Twig\Environment($this->getMyLoader(),[
            'cache' => '/var/tmp',
            'debug' => true,
            'auto_reload' => true
        ]);
        
        //$Filter = new \Twig_SimpleFilter('rtrim', 'rtrim');
        //$this->Twig->addFilter($Filter);
        
        $Filter = new \Twig_SimpleFilter('md5', 'md5');
        $this->Twig->addFilter($Filter);
        
        $Filter = new \Twig_SimpleFilter('contains', function($value,$cond){
            return strpos($value,$cond)!==false;
        });
        $this->Twig->addFilter($Filter);
        
        $Filter = new \Twig_SimpleFilter('before', function($value,$cond){
            $Pos = strpos($value,$cond);
            return $Pos === false ? $value : substr($value,0,$Pos);
        });
        $this->Twig->addFilter($Filter);
    }
    
    // --- --- --- --- ---
    function __get($name){
        switch($name){
            case 'Data' : return $this->getMyData();
        }
    }
    
    // --- --- --- --- ---
    // --- --- --- --- ---
    // --- --- --- --- ---
    private function getMyLoader(){
        return new \Twig_Loader_Filesystem($this->Templates);
    }
    
    private function getMyData(){
        $Data = $this->Model->Data;
        //var_dump($Data);
        
        return $this->Twig->render($this->Template->Path, $Data ? $Data : []);
    }    
}

?>