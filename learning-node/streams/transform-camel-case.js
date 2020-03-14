const {
    Transform
} = require("stream");

const transformStream = new Transform({
    transform(chunk, enconding, callback) {
        this.push(camelCase(chunk.toString()));
        callback();
    },
});

process.stdin.pipe(transformStream).pipe(process.stdout);

const camelCase = (text) => {
    let palabras = text.split(' ');
    palabras.map((palabra, key) => {
        palabras[key] = palabra[0].toUpperCase().concat(palabra.substring(1, palabra.length));
    });
    return palabras.join('')
};