const vowels=['a','e','i','o','u','A','E','I','O','U'];
var vowelsOnly=[];//] declaring the arrays going to store the vowels
var duplicateVowels="";

function vowelCount(str1) {
    for (const letter of str1){
if (vowels.includes(letter)) {
if(vowelsOnly.includes(letter)){// checking if vowel already exist in string
++duplicateVowels
} else {
    vowelsOnly += letter;
}

}
 }
    return(
    
    Console.log(vowelCount)

 








}