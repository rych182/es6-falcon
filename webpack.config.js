const path = require('path'); //Esta expotando un modulo de nodejs que te dice la ruta

module.exports = { //le dice la configuración a webpack de lo que queremos exportar
    entry: './src/app.js', //archivo de entrada, es el archivo principal, donde importaremos todos los demás archivos
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/'),
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }

};