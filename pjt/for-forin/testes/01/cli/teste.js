const{deepEqual,ok} = require('assert')
const database = require('./cli')
const DEFAULT_ITEM_CADASTRAR={nome:'flash', poder:'speed',id:1}

describe('Suite de Manipulação de Hérois', ()=>{

 it('deve pesquisar herói usando arquivos', async ()=>{

    const expected =DEFAULT_ITEM_CADASTRAR
    const [resultado] = await database.listar(expected.id)
    //const posicaoUm= resultado[0]


    deepEqual(resultado, expected)

 })
 
 
 
 
 
    /*  it('deve cadastrar um herói usando arquivos', async()=>{

        const expected= DEFAULT_ITEM_CADASTRAR

        ok(null, expected)
    })*/
})