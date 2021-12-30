export default class Text {
    
    // --- --- --- --- ---
    constructor(tag){
        const Instance = this;
        
        this.$Tag = tag;
        this.Prev;
        
        this.$Tag.find('.cm-button-back').on('click',() => Instance.esc()).end();
    }
    
    // --- --- --- --- ---
    show(prev){
        if(prev) this.Prev = prev;
        this.$Tag.addClass('cm-active');
    }

    // --- --- --- --- ---
    hide(){
        this.$Tag.removeClass('cm-active');
    }
    
    // --- --- --- --- ---
    enter(){}

    // --- --- --- --- ---
    esc(){
        this.hide();
        this.Prev.show();
    }
    
    // --- --- --- --- ---
    up(){}
    
    // --- --- --- --- ---
    down(){}
}