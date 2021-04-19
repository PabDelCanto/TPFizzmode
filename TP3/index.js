const { json } = require('express');
const express = require('express')
const fs = require('fs')
const app = express();
app.use(express.json())

//Settings
app.set('appName', 'TP3');
app.set('port', 5000)

app.listen(app.get('port'), ()=>{
    console.log(app.get('appName'))
    console.log(`server on port ${app.get('port')}`);
})

app.get('/', (req, res)=>{
    let date = new Date().toLocaleTimeString();
   if(date >= '06:00:00' && date<='12:59:59'){
       res.send('Buenos días!');
       res.end();
   }
   else if(date >= '13:00:00' && date<='19:59:59'){
    res.send('Buenas tardes!');
    res.end();
   }
   else{
    res.send('Buenas noches!');
    res.end();       
   }
})

app.get('/random', (req, res)=>{
    let randObj = new Object();    
    for(let i = 0; i<=10000; i++){
        let randomNumber = Math.floor(Math.random()*20)+1;
        if(!randObj.hasOwnProperty(randomNumber.toString())){
            randObj[randomNumber]=0;
        }
        else{
            randObj[randomNumber]++;
        }        
    }
    
    res.json(randObj)//La sumatoria de resultados no da 10000...?
}) 

app.get('/info', async (req, res) => {
   let info = await fs.promises.readFile('./package.json');
   let infoString = info.toLocaleString()
   await fs.promises.writeFile('./info.txt', infoString)
   console.log(infoString);
   res.send('consola mi rey')
   
})

app.get('/operaciones/:x/:y/:op', (req, res)=>{
    let obj = {};        
    let x = Number(req.params.x);
    let y = Number(req.params.y);
    let op = req.params.op;
    if(isNaN(x) || isNaN(y) || y == 0){        
            res.json( error = {
                x: x,
                y: y,
                op: op
            }         )              
    }
    switch (op) {
        case 'suma':
            obj.x = x;
            obj.y = y;
            obj.operacion = op;
            obj.resultado = x + y;          
          break;
        case 'resta':
            obj.x = x;
            obj.y = y;
            obj.operacion = op;
            obj.resultado = x - y;          
          break;      
        case 'multiplicacion':
            obj.x = x;
            obj.y = y;
            obj.operacion = op;
            obj.resultado = x * y;          
          break;
        case 'division':
           obj.x = x;
           obj.y = y;
           obj.operacion = op;
           obj.resultado = x / y;
         
          break;  
        default:
            obj.x = x;
            obj.y = y;
            obj.operacion = op;          
          break;
        }

        res.json(obj);

    })

app.delete('/user/:userId', (req, res)=> {
    res.send(`User ${req.params.userId} deleted`)
})



