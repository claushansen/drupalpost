exports.definition = {  
    config: {
        URL: "http://mdam2.my.eal.dk/drupal/api/views/products2.json",
        //debug: 1, 
        adapter: {
            type: "restapi",
            collection_name: "ProductCollection",
            idAttribute: "nid"
        },
        headers: { // your custom headers
            Accept: "application/json",
            //"X-StackMob-API-Key": "your-stackmob-key"
        },
        //"parentNode": "news.domestic" //your root node
    },      
    extendModel: function(Model) {      
        _.extend(Model.prototype, {});
        return Model;
    },  
    extendCollection: function(Collection) {        
        _.extend(Collection.prototype, {});
        return Collection;
    }       
};
