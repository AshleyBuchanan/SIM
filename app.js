//atoms

class Atom {
    constructor() {
        this.atom = document.createElement('div');
        this.atom.classList.add('atom');
        return this.atom;
    }

    static make(elementName) {
        const left = ((Math.random() * 100) - 50);
        const top = ((Math.random() * 100) - 50);

        const element = new elementName;
        switch (element.color) {
            case 'Black':
                element.color = '#000000BB';
                element.style.color = 'Lightgrey';
                break;
            case 'Blue':
                element.style.textShadow = '0 0 1px White, 0 0 2px White, 0 0 3px White';
                break;
        }


        element.innerHTML = element.label;
        element.style.backgroundColor = element.color;
        element.style.width = `${element.atomicRadius}px`;
        element.style.height = `${element.atomicRadius}px`;
        element.style.left = `${50 + left}%`;
        element.style.top = `${50 + top}%`;
        return element;
    }
}

//elements
class Oxygen extends Atom {
    constructor() {
        super(Atom);
        this.label = 'O';
        this.color = 'Red'
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
        this.label = 'H';
        this.color = 'White'
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
        this.label = 'He';
        this.color = 'White'
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
        this.label = 'C';
        this.color = 'Black'
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
        this.label = 'N';
        this.color = 'Blue'
        this.protons = 7;
        this.neutrons = 7;
        this.electrons = 7;
        this.atomicWeight = 14.0;
        this.energyLevels = 2;
        this.atomicRadius = 56;
    }
}

class Chlorine extends Atom {
    constructor() {
        super(Atom);
        this.label = 'Cl';
        this.color = 'Green'
        this.protons = 17;
        this.neutrons = 18;
        this.electrons = 17;
        this.atomicWeight = 35.45;
        this.energyLevels = 3;
        this.atomicRadius = 79;
    }
}

class Sulphur extends Atom {
    constructor() {
        super(Atom);
        this.label = 'S';
        this.color = 'Yellow'
        this.protons = 16;
        this.neutrons = 16;
        this.electrons = 16;
        this.atomicWeight = 32.06;
        this.energyLevels = 3;
        this.atomicRadius = 88;
    }
}

class Sodium extends Atom {
    constructor() {
        super(Atom);
        this.label = 'Na';
        this.color = 'Violet'
        this.protons = 11;
        this.neutrons = 12;
        this.electrons = 11;
        this.atomicWeight = 22.99;
        this.energyLevels = 3;
        this.atomicRadius = 190;
    }
}

class Lead extends Atom {
    constructor() {
        super(Atom);
        this.label = 'Pb';
        this.color = 'Pink'
        this.protons = 82;
        this.neutrons = 125;
        this.electrons = 82;
        this.atomicWeight = 207.2;
        this.energyLevels = 6;
        this.atomicRadius = 154;
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
        this.oxygen = Atom.make(Oxygen)
        this.carbon = Atom.make(Carbon)
        this.nitrogen = Atom.make(Nitrogen)
        this.chlorine = Atom.make(Chlorine)
        this.sulphur = Atom.make(Sulphur)
        this.sodium = Atom.make(Sodium)
        this.lead = Atom.make(Lead)
        this.helium = Atom.make(Helium)
        this.hydrogen = Atom.make(Hydrogen)

        doc.append(
            this.oxygen,
            this.carbon,
            this.nitrogen,
            this.chlorine,
            this.sulphur,
            this.sodium,
            this.lead,
            this.helium,
            this.hydrogen,
        );
    }
}

const main = new Main();