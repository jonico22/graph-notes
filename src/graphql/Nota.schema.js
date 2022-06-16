import { buildSchema } from 'graphql';

const NotaSchema = buildSchema(`
  input NotaInput {
    titulo: String,
    descripcion: String,
    timestamp: Float
  }
  type Nota {
    id: ID!
    titulo: String,
    descripcion: String,
    leido: Boolean,
    timestamp: Float
  }
  type Query {
    getNotas: [Nota],
  }
  type Mutation {
    createNota(datos: NotaInput): Nota
    marcarLeidoNota(id: ID!): Nota,
    deleteNotasLeidos: [Nota],
  }
`);

export default NotaSchema;