import MenuContainer from './lib/Menu.class.js';

export default class Menu {
    
    // --- --- --- --- ---
    /**
     * @param $tag - tag кнопки авторизации
     */
    constructor(tag){
        const Instance = this;
        
        this.$Tag = tag;
        this.NextContainers;
        this.PrevContainer;
        this.$BackButton = this.$Tag.find('.back-button');
        
        this.ScrollMenu = new MenuContainer(this.$Tag.find('.data'),{
            up    : this.$Tag.find('.up-button'),
            down  : this.$Tag.find('.down-button'),
            back  : () => this.$BackButton.trigger('click'),
            click : ($item) => {
                const Tag = $item.data('tag');
                if(Instance.NextContainers[Tag]) console.log($item.data('tag'));
            }
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
    }
    
    // --- --- --- --- ---
    nextContainers(containers){
        this.NextContainers = containers;
        return this;
    }
    
    // --- --- --- --- ---
    prevContainer(container){
        this.PrevContainer = container;
        return this;
    }
}