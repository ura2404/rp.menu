//import Menu from './lib/Menu.class.js';
import Login from './Login.class.js';
import Menu1 from './Menu1.class.js';
import Email from './Email.class.js';
import Journal from './Journal.class.js';
import Docs from './Docs.class.js';
import System from './System.class.js';
import Video from './Video.class.js';

const LoginContainer = new Login($('#login'));
const Menu1Container = new Menu1($('#menu1'));
const EmailContainer = new Email($('#email'));
const JournalContainer = new Journal($('#journal'));
const DocsContainer = new Docs($('#docs'));
const SystemContainer = new System($('#system'));

const ConnectContainer = new Video($('#connect'));
const EngineContainer = new Video($('#engine'));

//const ScrollMenu1 = new Menu($('#menu1').find('.data'));

const $Login = $('#login');
const $Menu1 = $('#menu1');
const $TopContainers = $('.top-container');

$(document).ready(() => {
    EmailContainer.prevContainer(Menu1Container);
    JournalContainer.prevContainer(Menu1Container);
    DocsContainer.prevContainer(Menu1Container);
    SystemContainer.prevContainer(Menu1Container).nextContainers({
        'connect' : () => ConnectContainer.show(),
        'engine' : () => EngineContainer.show(),
    });
    ConnectContainer.prevContainer(SystemContainer);
    EngineContainer.prevContainer(SystemContainer);
    
    LoginContainer.nextContainer(Menu1Container).show();
    Menu1Container.prevContainer(LoginContainer).nextContainers({
        'email'   : () => EmailContainer.show(),
        'journal' : () => JournalContainer.show(),
        'docs'    : () => DocsContainer.show(),
        'system'  : () => SystemContainer.show()
    });
    
});