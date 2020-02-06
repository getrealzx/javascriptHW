/////// 01 Positive Number ////////

// let nL=[0,2,1,-1,4,2,-4];

// var pNumber=nL.filter(function(num){
//     return num>0;
// });

// console.log(pNumber);


/////// 02 Even Number ////////

// let nL=[0,2,1,-1,4,2,-4];

// let eNumber=nL.filter(function(num){
//     return num%2==0;
// });

// console.log(eNumber);node

/////// 03 Square Number ////////

// var arr=[0,1,2,3,4,5];

// var newArr=arr.map(function(element){
//     return element*element;
// })

// console.log(newArr);

/////// 04 Cities 1 ////////
// var cities = [
//     { name: 'Los Angeles', temperature: 60.0},
//     { name: 'Atlanta', temperature: 52.0 },
//     { name: 'Detroit', temperature: 48.0 },
//     { name: 'New York', temperature: 80.0 } ];

// var coolerThan70cities=cities.filter(function(city){
//     return city.temperature<70.0;
// })

// console.log(coolerThan70cities);

/////// 05 Cities 2 ////////

// cities.forEach(function(city){
//     console.log(city.name);
// })


/////// 06 Good job! ////////
// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// people.forEach(function(name){
//     console.log("Good job "+name+"!");
// });

/////// 07 Sort an array by alph ////////

// var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];

// var sortedNames = people.sort(function (a, b) {
//       if (a < b) return -1;
//       else if (a > b) return 1;
//       return 0;
//     });
// console.log(sortedNames); 

/////// 08 Sort an array 2 by length////////

// var sortedNames = people.sort(function (a, b) {
//     if (a.length < b.length) return -1;
//     else if (a.length > b.length) return 1;
//     return 0;
//   });
// console.log(sortedNames); 

/////// 09 Sort an array 3////////

// var arr = [
//     [1, 3, 4],
//     [2, 4, 6, 8],
//     [3, 6] ];

// // arr.forEach(function(SumL){
// //     var sum=0;
// //     SumL.map(function(num){
// //     sum=sum+num;
// //     // console.log(sum);
// // return sum;})
// // console.log(sum);
// // });

// var sortedSum=arr.sort(function(a,b){
//     let sum=0;
//     if (a.map(function(num){
//         sum=sum+num;
//         return sum;
//     })>b.map(function(num){
//         sum=sum+num;
//         return sum;
//     })) return -1;

//     else if(a.map(function(num){
//         sum=sum+num;
//         return sum;
//     })<b.map(function(num){
//         sum=sum+num;
//         return sum;
//     })) return 1;
//     return 0;

// });

// console.log(sortedSum);

/////// 10. 3 times////////


// function fun(){console.log("Hello, world!")};

// function call3Times(fun) { fun(); fun(); fun(); }

// call3Times(fun);



/////// 11. n times////////

function hello(){console.log("Hello, world!")};

function callNTimes(n, txt) { 
    for(var i=0;i<n;i++)
    {
        txt();
    };
}

callNTimes(5,hello);






