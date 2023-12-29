const service = require("./service");

async function main() {
  try {
    const result = await service.obterPessoas("a");
    const names = [];

    /* For loop */
    for (let i = 0; i <= result.results.length - 1; i++) {
      const pessoa = result.results[i];
      names.push(pessoa.name);
    }
    console.log(names);

    /* For in Loop*/
    for (let i in result.results) {
      const pessoa = result.results[i];
      names.push(pessoa.name);
    }
    console.log(names);

    /* For of Loop */
    for (pessoa of result.results) {
      names.push(pessoa.name);
    }
    console.log(names);
  } catch (error) {
    console.error("Deu ruim no main", error);
  }
}

main();
