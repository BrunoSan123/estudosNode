const{obterPessoas} = require('./service');


Array.prototype.meuReduce =function(callback,valorIncicial){

    let valorFinal = typeof valorIncicial !== undefined? valorIncicial : this[0]

    for(let index =0; index<=this.length-1; index++){
        valorFinal = callback(valorFinal, this[index], this)

    }

    return valorFinal
}

async function main(){

  try {

    const {results} = await obterPessoas(`a`)

     const pesos = results.map(item=>parseInt(item.height))
     console.log('pesos',pesos)
    /* const total =pesos.reduce((anterior, proximo)=>{
         return anterior+proximo
     })*/

     const minhalista =[
         ['Erick', 'Wendel'],
         ['Chica', 'Hilux']
         
     ]

     const total =minhalista.meuReduce((anterior,proximo)=>{
         return anterior.concat(proximo)

     }, []).join(',')

     console.log('Toal:', total)

      
  } catch (error) {
      console.error('Deu ruim mano!!!!!', error)
  }

}

main()