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
        Instance.$Input.focus().val('');
        setTimeout(() => Instance.$Input.focus(),300);
    }

    // --- --- --- --- ---
    hide(){
        this.$Tag.removeClass('cm-active');
    }
    
    // --- --- --- --- ---
    error(){
        const Val = this.$Input.val();
        console.log('error',Val);
        
        this.$Input.addClass('cm-error').val('Неверно').blur();
        setTimeout(()=>{
            this.$Input.removeClass('cm-error').val(Val).focus();
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
    
    // --- --- --- --- ---
    esc(){}
    // --- --- --- --- ---
    up(){}
    // --- --- --- --- ---
    down(){}
}