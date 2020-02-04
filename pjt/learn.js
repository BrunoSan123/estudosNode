
/*
0 Oberter um usuario
1 Obter o número de telefone a partir do seu id
2 obter endereço pelo id */

// importa modulo interno do Node


const util = require('util')

const obtertEnderecoAsync = util.promisify(obterEnd)
function obterUsiario(){
  return new Promise(function resolvePromise(resolve,reject){
    setTimeout(function(){
      return resolve({
        id: 1,
        nome: 'Bruno Barreto',
        nascimento: new Date()

      })
    }, 1000)


});
}

function obterTelefone(idUser){
  return new Promise(function resolvePromise(resolve,reject){

    setTimeout(() =>{
      return resolve({
         telefone: '32612322',
         ddd:31
      })
    }, 2000)
  })


}

function obterEnd(idUser, callback){

  setTimeout(() =>{
    return callback(null,{
      rua: 'São Sebastião',
      numero: 277
    })
  }, 2000)

}

//adicionar a palavra asynca na função e  ela retorna  uma promise
main()
async function main(){


  try {

    console.time('medida-promise')
    const usuario = await obterUsiario()
    //const telefone = await obterTelefone(usuario.id)
    //const endereco = await obtertEnderecoAsync(usuario.id)
    const resultado = await Promise.all([

      obterTelefone(usuario.id),
      obtertEnderecoAsync(usuario.id)
    ])

    const endereco = resultado[1]
    const telefone = resultado[0]
    console.log(`

     Nome: ${usuario.nome},
     Telefone:(${telefone.ddd}) ${telefone.telefone},
     Endereco: ${endereco.rua},  ${endereco.numero}




      `)
      console.timeEnd('medida-promise')
  }
    catch(error){
      console.error('Deu ruim mano',error)
    }


}


/*const usuarioPromise = obterUsiario()
usuarioPromise
.then(function(usuario){
  return obterTelefone(usuario.id)
    .then(function resolverTelefone(result){
      return{
        usuario:{
          nome: usuario.nome,
          id: usuario.id

        },
        telefone: result

      }

  })
})
.then(function(resultado){
  const endereco = obtertEnderecoAsync(resultado.usuario.id)

  return endereco.then(function resolverEndereco(result){
    return{
      usuario: resultado.usuario,
      telefone: resultado.telefone,
      endereco: result

    }
  })
})
.then(function(resultado){
  console.log(`

Nome: ${resultado.usuario.nome}
Endereço: ${resultado.endereco.rua}, ${resultado.endereco.numero}
Telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}


    `)

}).catch(function(error){
  console.error('Deu ruim Mano', error)
})
/*function resolverUser(erro, usuario){
  console.log('usuario', usuario);
}

 obterUsiario(function resolverUser(error, usuario){
   if(error){
     console.log('Deu RUIM', error);
     return;
   }


 obterTelefone(usuario.id, function resolveTelefone(error1, telefone){

  if(error1){
    console.log('Deu RUIM no Telefone', error);
    return;
  }


obterEnd(usuario.id, function resolverEnd(error2, endereco){

  if(error2){
    console.log('Deu RUIM no endereço', error);
    return;
  }
  console.log(`
    Nome: ${usuario.nome}
    Endereco: ${endereco.rua}, ${endereco.numero}
    Telefone: (${telefone.ddd}),${telefone.telefone}



    `)
  })
})
})*/
