/**
 * Created by Laptop on 02/04/2016.
 */




function CalcCalories(){
    var answer = getvals();
    answer = Math.ceil(answer);

    displayResult(answer);
}
function getvals(){
    var gender = document.getElementById("genderChoice").value;
    var heightMeasure  =$("input[name=HeightName]:checked","#ControlGroup0").val();
    var weightMeasure =$("input[name=WeightName]:checked","#ControlGroup1").val();
    var ActiveLev = $("input[name=radios]:checked","#ControlGroup2").val();
    var age = $("#age").val();
    var height = $("#tallness").val();
    var weight = $("#heavy").val();
    var newBMR;
    var ActLevels = ActiveLevels(ActiveLev);
    var TrueWeight;
    var TrueHeight;


    if(weightMeasure==="lbs"){
        TrueWeight = conversionLbsToKg(weight);
    }
    else{
        TrueWeight = weight;
    }
    if(heightMeasure==="in"){
        TrueHeight = conversionInToCm(height);
    }
    else{
        TrueHeight =height;
    }


    if(gender === "male") {
        newBMR = calculateMale(TrueWeight,TrueHeight,age);
    }

    else{
        newBMR = calculateFemale(TrueWeight,TrueHeight,age);
    }

    return newBMR * ActLevels;

}



function conversionInToCm(h){
    var result;
    result = h/2.5399986284007406636000416559775;
    return result;
}
function conversionLbsToKg(w){
    var result;
    result = w/2.20462;


    return result;
}
function calculateMale(w_m,h_m,a_m){

    var BMR = 66 + (13.7 *w_m)+(5 * h_m) - (6.8*a_m);
    return BMR;
}
function calculateFemale(w_f,h_f,a_f){

    var BMR = 665 + (9.6 * w_f)+(1.8 * h_f) - (4.7 * a_f);

    return BMR;
}

function ActiveLevels(AL){
    var x;
    switch(AL){

        case "Sedentary": x = 1.2;
            break;
        case "LActive": x = 1.375;
            break;
        case "MActive": x = 1.55;
            break;
        case "VActive": x = 1.725;
            break;
        case "EActive": x = 1.9;
            break;
        default: x = 1;
            break;

    }

    return x;

}
function displayResult(answer){
    var newPu = $("#Submit");
    newPu.empty();
    newPu.append(answer +" Kcal") ;

    $("#submission").popup("open");

}
/*
 English BMR Formula Women: BMR = 655 + ( 4.35 x weight in pounds ) + ( 4.7 x height in inches ) - ( 4.7 x age in years )

 Men: BMR = 66 + ( 6.23 x weight in pounds ) + ( 12.7 x height in inches ) - ( 6.8 x age in year )
 Metric BMR Formula Women: BMR = 655 + ( 9.6 x weight in kilos ) + ( 1.8 x height in cm ) - ( 4.7 x age in years)
 Men: BMR = 66 + ( 13.7 x weight in kilos ) + ( 5 x height in cm ) - ( 6.8 x age in years )

 1. If you are sedentary (little or no exercise): Calorie-Calculation = BMR x 1.2

 2. If you are lightly active (light exercise/sports 1-3 days/week): Calorie-Calculation = BMR x 1.375

 3. If you are moderately active (moderate exercise/sports 3-5 days/week): Calorie-Calculation = BMR x 1.55

 4.If you are very active (hard exercise/sports 6-7 days a week): Calorie-Calculation = BMR x 1.725

 5.If you are extra active (very hard exercise/sports & physical job or 2x training): Calorie-Calculation = BMR x 1.9

 */








var exCopyer =[];

var ex = [];

//var newList = $('#exList').innerHTML;
function exercise(name,sets ,reps,ident) {
    this.name=name;
    this.sets= sets;
    this.reps=reps;
    this.ident=ident;
};




//Bicep
//get the biceps curls values and puts it into variables

function PullUps(){
    var sets = document.getElementById("sets-10").value;
    var reps = document.getElementById("reps-10").value;
    var name = "Pull Ups";
    var Identifier = "ex1";

    setObject(sets,reps,name,Identifier);

}

function getForearmCurls(){
    var sets = document.getElementById("slider-9").value;
    var reps = document.getElementById("slider-r9").value;
    var name = "Forearm Curl";
    var Identifier = "ex1";

    setObject(sets,reps,name,Identifier);

}
function getSeatedAltCurls(){
    var sets = document.getElementById("slider-6").value;
    var reps = document.getElementById("slider-7").value;
    var name = "Seated Alternate Bicep Curls";
    var Identifier = "ex1";

    setObject(sets,reps,name,Identifier);

}function getDetailsAltHammerCurls(){
    var sets = document.getElementById("sets-4").value;
    var reps = document.getElementById("reps-4").value;
    var name = "Alternate Concentrated Bicep Curls";
    var Identifier = "ex1";

    setObject(sets,reps,name,Identifier);

}function getConBarBiCurls(){
    var sets = document.getElementById("sets-8").value;
    var reps = document.getElementById("reps-8").value;
    var name = "Concentrated Barbell Bicep Curls";
    var Identifier = "ex1";

    setObject(sets,reps,name,Identifier);

}
function getBarBellCurls(){
    var sets = document.getElementById("sets-5").value;
    var reps = document.getElementById("reps-5").value;
    var name = "BarBell Bicep Curls";
    var Identifier = "ex1";

    setObject(sets,reps,name,Identifier);

}

function getDetailsBiCurls(){
    var sets =  $("#sets-0").val();
    var reps =  document.getElementById("reps-0").value;
    var name = "Bicep Curls";
    var Identifier = "ex0";

    setObject(sets,reps,name,Identifier);
}
function getDetailsHammerCurls(){
    var sets = document.getElementById("sets-1").value;
    var reps = document.getElementById("reps-1").value;
    var name = "Alternate Hammer Curls";
    var Identifier = "ex1";

    setObject(sets,reps,name,Identifier);

}
// tri-cep exercises
function getTriDips(){

    var sets = document.getElementById("triset-0").value;
    var reps = document.getElementById("trirep-0").value;
    var name = "Tricep Dips";
    var Identifier = "tex0";
    setObject(sets,reps,name,Identifier);
}

function LyBarTriExt(){

    var sets = document.getElementById("triset-1").value;
    var reps = document.getElementById("trirep-1").value;
    var name = "Lying Barbell Tricep Extension ";
    var Identifier = "tex0";
    setObject(sets,reps,name,Identifier);
}
function InBarTriEx(){

    var sets = document.getElementById("triset-2").value;
    var reps = document.getElementById("trirep-2").value;
    var name = "Seated Barbell Tricep Extension";
    var Identifier = "tex0";
    setObject(sets,reps,name,Identifier);
}
function ClsGrpBnchPrs(){

    var sets = document.getElementById("triset-3").value;
    var reps = document.getElementById("trirep-3").value;
    var name = "Close-Grip Barbell Bench Press";
    var Identifier = "tex0";
    setObject(sets,reps,name,Identifier);
}
function triBumKick(){

    var sets = document.getElementById("triset-4").value;
    var reps = document.getElementById("trirep-4").value;
    var name = "Tricep Dumbbell Kickback";
    var Identifier = "tex0";
    setObject(sets,reps,name,Identifier);
}
function SeatTriPrs(){

    var sets = document.getElementById("triset-5").value;
    var reps = document.getElementById("trirep-5").value;
    var name = "Seated Tricep Press";
    var Identifier = "tex0";
    setObject(sets,reps,name,Identifier);
}
function OneArmTriEx(){

    var sets = document.getElementById("triset-6").value;
    var reps = document.getElementById("trirep-6").value;
    var name = "Seated Dumbbell One-arm Tricep Extension";
    var Identifier = "tex0";
    setObject(sets,reps,name,Identifier);
}
function LyTriExt(){

    var sets = document.getElementById("triset-7").value;
    var reps = document.getElementById("trirep-7").value;
    var name = "Lying Tricep Extension";
    var Identifier = "tex0";
    setObject(sets,reps,name,Identifier);
}
function WeightedDips(){

    var sets = document.getElementById("triset-8").value;
    var reps = document.getElementById("trirep-8").value;
    var name = "Weighted Dips";
    var Identifier = "tex0";
    setObject(sets,reps,name,Identifier);
}
function overHeadExt(){

    var sets = document.getElementById("triset-9").value;
    var reps = document.getElementById("trirep-9").value;
    var name = "Over head Cable Extension";
    var Identifier = "tex0";
    setObject(sets,reps,name,Identifier);
}

//shoulders

function ShoulderPressAnt(){

    var sets = document.getElementById("ShSet-0").value;
    var reps = document.getElementById("ShRep-0").value;
    var name = "Shoulder Press Posterior";
    var Identifier = "tex0";
    setObject(sets,reps,name,Identifier);
}
function ShoulderPressPos(){

    var sets = document.getElementById("ShSet-7").value;
    var reps = document.getElementById("ShRep-7").value;
    var name = "Shoulder Press Anterior";
    var Identifier = "tex0";
    setObject(sets,reps,name,Identifier);
}
function StanShoPres(){

    var sets = document.getElementById("ShSet-8").value;
    var reps = document.getElementById("ShRep-8").value;
    var name = "Standing Shoulder Press";
    var Identifier = "tex0";
    setObject(sets,reps,name,Identifier);
}
function SideRaise(){

    var sets = document.getElementById("ShSet-1").value;
    var reps = document.getElementById("ShRep-1").value;
    var name = "Side Dumbbell Raise";
    var Identifier = "tex0";
    setObject(sets,reps,name,Identifier);
}
function FrontRaise(){

    var sets = document.getElementById("ShSet-2").value;
    var reps = document.getElementById("ShRep-2").value;
    var name = "Front Dumbbell Raise";
    var Identifier = "tex0";
    setObject(sets,reps,name,Identifier);
}
function Arnold(){

    var sets = document.getElementById("ShSet-3").value;
    var reps = document.getElementById("ShRep-3").value;
    var name = "Arnold Dumbbell Press";
    var Identifier = "tex0";
    setObject(sets,reps,name,Identifier);
}
function StanPullDeltRais(){

    var sets = document.getElementById("ShSet-4").value;
    var reps = document.getElementById("ShRep-4").value;
    var name = "Standing Pulley Deltoid Raise";
    var Identifier = "tex0";
    setObject(sets,reps,name,Identifier);
}
function UpBarRow(){

    var sets = document.getElementById("ShSet-5").value;
    var reps = document.getElementById("ShRep-5").value;
    var name = "Upright Barrel Row";
    var Identifier = "tex0";
    setObject(sets,reps,name,Identifier);
}
function RevMachFly(){

    var sets = document.getElementById("ShSet-6").value;
    var reps = document.getElementById("ShRep-6").value;
    var name = "Reverse Machine Fly";
    var Identifier = "tex0";
    setObject(sets,reps,name,Identifier);
}
function Shrugs(){

    var sets = document.getElementById("ShSet-9").value;
    var reps = document.getElementById("ShRep-9").value;
    var name = "Shoulder Press Anterior";
    var Identifier = "tex0";
    setObject(sets,reps,name,Identifier);
}
/*   Back   */
function WdGpPlUps() {

    var sets = document.getElementById("BaSet-0").value;
    var reps = document.getElementById("BaRep-0").value;
    var name = "Wide Grip Pull Ups";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}
function OneArDmbllRow() {

    var sets = document.getElementById("BaSet-1").value;
    var reps = document.getElementById("BaRep-1").value;
    var name = "One Arm Dumbbell Row";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}function PendRow() {

    var sets = document.getElementById("BaSet-2").value;
    var reps = document.getElementById("BaRep-2").value;
    var name = "Pendlay Rown";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}function TbrRow() {

    var sets = document.getElementById("BaSet-3").value;
    var reps = document.getElementById("BaRep-3").value;
    var name = "T-Bar Row";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}function SeatCblRows() {

    var sets = document.getElementById("BaSet-4").value;
    var reps = document.getElementById("BaRep-4").value;
    var name = "Seated Cable Rows";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}function LatPllDwn() {

    var sets = document.getElementById("BaSet-5").value;
    var reps = document.getElementById("BaRep-5").value;
    var name = "Lateral PullDowns";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}function StrLgBw() {

    var sets = document.getElementById("BaSet-6").value;
    var reps = document.getElementById("BaRep-6").value;
    var name = "Straight Legged Bow";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}
function StdBckExt() {

    var sets = document.getElementById("BaSet-7").value;
    var reps = document.getElementById("BaRep-7").value;
    var name = "Seated Back Extension";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}
//Abdominals
function SitUps() {

    var sets = document.getElementById("AbbSet-0").value;
    var reps = document.getElementById("AbbRep-0").value;
    var name = "Sit-Ups";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}
function IclnKneUps() {

    var sets = document.getElementById("AbbSet-1").value;
    var reps = document.getElementById("AbbRep-1").value;
    var name = "Incline Knee Ups";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}
function HngnKneUps(){
    var sets = document.getElementById("AbbSet-2").value;
    var reps = document.getElementById("AbbRep-2").value;
    var name = "Hanging Knee Ups";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}
function CblCrnch() {

    var sets = document.getElementById("AbbSet-3").value;
    var reps = document.getElementById("AbbRep-3").value;
    var name = "Cable Crunch";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}
function RssanTwst() {

    var sets = document.getElementById("AbbSet-4").value;
    var reps = document.getElementById("AbbRep-4").value;
    var name = "Russian Twist";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}

//Legs
function BrbllSqts() {

    var sets = document.getElementById("LegSets-0").value;
    var reps = document.getElementById("LegReps-0").value;
    var name = "Barbell Squats";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}
function BrbllFntSqts() {

    var sets = document.getElementById("LegSets-1").value;
    var reps = document.getElementById("LegReps-1").value;
    var name = "Barbell Front Squats";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}
function LgPrss() {

    var sets = document.getElementById("LegSets-2").value;
    var reps = document.getElementById("LegReps-2").value;
    var name = "Leg Press";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}
function HammiCurls() {

    var sets = document.getElementById("LegSets-3").value;
    var reps = document.getElementById("LegReps-3").value;
    var name = "HamString Curls";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}
function BrbllFrwrdLngs() {

    var sets = document.getElementById("LegSets-4").value;
    var reps = document.getElementById("LegReps-4").value;
    var name = "Barbell Forward Lunges";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}
function BrbllCalveRaises() {

    var sets = document.getElementById("LegSets-5").value;
    var reps = document.getElementById("LegReps-5").value;
    var name = "Barbell Calve Raises";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}
function StdClvRases() {

    var sets = document.getElementById("LegSets-6").value;
    var reps = document.getElementById("LegReps-6").value;
    var name = "Seated Calve Raises";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}

//Chest
function BarBllBnchPrs() {

    var sets = document.getElementById("CheSets-0").value;
    var reps = document.getElementById("CheReps-0").value;
    var name = "Barbell Press";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}
function DmbBllBnchPrs() {

    var sets = document.getElementById("CheSets-1").value;
    var reps = document.getElementById("CheReps-1").value;
    var name = "DumbBell Press";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}
function inclnBarBllBnchPrs() {

    var sets = document.getElementById("CheSets-2").value;
    var reps = document.getElementById("CheReps-2").value;
    var name = "Incline Barbell Press";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}
function inlcnDmBllPrs() {

    var sets = document.getElementById("CheSets-3").value;
    var reps = document.getElementById("CheReps-3").value;
    var name = "Incline Dumbbell Press";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}
function DeclnBarBllPrs() {

    var sets = document.getElementById("CheSets-4").value;
    var reps = document.getElementById("CheReps-4").value;
    var name = "Decline Barbell Press";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}
function FlatFlys() {

    var sets = document.getElementById("CheSets-5").value;
    var reps = document.getElementById("CheReps-5").value;
    var name = "Flat Flys";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}
function DmbBllPllOvs() {

    var sets = document.getElementById("CheSets-6").value;
    var reps = document.getElementById("CheReps-6").value;
    var name = "Dumbbell Pullover";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}
function SprtdCstDp() {

    var sets = document.getElementById("CheSets-7").value;
    var reps = document.getElementById("CheReps-7").value;
    var name = "Supported Chest Dip";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}
function StngFlys() {

    var sets = document.getElementById("CheSets-8").value;
    var reps = document.getElementById("CheReps-8").value;
    var name = "Sitting Flys";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}
function CblCrosOver() {

    var sets = document.getElementById("CheSets-9").value;
    var reps = document.getElementById("CheReps-9").value;
    var name = "Cable Crossover";
    var Identifier = "tex0";
    setObject(sets, reps, name, Identifier);
}



//this sets the values of the chosen exercise to the values of the object.
function setObject(se,re,na,id){
    var CurrEx = new exercise();
    CurrEx.sets = se;
    CurrEx.reps = re;
    CurrEx.name = na;
    CurrEx.ident = id;


    AddToList(CurrEx);
}
/*for(var noMore = 0 ; noMore<ex.length;noMore++){
 if(Newex.ident ===ex[noMore].ident){
 Newex.ident += JSON.stringify(noMore+1);
 }
 }*/
function AddToList(Newex){
    var hmm = true;
//for(var fckThsSht = 0; fckThsSht<Newex.sets; fckThsSht++){

    //}

    drawList(Newex);
    updateList();
}
function calculteSets( n, exercise){



}


//$(function() {
//$( "#sortable" ).sortable();
//$( "#sortable" ).disableSelection()

//Drawing the list to screen
function drawList(New){
    var ListEx =  $('#List');

//class ="+"ui-btn"+"

    var MakeList ="";// = "<ul id = "+ "sort"+">";
//<div class = "+"ListSpacer"+">
//</div>
    for(var n = 0, j = New.sets;n<j; n++){

        MakeList += "<li class = "+"SortLi "+"><span style = "+"'position:relative; top:7px;'"+">" + New.reps + " " + New.name+" </span> <button onclick = "+"removeLi()"+" style = "+"'display:inline-block; float:right;'"+" class= "+ "'ui-btn ui-icon-delete ui-btn-icon-notext ui-corner-all ui-mini'"+" ></button> </li> ";

    }





    ListEx.append(MakeList);


    $('#List').listview('refresh');



};
function sortArray(){
    //when position change


}
function removeLi() {

    $("#List").on("click", "button", function (e) {
        e.preventDefault();
        $(this).parent().remove();
    });

}
function updateList(){
    var ulArray = $("#List li");

    var lis = document.getElementById("List").getElementsByTagName("li");
    for(var k = 0;k< ulArray.length;k++ ) {
        ulArray[k].setAttribute("id","Ex" + JSON.stringify(k));
//arrange the array so that it mimics he ul list items, using the ids because they are the same
        /*
         * so if(li[n].id == arr[n].id ){
         *set position on page to position in array
         * }
         *that is called every time a switch is made.
         * */
    }

}




function ArrUseExMain(){
    ShowStart();

    var LotsOfThings;

    LotsOfThings = getArrayExMain()

    ForwardList(LotsOfThings);








}
function ShowStart(){

    var Diver = document.getElementById("ButSta");

    Diver.innerHTML = "<a href="+"'#WorkoutStart'"+" data-rel="+"'popup'"+" class = "+"'ui-btn ui-corner-all ui-shadow'"+" id = "+"ButtStar"+" onclick = "+"''"+"> Start </a>";

}

function clean(){

    document.getElementById("List").innerHTML = "";
}


function getArrayExMain(){
    var ArLength = $("#List li").length;

    var ArrCurr = [];
    for(var f = 0; f<ArLength;f++){

        ArrCurr[f] = document.getElementById("Ex" + f).innerText;

    }
    return ArrCurr;
}

function ForwardList(A){
    var DivConnect = document.getElementById("NewList");
    DivConnect.innerHTML = "";
    var AddAdderTon = "<ul class=" + "'CheckUl'" + ">"
    for(var j = 0; j<A.length;j++){
        var curr =   j ;
        curr = curr + 'new';

        AddAdderTon +=  "<li id ="+"'"+curr+"'"+" class = "+"'CheckList'"+"> "+ A[j] +" <a class = "+"'ui-btn ui-mini ui-shadow ui-btn-inline ui-corner-all'"+" onclick = "+"nextOne("+"'"+curr+"'"+")"+">done</a> </li>";

    }
    AddAdderTon+= "</ul> ";

    DivConnect.innerHTML = AddAdderTon;
}

function printObjectCurr(Curr){

    var String = "sets : " + Curr.sets + " reps : " + Curr.reps+"." + " Exercise name: " + Curr.name;
    return String;
}

// Functions for the loading and saving of the lists in local storage :)

var ListOfExList = [];
var LoadedListArr = [];
var LoadedList = function(Id,List) {
    id = Id;
    list = List;
}

function getIdent(){
    var ID = $("#SaveName").val();

    return ID;
}
function saveCurr(){
    var save = getArrayExMain();
    var ID = getIdent();


    setList(ID ,save);
    getStored();
    $( "#savePop" ).popup( "close" );

}

function setList(id, save){

//ClearStorage();
    localStorage.setItem(id , JSON.stringify(save));

}
function getStored(){
    $("#loadedListArea").innerHTML="";
    for(var j = 0; j< localStorage.length;j++) {

        if ((localStorage.getItem(localStorage.key(j))) != null) {
            var brian = localStorage.getItem(localStorage.key(j));
            var joe = JSON.parse(brian);
            var meh = (localStorage.key(j));

            applyList(joe, meh);
        }
    }
}

function ClearStorage(){

    localStorage.clear();
}

function printObjectCurr(Curr){

    var String = "sets : " + Curr.sets + " reps : " + Curr.reps+"." + " Exercise name: " + Curr.name;
    return String;
}

style = "border-right:solid 2px #eeeeee;";
style = "border-left:solid 2px #eeeeee;";







function applyList(joe, key) {
    var ListArea = $("#loadedListArea");

    var keyVal =  "'" + key +"'";

    var div1 = "<div id = "+keyVal+" style = "+"'padding:5px;'"+"><div style = "+"'width: 250px; border-top:solid 2px #eeeeee; border-bottom:solid 2px #eeeeee;'" + " >"
       + "<h3 style = "+"' color:#9B5B07; Font-size:25px;letter-spacing:1px;border-bottom:solid 1px #0561AC;'"+" class = "+"Col"+">" + key + "</h3>";
    var v = "<div class = " + "'.InnerCol'"  + "><ul class=" + "'CheckUl'"+"> ";
    var l = "";
    for (var i = 0; i < joe.length; i++) {
        l = l + "<li style="+"'color:#9B5B07; margin-top:1px;margin-bottom:1px; border-top:solid 1px #0561AC; border-bottom:solid 1px #3B4F56; padding:3px; list-style:none;border-radius:4px; '"+" class = "+"LoadedLists"+"> " + joe[i] + " </li>";
    }
    l = l + "</ul></div>"+ "<a href =" + "#Use" + " onclick = " + "dothis("+keyVal+"); "+" id = "+'1'+keyVal+ " style = "+"border-left:solid 2px #eeeeee;"+" class = "+"'ui-btn ui-shadow ui-btn-inline ui-corner-all '"+" >Use</a>" +
        "<a onclick = " + 'DeleteNode('+keyVal+'); '+"   style = "+"border-right:solid 2px #eeeeee;" +" class = "+"'ui-btn ui-shadow ui-btn-inline ui-corner-all'"+" >Delete</a>" +
        "</div></div>";
    var allString = div1 + v + l;
    ListArea.append(allString);


}
function dothis(key){

    if ((localStorage.getItem(key) != null)) {

        var brian = localStorage.getItem(key);
        var joe = JSON.parse(brian);

        UseLoaded(joe);
    }
}

function DeleteNode(val){
    $("#" + val).remove();
    localStorage.removeItem(val);

}
function UseLoaded(A) {
    ShowStart();
    var DivConnect = document.getElementById("NewList");
    DivConnect.innerHTML = "";
    var AddAdderTon = "<ul id = "+"'LoaderList'"+" class=" + "'CheckUl'" + ">"
    for (var j = 0; j < A.length; j++) {
         var curr =   j ;
        curr = curr + 'used';
        AddAdderTon += "<li id ="+curr+" class = " + "'CheckList'" + "> " + A[j] + " <a class = " + "'ui-btn ui-shadow ui-btn-inline ui-corner-all'" + " onclick = "+"nextOne("+"'"+curr+"'"+")"+">done</a> </li>";

    }
    AddAdderTon += "</ul>";
    DivConnect.innerHTML = AddAdderTon;
   // var f ="<li><div><a href = "+"'#demo-page'"+" style ="+"'margin:0px auto;display:table; width:60%;'"+" class ="+"'ui-btn ui-corner-all ui-shadow'"+">Finish</a></div></li>";

    //$("#NewList").append(f);

}

$(document).ready(function(){
    getStored()
});
function nextOne(val){

    $("#"+val).fadeOut("normal", function() {
        $(this).remove();

        $(function(){$('ul.CheckUl:not(:has(li))').html("<li><div><a href = "+"'#demo-page'"+" style ="+"'margin:0px auto;display:table; width:60%;'"+" class ="+"'ui-btn ui-corner-all ui-shadow'"+">Finish</a></div></li>");});

    });







}


$(document).ready(function () {

$.mobile.popup.prototype.options.history = false;

$('#getMapPanel').on('click', function(){	
$( "#mapPanel" ).panel( "open" );
});

    $(function () {
        $("#tabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
        $("#tabs li").removeClass("ui-corner-top").addClass("ui-corner-left");

    });
    $("#tabs").tabs({
        collapsible: true,
        active: false
    });


    function convertHeight(inches) {
        return inches * 0.0254;
    }

    // Convert Pounds to Kilograms
    function convertWeight(pounds) {
        return pounds / 2.20462262185;
    }

    // Find Unit of Measurement
    function findUnit(unit) {
        var output;
        for (var i = 0; i < unit.length; i++) {
            if (unit[i].checked === true) {
                output = unit[i].value;
            }
        }
        return output;
    }

    // Cache Event Elements
    var calculate = $('#calculate');
    var result = $('#result');
    var control = $('#control');

    // RENDER SELECTED UNIT

    calculate.on('click', function () {
        var weight = document.getElementById('weight').value;
        var height = document.getElementById('height').value;
        var weightUnit = findUnit(document.getElementsByName('weightUnit'));
        var heightUnit = findUnit(document.getElementsByName('heightUnit'));
        var w;
        var h;

        //console.log('Weight is measured in: ' + weightUnit + '\nHeight is measured in: ' + heightUnit);

        // If measurement is in pounds, do the math.
        if (weightUnit === 'lbs') {
            w = convertWeight(weight);
            console.log(w + "kg");
        } else {
            w = weight;
            console.log(w + "kg");
        }

        // If height measurement is in inches, do the math.
        if (heightUnit === 'in') {

            h = convertHeight(height);
            console.log(h + "m");
        } else {
            h = height;
            console.log(h + "m");
        }
        var bmi = w / (h * h);
        result.text('Your BMI is: ' + (bmi).toFixed(2));

        if (bmi < 18.5) {
            $('#control').css('color', 'red');
            control.text('You are underweight');

        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            $('#control').css('color', 'green');
            control.text('You have Normal or Healthy Weight');

        }
        else if (bmi >= 25.0 && bmi <= 29.9) {
            $('#control').css('color', 'orange');
            control.text('You are Overweight');

        }
        else if (bmi >= 30) {
            $('#control').css('color', 'red');
            control.text('You are Obese');

        }

    });
});

function getMap() {
    function success(position) {

        var s = document.querySelector('#status');

        if (s.className == 'success') {

            return;
        }

        s.innerHTML = "found gyms!";
        s.className = 'success';

        var mapcanvas = document.createElement('div');
        mapcanvas.id = 'mapcanvas';
        mapcanvas.style.height = '400px';
        mapcanvas.style.width = '560px';

        document.getElementById('mapHolder').appendChild(mapcanvas);

        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeControl: false,
            navigationControlOptions: {
                style: google.maps.NavigationControlStyle.SMALL
            },
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);
        var service;
        var infowindow;
        var request = {
            location: latlng,
            radius: '500',
            query: 'Gym'
        };

        service = new google.maps.places.PlacesService(map);
        service.textSearch(request, callback);

        function callback(results, status) {
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < 10; i++) {
                    var place = results[i];
                    createMarker(results[i].geometry.location, place);
                    $(".searchResult").append('<li>' + '<h3 id="fontChange">' + place.name + '</h3>' + place.formatted_address + '</li>' + '<br>');
                    $("#mapPanel").trigger("updatelayout");
                    $("#mapPanel").panel("open");
                }
            }
        }
    }


    function error(msg) {
        var s = document.querySelector('#status');
        s.innerHTML = typeof msg == 'string' ? msg : "failed";
        s.className = 'fail';
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        error('not supported');
    }
    function createMarker(position, place) {
        var infowindow = new google.maps.InfoWindow();


        var marker = new google.maps.Marker({
            position: position,
            map: map
        });
        google.maps.event.addListener(marker, 'click', function () {
            var show = infowindow.setContent('<div id="infoWindow">' + place.name + ' =<br>' +
                 '<br>' +
                 place.formatted_address + "</div>");
            infowindow.open(map, this);


        });

    }
}

var maxLength = 20;
//rss
$(document).on("pagebeforeshow", "#RssPage", function () { // When entering pagetwo

    $(function () {

        getOnlineFeed('https://www.youtube.com/feeds/videos.xml?channel_id=UCzPpSrjtR0ByfF9uq2ZTOlw');
        $('#myListView').listview().listview('refresh');
    });
});


listEntries = function (json) {
    if (!json.responseData.feed.entries) return false;
    $('#widgetTitle').text(json.responseData.feed.title);
    var articleLength = json.responseData.feed.entries.length;
    articleLength = (articleLength > maxLength) ? maxLength : articleLength;
    for (var i = 1; i <= articleLength; i++) {

        var entry = json.responseData.feed.entries[i - 1];
        $(".RSSclass").append('<li id="list' + i + '" ><a href="#article' + i +
            '" id="openButton' + i + '"rel="external">' + entry.title + ' </a> </li>');

        $('#openButton' + i).attr('href', entry.link);

    }
    $('A[rel="external"]')
        .click(function () {
            window.open($(this).attr('href'));
            return false;
        });
    $('.RSSclass').listview('refresh');
};

var getOnlineFeed = function (url) {
    var script = document.createElement('script');
    script.setAttribute('src', 'http://ajax.googleapis.com/ajax/services/feed/load?callback=listEntries&hl=ja&output=json-in-script&q=' + encodeURIComponent(url) + '&v=1.0&num=' + maxLength);
    script.setAttribute('type', 'text/javascript');
    document.documentElement.firstChild.appendChild(script);
};
var getOfflineFeed = function (url) {
    var script = document.createElement('script');
    script.setAttribute('src', url);
    script.setAttribute('type', 'text/javascript');
    document.documentElement.firstChild.appendChild(script);
};


//Canvas digital clock placed on footer of each page
var context;
var d;
var str;
function getClock() {
    //Get Current Time
    d = new Date();
    str = prefixZero(d.getHours(), d.getMinutes(), d.getSeconds());
    //Get the Context 2D or 3D
    context = clock.getContext("2d");
    context.clearRect(0, 0, 500, 200);
    context.font = "20px Arial";
    context.fillStyle = "#e6e600";
    context.fillText(str, 80, 40);
}

function prefixZero(hour, min, sec) {
    var curTime;
    if (hour < 10)
        curTime = "0" + hour.toString();
    else
        curTime = hour.toString();

    if (min < 10)
        curTime += ":0" + min.toString();
    else
        curTime += ":" + min.toString();

    if (sec < 10)
        curTime += ":0" + sec.toString();
    else
        curTime += ":" + sec.toString();
    return curTime;
}

setInterval(getClock, 1000);
//end of clock

//Back to top of the page button
$(window).load(function(){
	 var offset = 220;
    $('.Totop').click(function() {
            $('html, body').animate({ scrollTop: $('#top').offset().top }, 'slow');
        return false;
            });
    }); 


$( document ).on( "pageinit", function() {
    $( ".photopopup" ).on({
        popupbeforeposition: function() {
            var maxHeight = $( window ).height() - 60 + "px";
            $( ".photopopup img" ).css( "max-height", maxHeight );
        }
    });
});


