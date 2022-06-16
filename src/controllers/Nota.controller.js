import Nota from '../classes/Nota.class.js';
import crypto from 'crypto';

const notas = [];

const NotaController = {
    getNotas() {
        return notas;
    },
    
    createNota({ datos }) {
        const id = crypto.randomBytes(10).toString('hex');
        const nuevoNota = new Nota(id, datos)
        notas.push(nuevoNota);
        return nuevoNota;
    },

    marcarLeidoNota({ id }) {
        const Nota = notas.find(r => r.id == id)
        if (!Nota) {
        throw new Error('Nota not found')
        }
        Nota.leido = true
        return Nota
    },
      
    deleteNotasLeidos() {
        let i = 0
        const deleted = []
        while (i < notas.length) {
          if (notas[ i ].leido) {
            deleted.push(notas.splice(i, 1)[ 0 ])
          } else {
            i++
          }
        }
        return deleted
    }
}

export default NotaController;