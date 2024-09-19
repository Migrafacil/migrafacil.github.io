CREATE DATABASE  IF NOT EXISTS `bpysjgvodzhdqziw3zwg` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bpysjgvodzhdqziw3zwg`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: bpysjgvodzhdqziw3zwg
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alugar`
--

DROP TABLE IF EXISTS `alugar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alugar` (
  `idalugar` int NOT NULL,
  `nome_alugar` varchar(255) DEFAULT NULL,
  `cnpj_alugar` char(14) DEFAULT NULL,
  `cpf_alugar` char(8) DEFAULT NULL,
  `email_alugar` varchar(255) DEFAULT NULL,
  `celular_alugar` varchar(14) DEFAULT NULL,
  `enderco_alugar` varchar(255) DEFAULT NULL,
  `logradouro_alugar` varchar(100) DEFAULT NULL,
  `bairro_alugar` varchar(255) DEFAULT NULL,
  `cidade_alugar` varchar(255) DEFAULT NULL,
  `uf_alugar` char(2) DEFAULT NULL,
  `cep_alugar` char(8) DEFAULT NULL,
  PRIMARY KEY (`idalugar`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alugar`
--

LOCK TABLES `alugar` WRITE;
/*!40000 ALTER TABLE `alugar` DISABLE KEYS */;
/*!40000 ALTER TABLE `alugar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alugar_has_cliente`
--

DROP TABLE IF EXISTS `alugar_has_cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alugar_has_cliente` (
  `alugar_idalugar` int NOT NULL,
  `cliente_ClienteID` int NOT NULL,
  PRIMARY KEY (`alugar_idalugar`,`cliente_ClienteID`),
  KEY `fk_alugar_has_cliente_cliente1_idx` (`cliente_ClienteID`),
  KEY `fk_alugar_has_cliente_alugar1_idx` (`alugar_idalugar`),
  CONSTRAINT `fk_alugar_has_cliente_alugar1` FOREIGN KEY (`alugar_idalugar`) REFERENCES `alugar` (`idalugar`),
  CONSTRAINT `fk_alugar_has_cliente_cliente1` FOREIGN KEY (`cliente_ClienteID`) REFERENCES `cliente` (`ClienteID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alugar_has_cliente`
--

LOCK TABLES `alugar_has_cliente` WRITE;
/*!40000 ALTER TABLE `alugar_has_cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `alugar_has_cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alugar_has_imovel`
--

DROP TABLE IF EXISTS `alugar_has_imovel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alugar_has_imovel` (
  `alugar_idalugar` int NOT NULL,
  `imovel_ImovelID` int NOT NULL,
  PRIMARY KEY (`alugar_idalugar`,`imovel_ImovelID`),
  KEY `fk_alugar_has_imovel_imovel1_idx` (`imovel_ImovelID`),
  KEY `fk_alugar_has_imovel_alugar1_idx` (`alugar_idalugar`),
  CONSTRAINT `fk_alugar_has_imovel_alugar1` FOREIGN KEY (`alugar_idalugar`) REFERENCES `alugar` (`idalugar`),
  CONSTRAINT `fk_alugar_has_imovel_imovel1` FOREIGN KEY (`imovel_ImovelID`) REFERENCES `imovel` (`ImovelID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alugar_has_imovel`
--

LOCK TABLES `alugar_has_imovel` WRITE;
/*!40000 ALTER TABLE `alugar_has_imovel` DISABLE KEYS */;
/*!40000 ALTER TABLE `alugar_has_imovel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assinatura`
--

DROP TABLE IF EXISTS `assinatura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assinatura` (
  `AssinaturaID` int NOT NULL,
  `Logradouro_Assinatura` varchar(100) NOT NULL,
  `Bairro_Assinatura` varchar(255) NOT NULL,
  `Cidade_Assinatura` varchar(255) NOT NULL,
  `UF_Assinatura` char(2) NOT NULL,
  `CEP_Assinatura` char(8) NOT NULL,
  `IdAssinatura` int NOT NULL,
  PRIMARY KEY (`AssinaturaID`),
  KEY `FK_Assinatura_IdAssinatura` (`IdAssinatura`),
  CONSTRAINT `FK_Assinatura_IdAssinatura` FOREIGN KEY (`IdAssinatura`) REFERENCES `cliente` (`ClienteID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assinatura`
--

LOCK TABLES `assinatura` WRITE;
/*!40000 ALTER TABLE `assinatura` DISABLE KEYS */;
/*!40000 ALTER TABLE `assinatura` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `candidato`
--

DROP TABLE IF EXISTS `candidato`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidato` (
  `CandidatoID` int NOT NULL,
  `Nome_Candidato` varchar(255) NOT NULL,
  `CPF_Candidato` varchar(11) NOT NULL,
  `Data_Nascimento` date NOT NULL,
  `Endereco_Candidato` varchar(255) NOT NULL,
  `Logradouro_Candidato` varchar(255) NOT NULL,
  `Bairro_Candidato` varchar(255) NOT NULL,
  `Cidade_Candidato` varchar(255) NOT NULL,
  `UF_Candidato` char(2) NOT NULL,
  `CEP_Candidato` char(8) NOT NULL,
  `Email_Candidato` varchar(255) NOT NULL,
  `Celular_Candidato` varchar(15) NOT NULL,
  `Contato_Candidato` varchar(255) NOT NULL,
  `vaga_VagaID` int NOT NULL,
  PRIMARY KEY (`CandidatoID`),
  KEY `fk_candidato_vaga1_idx` (`vaga_VagaID`),
  CONSTRAINT `fk_candidato_vaga1` FOREIGN KEY (`vaga_VagaID`) REFERENCES `vaga` (`VagaID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidato`
--

LOCK TABLES `candidato` WRITE;
/*!40000 ALTER TABLE `candidato` DISABLE KEYS */;
/*!40000 ALTER TABLE `candidato` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cargo`
--

DROP TABLE IF EXISTS `cargo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cargo` (
  `CargoID` int NOT NULL,
  `NomeCargo` varchar(255) NOT NULL,
  `EmpresaID` int NOT NULL,
  PRIMARY KEY (`CargoID`),
  KEY `FK_Cargo_Empresa` (`EmpresaID`),
  CONSTRAINT `FK_Cargo_Empresa` FOREIGN KEY (`EmpresaID`) REFERENCES `empresa` (`EmpresaID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cargo`
--

LOCK TABLES `cargo` WRITE;
/*!40000 ALTER TABLE `cargo` DISABLE KEYS */;
/*!40000 ALTER TABLE `cargo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cliente`
--

DROP TABLE IF EXISTS `cliente`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cliente` (
  `ClienteID` int NOT NULL,
  `Nome_Cliente` varchar(255) NOT NULL,
  `Endereco_Cliente` varchar(255) NOT NULL,
  `Logradouro_Cliente` varchar(100) NOT NULL,
  `Bairro_Cliente` varchar(255) NOT NULL,
  `Cidade_Cliente` varchar(255) NOT NULL,
  `UF_Cliente` char(2) NOT NULL,
  `CEP_Cliente` char(8) NOT NULL,
  `Email_Cliente` varchar(255) NOT NULL,
  `Celular_Cliente` varchar(15) NOT NULL,
  `Contato_Cliente` varchar(255) NOT NULL,
  PRIMARY KEY (`ClienteID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cliente`
--

LOCK TABLES `cliente` WRITE;
/*!40000 ALTER TABLE `cliente` DISABLE KEYS */;
/*!40000 ALTER TABLE `cliente` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `empresa`
--

DROP TABLE IF EXISTS `empresa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `empresa` (
  `EmpresaID` int NOT NULL,
  `RAZAOSOCIAL` varchar(255) NOT NULL,
  `CEP_EMPRESA` char(8) NOT NULL,
  `CNPJ _EMPRESA` char(14) NOT NULL,
  `USUARIO_ID_EMPRESA` int NOT NULL,
  `EMAIL_EMPRESA` varchar(80) NOT NULL,
  `NUMERO_EMPRESA` char(10) NOT NULL,
  `COMPLEMENTO_EMPRESA` varchar(20) DEFAULT NULL,
  `SENHA_EMPRESA` varchar(45) NOT NULL,
  PRIMARY KEY (`EmpresaID`),
  KEY `fk_empresa_usuario1_idx` (`USUARIO_ID_EMPRESA`),
  CONSTRAINT `fk_empresa_usuario1` FOREIGN KEY (`USUARIO_ID_EMPRESA`) REFERENCES `usuario` (`ID_USUARIO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresa`
--

LOCK TABLES `empresa` WRITE;
/*!40000 ALTER TABLE `empresa` DISABLE KEYS */;
/*!40000 ALTER TABLE `empresa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imovel`
--

DROP TABLE IF EXISTS `imovel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imovel` (
  `ImovelID` int NOT NULL,
  `Endereco_Imovel` varchar(255) NOT NULL,
  `Logradouro_Imovel` varchar(100) NOT NULL,
  `Bairro_Imovel` varchar(255) NOT NULL,
  `Cidade_Imovel` varchar(255) NOT NULL,
  `UF_Imovel` char(2) NOT NULL,
  `CEP_Imovel` char(8) NOT NULL,
  `IdImoveis` int NOT NULL,
  PRIMARY KEY (`ImovelID`),
  KEY `FK_Imovel_IdImoveis` (`IdImoveis`),
  CONSTRAINT `FK_Imovel_IdImoveis` FOREIGN KEY (`IdImoveis`) REFERENCES `cliente` (`ClienteID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imovel`
--

LOCK TABLES `imovel` WRITE;
/*!40000 ALTER TABLE `imovel` DISABLE KEYS */;
/*!40000 ALTER TABLE `imovel` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pagamento`
--

DROP TABLE IF EXISTS `pagamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pagamento` (
  `PagamentoID` int NOT NULL,
  `DataPagamento` date NOT NULL,
  `ValorPago` decimal(10,2) NOT NULL,
  `IdPagamento` int NOT NULL,
  PRIMARY KEY (`PagamentoID`),
  KEY `FK_Pagamento_IdPagamento` (`IdPagamento`),
  CONSTRAINT `FK_Pagamento_IdPagamento` FOREIGN KEY (`IdPagamento`) REFERENCES `assinatura` (`AssinaturaID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagamento`
--

LOCK TABLES `pagamento` WRITE;
/*!40000 ALTER TABLE `pagamento` DISABLE KEYS */;
/*!40000 ALTER TABLE `pagamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_usuario`
--

DROP TABLE IF EXISTS `tipo_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_usuario` (
  `idtipo_usuario` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`idtipo_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_usuario`
--

LOCK TABLES `tipo_usuario` WRITE;
/*!40000 ALTER TABLE `tipo_usuario` DISABLE KEYS */;
INSERT INTO `tipo_usuario` VALUES (1),(2),(3);
/*!40000 ALTER TABLE `tipo_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `ID_USUARIO` int NOT NULL AUTO_INCREMENT,
  `EMAIL_USUARIO` varchar(100) NOT NULL,
  `CPF_USUARIO` varchar(15) NOT NULL,
  `SENHA_USUARIO` char(60) NOT NULL,
  `NOME_USUARIO` varchar(45) NOT NULL,
  `tipo_usuario_idtipo_usuario` int NOT NULL,
  PRIMARY KEY (`ID_USUARIO`),
  KEY `fk_usuario_tipo_usuario1_idx` (`tipo_usuario_idtipo_usuario`),
  CONSTRAINT `fk_usuario_tipo_usuario1` FOREIGN KEY (`tipo_usuario_idtipo_usuario`) REFERENCES `tipo_usuario` (`idtipo_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (8,'arroyo@gmail.com','314.844.998-35','$2a$12$pH3LNUAvqGQis8NUl1kIGu7JPfCO.O0HNZrFSQK/mdCe9VB6gFCvi','luanny',0),(9,'https@gmail.com','256.322.566-98','$2a$12$jjUtJdIEpDAQU6gDsvYHZO8Incktsp9I9lmyGbdJxzb1d/hWeClja','luanny ',0),(10,'eliana@gmail.com','555.555.555-55','$2a$12$xffx0I1VNcxgsiiuSSMQSuaXawuzwMD3uP/xocayTQP1GJn/NtdmO','eliana',0),(11,'cleo.arroyo@porto.com','419.500.438-19','$2a$12$hYdIGJc/mHbHoyTROswm9egISo2CbXNFpPR3ds7fsSvYDBOsT0zxW','luanny',0),(12,'cleo.arroyo@hilu.com','419.500.438-10','$2a$12$hYdIGJc/mHbHoyTROswm9egISo2CbXNFpPR3ds7fsSvYDBOsT0zxW','luanny',0),(13,'julia@santos.com','360.233.656-51','$2a$12$U7wlUxRZkUKC1Z6SLRvAXeG5HZcCJeApkfofV0dLE126dUdgLAIYu','julia',0),(14,'lui@gmail.com','314.844.998-98','$2a$12$8gEAaV135WAJFW00py3VZeB3apjJ9qiqRKM.zrt5pYVeEg4SNpEAa','luanny',0),(15,'lua.arroyo@gmail.com','41950043819','$2a$12$AUb4v0DrwbqJJgVqc/46.OnuMDBLwJveoqvh5nfXVQyWjvZ3Ln9Sq','luanny ',0),(16,'luanny@arroyo.com','45645645689','$2a$12$AUb4v0DrwbqJJgVqc/46.OnuMDBLwJveoqvh5nfXVQyWjvZ3Ln9Sq','luanny',0),(17,'rafa@fael.com','314.844.99698','$2a$12$KTCKo4f5iKupr7.oXrcVHOhkTOQeFUXdUfsnfZ30klvckCZcBHm5S','luanny',0),(18,'luanny@arroyosilva.com','41950043818','$2a$12$KTCKo4f5iKupr7.oXrcVHOhkTOQeFUXdUfsnfZ30klvckCZcBHm5S','luanny',0),(19,'arroyo2006@gmail.com','314.784.498-32','$2a$12$gmXDW1uQJ1Lr0tIc534wJuDH32whvP2EwBjB3xvnumz6mzwdd0cMS','luanny arroyo',0),(20,'popo@gmail.com','32165498725','$2a$12$3y/Jv3IvsxE99Jek/KZqBuFVw.17YXFAMiVeNvnXMjw3tCxzb04.O','luanny arroyo',0),(21,'juliamarques.brasil@gmail.com','55063303838','$2a$12$ZLGsLzVi/1nflz.QPBrSvu.FJ14tqJRDvxs4yQOOFqYO.oVbBVlSy','julia marques',0),(22,'juli@gmail.com','314.844.25665','$2a$12$z5tEB4zu/SpsWdox7lfKfO5a12GMHOW5YH52HGtghFxu9QY1pbXW.','julia marques',0),(23,'eu@gmail.com','41950043889','$2a$12$nzvxvVYjRupSU2y/0Bvb8e6dWtMLNwuSgUt26ONa351E9VHwdl5AO','euu',0),(25,'acme@acme.com','123.456.789-12','$2a$12$.1wg9T532EhYUlCrYMIP9u.EafiPzIigTEi4z08n0EqNWQHccg6/q','Indústrias ACME Inc.',1),(26,'fefe@gmail.com','321.654.987-98','$2a$12$tr7/V6r1rfiSOUp6W5izJePSG46uocyf.FvKCBv3kZDUIOWePULSa','luanny arroyo',1),(27,'piper@gmail.com','635.241.987-98','$2a$12$Cr.WR//pJ7ys0VqtqMjcj.LjWNv8RU8euwyB47Xg7AiqNgZhlxlaS','luanny arroyo',1),(28,'tere@gmail.com','321.654.987-89','$2a$12$cnXjnRI20tzT/RklVd7qteBxRN3UNU1egXH/yz86dSj7CVvhwJnB6',' lolo',1),(29,'julio@gmail.com','887.945.465-65','$2a$12$IQes1FYoBIdtCcZ156cvnuran2QDx18SDQtXxNEHvGJRZcYJfzGNa','luanny',1),(30,'juca@gmail.com','321.654.987-97','$2a$12$icDIZy.JzbxhLCfvGf1ixe5cpYvo.FKB8qRUDP5yb1TpJyLx5cIMC','joca',1),(31,'juoi@gmail.com','32165498798789','$2a$12$GpUYJ1BvK49liiyfd/i2u.oqUWHv9C2Vwzzg2MIuSDOBcJvR6Sx2W','loiu',1),(32,'luannyarroyo0908@gmail.com','314.844.998-32','$2a$12$Oa7Yh0uyC60/b5YyO.whbuU9vn0DLxFe2hZhW/T3cxl7cWUUlvicS','Luanny',1),(33,'paula@gmail.com','314.844.998-32','$2a$12$ZM4HWQeXw.Xice111Z2Zlur99370iuhUq.6mCwkQ4hCn0bFTrCOWm','luanny',1);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vaga`
--

DROP TABLE IF EXISTS `vaga`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vaga` (
  `VagaID` int NOT NULL,
  `DescricaoVaga` text NOT NULL,
  `CargaHoraria` varchar(255) NOT NULL,
  `IdVagas` int NOT NULL,
  PRIMARY KEY (`VagaID`),
  KEY `FK_Vaga_IdVagas` (`IdVagas`),
  CONSTRAINT `FK_Vaga_IdVagas` FOREIGN KEY (`IdVagas`) REFERENCES `imovel` (`ImovelID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vaga`
--

LOCK TABLES `vaga` WRITE;
/*!40000 ALTER TABLE `vaga` DISABLE KEYS */;
/*!40000 ALTER TABLE `vaga` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'bpysjgvodzhdqziw3zwg'
--

--
-- Dumping routines for database 'bpysjgvodzhdqziw3zwg'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-19 11:02:13
