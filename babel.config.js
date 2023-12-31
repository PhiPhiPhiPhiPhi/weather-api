module.exports = {
    env: {
        test: {
            plugins: [
                ['@babel/plugin-proposal-decorators', {legacy: true}],
                ['@babel/plugin-proposal-class-properties', {loose: false}],
                'istanbul'
            ],
            presets: [
                ['next/babel']
            ]
        }
    },
    plugins: [
        ['@babel/plugin-proposal-decorators', {legacy: true}],
        ['@babel/plugin-proposal-class-properties', {loose: false}]
    ],
    presets: [
        [
            'next/babel',
            {'transform-react-remove-prop-types': {}}
        ]
    ]
};