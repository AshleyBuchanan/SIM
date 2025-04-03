export class Atom {
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

