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

//4.Return all the palindromes in an array
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
(function(pali){var output =[];var copy =[]; for (var i=0;i<pali.length;i++){ var b = pali[i];copy.push(pali[i]);var rev = b.split("");let c = rev.reverse();let d=c.join("");if(copy[i]==d){output.push(b)}}console.log(output)})(['lol','2002','mic','madam'])

//5.Return all the palindromes in an array.
//anonymous function
var palindromes = function(arr){
    var temp =[];
    var output = [];
    for(var i=0;i<arr.length;i++){
        var sp = arr[i].split("");
        var rev = sp.reverse();
        var jo = rev.join("");
        temp.push(jo);
        if(arr[i]===temp[i]){
           output.push(arr[i])  
        }
    }console.log(output)
};
pali(["oy1o","madam","adi"])

//IIFE
(function(palindeomes){var temp =[];var output = [];for(var i=0;i<arr.length;i++){var sp = arr[i].split("");var rev = sp.reverse();var jo = rev.join("");temp.push(jo);if(arr[i]===temp[i]){output.push(arr[i])}}console.log(output)})(["oy1o","madam","adi"])

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
    //anonymous function
    var duplicate = function(arr){
        var temp =[];
        for(var i=0;i<arr.length;i++){
            if(!temp.includes(arr[i])){
                temp.push(arr[i]);
            }
        }console.log(temp)
    };
    duplicate([1,2,3,1,4])


    //IIFE
    (function(arr){var temp =[];for(var i=0;i<arr.length;i++){if(!temp.includes(arr[i])){temp.push(arr[i]);}}console.log(temp)})([1,2,3,1,4])

    //8.Rotate an array by k times and return the rotated array.
    //anonymous function
    function rotateArray(nums,k) {
        if(k > nums.length) 
            k=k%nums.length;
        var result = [];
        for(var i=0; i < k; i++){
            result[i] = nums[nums.length-k+i];
        }
        var j=0;
        for(var z=k; z<nums.length; z++){
            result[z] = nums[j];
            j++;
        }
        nums = result.slice();
        console.log(nums);
    }
    rotateArray([1,2,3,4,5],7)
    
    //IIFE
    (function(nums,k){if(k > nums.length){k=k%nums.length}var result = [];for(var i=0; i < k; i++){result[i] = nums[nums.length-k+i];}var j=0;for(var z=k; z<nums.length; z++){result[z] = nums[j];j++;}nums = result.slice();console.log(nums);})([1,2,3,4,5],8)







