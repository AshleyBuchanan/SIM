class H2 {
    constructor() {
        this.atoms = [
            { hydrogen: new Hydrogen },
            { hydrogen: new Hydrogen }
        ]
    }
}

class H2O {
    constructor() {
        this.atoms = [
            { hydrogen: new Hydrogen },
            { hydrogen: new Hydrogen },
            { oxygen: new Oxygen }
        ]
    }
}

class O2 {
    constructor() {
        this.atoms = [
            { oxygen: new Oxygen() },
            { oxygen: new Oxygen() }
        ]
    }
}

class O3 {
    constructor() {
        this.atoms = [
            { oxygen: new Oxygen() },
            { oxygen: new Oxygen() },
            { oxygen: new Oxygen() }
        ]
    }
}