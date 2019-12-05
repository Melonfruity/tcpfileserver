const net = require('net');
const fs = require('fs');
const fileName = process.argv[2];

net.bufferSize = 300000;
net.bytesRead = 300000;
const chunks = [];

const client = net.connect({port: 3004, address: 'localhost' }, () => {
    // 'connect' listener
    console.log('connected to server!');
    client.write(`${fileName}`);

});

client.on('data', (data) => {
    console.log(net.bufferSize,data.length);
    chunks.push(data)
    client.end();
});

client.on('end', () => {
    const file = Buffer.concat(chunks)
    fs.writeFile('./recievedStuff/index.html', file, (err) => {
        if(err) console.log('err');
        console.log('Success'); 
    });

})