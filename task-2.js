// The product() function finds the product of an arbitrary number of
// arguments. You must specify the desired execution context for
// the product() function by implementing a new getProduct() function 
// bound to the context of the object, which takes 2 additional arguments.
// The value of the 1st additional parameter is 2, the value of the 2nd 
// additional parameter is 3. The object in the context of which the 
// product() function is called has 1 property

const product = function(){
    return [].reduce.call(arguments, function(res,elem){
        return res * elem;
    }, this.product);
}

// const contextObj = {product: 10}; //{code}

const getProduct = product.bind({product: 10}, 2, 3);
//product function that is called in the context of an contextObj
                    // with two additional parameters

console.log(getProduct(4,5)); // arg_from_obj * 2 * 3 * 4 * 5 = 1200

// i don't understand how it works