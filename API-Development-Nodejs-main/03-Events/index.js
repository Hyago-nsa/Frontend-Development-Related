const util = require("util");
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterEndereco(idUsuario, callback) {
  return callback(null, {
    rua: "Rua onde mora",
    numero: "Numero",
  });
}
function obterUsuario() {
  return new Promise(function resolvePromise(resolve, reject) {
    return resolve({
      id: 1,
      nome: "Nome",
      dataNascimento: new Date(),
    });
    // return reject(new Error("Deu error no obterUsuario"));
  });
}
function obterTelefone() {
  return new Promise(function resolvePromise(resolve, reject) {
    return resolve({
      telefone: "telefone",
      ddd: "ddd",
    });
    // return reject(new Error("Deu error no ObterTelefone"));
  });
}

async function main() {
  try {
    console.time("Medida promise");
    const usuario = await obterUsuario();
    const telefone = await obterTelefone(usuario.id);
    const endereco = await obterEnderecoAsync(usuario.id);

    /* Também pode ser feito de tal maneira, substituindo as linhas 34 e 35: 
      const resultado = await Promise.all([
        obterTelefone(usuario.id),
        obterEnderecoAsync(usuario.id),
      ]);
  
      const telefone = resultado[0];
      const endereco = resultado[1];
    */

    console.log(`
    Nome: ${usuario.nome},
    Telefone: ${telefone.ddd} ${telefone.telefone},
    Endereço: ${endereco.rua} ${endereco.numero}
    `);
  } catch (error) {
    console.error("Deu error no main: ", main);
  }
  console.timeEnd("Medida promise");
}

main();
