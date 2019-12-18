function fizzBuzz (list1,list2){
    var sumArrayLength=list1.length + list2.length;
if (sumArrayLength%3==list1== 0 && sumArrayLength%5!==0) {
return"fizz";
}
elseif(sumArrayLength%5== 0 && sumArrayLength%3!== 0)
{
return"buzz";
}
elseif(sumArrayLength)%5== 0 && sumArrayLength%5==0) {
return "fizzbuzz";
}
elseif(sumArrayLength%3!== 0 && sumArrayLength%5!== 0)
{
    return sumArrayLength;
}
}
console.log(fizzBuzz)([1,2,3,4,5,6,7,8,9])
module.exports=fizzBuzz