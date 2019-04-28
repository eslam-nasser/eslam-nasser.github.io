module.exports = {
    extends: 'airbnb-base',
    env: {
        browser: true,
    },
    rules: {
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: false,
                optionalDependencies: false,
                peerDependencies: false,
            },
        ],
        'linebreak-style': 0,
        indent: ['error', 4],
    },
};
