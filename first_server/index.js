const http = require('http')

const hostname = 'localhost'
const port = 3000

const server = http.createServer(({url}, res) => {
  console.log(url)

  if (url === '/x') {
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify({ "x": "y" }))
    res.end()
  }

  res.end('Welcome to node !!')
})

server.listen(port, hostname, () => {
  console.log(`Server running at ${hostname}:${port}`)
});
