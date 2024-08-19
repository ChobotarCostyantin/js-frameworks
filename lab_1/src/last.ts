enum Toppings {
    Chocolate = 5,
    Caramel = 6,
    Berries = 10
}

function ice_cream(size:boolean, topping: Set<Toppings>, additive:boolean = false)
{
    let price:number = 0;
    price = size ? price += 25 : price += 10;
    topping.forEach(t => {
        price += t;
    });
    if (additive) price += 5;
    return price;
}

console.log(`Price of small ice-cream with caramel and berries: ${ice_cream(false, new Set([Toppings.Caramel, Toppings.Berries]))} hryvnas`);
console.log(`Price of big ice-cream with chocolate and marshmallow: ${ice_cream(true, new Set([Toppings.Chocolate, Toppings.Chocolate]), true)} hryvnas`);