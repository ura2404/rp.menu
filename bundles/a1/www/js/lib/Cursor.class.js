export default class Cursor {
    
    // --- --- --- --- ---
    constructor(config){
        this.Esc = config.esc || function(){};
        this.Up = config.up || function(){};
        this.Down = config.down || function(){};
        this.Enter = config.enter || function(){};
        
        this.init();
    }

    // --- --- --- --- ---
    init(){
        const Instance = this;        
        $('body').on('keydown',function(e){
            let Time = 0;
            const Now = Date.now();
            if((Now - Time) < 150) return;
            Time = Now;
            
            if(e.keyCode === 38) Instance.Up();
            else if(e.keyCode === 40) Instance.Down();
            else if(e.keyCode === 27) Instance.Esc();
            else if(e.keyCode === 13) Instance.Enter();
        });

    }

}