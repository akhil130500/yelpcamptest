
var request=require('request');
request('https://jsonplaceholder.typicode.com/todos/1',function(error,response,body){
    if(!error&&response.statusCode==200){
        var x=JSON.parse(body);
        console.log(x);
    }
    
});