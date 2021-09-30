function saturdayFun(activity1 = "roller-skate") {
    return (`This Saturday, I want to ${activity1}!`);
}
saturdayFun();

function mondayWork(activity2 = "go to the office") {
    return (`This Monday, I will ${activity2}.`);
}

function wrapAdjective(visual = '*') {
    return function (adjective = 'special') {
        return `You are ${visual}${adjective}${visual}!`;
    }
}






// function wrapAdjective(visual = '*') {
//     return function (adjective = 'special') {
//        return You are {visual}{adjective}{visual}





















// function saturdayFun(activity = "roller-skate"){
//     return `This Saturday, I want to ${activity}!`;
// }
// saturdayFun();
// //saturdayFun() does not have an argument passed; default activity is 
// //overriden because (activity = "roller-skate") is pass as an argument
// //to the function

// const mondayWork = function(activity = 'go to the office') {
//     return `This Monday, I will ${activity}.`;
// };

// // It should return a function
// // This "inner" function should:
// // take a single parameter that should default to "special". Name it however you wish.
// // return a String of the form "You are ..." where ... should be the adjective this function received wrapped in visual flair
// // It should take as parameter a String that will be used to create visual flair
// // You may call the parameter whatever you like, but its default value should be "*"

// function wrapAdjective(visual = '*') {
//     return function (adjective = 'special') {
//         return `You are ${visual}${adjective}${visual}!`;
//     }

// }