gdjs.Start_95ScreenCode = {};
gdjs.Start_95ScreenCode.localVariables = [];
gdjs.Start_95ScreenCode.GDYellowButtonObjects1= [];
gdjs.Start_95ScreenCode.GDYellowButtonObjects2= [];
gdjs.Start_95ScreenCode.GDYellowButton2Objects1= [];
gdjs.Start_95ScreenCode.GDYellowButton2Objects2= [];
gdjs.Start_95ScreenCode.GDNewSpriteObjects1= [];
gdjs.Start_95ScreenCode.GDNewSpriteObjects2= [];
gdjs.Start_95ScreenCode.GDNewSprite2Objects1= [];
gdjs.Start_95ScreenCode.GDNewSprite2Objects2= [];
gdjs.Start_95ScreenCode.GDNewSprite3Objects1= [];
gdjs.Start_95ScreenCode.GDNewSprite3Objects2= [];
gdjs.Start_95ScreenCode.GDNewSprite4Objects1= [];
gdjs.Start_95ScreenCode.GDNewSprite4Objects2= [];
gdjs.Start_95ScreenCode.GDTutorialObjects1= [];
gdjs.Start_95ScreenCode.GDTutorialObjects2= [];
gdjs.Start_95ScreenCode.GDEndScreenSubHeaderObjects1= [];
gdjs.Start_95ScreenCode.GDEndScreenSubHeaderObjects2= [];
gdjs.Start_95ScreenCode.GDEndScreenRetryTextObjects1= [];
gdjs.Start_95ScreenCode.GDEndScreenRetryTextObjects2= [];
gdjs.Start_95ScreenCode.GDRetryButtonObjects1= [];
gdjs.Start_95ScreenCode.GDRetryButtonObjects2= [];
gdjs.Start_95ScreenCode.GDPRIDE_9595POWERObjects1= [];
gdjs.Start_95ScreenCode.GDPRIDE_9595POWERObjects2= [];
gdjs.Start_95ScreenCode.GDDonateObjects1= [];
gdjs.Start_95ScreenCode.GDDonateObjects2= [];
gdjs.Start_95ScreenCode.GDPlayerObjects1= [];
gdjs.Start_95ScreenCode.GDPlayerObjects2= [];
gdjs.Start_95ScreenCode.GDPlayer2Objects1= [];
gdjs.Start_95ScreenCode.GDPlayer2Objects2= [];


gdjs.Start_95ScreenCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("YellowButton"), gdjs.Start_95ScreenCode.GDYellowButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_95ScreenCode.GDYellowButtonObjects1.length;i<l;++i) {
    if ( gdjs.Start_95ScreenCode.GDYellowButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Start_95ScreenCode.GDYellowButtonObjects1[k] = gdjs.Start_95ScreenCode.GDYellowButtonObjects1[i];
        ++k;
    }
}
gdjs.Start_95ScreenCode.GDYellowButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "SelectCharacter", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Tutorial"), gdjs.Start_95ScreenCode.GDTutorialObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Start_95ScreenCode.GDTutorialObjects1.length;i<l;++i) {
    if ( gdjs.Start_95ScreenCode.GDTutorialObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Start_95ScreenCode.GDTutorialObjects1[k] = gdjs.Start_95ScreenCode.GDTutorialObjects1[i];
        ++k;
    }
}
gdjs.Start_95ScreenCode.GDTutorialObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16963340);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Start_95ScreenCode.GDTutorialObjects1 */
{gdjs.evtTools.camera.showLayer(runtimeScene, "Tutorial");
}{for(var i = 0, len = gdjs.Start_95ScreenCode.GDTutorialObjects1.length ;i < len;++i) {
    gdjs.Start_95ScreenCode.GDTutorialObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Tutorial"), gdjs.Start_95ScreenCode.GDTutorialObjects1);
{gdjs.evtTools.camera.hideLayer(runtimeScene, "Tutorial");
}{for(var i = 0, len = gdjs.Start_95ScreenCode.GDTutorialObjects1.length ;i < len;++i) {
    gdjs.Start_95ScreenCode.GDTutorialObjects1[i].hide(false);
}
}}

}


};

gdjs.Start_95ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Start_95ScreenCode.GDYellowButtonObjects1.length = 0;
gdjs.Start_95ScreenCode.GDYellowButtonObjects2.length = 0;
gdjs.Start_95ScreenCode.GDYellowButton2Objects1.length = 0;
gdjs.Start_95ScreenCode.GDYellowButton2Objects2.length = 0;
gdjs.Start_95ScreenCode.GDNewSpriteObjects1.length = 0;
gdjs.Start_95ScreenCode.GDNewSpriteObjects2.length = 0;
gdjs.Start_95ScreenCode.GDNewSprite2Objects1.length = 0;
gdjs.Start_95ScreenCode.GDNewSprite2Objects2.length = 0;
gdjs.Start_95ScreenCode.GDNewSprite3Objects1.length = 0;
gdjs.Start_95ScreenCode.GDNewSprite3Objects2.length = 0;
gdjs.Start_95ScreenCode.GDNewSprite4Objects1.length = 0;
gdjs.Start_95ScreenCode.GDNewSprite4Objects2.length = 0;
gdjs.Start_95ScreenCode.GDTutorialObjects1.length = 0;
gdjs.Start_95ScreenCode.GDTutorialObjects2.length = 0;
gdjs.Start_95ScreenCode.GDEndScreenSubHeaderObjects1.length = 0;
gdjs.Start_95ScreenCode.GDEndScreenSubHeaderObjects2.length = 0;
gdjs.Start_95ScreenCode.GDEndScreenRetryTextObjects1.length = 0;
gdjs.Start_95ScreenCode.GDEndScreenRetryTextObjects2.length = 0;
gdjs.Start_95ScreenCode.GDRetryButtonObjects1.length = 0;
gdjs.Start_95ScreenCode.GDRetryButtonObjects2.length = 0;
gdjs.Start_95ScreenCode.GDPRIDE_9595POWERObjects1.length = 0;
gdjs.Start_95ScreenCode.GDPRIDE_9595POWERObjects2.length = 0;
gdjs.Start_95ScreenCode.GDDonateObjects1.length = 0;
gdjs.Start_95ScreenCode.GDDonateObjects2.length = 0;
gdjs.Start_95ScreenCode.GDPlayerObjects1.length = 0;
gdjs.Start_95ScreenCode.GDPlayerObjects2.length = 0;
gdjs.Start_95ScreenCode.GDPlayer2Objects1.length = 0;
gdjs.Start_95ScreenCode.GDPlayer2Objects2.length = 0;

gdjs.Start_95ScreenCode.eventsList0(runtimeScene);
gdjs.Start_95ScreenCode.GDYellowButtonObjects1.length = 0;
gdjs.Start_95ScreenCode.GDYellowButtonObjects2.length = 0;
gdjs.Start_95ScreenCode.GDYellowButton2Objects1.length = 0;
gdjs.Start_95ScreenCode.GDYellowButton2Objects2.length = 0;
gdjs.Start_95ScreenCode.GDNewSpriteObjects1.length = 0;
gdjs.Start_95ScreenCode.GDNewSpriteObjects2.length = 0;
gdjs.Start_95ScreenCode.GDNewSprite2Objects1.length = 0;
gdjs.Start_95ScreenCode.GDNewSprite2Objects2.length = 0;
gdjs.Start_95ScreenCode.GDNewSprite3Objects1.length = 0;
gdjs.Start_95ScreenCode.GDNewSprite3Objects2.length = 0;
gdjs.Start_95ScreenCode.GDNewSprite4Objects1.length = 0;
gdjs.Start_95ScreenCode.GDNewSprite4Objects2.length = 0;
gdjs.Start_95ScreenCode.GDTutorialObjects1.length = 0;
gdjs.Start_95ScreenCode.GDTutorialObjects2.length = 0;
gdjs.Start_95ScreenCode.GDEndScreenSubHeaderObjects1.length = 0;
gdjs.Start_95ScreenCode.GDEndScreenSubHeaderObjects2.length = 0;
gdjs.Start_95ScreenCode.GDEndScreenRetryTextObjects1.length = 0;
gdjs.Start_95ScreenCode.GDEndScreenRetryTextObjects2.length = 0;
gdjs.Start_95ScreenCode.GDRetryButtonObjects1.length = 0;
gdjs.Start_95ScreenCode.GDRetryButtonObjects2.length = 0;
gdjs.Start_95ScreenCode.GDPRIDE_9595POWERObjects1.length = 0;
gdjs.Start_95ScreenCode.GDPRIDE_9595POWERObjects2.length = 0;
gdjs.Start_95ScreenCode.GDDonateObjects1.length = 0;
gdjs.Start_95ScreenCode.GDDonateObjects2.length = 0;
gdjs.Start_95ScreenCode.GDPlayerObjects1.length = 0;
gdjs.Start_95ScreenCode.GDPlayerObjects2.length = 0;
gdjs.Start_95ScreenCode.GDPlayer2Objects1.length = 0;
gdjs.Start_95ScreenCode.GDPlayer2Objects2.length = 0;


return;

}

gdjs['Start_95ScreenCode'] = gdjs.Start_95ScreenCode;
