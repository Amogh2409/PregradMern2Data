const EventEmitter = require('events');


class PizzaShop extends EventEmitter {
    constructor() {
        super(); // Call the parent class constructor
        this.orderNumber = 0; // Initialize order number
    }

    order(size, topping){
        this.orderNumber++;
        this.emit('order', size, topping); // Emit the 'orderPlaced' event with order details
    }

    displayOrderNumber(){
        console.log(`Order number: ${this.orderNumber}`); // Display the current order number
    }
}

const pizzaShop = new PizzaShop(); // Create an instance of the PizzaShop class

pizzaShop.on('order', (size, topping) => {

    console.log(`Order placed: ${size} pizza with ${topping}`); // Register an event listener for the 'order' event
});
pizzaShop.on('order', ()=>{
    pizzaShop.displayOrderNumber(); // Register an event listener for the 'order' event

});

pizzaShop.order('large', 'paneer');
pizzaShop.order('large', 'mushroom');
pizzaShop.order('small', 'paneer');
pizzaShop.order('small', 'mushroom');
pizzaShop.order('medium', 'paneer');
pizzaShop.order('medium', 'mushroom');