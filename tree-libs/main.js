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
                    target: '_blank',
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
                    target: '_blank',
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
                    target: '_blank',
                },
                children: [
                    {
                        id: Math.floor(Math.random() * 1000),
                        text: {
                            name: 'Peronosporaceae',
                        },
                        link: {
                            href: null,
                            target: '_blank',
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
                            target: '_blank',
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
                            target: '_blank',
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
                    target: '_blank',
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
                    target: '_blank',
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
                    target: '_blank',
                },
            };
            this.tasks.unshift(newFungi);
        },
    },
});

async function renderTree() {
    // console.log('rendering ...');

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
            HTMLclass: 'the-parent',
            children: nodeStructure,
        },
    };
    // Init tree
    window.mycota_tree = new window.Treant(treeStructure);
}
renderTree();

// function scrollByDrag() {
//     let curYPos = 0;
//     let curXPos = 0;
//     let curDown = false;
//     const el = document.querySelector('#tree');

//     el.addEventListener('mousemove', (e) => {
//         if (curDown === true) {
//             el.scrollTo(el.scrollLeft + (curXPos - e.pageX), el.scrollTop + (curYPos - e.pageY));
//         }
//     });

//     el.addEventListener('mousedown', (e) => {
//         curDown = true;
//         curYPos = e.pageY;
//         curXPos = e.pageX;
//     });

//     el.addEventListener('mouseup', (e) => {
//         curDown = false;
//     });
// }
// scrollByDrag();
