export default class Reset {
    
    // --- --- --- --- ---
    constructor(){
        this.Url = document.location.protocol+'//'+document.location.host+'/'+document.location.pathname+'/reset/check.php';
        setInterval(() => this.check(),1000);
    }
    
    // --- --- --- --- ---
    check(){
        const Instance = this;
        $.ajax({
           url: this.Url,
           dataType : 'json',
           method : 'GET',
        })
        .done(function(data){
            if(!~data.status) Instance.fail(data);
            else Instance.done(data);
        })
        .fail(function(data, textStatus, jqXHR){
            Instance.fail(data);
        });
    }
    
    // --- --- --- --- ---
    done(data){
        location.reload();
    }

    // --- --- --- --- ---
    fail(data){
        //console.log('Fail: ',data);
    }

}