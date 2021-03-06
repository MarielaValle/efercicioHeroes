

const funciones = require ('../funciones')

const heroes = funciones.getHeroes();


let heroesController = {

    heroes:(req, res) => {
     
    let heroesO= heroes.map(function (heroe){
     let resultado = ' '; 
     resultado= resultado  + '-'+  heroe.id+':' +'-'+heroe.nombre; 
     return resultado  
     
          
       });
       let heroesOrd = heroesO.join('\n\n') 
       res.send(heroesOrd);
   },
            
         



    detalle:(req, res) => {
        const heroe = heroes.find(h => h.id == req.params.id);
        if (heroe) {
            res.send(`Hola, mi nombre es ${heroe.nombre} y soy ${heroe.profesion}`);
        } else {
            res.send("No se encontró a ese héroe");
        }
    },


    bio:(req, res) => {
        let heroe = heroes.find(hero => hero.id == req.params.id);
        if (!heroe) {
            res.send("No encontramos un héroe para mostrarte su biografía");
        } else {
            if (req.params.ok == "ok") {
                res.send(`${heroe.nombre}: ${heroe.resenia}`);
            } else {
                res.send(`${heroe.nombre}: Lamento que no desees saber más de mi :(`);
            }
        }
    },


}

 module.exports= heroesController;