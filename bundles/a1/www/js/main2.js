import Login from './lib/Login.class.js';
import TextMenu from './lib/TextMenu.class.js';
import Text from './lib/Text.class.js';
import Cursor from './lib/Cursor.class.js';

const Menus = {};

document.Containers = {};
$('.cm-top-container').each(function(){
    const Code = $(this).attr('id');
    const Type = $(this).data('type');
    
    switch(Type){
        case 'login'   : document.Containers[Code] = new Login($(this)); break;
        case 'menu'    : document.Containers[Code] = new TextMenu($(this)); break;
        case 'list'    : document.Containers[Code] = new TextMenu($(this)); break;
        case 'denided' : document.Containers[Code] = new Text($(this)); break;
        case 'video'   : document.Containers[Code] = new Text($(this)); break;
        case 'pic'     : document.Containers[Code] = new Text($(this)); break;
    }
});

//console.log(document.Containers);

$('.cm-top-container').each(function(){
    $('.cm-item[data-tag]').each(function(){
        const Tag = $(this).data('tag');
        if(document.Containers[Tag]) $(this).data('data',document.Containers[Tag]);
    });
});

document.Containers.login.show();

new Cursor({
    esc  : function(){
        const Code = $('.cm-top-container.cm-active').attr('id');
        document.Containers[Code].esc();
    },
    up   : function(){
        const Code = $('.cm-top-container.cm-active').attr('id');
        document.Containers[Code].up();
    },
    down : function(){
        const Code = $('.cm-top-container.cm-active').attr('id');
        document.Containers[Code].down();
    },
    enter : function(){
        const Code = $('.cm-top-container.cm-active').attr('id');
        document.Containers[Code].enter();
    },
});

$(document).ready(function() {
    var imageLoaded = function() {
        $('#white').fadeOut(500);
    };
    $('#background').each(function() {
        var tmpImg = new Image() ;
        tmpImg.onload = imageLoaded ;
        tmpImg.src = $(this).data('src') ;
    }) ;
}) ;