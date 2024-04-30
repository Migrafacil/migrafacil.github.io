var pool = require("../../config/pool_conexoes");
const tarefasModel = require('./tarefasModel');

// Listar todas as tarefas ativas
tarefasModel.findAll().then(tarefas => {
  console.log(tarefas);
}).catch(error => {
  console.error(error);
});

// Criar uma nova tarefa
const dadosForm = {
  nome_tarefa: 'Nova tarefa',
  descricao_tarefa: 'Descrição da tarefa',
  //...
};
tarefasModel.create(dadosForm).then(tarefa => {
  console.log(tarefa);
}).catch(error => {
  console.error(error);
});