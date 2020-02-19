const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const listas = require('../example.json');

router.get('/', (req, res) =>{
    res.json(listas);
});

router.post('/', (req, res) =>{
    const { categoria, palabra } = req.body;

    if(categoria && palabra){
        const id = listas.length + 1;
        const newPalabra = {...req.body, id};
        console.log(newPalabra);
        listas.push(newPalabra);
        res.json(listas);
    }else{
        res.status(500).json({error : 'Ha ocurrido un error'});
    }
    res.send('RECIBIDO');
});

router.put('/:id', (req, res) =>{
    const { id } = req.params;
    const { categoria, palabra } = req.body;
    if(categoria, palabra){
        _.each(s, (lista, i) =>{
            if(lista.id == id){
                lista.palabra = palabra;
                lista.categoria = categoria;
            }
        });
        res.json(listas);
    }else{
        res.status(500).json({error : 'Ha ocurrido un error'});
    }
});

router.delete('/:id', (req, res) =>{
    const { id } = req.params;
    _.each(listas, (lista, i) =>{
        if(lista.id == id){
            categorias.splice(i, 1);
        }
    });
    res.send('eliminado');
});

module.exports = router;