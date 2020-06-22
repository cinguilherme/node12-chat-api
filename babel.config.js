module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            },
            '@babel/preset-typescript'
        ]
    ],
    plugins: [
        ['module-resolver', {
            alias: {
                '@modules': './src/modules',
                '@condif': './src/config'
            }
        }]
    ],
    ignore: [
        '**/*.spec.ts'
    ]
}
