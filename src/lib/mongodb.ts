import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI || '' // Adicione sua URI no arquivo .env
const options = {}

let client: MongoClient
let clientPromise: Promise<MongoClient>

if (!process.env.MONGODB_URI) {
  throw new Error('Por favor, adicione a variável MONGODB_URI no arquivo .env')
}

if (process.env.NODE_ENV === 'development') {
  // Para evitar criar múltiplas conexões em desenvolvimento
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // Em produção, sempre cria uma nova conexão
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise
