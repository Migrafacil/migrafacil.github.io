const pginicialModel = require("../models/pginicial");
const app = express()
const pginicialController = {
  index: async (req, res) => {
    try {
      const tarefas = await pginicialModel.getTarefas();
      res.render('index', { tarefas });
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao obter tarefas');
    }
  },
 
  adicionarTarefa: async (req, res) => {
    try {
      const { tarefa, prazo, situacao } = req.body;
      await pginicialModel.addTarefa(tarefa, prazo, situacao);
      res.redirect('/');
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao adicionar tarefa');
    }
  },
 
  alterarSituacao: async (req, res) => {
    try {
      const { id, situacao } = req.body;
      await pginicialModel.updateSituacao(id, situacao);
      res.redirect('/');
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao alterar situação da tarefa');
    }
  },
 
  excluirTarefa: async (req, res) => {
    try {
      const { id } = req.params;
      await pginicialModel.deleteTarefa(id);
      res.redirect('/');
    } catch (err) {
      console.error(err);
      res.status(500).send('Erro ao excluir tarefa');
    }
  }
};