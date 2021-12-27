export default class Login {
    
    // --- --- --- --- ---
    constructor(tag){
        this.$Tag = tag;
        this.$Input = this.$Tag.find('input');
        this.NextContainer;
    }
    
    // --- --- --- --- ---
    show(){
        const Instance = this;
        
        Instance.$Tag.addClass('cm-active');
        setTimeout(()=>{
            Instance.$Input.focus().val('').on('keydown',function(e){
                if(e.keyCode !=13) return;
                const Val = $.md5($(this).val());
                const Pass = $(this).data('pass');
                console.log(Val,Pass);
                if(Val !== Pass) Instance.error();
                else alert(111);
            });
        },500);
    }

    // --- --- --- --- ---
    hide(){
        Instance.$Tag.removeClass('cm-active');
    }
    
    error(){
        const Val = this.$Input.val();
        this.$Input.addClass('cm-error').val('Неверно').blur();//.off('keydown');
        setTimeout(()=>{
            this.$Input.removeClass('cm-error').val(Val).focus();//.off('keydown');
        },1000);
    }
}