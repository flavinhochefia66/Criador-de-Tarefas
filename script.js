
let tarefas = []
let id = 0
let contador = 0

function trocar(){

const body =  document.body

body.classList.toggle('white-mode')

}



function criar(){

id = id + 1


contador_de_tarefas = document.getElementById('contador_de_tarefas')

contador++
contador_de_tarefas.innerText = contador

titulo_da_tarefa = document.getElementById('titulo').value;
descricao_da_tarefa = document.getElementById('descricao').value;
vencimento_da_tarefa = document.getElementById('vencimento').value;
status_da_tarefa = document.getElementById('status').value;

tarefas.push({id: id, titulo: titulo_da_tarefa, descricao: descricao_da_tarefa, vencimento: vencimento_da_tarefa, status: status_da_tarefa})

const tarefas_criadas = document.getElementById('tarefas_criadas')


var dia = vencimento_da_tarefa.split('-')[2]
var mes = vencimento_da_tarefa.split('-')[1]
var ano = vencimento_da_tarefa.split('-')[0]

const today = new Date();
 const yyyy = today.getFullYear();
 let mm = today.getMonth() + 1; 
 let dd = today.getDate();
 
 if (dd < 10) dd = '0' + dd;
 if (mm < 10) mm = '0' + mm;
    
const formattedToday = dd + '/' + mm + '/' + yyyy;

tarefas_criadas.innerHTML+=`
<p>Id: ${id}</p>
<p>Título: ${titulo_da_tarefa}</p>
<p>Descrição: ${descricao_da_tarefa}</p>
<p>Vencimento: ${vencimento_da_tarefa == ''?formattedToday:`${dia}/${mes}/${ano}`}</p>
<p>Status: ${status_da_tarefa}</p><br>
`

}

function buscar(){

let id_da_tarefa = parseInt(document.getElementById('id_da_tarefa').value);

const response = tarefas.filter(x => x.id === id_da_tarefa)

var dia = response[0].vencimento.split('-')[2]
var mes = response[0].vencimento.split('-')[1]
var ano = response[0].vencimento.split('-')[0]


document.getElementById('editar_tarefas').innerHTML=`
<br>
<p>Título: ${response[0].titulo}</p>
<p>Novo Título:</p>
<input id='novo_titulo'>
<br>
<p>Descrição: ${response[0].descricao}</p>
<p>Nova Descrição:</p>
<input id='nova_descricao'>
<br>
<p>Vencimento: ${dia}/${mes}/${ano}</p>
<p>Novo Vencimento:</p>
<input id='novo_vencimento' type='date'>
<br>
<p>Status: ${response[0].status}</p>
<p>Novo Status:</p>
<input id='novo_status'>
<br><br>
<button id='confirmar'>Confirmar a edição</button>
<button id='cancelar'>Cancelar</button>
`

function cancelar(){

document.getElementById('editar_tarefas').innerHTML=``


}

document.getElementById('cancelar').addEventListener('click', cancelar)



function confirmar(){

novo_titulo = document.getElementById('novo_titulo').value
nova_descricao = document.getElementById('nova_descricao').value
novo_vencimento = document.getElementById('novo_vencimento').value
novo_status = document.getElementById('novo_status').value

var dia = novo_vencimento.split('-')[2]
var mes = novo_vencimento.split('-')[1]
var ano = novo_vencimento.split('-')[0]

const today = new Date();
 const yyyy = today.getFullYear();
 let mm = today.getMonth() + 1; 
 let dd = today.getDate();
 
 if (dd < 10) dd = '0' + dd;
 if (mm < 10) mm = '0' + mm;
    
const formattedToday = dd + '/' + mm + '/' + yyyy;

response[0].titulo = novo_titulo 
response[0].descricao =nova_descricao
response[0].vencimento = `${novo_vencimento == ''?formattedToday:`${dia}/${mes}/${ano}`}`
response[0].status =novo_status



tarefas_criadas.innerText=``

tarefas.forEach((item)=>{
 tarefas_criadas.innerHTML+=`
 <p>Id: ${item.id}</p>
 <p>Título: ${item.titulo}</p>
 <p>Descrição: ${item.descricao}</p>
 <p>Vencimento: ${item.vencimento}</p>
 <p>Status: ${item.status}</p><br>
 `
})



}

document.getElementById('confirmar').addEventListener('click', confirmar)

}

function buscar2(){

let id_da_tarefa2 = parseInt(document.getElementById('id_da_tarefa2').value);
const response = tarefas.filter(x => x.id === id_da_tarefa2)

var dia = vencimento_da_tarefa.split('-')[2]
var mes = vencimento_da_tarefa.split('-')[1]
var ano = vencimento_da_tarefa.split('-')[0]

document.getElementById('deletar_tarefas').innerHTML=`
<br>
<p>Título: ${response[0].titulo}</p>
<p>Descrição: ${response[0].descricao}</p>
<p>Vencimento: ${dia}/${mes}/${ano}</p>
<p>Status: ${response[0].status}</p>
<br>
<button id='deletar_tarefa'>Deletar</button>
<button id='cancelar_deletar'>Cancelar</button>
`
document.getElementById('cancelar_deletar').addEventListener('click', cancelar_deletar)
document.getElementById('deletar_tarefa').addEventListener('click', deletar_tarefa)
}

function deletar_tarefa(){


contador = contador - 1
contador_de_tarefas.innerText = contador

let id_da_tarefa2 = parseInt(document.getElementById('id_da_tarefa2').value);

const response = tarefas.filter(x => x.id !== id_da_tarefa2)
tarefas = response

tarefas_criadas.innerText=``


tarefas.forEach((item)=>{
    tarefas_criadas.innerHTML+=`
    <p>Id: ${item.id}</p>
    <p>Título: ${item.titulo}</p>
    <p>Descrição: ${item.descricao}</p>
    <p>Vencimento: ${item.vencimento}</p>
    <p>Status: ${item.status}</p><br>
    `
   })


   document.getElementById('deletar_tarefas').innerHTML=``   

}



function cancelar_deletar(){

document.getElementById('deletar_tarefas').innerHTML=``


}


