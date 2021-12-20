/**
 * Class Scroll
 */
 
export default class MenuContainer {
    
    // --- --- --- --- ---
    /**
     * @param $tag - tag кнопки авторизации
     */
    constructor(tag,buttons){
        const Instance = this;
        
        this.$Tag = tag;
        this.Buttons = buttons || {};
        
        this.$Tag.css('position','relative');
        this.$Container = this.$Tag.children().eq(0).css('position','absolute').css('top','0px');
        
        this.ActiveItem = 0;
        this.Count = this.$Container.find('.cm-item').length;
        
        this.$Container.find('.cm-item').eq(this.ActiveItem).addClass('cm-active');
        
        this.$First = this.$Container.find('*:first-child');
        this.$Last =  this.$Container.find('*:last-child');
        
        if(this.Buttons.up) this.Buttons.up.on('click',function(e){
            Instance.up();
        });
        if(this.Buttons.down) this.Buttons.down.on('click',function(e){
            Instance.down();
        });
    }
    
    // --- --- --- --- ---
    up(){
        if(this.ActiveItem === 0) return;
        
        this.$Container.find('.cm-item').eq(this.ActiveItem--).removeClass('cm-active').end().eq(this.ActiveItem).addClass('cm-active');
        
        const Delta = this.$First.height();
        const Top = parseInt(this.$Container.css('top'));
        const NewTop = Top + Delta;
        //console.log(Top,Delta,NewTop);
        
        this.$Container.css('top',NewTop > 0 ? 0 : NewTop);
    }
    
    // --- --- --- --- ---
    down(){
        if(this.ActiveItem === this.Count-1) return;
        
        this.$Container.find('.cm-item').eq(this.ActiveItem++).removeClass('cm-active').end().eq(this.ActiveItem).addClass('cm-active');
        
        const Delta = this.$First.height();
        const Top = parseInt(this.$Container.css('top'));
        const NewTop = Top - Delta;
        
        const Bottom1 = this.$Tag.position().top + this.$Tag.height();
        const Bottom2 = this.$Container.position().top + this.$Container.height();
        
        if(Bottom2+Delta < Bottom1) return;
        
        this.$Container.css('top',NewTop);
    }
    
    // --- --- --- --- ---
    enable(){
        const Instance = this;
        let Time = 0;
        setTimeout(() => {
            $('body').on('keydown',function(e){
                const Now = Date.now();
                if((Now - Time) < 150) return;
                Time = Now;
                
                if(e.keyCode === 38) Instance.Buttons.up.trigger('click');
                else if(e.keyCode === 40) Instance.Buttons.down.trigger('click');
                else if(e.keyCode === 27) Instance.Buttons.back();
                else if(e.keyCode === 13) Instance.Buttons.click(Instance.$Container.find('.cm-item.cm-active'));
            });
        },500);
    }
    
    // --- --- --- --- ---
    disable(){
        $('body').off('keydown');
    }
}