CREATE TABLE Candidato (
  CandidatoID INT PRIMARY KEY,
  NomeCandidato VARCHAR(255) NOT NULL,
  CPF Candidato VARCHAR(11) NOT NULL,
  DataNascimento DATE NOT NULL,
  EnderecoCandidato VARCHAR(255) NOT NULL,
  LogradouroCandidato VARCHAR(255) NOT NULL,
  BairroCandidato VARCHAR(255) NOT NULL,
  CidadeCandidato VARCHAR(255) NOT NULL,
  UFCandidato CHAR(2) NOT NULL,
  CEP Candidato VARCHAR(8) NOT NULL,
  EmailCandidato VARCHAR(255) NOT NULL,
  CelularCandidato VARCHAR(15) NOT NULL,
  ContatoCandidato VARCHAR(255) NOT NULL
);

CREATE TABLE Cargo (
  CargoID INT PRIMARY KEY,
  NomeCargo VARCHAR(255) NOT NULL,
  EmpresaID INT NOT NULL,
  CONSTRAINT FK_Cargo_Empresa FOREIGN KEY (EmpresaID) REFERENCES Empresa(EmpresaID)
);

CREATE TABLE Empresa (
  EmpresaID INT PRIMARY KEY,
  RazaoSocial VARCHAR(255) NOT NULL,
  Contem VARCHAR(255) NOT NULL,
  Oferecer VARCHAR(255) NOT NULL,
  EnderecoEmprego VARCHAR(255) NOT NULL,
  LogradouroEmprego VARCHAR(255) NOT NULL,
  BairroEmprego VARCHAR(255) NOT NULL,
  CidadeEmprego VARCHAR(255) NOT NULL,
  UFEmprego CHAR(2) NOT NULL,
  CEP Emprego VARCHAR(8) NOT NULL,
  CNPJEmpresa VARCHAR(14) NOT NULL
);

CREATE TABLE Cliente (
  ClienteID INT PRIMARY KEY,
  NomeCliente VARCHAR(255) NOT NULL,
  EnderecoCliente VARCHAR(255) NOT NULL,
  LogradouroCliente VARCHAR(255) NOT NULL,
  BairroCliente VARCHAR(255) NOT NULL,
  CidadeCliente VARCHAR(255) NOT NULL,
  UFCliente CHAR(2) NOT NULL,
  CEPCliente VARCHAR(8) NOT NULL,
  EmailCliente VARCHAR(255) NOT NULL,
  CelularCliente VARCHAR(15) NOT NULL,
  ContatoCliente VARCHAR(255) NOT NULL
);

CREATE TABLE Imovel (
  ImovelID INT PRIMARY KEY,
  EnderecoImovel VARCHAR(255) NOT NULL,
  LogradouroImovel VARCHAR(255) NOT NULL,
  BairroImovel VARCHAR(255) NOT NULL,
  CidadeImovel VARCHAR(255) NOT NULL,
  UFImovel CHAR(2) NOT NULL,
  CEPImovel VARCHAR(8) NOT NULL,
  IdImoveis INT NOT NULL,
  CONSTRAINT FK_Imovel_IdImoveis FOREIGN KEY (IdImoveis) REFERENCES Cliente(ClienteID)
);

CREATE TABLE Vaga (
  VagaID INT PRIMARY KEY,
  DescricaoVaga TEXT NOT NULL,
  CargaHoraria VARCHAR(255) NOT NULL,
  IdVagas INT NOT NULL,
  CONSTRAINT FK_Vaga_IdVagas FOREIGN KEY (IdVagas) REFERENCES Imovel(ImovelID)
);

CREATE TABLE Assinatura (
  AssinaturaID INT PRIMARY KEY,
  LogradouroAssinatura VARCHAR(255) NOT NULL,
  BairroAssinatura VARCHAR(255) NOT NULL,
  CidadeAssinatura VARCHAR(255) NOTNULL,
  UFAssinatura CHAR(2) NOT NULL,
  CEPAssinatura VARCHAR(8) NOT NULL,
  IdAssinatura INT NOT NULL,
  CONSTRAINT FK_Assinatura_IdAssinatura FOREIGN KEY (IdAssinatura) REFERENCES Cliente(ClienteID)
);

CREATE TABLE Pagamento (
  PagamentoID INT PRIMARY KEY,
  DataPagamento DATE NOT NULL,
  ValorPago DECIMAL(10,2) NOT NULL,
  IdPagamento INT NOT NULL,
  CONSTRAINT FK_Pagamento_IdPagamento FOREIGN KEY (IdPagamento) REFERENCES Assinatura(AssinaturaID)
);