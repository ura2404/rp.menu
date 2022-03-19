export default class TextMenu {
    
    // --- --- --- --- ---
    constructor(tag){
        const Instance = this;
        
        this.$Tag = tag;
        this.Prev;
        this.$Items = this.$Tag.find('.cm-item');
        this.Index = 0;
        this.Count = this.$Items.length;
        
        this.$Tag.find('.cm-button-back').on('click',() => Instance.esc()).end()
        .find('.cm-button-up').on('click',() => Instance.up()).end()
        .find('.cm-button-down').on('click',() => Instance.down());
        
        this.$Items
        .on('click',function(){
            const Index = $(this).index();
            Instance.$Items.eq(Instance.Index).removeClass('cm-active').end().eq(Index).addClass('cm-active');
            Instance.Index = Index;
        })
        .on('dblclick',function(){
            Instance.enter();
        });
    }
    
    // --- --- --- --- ---
    show(prev){
        if(prev) this.Prev = prev;
        else(this.$Tag.find('.cm-button-back')).hide();
        
        this.$Tag.addClass('cm-active');
        
        // выделить первый пункт
        /*
        this.Index = 0;
        this.$Items.removeClass('cm-active').eq(this.Index).addClass('cm-active');
        this.$Tag.find('.cm-items').css('top',0);
        */
    }

    // --- --- --- --- ---
    hide(){
        this.$Tag.removeClass('cm-active');
    }
    
    // --- --- --- --- ---
    enter(){
        const Instance = this;
        //const Tag = this.$Items.eq(this.Index).data('tag');
        //console.log(Tag,this.$Items.eq(this.Index).data('data'));
        
        const Data = this.$Items.eq(this.Index).data('data');
        const Label = this.$Items.eq(this.Index).text();
        if(Data){
            Instance.hide();
            Data.show(Instance,Label);
        }
    }

    // --- --- --- --- ---
    esc(){
        if(!this.Prev) return;
        this.hide();
        this.Prev.show();
    }
    
    // --- --- --- --- ---
    up(){
        if(this.Index === 0) return;
        
        this.$Items.eq(this.Index--).removeClass('cm-active').end().eq(this.Index).addClass('cm-active');
        
        const $Container = this.$Tag.find('.cm-box > div');
        const $Scroll = this.$Tag.find('.cm-items');
        const $Item = this.$Items.eq(this.Index);
        
        //const ContainerTop = $Container.position().top;
        const ScrollTop = $Scroll.position().top;
        const ItemTop = $Item.position().top;
        //console.log(this.Index,ContainerTop,$Container.height(),ScrollTop,ItemTop);
        
        const Top = ScrollTop * -1;
        //if(ItemTop < Top) $Scroll.css('top',(ItemTop - Top));
        if(ItemTop < Top) $Scroll.css('top',-1 * ItemTop);
    }
    
    // --- --- --- --- ---
    down(){
        if(this.Index === this.Count-1) return;
        
        this.$Items.eq(this.Index++).removeClass('cm-active').end().eq(this.Index).addClass('cm-active');
        
        const $Container = this.$Tag.find('.cm-box > div');
        const $Scroll = this.$Tag.find('.cm-items');
        const $Item = this.$Items.eq(this.Index);
        
        //const ContainerTop = $Container.position().top;
        const ContainerHeight = $Container.height();
        //const ScrollTop = $Scroll.position().top;
        const ItemTop = $Item.position().top;
        const ItemHeight = $Item.height();
        //console.log(this.Index,ContainerTop,$Container.height(),ScrollTop,ItemTop);
        
        //const Top = ScrollTop * -1;
        if((ItemTop+ItemHeight) > ContainerHeight) $Scroll.css('top',-1 * (ItemTop + ItemHeight - ContainerHeight));
    }
}