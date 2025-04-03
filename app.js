import { Atom } from './element_data/atoms.js'
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

class Main {
    constructor() {
        const doc = document.querySelector('body');

        this.oxygen = Atom.make(Oxygen)
        this.oxygen2 = Atom.make(Oxygen)

        // this.carbon = Atom.make(Carbon)
        // this.nitrogen = Atom.make(Nitrogen)
        // this.chlorine = Atom.make(Chlorine)
        // this.sulphur = Atom.make(Sulphur)
        // this.sodium = Atom.make(Sodium)
        // this.lead = Atom.make(Lead)
        // this.helium = Atom.make(Helium)
        // this.hydrogen = Atom.make(Hydrogen)

        doc.append(
            this.oxygen,
            this.oxygen2,
            // this.carbon,
            // this.nitrogen,
            // this.chlorine,
            // this.sulphur,
            // this.sodium,
            // this.lead,
            // this.helium,
            // this.hydrogen,
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