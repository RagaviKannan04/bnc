// // require('./text')
// // console.log('Livewire')
const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
    res.write('Hello Node js')
    res.end()

    }
    else if(req.url == '/home'){
        res.write('Hello Home Pages')
        res.end()
    }
    else if(req.url == '/admin'){
        res.write('Hello Admin Page')
        res.end()

    }

    else{
        res.write('Page Not Found')
        res.end()
    }

})

server.listen(5000)


//http://localhost:3000/

// const fs = require('fs')
// fs.appendFileSync('messes.txt', 'hello my file is here')




