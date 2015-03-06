# Demo

---

## Normal usage

````javascript
var shorter = require('index');
shorter('http://www.baidu.com',function(data){
	console.log(data);
},function(data){
	console.log('error',data);
});

shorter('//www.baidu.com',function(data){
	console.log(data);
},function(data){
	console.log('error',data);
});

````
