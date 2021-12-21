import MenuContainer from './lib/Menu.class.js';

export default class Email {
    
    // --- --- --- --- ---
    constructor(tag){
        const Instance = this;
        
        this.$Tag = tag;
        this.NextContainer;
        this.PrevContainer;
        
        this.$BackButton = this.$Tag.find('.back-button');
        
        this.ScrollMenu = new MenuContainer(this.$Tag.find('.data'),{
            up    : this.$Tag.find('.up-button'),
            down  : this.$Tag.find('.down-button'),
            back  : () => this.$BackButton.trigger('click'),
            /*click : ($item) => {
                const Tag = $item.data('tag');
                if(Instance.NextContainers[Tag]){
                    Instance.hide();
                    Instance.NextContainers[Tag]();
                }
            }*/
        });
        
        this.$BackButton.on('click',function(e){
            if(Instance.PrevContainer){
                Instance.hide();
                Instance.PrevContainer.show();
            }
        });
        
    }
    
    // --- --- --- --- ---
    show(){
        this.$Tag.addClass('cm-active');
        this.ScrollMenu.enable();
        return this;
    }

    // --- --- --- --- ---
    hide(){
        this.$Tag.removeClass('cm-active');
        this.ScrollMenu.disable();
        return this;
    }
    
    // --- --- --- --- ---
    prevContainer(container){
        this.PrevContainer = container;
        return this;
    }
    
    // --- --- --- --- ---
    nextContainer(container){
        this.NextContainer = container;
        return this;
    }
}