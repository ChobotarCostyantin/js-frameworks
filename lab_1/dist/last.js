window.onload = () => {
    const { size, toppings, additive } = getInputs();
    let price = ice_cream(size, toppings, additive);
    console.log(`Price of an ice-cream: ${price} hryvnas`);
};
var Toppings;
(function (Toppings) {
    Toppings[Toppings["Chocolate"] = 5] = "Chocolate";
    Toppings[Toppings["Caramel"] = 6] = "Caramel";
    Toppings[Toppings["Berries"] = 10] = "Berries";
})(Toppings || (Toppings = {}));
function ice_cream(size, topping, additive = false) {
    let price = 0;
    price = size ? price += 25 : price += 10;
    topping.forEach(t => {
        price += t;
    });
    if (additive)
        price += 5;
    return price;
}
function getInputs() {
    let sizeInput = prompt("Pick cup size (large/small):");
    let toppingInput = prompt("Enter toppings separated with a comma (available: Chocolate, Caramel, Berries):");
    let additiveInput = prompt("Add marshmallow? (yes/no):");
    if (sizeInput && toppingInput && additiveInput) {
        let size = sizeInput.trim().toLowerCase() === 'large';
        let toppings = new Set();
        toppingInput.split(',').forEach(t => {
            t = t.trim().toLowerCase();
            if (t === 'chocolate')
                toppings.add(Toppings.Chocolate);
            if (t === 'caramel')
                toppings.add(Toppings.Caramel);
            if (t === 'berries')
                toppings.add(Toppings.Berries);
        });
        let additive = additiveInput.trim().toLowerCase() === 'yes';
        return { size, toppings, additive };
    }
    else {
        throw new Error("All parameters must be entered!");
    }
}
export {};
