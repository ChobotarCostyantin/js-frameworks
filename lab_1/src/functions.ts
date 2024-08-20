function greet(name:string, age:number = 20) : void {
    console.log(`Hello, my name is ${name}. I'm ${age} year old.`)
}

greet("Oleg");
greet("Misha", 19);