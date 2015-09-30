var args = arguments[0] || {};
var parentController = args.parentController;

function PostProduct(){
	
	var drupalurl = "http://mdam2.my.eal.dk/drupal/api/node";
	var myNewItem = {
		type: "products",
		title: $.prod_title.value,
		body: { und: [{
		value: $.prod_desc.value
		}]
		},
		field_productimage: encodeURIComponent($.prod_imgurl),
		field_productprice: { und: [{
		value: $.prod_price.value
		}]},
	};
	//creating httpclient
	var xhr = Ti.Network.createHTTPClient({
		onload:function(){
			//added this to update the collection after we have posted a new product
		var collection = Alloy.Collections.ProductCollection;
		//I needed to ad this to do the postprocessing of the data again
		//We should do the postprcessing in the model instead
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
		//closing the formwindow and return to the productlist
		$.addprod.close();	
		},
		onerror : function(e) {
         Ti.API.debug(e.error);
         alert(e.error);
    	},
		});
		//Ti.API.info(myNewItem);	
		//Strgifys the data, just in case
		myNewItem = JSON.stringify(myNewItem);
	
	//$.addprod.close();
	xhr.open("POST",drupalurl);
	xhr.setRequestHeader('Content-Type','application/json');
	xhr.send(myNewItem);
	
}

$.addprod.open();
