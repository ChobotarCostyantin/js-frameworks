window.onload = () => {
    const { size, toppings, additive } = getInputs();
    let price = ice_cream(size, toppings, additive);
    console.log(`Price of an ice-cream: ${price} hryvnas`);
}

enum Toppings {
    Chocolate = 5,
    Caramel = 6,
    Berries = 10
}

function ice_cream(size: boolean, topping: Set<Toppings>, additive: boolean = false): number {
    let price: number = 0;
    price = size ? price += 25 : price += 10;
    topping.forEach(t => {
        price += t;
    });
    if (additive) price += 5;
    return price;
}

function getInputs(): { size: boolean, toppings: Set<Toppings>, additive: boolean } {
    let sizeInput: string | null = prompt("Pick cup size (large/small):");
    let toppingInput: string | null = prompt("Enter toppings separated with a comma (available: Chocolate, Caramel, Berries):");
    let additiveInput: string | null = prompt("Add marshmallow? (yes/no):");

    if (sizeInput && toppingInput && additiveInput) {
        let size: boolean = sizeInput.trim().toLowerCase() === 'large';
        let toppings = new Set<Toppings>();

        toppingInput.split(',').forEach(t => {
            t = t.trim().toLowerCase();
            if (t === 'chocolate') toppings.add(Toppings.Chocolate);
            if (t === 'caramel') toppings.add(Toppings.Caramel);
            if (t === 'berries') toppings.add(Toppings.Berries);
        });

        let additive: boolean = additiveInput.trim().toLowerCase() === 'yes';

        return { size, toppings, additive };
    } else {
        throw new Error("All parameters must be entered!");
    }
}