import Login from './lib/Login.class.js';
import TextMenu from './lib/TextMenu.class.js';
import Cursor from './lib/Cursor.class.js';

const Menus = {};

document.Containers = {};
$('.cm-top-container').each(function(){
    const Code = $(this).attr('id');
    const Type = $(this).data('type');
    
    switch(Type){
        case 'login' : document.Containers[Code] = new Login($(this)); break;
        case 'menu'  : document.Containers[Code] = new TextMenu($(this)); break;
    }
});

$('.cm-top-container').each(function(){
    $('.cm-item[data-tag]').each(function(){
        const Tag = $(this).data('tag');
        if(document.Containers[Tag]) $(this).data('data',document.Containers[Tag]);
    });
});

document.Containers.login.show();

new Cursor({
    esc  : function(){
        console.log($('.cm-top-container.cm-active').data('data'));
        $('.cm-top-container.cm-active').data('data').esc();
    },
    up   : function(){
        console.log($('.cm-top-container.cm-active').data('data'));
        $('.cm-top-container.cm-active').data('data').up();
    },
    down : function(){
        console.log($('.cm-top-container.cm-active').data('data'));
        $('.cm-top-container.cm-active').data('data').down();
    },
    enter : function(){
        console.log($('.cm-top-container.cm-active').data('data'));
        $('.cm-top-container.cm-active').data('data').enter();
    },
});