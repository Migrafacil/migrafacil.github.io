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
finalizarTarefa: async (req, res) => {
  let { id } = req.query;
  try {
    results = await tarefasModel.sistuacaoTarefa(2, id);
    res.redirect("/");
  } catch (e) {
    console.log(e);
    res.json({ erro: "Falha ao acessar dados" });
  }
},

exibirTarefaId: async (req, res) => {
  res.locals.moment = moment;
  let { id } = req.query;
  console.log(id);
  try {
    let tarefa = await tarefasModel.findId(id);
    res.render("pages/adicionar", {
      dados: {
        id_tarefa: id,
        tarefa: tarefa[0].nome_tarefa,
        prazo: tarefa[0].prazo_tarefa,
        situacao: tarefa[0].situacao_tarefa,
      },
      listaErros: null,
    });