gdjs.SelectCharacterCode = {};
gdjs.SelectCharacterCode.localVariables = [];
gdjs.SelectCharacterCode.GDSelectQueerObjects1= [];
gdjs.SelectCharacterCode.GDSelectQueerObjects2= [];
gdjs.SelectCharacterCode.GDDaddyObjects1= [];
gdjs.SelectCharacterCode.GDDaddyObjects2= [];
gdjs.SelectCharacterCode.GDThe_9595DollObjects1= [];
gdjs.SelectCharacterCode.GDThe_9595DollObjects2= [];
gdjs.SelectCharacterCode.GDgroundObjects1= [];
gdjs.SelectCharacterCode.GDgroundObjects2= [];
gdjs.SelectCharacterCode.GDground2Objects1= [];
gdjs.SelectCharacterCode.GDground2Objects2= [];
gdjs.SelectCharacterCode.GDEndScreenSubHeaderObjects1= [];
gdjs.SelectCharacterCode.GDEndScreenSubHeaderObjects2= [];
gdjs.SelectCharacterCode.GDEndScreenRetryTextObjects1= [];
gdjs.SelectCharacterCode.GDEndScreenRetryTextObjects2= [];
gdjs.SelectCharacterCode.GDRetryButtonObjects1= [];
gdjs.SelectCharacterCode.GDRetryButtonObjects2= [];
gdjs.SelectCharacterCode.GDPRIDE_9595POWERObjects1= [];
gdjs.SelectCharacterCode.GDPRIDE_9595POWERObjects2= [];
gdjs.SelectCharacterCode.GDDonateObjects1= [];
gdjs.SelectCharacterCode.GDDonateObjects2= [];
gdjs.SelectCharacterCode.GDPlayerObjects1= [];
gdjs.SelectCharacterCode.GDPlayerObjects2= [];
gdjs.SelectCharacterCode.GDPlayer2Objects1= [];
gdjs.SelectCharacterCode.GDPlayer2Objects2= [];


gdjs.SelectCharacterCode.mapOfGDgdjs_9546SelectCharacterCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.SelectCharacterCode.GDPlayerObjects1});
gdjs.SelectCharacterCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


};gdjs.SelectCharacterCode.mapOfGDgdjs_9546SelectCharacterCode_9546GDPlayer2Objects1Objects = Hashtable.newFrom({"Player2": gdjs.SelectCharacterCode.GDPlayer2Objects1});
gdjs.SelectCharacterCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(2);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level", false);
}}

}


};gdjs.SelectCharacterCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.SelectCharacterCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SelectCharacterCode.mapOfGDgdjs_9546SelectCharacterCode_9546GDPlayerObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.SelectCharacterCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.SelectCharacterCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.SelectCharacterCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
{ //Subevents
gdjs.SelectCharacterCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player2"), gdjs.SelectCharacterCode.GDPlayer2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SelectCharacterCode.mapOfGDgdjs_9546SelectCharacterCode_9546GDPlayer2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.SelectCharacterCode.GDPlayer2Objects1 */
{for(var i = 0, len = gdjs.SelectCharacterCode.GDPlayer2Objects1.length ;i < len;++i) {
    gdjs.SelectCharacterCode.GDPlayer2Objects1[i].getBehavior("Animation").setAnimationIndex(0);
}
}
{ //Subevents
gdjs.SelectCharacterCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.SelectCharacterCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SelectCharacterCode.GDSelectQueerObjects1.length = 0;
gdjs.SelectCharacterCode.GDSelectQueerObjects2.length = 0;
gdjs.SelectCharacterCode.GDDaddyObjects1.length = 0;
gdjs.SelectCharacterCode.GDDaddyObjects2.length = 0;
gdjs.SelectCharacterCode.GDThe_9595DollObjects1.length = 0;
gdjs.SelectCharacterCode.GDThe_9595DollObjects2.length = 0;
gdjs.SelectCharacterCode.GDgroundObjects1.length = 0;
gdjs.SelectCharacterCode.GDgroundObjects2.length = 0;
gdjs.SelectCharacterCode.GDground2Objects1.length = 0;
gdjs.SelectCharacterCode.GDground2Objects2.length = 0;
gdjs.SelectCharacterCode.GDEndScreenSubHeaderObjects1.length = 0;
gdjs.SelectCharacterCode.GDEndScreenSubHeaderObjects2.length = 0;
gdjs.SelectCharacterCode.GDEndScreenRetryTextObjects1.length = 0;
gdjs.SelectCharacterCode.GDEndScreenRetryTextObjects2.length = 0;
gdjs.SelectCharacterCode.GDRetryButtonObjects1.length = 0;
gdjs.SelectCharacterCode.GDRetryButtonObjects2.length = 0;
gdjs.SelectCharacterCode.GDPRIDE_9595POWERObjects1.length = 0;
gdjs.SelectCharacterCode.GDPRIDE_9595POWERObjects2.length = 0;
gdjs.SelectCharacterCode.GDDonateObjects1.length = 0;
gdjs.SelectCharacterCode.GDDonateObjects2.length = 0;
gdjs.SelectCharacterCode.GDPlayerObjects1.length = 0;
gdjs.SelectCharacterCode.GDPlayerObjects2.length = 0;
gdjs.SelectCharacterCode.GDPlayer2Objects1.length = 0;
gdjs.SelectCharacterCode.GDPlayer2Objects2.length = 0;

gdjs.SelectCharacterCode.eventsList2(runtimeScene);
gdjs.SelectCharacterCode.GDSelectQueerObjects1.length = 0;
gdjs.SelectCharacterCode.GDSelectQueerObjects2.length = 0;
gdjs.SelectCharacterCode.GDDaddyObjects1.length = 0;
gdjs.SelectCharacterCode.GDDaddyObjects2.length = 0;
gdjs.SelectCharacterCode.GDThe_9595DollObjects1.length = 0;
gdjs.SelectCharacterCode.GDThe_9595DollObjects2.length = 0;
gdjs.SelectCharacterCode.GDgroundObjects1.length = 0;
gdjs.SelectCharacterCode.GDgroundObjects2.length = 0;
gdjs.SelectCharacterCode.GDground2Objects1.length = 0;
gdjs.SelectCharacterCode.GDground2Objects2.length = 0;
gdjs.SelectCharacterCode.GDEndScreenSubHeaderObjects1.length = 0;
gdjs.SelectCharacterCode.GDEndScreenSubHeaderObjects2.length = 0;
gdjs.SelectCharacterCode.GDEndScreenRetryTextObjects1.length = 0;
gdjs.SelectCharacterCode.GDEndScreenRetryTextObjects2.length = 0;
gdjs.SelectCharacterCode.GDRetryButtonObjects1.length = 0;
gdjs.SelectCharacterCode.GDRetryButtonObjects2.length = 0;
gdjs.SelectCharacterCode.GDPRIDE_9595POWERObjects1.length = 0;
gdjs.SelectCharacterCode.GDPRIDE_9595POWERObjects2.length = 0;
gdjs.SelectCharacterCode.GDDonateObjects1.length = 0;
gdjs.SelectCharacterCode.GDDonateObjects2.length = 0;
gdjs.SelectCharacterCode.GDPlayerObjects1.length = 0;
gdjs.SelectCharacterCode.GDPlayerObjects2.length = 0;
gdjs.SelectCharacterCode.GDPlayer2Objects1.length = 0;
gdjs.SelectCharacterCode.GDPlayer2Objects2.length = 0;


return;

}

gdjs['SelectCharacterCode'] = gdjs.SelectCharacterCode;
