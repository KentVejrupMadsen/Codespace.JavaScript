const fw = require('./framework.js');

let framework = new fw();


function entry()
{
    framework.initialise();
    framework.execute();
    framework.clean();
}


entry();