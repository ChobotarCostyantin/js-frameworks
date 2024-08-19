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
console.log(`Price of small ice-cream with caramel and berries: ${ice_cream(false, new Set([Toppings.Caramel, Toppings.Berries]))} hryvnas`);
console.log(`Price of big ice-cream with chocolate and marshmallow: ${ice_cream(true, new Set([Toppings.Chocolate, Toppings.Chocolate]), true)} hryvnas`);
let sizeInput = prompt("Виберіть розмір морозива (введіть 'великий' або 'маленький'):");
export {};
