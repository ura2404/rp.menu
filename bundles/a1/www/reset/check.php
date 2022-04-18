<?php
    require_once('../../../../code/common.php');
    $File = __ROOT__.'/www/reset/reset.fl';
    
    try{
        if(file_exists($File)){
            unlink($File);
            echo json_encode([ 'code' => 1]);
        }
    }
    catch(\Throwable $e){
        echo json_encode(['code' => -1]);
    }
?>