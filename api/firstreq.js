var request=require('request');
request('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400',function(error,response,body){
    if(!error&&response.statusCode==200){
        var x=JSON.parse(body);
        console.log(x["results"]["sunrise"]);
    }
   
});