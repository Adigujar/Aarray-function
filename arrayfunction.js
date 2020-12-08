var request = new XMLHttpRequest();

request.open("GET",'https://restcountries.eu/rest/v2/all',true)

request.send();

request.onload= function(){

    var data =JSON.parse(this.response);
    console.log(data)

    //1.Get all the countries from Asia continent /region using Filter function 

    var aisa = data.filter(ele=> ele.region==="Asia");
    console.log(aisa)

    //2. Get all the countries with population of less than 2 lacs using Filter function

    var lacs = data.filter(ele=>ele.population<200000);
    console.log(lacs)

    //3.Print the following details name, capital, flag using forEach function 

    var ncf=data.forEach((item)=>{
        console.log("Country name is " + item.name)
        console.log("Country captial is " + item.captial)
        console.log("Country flag Url is " + item.flag)
    })



    //4.Print the total population of countries using reduce function 
    var a = []
    for(i in data){
        let b = a.push(data[i].population)   
    }
    var total = a.reduce(function(result,item){return result+item},0);
    console.log(total)

    //5.Print the country which use US Dollars as currency.

    var us = data.filter(ele=>ele.currencies[0].code==="USD");
    console.log(us)

}