const service = require('./service')

Array.prototype.meuMap = function(callback){
  const novoArrayMapeado = []

  for(let indice=0; indice <= this.length-1;indice++){
    const resultado = callback(this[indice], indice)

    novoArrayMapeado.push(resultado)
  }

  return novoArrayMapeado;

}
async function main(){
    try {

        const resultas = await service.obterPessoas(`a`)
        //const names = []
       /* resultas.results.forEach(function(item){
          names.push(item.name)
        })*/

       /*const names = resultas.results.map(function(pessoa){
            return pessoa.name

        })*/

        //const names = resultas.results.map((pessoa)=>pessoa.name)

        const names =resultas.results.meuMap(function(pessoa, indice){
            return pessoa.name
        })
        console.log('names',names)
        
    } catch (error) {
        console.error('Deu ruim geral!!!!',error)
    }
}

main()