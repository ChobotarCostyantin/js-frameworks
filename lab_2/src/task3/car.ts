abstract class Car {
    protected series: string;
    protected model: string;
    protected year: number;
    private vin: string;
    constructor(series: string, model: string, year: number, vin: string) {
        this.series = series;
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
    constructor(series: string, model: string, year: number, vin: string, color: string) {
        super(series, model, year, vin);
        this.color = color;
    }
    display(): void {
        console.log(`Car series: ${this.series}, model: ${this.model}, year: ${this.year}, vin: ${this.getVin()}, color: ${this.color}`);
    }
}

class BMW extends Car {
    protected isMSeries: boolean;
    constructor(series: string, model: string, year: number, vin: string, isMSeries: boolean) {
        super(series, model, year, vin);
        this.isMSeries = isMSeries;
    }
    display(): void {
        console.log(`Car series: ${this.series}, model: ${this.model}, year: ${this.year}, vin: ${this.getVin()}, isMSeries: ${this.isMSeries}`);
    }
}

class Mercedes extends Car {
    protected fuelType: string;
    constructor(series: string, model: string, year: number, vin: string, fuelType: string) {
        super(series, model, year, vin);
        this.fuelType = fuelType;
    }
    display(): void {
        console.log(`Car series: ${this.series}, model: ${this.model}, year: ${this.year}, vin: ${this.getVin()}, fuelType: ${this.fuelType}`);
    }
}

const toyotaCorolla = new Toyota('Corolla', 'Verso', 2020, '123456789', 'blue');
const toyotaCamry = new Toyota('Camry', 'XLE', 2021, '987654321', 'red');

const bmwX5 = new BMW('X5', 'G05', 2022, '111111111', true);
const bmw3Series = new BMW('3 Series', 'G20', 2023, '222222222', false);

const mercedesEClass = new Mercedes('E-Class', 'W212', 2024, '333333333', 'diesel');
const mercedesCClass = new Mercedes('C-Class', 'W204', 2025, '444444444', 'gasoline');

toyotaCorolla.display();
toyotaCamry.display();
bmwX5.display();
bmw3Series.display();
mercedesEClass.display();
mercedesCClass.display();
