//objeto express
const express = require('express');
//objeto que represente nuestra aplicacion
const app = express(); //instancia

app.use(express.json());


//propuesta personal

app.post(

    '/api/operaciones',
    (req,res)=>{
        const{num1,num2,op}=req.body;
        let resultado;
        
            if(op=="+"){
                resultado=num1+num2; 	
             }else if(op=="-"){
                 resultado=num1-num2;
             }else if(op=="*"){
                 resultado=num1*num2;
             }else{
                if(num2!=0){
                 resultado=num1/num2;
                }else{
                    resultado = "valores no validos";
                }
         }
         res.json("Resultado: "+resultado);
        }



);






//Definir entry point

/*

#Explicacion en clase


 app.get(
    '/api/sumar',
    (req, res)=>{
        const {num1, num2}=req.body; //deconstruccion de objeto
        const resultado = num1+num2;

        res.json(resultado);
    }
 );

 app.post(
    '/api/restar',
    (req,res)=>{

        const {num1, num2}=req.body; //deconstruccion de objeto
        const resultado = num1-num2;

        res.json(resultado);
        /*
        const num1 = req.body.num1;
        const num2 = req.body.num1;
        const res = num1-num2;
        
    }
    );
    app.post(
        '/api/multiplicar',
        (req,res)=>{
    
            const {num1, num2}=req.body; //deconstruccion de objeto
            const resultado = num1*num2;
    
            res.json(resultado);

        }
        );
    


    app.post(
        '/api/dividir',
        (req,res)=>{
    
            const {num1, num2}=req.body; //deconstruccion de objeto
            const resultado = num1/num2;
    
            res.json(resultado);

        }
        );

        */
//Servicio para escuchar peticiones
app.listen(
    3002,
    ()=>{
        console.log("servidor ejecutandose en el puerto 3002");
    }
);

