abstract class Car {
    protected brand: string;
    protected model: string;
    protected year: number;
    private vin: string;
    constructor(brand: string, model: string, year: number, vin: string) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.vin = vin;
    }
    abstract display(): void;
    public getVin(): string {
        return this.vin;
    }
}

class Toyota extends Car {
    protected color: string;
    constructor(model: string, year: number, vin: string, color: string) {
        super("Toyota", model, year, vin);
        this.color = color;
    }
    display(): void {
        console.table({
            brand: this.brand,
            model: this.model,
            year: this.year,
            vin: this.getVin(),
            color: this.color});
    }
}

class BMW extends Car {
    protected isMbrand: boolean;
    constructor(model: string, year: number, vin: string, isMbrand: boolean) {
        super("BMW", model, year, vin);
        this.isMbrand = isMbrand;
    }
    display(): void {
        console.table({
            brand: this.brand,
            model: this.model,
            year: this.year,
            vin: this.getVin(),
            isMbrand: this.isMbrand});
    }
}

class Mercedes extends Car {
    protected fuelType: string;
    constructor(model: string, year: number, vin: string, fuelType: string) {
        super("Mercedes", model, year, vin);
        this.fuelType = fuelType;
    }
    display(): void {
        console.table({
            brand: this.brand,
            model: this.model,
            year: this.year,
            vin: this.getVin(),
            fuelType: this.fuelType});
    }
}

const toyotaCorolla = new Toyota('Corolla', 2020, '123456789', 'blue');
const toyotaCamry = new Toyota('Camry', 2021, '987654321', 'red');

const bmwX5 = new BMW('X5', 2022, '111111111', true);
const bmw3brand = new BMW('3 brand', 2023, '222222222', false);

const mercedesEClass = new Mercedes('E-Class', 2024, '333333333', 'diesel');
const mercedesCClass = new Mercedes('C-Class', 2025, '444444444', 'gasoline');

toyotaCorolla.display();
toyotaCamry.display();
bmwX5.display();
bmw3brand.display();
mercedesEClass.display();
mercedesCClass.display();
