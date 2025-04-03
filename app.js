//atoms
class Atom {
    constructor() {
        this.atom = document.createElement('div');
        this.atom.classList.add('atom');
        this.atom.addEventListener('click', () => {
            const infoCanvas = document.querySelector('#infoCanvas');

            const oldInfoBlock = document.querySelector('#info');
            if (oldInfoBlock) oldInfoBlock.remove();

            const infoBlock = document.createElement('div');
            infoBlock.id = 'info';
            infoCanvas.append(infoBlock);

            const title = document.createElement('div');
            title.id = 'title';
            infoBlock.append(title);

            const hr = document.createElement('hr');
            infoBlock.append(hr);

            for (let entry of Object.entries(this.atom)) {

                if (entry[0] === 'name') {
                    title.innerHTML += `<span class="left">${entry[1]}</span>`;

                } else if (entry[0] === 'label') {
                    title.innerHTML += `<span class="right">${entry[1]}</span>`;

                } else if (entry[0] !== 'color' && entry[0] !== 'vector' && entry[0] !== 'velocity') {
                    const p = document.createElement('div');
                    p.id = ('entries');
                    p.innerHTML = `<span class="left">${entry[0]}:</span><span class="right">${entry[1]}</span>`;
                    infoBlock.append(p);
                }
            }

            console.log([...Object.entries(this.atom)]);
        });
        return this.atom;
    }

    shellStructure() {
        this.shell = [
            [{ '1s': 0 }],
            [{ '2s': 0 }, { '2p': 0 }],
            [{ '3s': 0 }, { '3p': 0 }, { '3d': 0 }],
            [{ '4s': 0 }, { '4p': 0 }, { '4d': 0 }, { '4f': 0 }],
            [{ '5s': 0 }, { '5p': 0 }, { '5d': 0 }, { '5f': 0 }],
            [{ '6s': 0 }, { '6p': 0 }, { '6d': 0 }],
            [{ '7s': 0 }, { '7p': 0 }]
        ]

        this.max = [
            [{ '1s': 2 }],
            [{ '2s': 2 }, { '2p': 6 }],
            [{ '3s': 2 }, { '3p': 6 }, { '3d': 10 }],
            [{ '4s': 2 }, { '4p': 6 }, { '4d': 10 }, { '4f': 14 }],
            [{ '5s': 2 }, { '5p': 6 }, { '5d': 10 }, { '5f': 14 }],
            [{ '6s': 2 }, { '6p': 6 }, { '6d': 10 }],
            [{ '7s': 2 }, { '7p': 6 }]
        ]
    }

    static make(elementName) {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const x = ((Math.random() * screenWidth) - (screenWidth / 2));
        const y = ((Math.random() * screenHeight) - (screenHeight / 2));
        const vector = Math.random() * 360;
        const velocity = Math.random() * 2;
        const element = new elementName;

        element.vector = vector;

        switch (element.color) {
            case 'Black':
                element.color = '#000000BB';
                element.style.color = 'Lightgrey';
                break;
            case 'Blue':
                element.color = '#2222FF'
                element.style.textShadow = '0 0 1px White, 0 0 2px White, 0 0 3px White, 0 0 9px White';
                break;
        }

        element.innerHTML = element.label;
        element.style.backgroundColor = element.color;
        element.style.width = `${element.atomicRadius}px`;
        element.style.height = `${element.atomicRadius}px`;
        element.style.left = `${(screenWidth / 2) + x}px`;
        element.style.top = `${(screenHeight / 2) + y}px`;
        element.velocity = velocity;

        return element;
    }
}

//elements
class Oxygen extends Atom {
    constructor() {
        super(Atom);
        this.name = 'Oxygen';
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
        this.name = 'Hydrogen';
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
        this.name = 'Helium';
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
        this.name = 'Carbon';
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
        this.name = 'Nitrogen';
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
        this.name = 'Chlorine';
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
        this.name = 'Sulphur';
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
        this.name = 'Sodium';
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
        this.name = 'Lead';
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

    static update() {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        const atoms = document.querySelectorAll('.atom');
        for (let atom of atoms) {
            let width = parseFloat(atom.style.width) / 2;

            let x = parseFloat(atom.style.left) || screenWidth;
            let y = parseFloat(atom.style.top) || screenHeight;

            const angleRadians = atom.vector * (Math.PI / 180);

            const vx = Math.cos(angleRadians) * atom.velocity;
            const vy = Math.sin(angleRadians) * atom.velocity;

            x += vx;
            y += vy;

            if (x <= 0 + width || x + width >= screenWidth) {
                atom.vector = 180 - atom.vector;
            }
            if (y <= 0 + width || y + width >= screenHeight) {
                atom.vector = 360 - atom.vector;
            }

            atom.vector = (atom.vector + 360) % 360;

            x = Math.max(0, Math.min(x, screenWidth - width));
            y = Math.max(0, Math.min(y, screenHeight - width));

            atom.style.left = `${x}px`;
            atom.style.top = `${y}px`;
        }
    }
}

const main = new Main();

let i = setInterval(() => {
    Main.update()
}, 16.67)