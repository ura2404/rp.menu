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
        Instance.$Input.focus().val('').on('keydown',function(e){
            if(e.keyCode !=13) return;
            Instance.enter();
            
            const Val = $.md5($(this).val());
            const Pass = $(this).data('pass');
            
            if(Val !== Pass) Instance.error();
            else Instance.enter();
        });
        
        setTimeout(() => Instance.$Input.focus(),300);
    }

    // --- --- --- --- ---
    hide(){
        const Instance = this;
        
        Instance.$Tag.removeClass('cm-active');
        console.log('Containers',document.Containers);
    }
    
    // --- --- --- --- ---
    error(){
        const Val = this.$Input.val();
        this.$Input.addClass('cm-error').val('Неверно').blur();//.off('keydown');
        setTimeout(()=>{
            this.$Input.removeClass('cm-error').val(Val).focus();//.off('keydown');
        },1000);
    }
    
    // --- --- --- --- ---
    enter(){
        const Instance = this;
        
        const Val = $.md5(this.$Input.val());
        const Pass = this.$Input.data('pass');
        
        if(Val !== Pass) Instance.error();
        else {
            Instance.hide();
            document.Containers.main.show(Instance);
        }
    }
}