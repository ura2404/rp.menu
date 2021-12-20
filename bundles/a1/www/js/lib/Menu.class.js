/**
 * Class Scroll
 */
 
export default class Menu {
    
    // --- --- --- --- ---
    /**
     * @param $tag - tag кнопки авторизации
     */
    constructor(tag){
        this.$Tag = tag;
        
        this.$Tag.css('position','relative');
        this.$Container = this.$Tag.children().eq(0).css('position','absolute').css('top','0px');
        
        this.$First = this.$Container.find('*:first-child');
        this.$Last =  this.$Container.find('*:last-child');
    }
    
    // --- --- --- --- ---
    up(){
        const Delta = this.$First.height();
        const Top = parseInt(this.$Container.css('top'));
        const NewTop = Top + Delta;
        //console.log(Top,Delta,NewTop);
        
        this.$Container.css('top',NewTop > 0 ? 0 : NewTop);
    }
    
    // --- --- --- --- ---
    down(){
        
        this.$Container.find('.cm-item').removeClass('cm-active')
        
        
        
        const Delta = this.$First.height();
        const Top = parseInt(this.$Container.css('top'));
        const NewTop = Top - Delta;
        
        const Bottom1 = this.$Tag.position().top + this.$Tag.height();
        const Bottom2 = this.$Container.position().top + this.$Container.height();
        
        //console.log(Top,Delta,NewTop,Bottom1,Bottom2);
        
        if(Bottom2+Delta < Bottom1) return;
        
        this.$Container.css('top',NewTop);
    }
    
}