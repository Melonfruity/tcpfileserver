const net = require('net');
net.bytesWritten = 300000;
net.bufferSize = 300000;
const fs = require('fs');
const server = net.createServer((c) => {
  // 'connection' listener
  console.log('client connected');
  c.on('end', () => {
    console.log('client disconnected');
  });

  c.on('data', (data) => {
    fs.readFile(`./${data}` , (err, data) =>{
        if(!err){
          console.log(data.length);
          c.write(data);
        }
        else {
          console.log('readfile err');
        }
      });
    });

  c.pipe(c);
});

server.on('error', (err) => {
  throw err;
});

server.listen(3004, 'localhost', () => {
  console.log('server bound');
});