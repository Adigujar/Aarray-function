// 1.Print odd numbers in an array 
//anonymous function
var a = function(odd){
    for (var i=0;i<=odd.length;i++){
        if(i%2 !==0){
            console.log(i)
        }
    }
}
a([1,2,3,4,5,6,7])

//IIFE
(function(odd){for (var i=0;i<=odd.length;i++){if(i%2 !==0){console.log(i)}}})([1,2,3,4,5,6,7])

//2.Convert all the strings to title caps in a string array.
//anonymous function
var caps = function(str){
   var temp=[];
    for (let i=0;i<str.length;i++){
        var sep =str[i].split("");
        var caps=sep[0].toUpperCase();
        sep[0]=caps;
        var cat = "";
        for (var j=0;j<sep.length;j++){
            cat += sep[j];
        }temp.push(cat);
    }console.log(temp);
}
caps(["cat","dog","fish"])

//IIFE
(function(str){var temp=[];for (let i=0;i<str.length;i++){var sep =str[i].split(""); var caps=sep[0].toUpperCase();sep[0]=caps;var cat = [""];for (var j=0;j<sep.length;j++){cat += sep[j];}temp.push(cat);}console.log(temp);
    })(["cat","dog","fish"])

//3. Sum of all numbers in an array
//anonymous function
var a = function(sum){
    var add = 0
    for (var i=0;i<sum.length;i++){
        add += sum[i]
    }console.log(add)
}
a([1,2,3,4,5,6,7])

//IIFE
(function(sum){ var add = 0;for (var j=0;j<sum.length;j++){ add += sum[j]}console.log(add)})([1,2,3,4,5,6,7])

//4. Return all the prime numbers in an array 
//anonymous function
var a = function(prime){
    var output =[2]
    for (var i=0;i<=prime.length;i++){
        if(i%2 !== 0){
            output.push(i)
        }
    }console.log(output)
}
a([1,2,3,4,5,6,7])

//IIFE
(function(prime){var output =[2]; for (var i=0;i<=prime.length;i++){if(i%2 !==0){output.push(i)}}console.log(output)})([1,2,3,4,5,6,7])

//5.Return all the palindromes in an array
//anonymous function
var a = function(pali){
    var output =[];
    var copy =[];
    for (var i=0;i<pali.length;i++){
        b = pali[i];
        copy.push(pali[i]);
        var rev = b.split("");
        let c = rev.reverse();
        let d = c.join("");
         if(copy[i]==d){
            output.push(b);
            }
    }console.log(output)
}
a(['lol','2002','mic','madam'])

//IIFE
(function(pali){var output =[];var copy =[]; for (var i=0;i<pali.length;i++)
{ var b = pali[i];copy.push(pali[i]);var rev = b.split("");let c = rev.reverse();let d=c.join("");if(copy[i]==d){output.push(b)}}console.log(output)})(['lol','2002','mic','madam'])

//6.Return median of two sorted arrays of same size
//anonymous function
var a = function(list1,list2){
    let arr_add = list1.concat(list2);
    var len = arr_add.length;
    var half= (len/2)-1;
    if(len%2 ===0){
        let even = (arr_add[half] +arr_add[half+1]) /2;
        console.log(even);
    }else{
        odd = arr_add[half +0.5];
        console.log(odd);
    }
    }
    a([10,20],[30,40])
    
    //IIFE
    (function(list1,list2){let arr_add = list1.concat(list2);var len = arr_add.length;var half= (len/2)-1;if(len%2 ===0){let even = (arr_add[half] +arr_add[half+1]) /2;console.log(even);}else{odd = arr_add[half +0.5];
        console.log(odd);
    }})([10,20],[30,40])

    //7.Remove duplicates from an array
