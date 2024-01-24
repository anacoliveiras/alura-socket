import { MongoClient } from "mongodb";

const cliente = new MongoClient(
  "mongodb+srv://admin:12345@cluster0.bndhgpj.mongodb.net/?retryWrites=true&w=majority"
);

let documentosColecao;

try {
  await cliente.connect();

  const db = cliente.db("alura-websockets");
  documentosColecao = db.collection("documentos");

  console.log("conectado ao banco");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao };
