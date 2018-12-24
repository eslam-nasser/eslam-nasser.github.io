/* eslint no-param-reassign: ["error", { "props": false }] */

const local = {
    template: '#template-dra',
    name: 'local-draggable',
    props: ['tasks'],
    methods: {
        remove(all, i) {
            all = all.splice(i, 1);
        },

        setLink(e, item) {
            if (item.hasLink) {
                item.link.href = this.parseName(item.text.name);
            } else {
                item.link.href = null;
            }
        },

        parseName(name) {
            return `/fungus.html?name=${name.toLowerCase().replace(' ', '-')}`;
        },

        onMove() {
            // console.log('moved ..');
        },
    },
};

const app = new window.Vue({
    el: '#app',
    components: {
        'local-draggable': local,
    },
    data: {
        tasks: [
            {
                id: Math.floor(Math.random() * 1000),
                text: {
                    name: 'Zygomycota',
                },
                hasLink: false,
                children: [],
                link: {
                    href: null,
                    target: '_self',
                },
            },
            {
                id: Math.floor(Math.random() * 1000),
                text: {
                    name: 'Ascomycota',
                },
                hasLink: false,
                children: [],
                link: {
                    href: null,
                    target: '_self',
                },
            },
            {
                id: Math.floor(Math.random() * 1000),
                // collapsable: true,
                text: {
                    name: 'Oomycota',
                },
                hasLink: false,
                link: {
                    href: null,
                    target: '_self',
                },
                children: [
                    {
                        id: Math.floor(Math.random() * 1000),
                        text: {
                            name: 'Peronosporaceae',
                        },
                        link: {
                            href: null,
                            target: '_self',
                        },
                        hasLink: false,
                        children: [],
                    },
                    {
                        id: Math.floor(Math.random() * 1000),
                        text: {
                            name: 'Albugniaceae',
                        },
                        link: {
                            href: null,
                            target: '_self',
                        },
                        hasLink: false,
                        children: [],
                    },
                    {
                        id: Math.floor(Math.random() * 1000),
                        text: {
                            name: 'Pythiceae',
                        },
                        link: {
                            href: null,
                            target: '_self',
                        },
                        hasLink: false,
                        children: [],
                    },
                ],
            },
            {
                id: Math.floor(Math.random() * 1000),
                text: {
                    name: 'Basidiomycota',
                },
                hasLink: false,
                children: [],
                link: {
                    href: null,
                    target: '_self',
                },
            },
            {
                id: Math.floor(Math.random() * 1000),
                text: {
                    name: 'Deuteromycota',
                },
                hasLink: false,
                children: [],
                link: {
                    href: null,
                    target: '_self',
                },
            },
        ],
    },
    created() {
        const data = JSON.parse(localStorage.getItem('nodeStructure'));
        if (data && data.length) {
            this.tasks = data;
        }
    },
    methods: {
        save() {
            localStorage.setItem('nodeStructure', JSON.stringify(this.tasks));
            this.render();
        },
        render() {
            window.renderTree();
        },

        addNew() {
            const newFungi = {
                text: {
                    name: 'NEW FUNGI',
                },
                children: [],
                hasLink: false,
                link: {
                    href: null,
                    target: '_self',
                },
            };
            this.tasks.unshift(newFungi);
        },
    },
});

async function renderTree() {
    // Reset tree
    if (window.mycota_tree) {
        window.mycota_tree.destroy();
    }

    // Get data
    let nodeStructure = JSON.parse(localStorage.getItem('nodeStructure'));
    if (!nodeStructure || nodeStructure.length === 0) {
        const { nodeStructure: data } = await fetch('./data/tree-data.json').then(res => res.json());
        nodeStructure = data;
    }

    const treeStructure = {
        chart: {
            container: '#tree',
            levelSeparation: 200,
            siblingSeparation: 200,
            subTeeSeparation: 200,
            nodeAlign: 'CENTER',
            rootOrientation: 'NORTH', // NORTH,EAST,WEST,SOUTH
            // animateOnInit: true,
            // animateOnInitDelay: 1000,
            padding: 50,
            node: {
                HTMLclass: 'evolution-tree',
            },
            connectors: {
                type: 'curve', // curve,bCurve,step,straight
                style: {
                    'stroke-width': 2,
                    'stroke-linecap': 'round',
                    stroke: '#ccc',
                },
            },
        },

        // node: {
        //     collapsable: true
        // },

        nodeStructure: {
            id: Math.floor(Math.random() * 1000),
            text: {
                name: 'Mycota',
            },
            pseudo: false,
            HTMLclass: 'the-parent',
            children: nodeStructure,
        },
    };
    // Init tree
    window.mycota_tree = new window.Treant(treeStructure);
}

window.onload = () => {
    renderTree();

    // The item (or items) to press and hold on
    const arrows = document.querySelectorAll('#tree-controles span');

    let timerID;
    let counter = 0;

    arrows.forEach((item) => {
        // Listening for the mouse and touch events
        item.addEventListener('mousedown', pressingDown, false);
        item.addEventListener('mouseup', notPressingDown, false);
        item.addEventListener('mouseleave', notPressingDown, false);

        item.addEventListener('touchstart', pressingDown, false);
        item.addEventListener('touchend', notPressingDown, false);

        // Listening for our custom pressHold event
        item.addEventListener('pressHold', doSomething, false);
    });

    function pressingDown(e) {
        // Start the timer
        requestAnimationFrame(timer.bind(this));

        e.preventDefault();
    }

    function notPressingDown(e) {
        // Stop the timer
        cancelAnimationFrame(timerID);
        counter = 0;
    }

    //
    // Runs at 60fps when you are pressing down
    //
    function timer() {
        const dir = this.classList[0];
        const tree = document.querySelector('#tree');

        if (dir === 'right') tree.scrollLeft += 6;
        if (dir === 'left') tree.scrollLeft -= 6;
        if (dir === 'up') tree.scrollTop -= 6;
        if (dir === 'down') tree.scrollTop += 6;

        timerID = requestAnimationFrame(timer.bind(this));
        counter++;
    }

    function doSomething(e) {
        // console.log('pressHold event fired!');
    }
};
