import Menu from './lib/Menu.class.js';

const ScrollMenu1 = new Menu($('#menu1').find('.data'));

const $Login = $('#login');
const $Menu1 = $('#menu1');
const $TopContainers = $('.top-container');

$(document).ready(() => {
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
        /*
        const Top = $Menu1.find('.data').offset().top;
        const Delta = $Menu1.find('.data').find('div:first-child').height();
        const NewTop = Top + Delta;
        console.log(Top,Delta,NewTop);
        $Menu1.find('.data').offset({ top: NewTop > 0 ? 0 : NewTop });
        */
    }).end()
    .find('.down-button').on('click',()=>{
        ScrollMenu1.down();
        /*
        console.log('down',$Menu1.find('.data').offset(),$Menu1.find('.data').position());
        
        const Top = $Menu1.find('.data').offset().top;
        const Delta = $Menu1.find('.data').find('div:first-child').height();
        $Menu1.find('.data').offset({ top: Top - Delta});
        
        //$Menu1.find('.data').css('top',$Menu1.find('.data').position().top + 1);
        */
    });
});