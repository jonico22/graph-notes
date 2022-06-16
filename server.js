import express from 'express';
import { graphqlHTTP } from 'express-graphql';

import NotaController from './src/controllers/Nota.controller.js';
import NotaSchema from './src/graphql/Nota.schema.js';

const app = express();

app.use(express.static('public'));

app.use('/graphql', graphqlHTTP({
    schema: NotaSchema,
    rootValue: {
        getNotas: NotaController.getNotas,
        createNota: NotaController.createNota,
        marcarLeidoNota: NotaController.marcarLeidoNota,
        deleteNotasLeidos: NotaController.deleteNotasLeidos
    },
    graphiql: true,
}));

const PORT = 6070
app.listen(PORT, () => {
    const msg = `Servidor corriendo en puerto: http://localhost:${PORT}`;
    console.log(msg)
});

/*
    query{
        getNotas {
            titulo,
            descripcion,
            timestamp
        } 
    }

    mutation{
        createNota(datos: {
            titulo: 'Crear base de datos',
            descripcion: 'EN server MySQL'
        }) {
            
        }
    }

*/