var args = arguments[0] || {};
var collection = Alloy.Collections.ProductCollection; //or model
//the fetch method is an async call to the remote REST API. 
collection.fetch({ 
    success : function(){
        _.each(collection.models, function(element, index, list){
            // We are looping through the returned models from the remote REST API
            // Implement your custom logic here
            //Creating a custom title here
            element.attributes.productprice = " Kun "+element.attributes.productprice;
            if(element.attributes.productimage == null){
            	element.attributes.productimage = 'https://avatars3.githubusercontent.com/u/2194271?v=3&s=460';
            }
        });
    },
    error : function(){
        Ti.API.error("hmm - this is not good!");
    }
});