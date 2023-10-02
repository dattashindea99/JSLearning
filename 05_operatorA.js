function squareOfWordLength(str) {
     console.log(`String is : ${str}`);
    var str1=str.length;
    console.log(`length of the string ${str1}`);

    var str2=str1**2;
    console.log(`Square of its length ${str2}`);
    
}
squareOfWordLength("javaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart")

function myDetails() {
    var str3= "I am Angular Developer";
    console.log(str3);
    var str4=str3.length;
    console.log(`Length of the String is ${str4}`);
    var str5=str3.split(" ");
    console.log(`Total number of words ${str5.length}`);
    var result=str4/str5.length;
    console.log(`division is ${result}`);
    var result1=str4*str5.length;
    console.log(`multiplication is ${result1}`);

    
}
myDetails();

