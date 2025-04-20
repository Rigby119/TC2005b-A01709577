// FS MODULE to write
const fs = require('fs');

function fileWrite(text) {
    fs.writeFileSync('output.txt', text, 'utf-8');
    console.log('Text succesfully written to file!')
}

const text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem consectetur aperiam repellat dolorem quis magni nemo fugiat laudantium harum, quam corporis architecto, iste vitae commodi doloremque non aut cumque. In.'
fileWrite(text);