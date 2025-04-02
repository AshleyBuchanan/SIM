//atoms
class Atom {
    constructor() {
        this.atom = document.createElement('div');
        this.atom.classList.add('atom');
        this.atom.innerHTML = 'O';
        return this.atom;
    }
}

//elements
class Oxygen extends Atom {
    constructor() {
        super(Atom);
        this.protons = 8;
        this.neutrons = 8;
        this.electrons = 8;
        this.atomicWeight = 15.99;
        this.energyLevels = 2;
        this.atomicRadius = 48
    }
}

class Hydrogen extends Atom {
    constructor() {
        super(Atom);
        this.protons = 1;
        this.neutrons = 0;
        this.electrons = 1;
        this.atomicWeight = 1.008;
        this.energyLevels = 1;
        this.atomicRadius = 53;
    }
}

class Helium extends Atom {
    constructor() {
        super(Atom);
        this.protons = 2;
        this.neutrons = 2;
        this.electrons = 2;
        this.atomicWeight = 4.002;
        this.energyLevels = 1;
        this.atomicRadius = 31;
    }
}
class Carbon extends Atom {
    constructor() {
        super(Atom);
        this.protons = 6;
        this.neutrons = 6;
        this.electrons = 6;
        this.atomicWeight = 12.01;
        this.energyLevels = 2;
        this.atomicRadius = 67;
    }
}

class Nitrogen extends Atom {
    constructor() {
        super(Atom);
        this.protons = 7;
        this.neutrons = 7;
        this.electrons = 7;
        this.atomicWeight = 14.0;
        this.energyLevels = 2;
        this.atomicRadius = 56;
    }
}

//molecules
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

class Main {
    constructor() {
        const doc = document.querySelector('body');
        const oxygen = new Oxygen();
        doc.append(oxygen)
    }
}

const main = new Main();