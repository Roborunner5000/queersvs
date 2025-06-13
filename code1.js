gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.localVariables = [];
gdjs.Game_32OverCode.GDEndScreenSubHeaderObjects1= [];
gdjs.Game_32OverCode.GDEndScreenSubHeaderObjects2= [];
gdjs.Game_32OverCode.GDEndScreenRetryTextObjects1= [];
gdjs.Game_32OverCode.GDEndScreenRetryTextObjects2= [];
gdjs.Game_32OverCode.GDRetryButtonObjects1= [];
gdjs.Game_32OverCode.GDRetryButtonObjects2= [];
gdjs.Game_32OverCode.GDPRIDE_9595POWERObjects1= [];
gdjs.Game_32OverCode.GDPRIDE_9595POWERObjects2= [];
gdjs.Game_32OverCode.GDDonateObjects1= [];
gdjs.Game_32OverCode.GDDonateObjects2= [];
gdjs.Game_32OverCode.GDPlayerObjects1= [];
gdjs.Game_32OverCode.GDPlayerObjects2= [];
gdjs.Game_32OverCode.GDPlayer2Objects1= [];
gdjs.Game_32OverCode.GDPlayer2Objects2= [];


gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("RetryButton"), gdjs.Game_32OverCode.GDRetryButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32OverCode.GDRetryButtonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDRetryButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32OverCode.GDRetryButtonObjects1[k] = gdjs.Game_32OverCode.GDRetryButtonObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDRetryButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16940852);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EndScreenSubHeader"), gdjs.Game_32OverCode.GDEndScreenSubHeaderObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDEndScreenSubHeaderObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDEndScreenSubHeaderObjects1[i].getBehavior("Text").setText("You got " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("Score")) + " points!");
}
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDEndScreenSubHeaderObjects1.length = 0;
gdjs.Game_32OverCode.GDEndScreenSubHeaderObjects2.length = 0;
gdjs.Game_32OverCode.GDEndScreenRetryTextObjects1.length = 0;
gdjs.Game_32OverCode.GDEndScreenRetryTextObjects2.length = 0;
gdjs.Game_32OverCode.GDRetryButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDRetryButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDPRIDE_9595POWERObjects1.length = 0;
gdjs.Game_32OverCode.GDPRIDE_9595POWERObjects2.length = 0;
gdjs.Game_32OverCode.GDDonateObjects1.length = 0;
gdjs.Game_32OverCode.GDDonateObjects2.length = 0;
gdjs.Game_32OverCode.GDPlayerObjects1.length = 0;
gdjs.Game_32OverCode.GDPlayerObjects2.length = 0;
gdjs.Game_32OverCode.GDPlayer2Objects1.length = 0;
gdjs.Game_32OverCode.GDPlayer2Objects2.length = 0;

gdjs.Game_32OverCode.eventsList0(runtimeScene);
gdjs.Game_32OverCode.GDEndScreenSubHeaderObjects1.length = 0;
gdjs.Game_32OverCode.GDEndScreenSubHeaderObjects2.length = 0;
gdjs.Game_32OverCode.GDEndScreenRetryTextObjects1.length = 0;
gdjs.Game_32OverCode.GDEndScreenRetryTextObjects2.length = 0;
gdjs.Game_32OverCode.GDRetryButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDRetryButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDPRIDE_9595POWERObjects1.length = 0;
gdjs.Game_32OverCode.GDPRIDE_9595POWERObjects2.length = 0;
gdjs.Game_32OverCode.GDDonateObjects1.length = 0;
gdjs.Game_32OverCode.GDDonateObjects2.length = 0;
gdjs.Game_32OverCode.GDPlayerObjects1.length = 0;
gdjs.Game_32OverCode.GDPlayerObjects2.length = 0;
gdjs.Game_32OverCode.GDPlayer2Objects1.length = 0;
gdjs.Game_32OverCode.GDPlayer2Objects2.length = 0;


return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
