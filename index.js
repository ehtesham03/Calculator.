// // // // Leap Year Function 
// // // var year = "2002";
// // // console.log(year)
// // // function checkYear(year) {
// // //     if (year % 4 === 0) {

// // //         console.log("This year is a leap year ")

// // //     } else {
// // //         console.log("This year is not a leap year")

// // //     }
// // // }
// // // checkYear(year);


// // // // OPERATION 
// // // let a = "15";
// // // let b = "2";    


// // // console.log(a);
// // // console.log(b);
// // // let op= "/";

// // // // function operation() {
// // //     switch (op) {
// // //         case "*":
// // //             console.log(a,a*b,b)
// // //             ;
// // //             break;
// // //         case "/":
// // //             console.log(a/b);
// // //             break;

// // //         default:  {
// // //             console.log("Invalid OPerator")
// // //         }
// // // }

// // // operation();

// // // // Calculate birthyear

// // // let birthYear = 2028;
// // // let currentYear = 2024;

// // // console.log("Your birth year is: ", birthYear);
// // // console.log("Your current year is: ", currentYear);
// // // if(birthYear < currentYear && birthYear != 0){

// // //     console.log("You are: ", currentYear - birthYear, "Old");
// // // }else {
// // //     console.log("Incorrect Birth Year");
// // // }

// // // factorial function
// // // let number = "5";

// // // function factorial(number){
// // //     if(number == 0 || number == 1){
// // //         return 1;
// // //     }else {
// // //         return number * factorial(number - 1);
// // //     }
// // // }

// // // console.log("The factorial of ", number, "is: ", factorial(number));


// // // // ///////////////

// // // var value = 7;

// // // function strictValue(value) {
// // //     if (value === 7) {
// // //         console.log("This is a String Equal value");

// // //     } else {
// // //         console.log("This is not a String Equal value");
// // //     }
// // // }
// // // strictValue(value);

// // // // Replacing 2 if with 1 

// // // let newValue = 35;

// // // function replaceValue(newValue) {
// // //     if (newValue => 50 && newValue <= 25) {
// // //         console.log("YES");
// // //     }
// // //     else {
// // //         console.log("NO");
// // //     }
// // // }

// // // replaceValue(newValue);

// // // //

// // // const prompt = require('prompt-sync')();
// // // let Value = prompt("enter value: ", value);


// // // switch (Value) {
// // //     case 'bob': {
// // //         console.log(Value ,"Marley");
// // //         break;
// // //     }
// // //     case '42': {
// // //         console.log("The Answer");
// // //         break;
// // //     }
// // //     case 1: {
// // //         console.log("There is #1");
// // //         break;
// // //     }
// // //     case 99: {
// // //         console.log("Missed by this much");
// // //         break;
// // //     }
// // //     case 7: {
// // //         console.log("at Nine");
// // //         break;
// // //     }
// // //     case "John": {
// // //         console.log(" ");
// // //     }
// // //         break;
// // //     case 156: {
// // //         console.log(" ");
// // //         break;

// // //     }
// // //     default: {
// // //         console.log("Inavlid Value");
// // //     }
// // // }

// let array = [ 0,2,4,6,8];
// console.log(array);

// let array2 = array.slice(1,4);
// console.log(array2);

let array2 = [1,3,5,7,9]
console.log(array2);
let splicearr = array2.splice(0,2,4,6,8,10);
console.log(splicearr);
// // // console.log(array2);

// // // let array3 = [1,3,5,7,10];

// // // console.log(array3);

// // // let filterarr = array3.filter(num => num % 5 === 0);

// // // console.log(filterarr);

// // // let array4 =[2,4,6,8,10]
// // // let findarray4 = array4.find(element => element > 0 );
// // // console.log(array4);
// // // console.log(findarray4);
// // // console.log(array4);


// // // let arr=['Mango', 'Zoo','Egg']
// // // let arrs= arr.toSorted();
// // // console.log(arrs)
// // // let revarr= arr.reverse();
// // // console.log(arr)
// // // let x=[24,69,93,15,8];
// // // let zx=x.sort();
// // // console.log(zx);
// // // let xy=x.sort((a, b) => a - b)
// // // console.log(x);
// // // console.log(xy);
// // // xy=x.sort(function(){return 0.5-Math.random()})
// // // console.log(xy)

// // // Uncomplete // let num=[10,2,110,780,5,12]

// // // // for (let i=num.length -1 ; i>0;i--){
// // // //     let j= Math.floor(Math.random() * (i+1));
// // // //     let k= num[i];
// // // //     num[i]=num[j];
// // // //     num[j]=k;
// // // //     ;
// // // // }


// // // creating object
// // const object = {
// //     Name: 'Ehtesham Arif',
// //     Gender: 'Male',
// //     Age: '22',
// //     Phn_no: '+92-308-436-612-7',
// //     Adress: {
// //         country: 'Pakistan',
// //         City: {
// //             cityname: 'Lahore',
// //             zipcode: '54000'
// //         }
// //     }
// // }
// // let { Name, Age, Adress:{ country, City:{ cityname, zipcode } } } = object;

// //  console.log(cityname);

// //  const user = {
// //     id: 1,
// //     name: 'Ehtehsam',
// //     age: 22,
// //     location: 'Lahore'
// //   };

// //  const{...otherdata} =user;
// //  console.log(otherdata);

// // const nestedObject = {
// //     name: 'Alice',
// //     age: 25,
// //     address: {
// //         city: 'Wonderland',
// //         zip: '12345',
// //     },
// //     hobbies: ['reading', 'coding'],
// // };

// // function flattenObjectValues(obj) {
// //     let result = [];

// //     function recurse(current) {
// //         if (typeof current === 'object' && current !== null) {
// //             const values = Object.values(current);
// //             for (const value of values) {
// //                 if (typeof value === 'object' && value !== null) {
// //                     recurse(value);
// //                 } else {
// //                     result.push(value);
// //                 }
// //             }
// //         }
// //     }

// //     recurse(obj);
// //     return result;
// // }

// // const flatvalues = flattenObjectValues(nestedObject);
// // console.log(flatvalues);

// // // map
// // const numbers = [1, 2, 3, 4, 5];
// // const squaredNumbers = numbers.map(num => num * num);

// // console.log(squaredNumbers);
// // //Object-Mapping
// // const users = [
// //     { id: 1, name: 'Alice', age: 25 },
// //     { id: 2, name: 'Bob', age: 30 },
// //     { id: 3, name: 'Charlie', age: 35 }
// // ];

// // const userID = users.map(user => user.id);

// // console.log(userID);


// //Nested-Map  to convert nested array into nested objects

// // const nestedArray = [
// //     ['key1', 'value1'],
// //     ['key2', [
// //         ['subKey1', 'subValue1'],
// //         ['subKey2', 'subValue2']
// //     ]
// // ],
// //     ['key3', 'value3']
// // ];
// // const nestedObject = {
// //     key1: 'value1',
// //     key2: {
// //       subKey1: 'subValue1',
// //       subKey2: 'subValue2'
// //     },
// //     key3: 'value3'
// //   }
// // function arrayToObject(arr) {
// //     return arr.map(item => {
// //       const [key, value] = item;
      
// //       if (Array.isArray(value)) {
// //         return { [key]: arrayToObject(value) };
// //       } else {
// //         return { [key]: value };
// //       }
// //     }).reduce((acc, curr) => ({ ...acc, ...curr }), {});
// //   }
  
// //   const nestedObjt = arrayToObject(nestedArray);
  
// //   console.log(nestedObjt);

// // const arr =  ['a1', 'a2', 'a3']

// // const words = arr.every( arr => typeof arr === "number" );

// // console.log(words);

// function myDisplayer() {
//     console.log('Geee')

 
//   }
// let myPromise = new Promise(function(myResolve, myReject) {
//     let x = 0;
  
//   // The producing code (this may take some time)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   )
