<?php
    namespace Urx\Code;
    require_once('../../../code/common.php');
    
    //echo (new Controller(new Template('main'),new Model('main')))->Data;
    echo (new Controller(new Template('main2'),new Model('main2')))->Data;

/*<html>
    <head>  
        <link rel="stylesheet" type="text/css" href="css/main.css"/>        
    </head>
    <body>
        <div id="video-bg">
            <video _width="100%" height="100%" preload="auto" autoplay="autoplay" loop="loop" muted="muted" _poster="pic/Depositphotos_196368660_XL.jpg">
                <source src="pic/back4.mp4" type="video/mp4"></source>
                <source src="pic/back4.webm" type="video/webm"></source>
            </video>
        </div>
    </body>
</html>*/
?>