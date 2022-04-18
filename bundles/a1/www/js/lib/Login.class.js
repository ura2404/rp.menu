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
        
        this.$Input.addClass('cm-error').val('Неверно').blur();
        setTimeout(() => {
            if(Val === 'Неверно') this.$Input.removeClass('cm-error').focus();
            else this.$Input.removeClass('cm-error').val(Val).focus();
        },1000);
    }
    
    // --- --- --- --- ---
    enter(){
        const Instance = this;
        
        const Val = this.$Input.val();
        const Pass = this.$Input.data('pass');
        console.log(Val);
        
        if($.md5(Val) !== Pass) Instance.error();
        else {
            Instance.hide();
            document.Containers.main.show(/*Instance*/);
            this.ajax(Val);
        }
    }
    
    // --- --- --- --- ---
    esc(){}
    // --- --- --- --- ---
    up(){}
    // --- --- --- --- ---
    down(){}

    // --- --- --- --- ---
    ajax(val){
        $.ajax({
           url: this.$Tag.data('url'),
           dataType : 'json',
           method : 'GET',
           /*data : {
               code : val
           }*/
        });
    }
    
}