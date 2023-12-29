const service = require("./service");

async function main() {
  try {
    const result = await service.obterPessoas("a");

    const names = result.results.map((pessoa) => pessoa.name);
    console.log(names);
  } catch (error) {
    console.error("Deu ruim no 2.map.js -> main", error);
  }
}

main();
