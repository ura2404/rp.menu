//import Menu from './lib/Menu.class.js';
import Login from './Login.class.js';
import Menu1 from './Menu1.class.js';

const LoginContainer = new Login($('#login'));
const Menu1Container = new Menu1($('#menu1'));

//const ScrollMenu1 = new Menu($('#menu1').find('.data'));

const $Login = $('#login');
const $Menu1 = $('#menu1');
const $TopContainers = $('.top-container');

$(document).ready(() => {
    LoginContainer.nextContainer(Menu1Container).show();
    Menu1Container.prevContainer(LoginContainer).nextContainers({
        'email'     : () => alert('email'),
        'documents' : () => alert('doc')
    });
    
    /*
    setTimeout(() => $('#pass').focus(),100);
    
    $('#pass').on('keydown',function(e){
        if(e.keyCode !=13) return;
        const Pass = $(this).data('pass');
        const Val = $(this).val();
        if($.md5(Val) != Pass){}
        else{
            $TopContainers.removeClass('cm-active');
            $Login.find('input').val('');
            $Menu1.addClass('cm-active');
        }
    });
    
    $('#menu1')
    .find('.back-button').on('click',()=>{
        $TopContainers.removeClass('cm-active');
        $Login.addClass('cm-active').find('input').focus();
    }).end()
    .find('.up-button').on('click',()=>{
        ScrollMenu1.up();
    }).end()
    .find('.down-button').on('click',()=>{
        ScrollMenu1.down();
    });
    */
});