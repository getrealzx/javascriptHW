// med hw 1 Madlib

// function madlib(name, subject){
//     return(name+ " favorite subject in school is " + subject + "." )

// }
// console.log(madlib("Anushak", "art"));


///////////////med hw 2 tip calculator

// var bill;
// var serviceLevel;

// function tipAmount(bill, serviceLevel){

//     var tippercent;
//     var tip;

//     switch(serviceLevel){
//         case "good":tippercent=0.2;
//         break;

//         case "fair":tippercent=0.15;        
//         break;

//         case "bad":tippercent=0.10;        
//         break;

//         default: tippercent=0;            

//     }

//     tip=bill*tippercent;

//     console.log(tip);

// }

// tipAmount(100,"bad")

/////////////med hw 3 tip calculator 2

// var bill;
// var serviceLevel;

// function totalAmount(bill, serviceLevel){

//     var tippercent;
//     var tip;

//     switch(serviceLevel){
//         case "good":tippercent=0.2;
//         break;

//         case "fair":tippercent=0.15;        
//         break;

//         case "bad":tippercent=0.10;        
//         break;

//         default: tippercent=0;            

//     }

//     var total=bill*tippercent+bill;


//     return total;

// }

// var total= totalAmount(1000,"bad")
// console.log(total);

/////////////med hw 4 print numbers

// function printNumbers(initial, end){
//     for (var count=initial; count < end+1;count++){
//     console.log(count);}
// }

// printNumbers(1,10);

/////////////med hw 5 print square

// var n;
// function printSquare(n){

    
//     var stars="";
//     for(var h=0;h<n;h++ ){
//         stars=stars+"*";
//     }

//     for(var v=0;v<n;v++){
//     console.log(stars);
//     }

// }

// printSquare(5);


/////////////med hw 6 print box




// function printBox(w,l){

    
//     var stars="";
//     for(var h=0;h<w;h++ ){
//         stars=stars+"*";
//     }

//     var spaces="";
//     for(var s=0;s<(w-2);s++){
//         spaces=spaces+ " ";
//     }

//     for(var v=0;v<l;v++){
//         if (v==0 || v==l-1){
//             console.log(stars);
//         }

//         else{
//             middle= "*" + spaces + "*";
//             console.log(middle);
//         }
    
//     }

// }

// printBox(6,4);

/////////////med hw 7 print banner

// var txt;

// function printBanner(txt){

    
//     var bars="****";
//     for(var h=0;h<txt.length;h++ ){
//         bars=bars+"*";
//     }

//     console.log(bars);
//     console.log("* "+txt+" *");
//     console.log(bars);

// }

// printBanner("Welcome to DigitalCrafts");

/////////////med hw 8 Leetspeak





function leetspeak(p){
    
    var List=p.split("");
    

    for(var i=0; i<p.length;i++){
        if (List[i].toUpperCase() == "A"){
        List[i] = "4"}

    if (List[i].toUpperCase() == "E"){
        List[i] = "3";}


    if (List[i].toUpperCase() == "G"){
        List[i] = "6"}

    if (List[i].toUpperCase() == "I"){
        List[i] = "1"}

    if (List[i].toUpperCase() == "O"){
        List[i] = "0"}

    if (List[i].toUpperCase() == "S"){
        List[i] = "5"}

    if (List[i].toUpperCase() == "T"){
        List[i] = "7"}
    

  
    }
    var p=List.join();

    console.log(List);

}



leetspeak("LeEaT");

// var u="idontknow";

// console.log(u[2].toUpperCase());

