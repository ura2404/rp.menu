//import MenuContainer from './lib/Menu.class.js';

export default class Video {
    
    // --- --- --- --- ---
    constructor(tag){
        const Instance = this;
        
        this.$Tag = tag;
        this.PrevContainer;
        
        this.$BackButton = this.$Tag.find('.back-button');
        
        console.log(this.$BackButton);

        this.$BackButton.on('click',function(e){
            console.log('click');
            if(Instance.PrevContainer){
                Instance.hide();
                Instance.PrevContainer.show();
            }
        });
        
    }
    
    // --- --- --- --- ---
    show(){
        const Instance = this;
        
        this.$Tag.addClass('cm-active');
        setTimeout(() => {
            $('body').on('keydown',function(e){
                if(e.keyCode === 27) Instance.$BackButton.trigger('click');
            });
        },500);
        
        return this;
    }

    // --- --- --- --- ---
    hide(){
        $('body').off('keydown');
        this.$Tag.removeClass('cm-active');
        return this;
    }
    
    // --- --- --- --- ---
    prevContainer(container){
        this.PrevContainer = container;
        return this;
    }
    
}