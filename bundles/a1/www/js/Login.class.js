export default class Login {
    
    // --- --- --- --- ---
    /**
     * @param $tag - tag кнопки авторизации
     */
    constructor(tag){
        this.$Tag = tag;
        this.NextContainer;
    }
    
    // --- --- --- --- ---
    show(){
        const Instance = this;
        
        this.$Tag.addClass('cm-active').find('input').focus().val('').on('keydown',function(e){
            if(e.keyCode !=13) return;
            const Pass = $(this).data('pass');
            const Val = $(this).val();
            
            if($.md5(Val) != Pass){}
            else{
                Instance.hide();
                if(Instance.NextContainer) Instance.NextContainer.show();
            }
        });
        return this;
    }

    // --- --- --- --- ---
    hide(){
        this.$Tag.removeClass('cm-active').find('input').off('keydown');
        return this;
    }
    
    // --- --- --- --- ---
    nextContainer(container){
        this.NextContainer = container;
        return this;
    }
}