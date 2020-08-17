// Your code here
function saturdayFun(activity="roller-skate"){
  return `This Saturday, I want to ${activity}!`;
}
// const mondayWork=function(activity="go to the office"){
//   return `This Monday, I will ${activity}`;
// }
let mondayWork =function (activity="go to the office") {
    return `This Monday, I will ${act}.`;
}
function wrapAdjective(symbol="*") {
   return function(adj="special") {
     return `You are ${symbol}${adj}${symbol}!`;
   }
 }
