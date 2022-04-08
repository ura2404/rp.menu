export default class Text {
    
    // --- --- --- --- ---
    constructor(tag){
        const Instance = this;
        
        this.$Tag = tag;
        this.Prev;
        
        this.$Tag.find('.cm-button-back').on('click',() => Instance.esc()).end();
        this.JsonMethod = this.$Tag.data('method');
        this.JsonUrl = this.$Tag.data('url');
    }
    
    // --- --- --- --- ---
    show(prev){
        if(prev) this.Prev = prev;
        this.$Tag.addClass('cm-active');
        
        if(this.JsonMethod && this.JsonUrl){
            $.ajax({
                url: this.JsonUrl,
                dataType : "json",
                method : this.JsonMethod,
            });
        }
    }

    // --- --- --- --- ---
    hide(){
        this.$Tag.removeClass('cm-active');
    }
    
    // --- --- --- --- ---
    enter(){}

    // --- --- --- --- ---
    esc(){
        if(!this.Prev) return;
        this.hide();
        this.Prev.show();
    }
    
    // --- --- --- --- ---
    up(){}
    
    // --- --- --- --- ---
    down(){}
}