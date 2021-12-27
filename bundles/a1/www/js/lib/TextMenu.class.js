export default class TextMenu {
    
    // --- --- --- --- ---
    constructor(tag){
        this.$Tag = tag;
    }
    
    // --- --- --- --- ---
    show(){
        const Instance = this;
        
        Instance.$Tag.addClass('cm-active');
    }

    // --- --- --- --- ---
    hide(){
        Instance.$Tag.removeClass('cm-active');
    }
    
}