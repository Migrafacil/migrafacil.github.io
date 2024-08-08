-- SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
-- SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
-- SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
 
 
-- CREATE SCHEMA IF NOT EXISTS `bpysjgvodzhdqziw3zwg` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
-- USE 'bpysjgvodzhdqziw3zwg'
-- CREATE TABLE IF NOT EXISTS `bpysjgvodzhdqziw3zwg`.`CARGOS` (
--   `ID_CARGO` INT(11) NOT NULL,
--   `NOME_CARGO` VARCHAR(45) NOT NULL,
--   `CANDIDATOS_ID_CARGO` INT(11) NOT NULL,
--   PRIMARY KEY (`ID_CARGO`, `CANDIDATOS_ID_CARGO`),
--   INDEX `fk_CARGOS_CANDIDATOS_idx` (`CANDIDATOS_ID_CARGO` ASC) VISIBLE,
--   CONSTRAINT `fk_CARGOS_CANDIDATOS`
--     FOREIGN KEY (`CANDIDATOS_ID_CARGO`)
--     REFERENCES `bpysjgvodzhdqziw3zwg`.`CANDIDATOS` (`ID_CARGO`)
--     ON DELETE NO ACTION
--     ON UPDATE NO ACTION)
-- ENGINE = InnoDB
-- DEFAULT CHARACTER SET = utf8mb4
-- COLLATE = utf8mb4_0900_ai_ci;

-- CREATE TABLE `cadastro` (
--   `ID_CADASTRADO` int NOT NULL AUTO_INCREMENT,
--   `EMAIL_CADASTRADO` varchar(100) NOT NULL,
--   `CPF_CNPJ_CADASTRADO` varchar(14) NOT NULL,
--   `SENHA_CADASTRADO` char(10) NOT NULL,
--   `CONFROMAR_SENHA_CADASTRADO` char(10) NOT NULL,
--   PRIMARY KEY(`ID_CADASTRADO`)
-- )

-- CREATE TABLE `usuario` (
--   `ID_USUARIO` int NOT NULL AUTO_INCREMENT,
--   `EMAIL_USUARIO` varchar(100) NOT NULL,
--   `CPF_CNPJ_USUARIO` varchar(14) NOT NULL,
--   `SENHA_USUARIO` char(10) NOT NULL,
--   PRIMARY KEY(`ID_USUARIO`)
-- )
 
-- CREATE TABLE IF NOT EXISTS `bpysjgvodzhdqziw3zwg`.`CANDIDATOS` (
--   `ID_CARGO` INT(11) NOT NULL,
--   `ID_CANDIDATO` VARCHAR(45) NOT NULL,
--   `NOME_CANDIDATO` VARCHAR(45) NULL DEFAULT NULL,
--   `DATA_NASC_CANDIDATO` DATE NULL DEFAULT NULL,
--   `CPF_CANDIDATO` VARCHAR(45) NOT NULL,
--   `CONTATO_CANDIDATO` VARCHAR(45) NOT NULL,
--   `ENDERCO_CANDIDATO` VARCHAR(45) NULL DEFAULT NULL,
--   PRIMARY KEY (`ID_CARGO`))
-- ENGINE = InnoDB
-- DEFAULT CHARACTER SET = utf8mb4
-- COLLATE = utf8mb4_0900_ai_ci;
 
-- CREATE TABLE IF NOT EXISTS `bpysjgvodzhdqziw3zwg`.`EMPRESAS` (
--   `ID_EMPRESA` INT(11) NOT NULL,
--   `CNPJ_EMPRESA` VARCHAR(45) NOT NULL,
--   `RAZAO_SOCIAL` VARCHAR(45) NOT NULL,
--   `ENDERECO_EMPRESA` VARCHAR(45) NOT NULL,
--   `CEP_EMPRESA` VARCHAR(45) NOT NULL,
--   `UF_EMPRESA` VARCHAR(45) NOT NULL,
--   PRIMARY KEY (`ID_EMPRESA`)
 
-- )
-- ENGINE = InnoDB
-- DEFAULT CHARACTER SET = utf8mb4
-- COLLATE = utf8mb4_0900_ai_ci;
 
-- CREATE TABLE IF NOT EXISTS `bpysjgvodzhdqziw3zwg`.`VAGAS` (
--   `ID_VAGA` INT(11) NOT NULL,
--   `DESCRICAO_VAGA` VARCHAR(45) NULL DEFAULT NULL,
--   `CARGA_HORARIO` VARCHAR(45) NULL DEFAULT NULL,
--   `ID_EMPRESA` VARCHAR(45) NULL DEFAULT NULL,
--   `ID_CONTRATO` VARCHAR(45) NULL DEFAULT NULL,
--   `CONTRATOS_ID_CONTRATO` INT(11) NOT NULL,
--   PRIMARY KEY (`ID_VAGA`)
-- )
-- ENGINE = InnoDB
-- DEFAULT CHARACTER SET = utf8mb4
-- COLLATE = utf8mb4_0900_ai_ci;
 
-- -- CREATE TABLE IF NOT EXISTS `bpysjgvodzhdqziw3zwg`.`CONTRATOS` (
-- --   `ID_CONTRATO` INT(11) NOT NULL,
-- --   `TIPO_CONTRATO` VARCHAR(45) NOT NULL,
-- --   `TEMPO_CONTRATO` VARCHAR(45) NOT NULL,
-- --   PRIMARY KEY (`ID_CONTRATO`))
-- -- ENGINE = InnoDB
-- -- DEFAULT CHARACTER SET = utf8mb4
-- -- COLLATE = utf8mb4_0900_ai_ci;
 
 
-- SET SQL_MODE=@OLD_SQL_MODE;
-- SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
-- SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


-- --
-- -- Table structure for table `tipo_usuario`
-- --

-- DROP TABLE IF EXISTS `tipo_usuario`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!50503 SET character_set_client = utf8mb4 */;
-- CREATE TABLE `tipo_usuario` (
--   `id_tipo_usuario` int NOT NULL AUTO_INCREMENT,
--   `tipo_usuario` varchar(25) DEFAULT NULL,
--   `descricao_usuario` varchar(155) DEFAULT NULL,
--   `status_tipo_usuario` int DEFAULT '1',
--   PRIMARY KEY (`id_tipo_usuario`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `tipo_usuario`
-- --

-- LOCK TABLES `tipo_usuario` WRITE;
-- /*!40000 ALTER TABLE `tipo_usuario` DISABLE KEYS */;
-- INSERT INTO `tipo_usuario` VALUES (1,'Comum','Usuário cadastrado no sistema',1),(2,'Encarregado','Usuário com acesso a consultas na área administrativa',1),(3,'ADM','Usuário com acesso a consultas e edições na área administrativa',1);
-- /*!40000 ALTER TABLE `tipo_usuario` ENABLE KEYS */;
-- UNLOCK TABLES;

-- --
-- -- Table structure for table `usuario`
-- --

-- DROP TABLE IF EXISTS `usuario`;
-- /*!40101 SET @saved_cs_client     = @@character_set_client */;
-- /*!50503 SET character_set_client = utf8mb4 */;
-- CREATE TABLE `usuario` (
--   `id_usuario` int NOT NULL AUTO_INCREMENT,
--   `nome_usuario` varchar(45) DEFAULT NULL,
--   `user_usuario` varchar(45) DEFAULT NULL,
--   `senha_usuario` char(60) DEFAULT NULL,
--   `email_usuario` varchar(45) DEFAULT NULL,
--   `fone_usuario` varchar(11) DEFAULT NULL,
--   `tipo_usuario` int NOT NULL DEFAULT '1',
--   `status_usuario` int DEFAULT '1',
--   PRIMARY KEY (`id_usuario`),
--   KEY `fk_usuario_tipo_usuario_idx` (`tipo_usuario`),
--   CONSTRAINT `fk_usuario_tipo_usuario` FOREIGN KEY (`tipo_usuario`) REFERENCES `tipo_usuario` (`id_tipo_usuario`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
-- /*!40101 SET character_set_client = @saved_cs_client */;

-- --
-- -- Dumping data for table `usuario`
-- --

-- LOCK TABLES `usuario` WRITE;
-- /*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
-- INSERT INTO `usuario` VALUES (1,'Helvética','helvinha','$2a$12$/YjwhOmCrHVM.st6RBNc4OodyTOXGITgYAxx5Bysad0MaDzhapk6i','helvinh@gmail.com','11941549878',3,1);
-- /*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
-- UNLOCK TABLES;
-- /*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

-- /*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
-- /*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
-- /*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
-- /*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
-- /*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
-- /*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- /*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- -- Dump completed on 2024-04-09  8:39:40

-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: bpysjgvodzhdqziw3zwg-mysql.services.clever-cloud.com    Database: bpysjgvodzhdqziw3zwg
-- ------------------------------------------------------
-- Server version	8.0.15-5

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
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ 'f41d366d-91e5-11e9-8525-cecd028ee826:1-140641628';

--
-- Table structure for table `CARGOS`
--

DROP TABLE IF EXISTS `CARGOS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `CARGOS` (
  `ID_CARGO` int(11) NOT NULL,
  `NOME_CARGO` varchar(45) NOT NULL,
  PRIMARY KEY (`ID_CARGO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CARGOS`
--

LOCK TABLES `CARGOS` WRITE;
/*!40000 ALTER TABLE `CARGOS` DISABLE KEYS */;
/*!40000 ALTER TABLE `CARGOS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EMPRESAS`
--

DROP TABLE IF EXISTS `EMPRESAS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `EMPRESAS` (
  `ID_EMPRESA` int(11) NOT NULL,
  `CNPJ_EMPRESA` varchar(45) NOT NULL,
  `RAZAO_SOCIAL` varchar(45) NOT NULL,
  `ENDERECO_EMPRESA` varchar(45) NOT NULL,
  `CEP_EMPRESA` varchar(45) NOT NULL,
  `UF_EMPRESA` varchar(45) NOT NULL,
  PRIMARY KEY (`ID_EMPRESA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EMPRESAS`
--

LOCK TABLES `EMPRESAS` WRITE;
/*!40000 ALTER TABLE `EMPRESAS` DISABLE KEYS */;
/*!40000 ALTER TABLE `EMPRESAS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `VAGAS`
--

DROP TABLE IF EXISTS `VAGAS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `VAGAS` (
  `ID_VAGA` int(11) NOT NULL,
  `DESCRICAO_VAGA` varchar(45) DEFAULT NULL,
  `CARGA_HORARIO` varchar(45) DEFAULT NULL,
  `ID_EMPRESA` varchar(45) DEFAULT NULL,
  `ID_CONTRATO` varchar(45) DEFAULT NULL,
  `CONTRATOS_ID_CONTRATO` int(11) NOT NULL,
  PRIMARY KEY (`ID_VAGA`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `VAGAS`
--

LOCK TABLES `VAGAS` WRITE;
/*!40000 ALTER TABLE `VAGAS` DISABLE KEYS */;
/*!40000 ALTER TABLE `VAGAS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `ID_USUARIO` int(11) NOT NULL AUTO_INCREMENT,
  `EMAIL_USUARIO` varchar(100) NOT NULL,
  `CPF_CNPJ_USUARIO` varchar(15) NOT NULL,
  `SENHA_USUARIO` char(10) NOT NULL,
  `NOME_USUARIO` varchar(45) NOT NULL,
  PRIMARY KEY (`ID_USUARIO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-25 14:21:27

-- MySQL Workbench Forward Engineering
 
SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
 
-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema bpysjgvodzhdqziw3zwg
-- -----------------------------------------------------
 
-- -----------------------------------------------------
-- Schema bpysjgvodzhdqziw3zwg
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `bpysjgvodzhdqziw3zwg` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `bpysjgvodzhdqziw3zwg` ;
 
-- -----------------------------------------------------
-- Table `bpysjgvodzhdqziw3zwg`.`cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bpysjgvodzhdqziw3zwg`.`cliente` (
  `ClienteID` INT NOT NULL,
  `Nome_Cliente` VARCHAR(255) NOT NULL,
  `Endereco_Cliente` VARCHAR(255) NOT NULL,
  `Logradouro_Cliente` VARCHAR(100) NOT NULL,
  `Bairro_Cliente` VARCHAR(255) NOT NULL,
  `Cidade_Cliente` VARCHAR(255) NOT NULL,
  `UF_Cliente` CHAR(2) NOT NULL,
  `CEP_Cliente` CHAR(8) NOT NULL,
  `Email_Cliente` VARCHAR(255) NOT NULL,
  `Celular_Cliente` VARCHAR(15) NOT NULL,
  `Contato_Cliente` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`ClienteID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
 
 
-- -----------------------------------------------------
-- Table `bpysjgvodzhdqziw3zwg`.`assinatura`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bpysjgvodzhdqziw3zwg`.`assinatura` (
  `AssinaturaID` INT NOT NULL,
  `Logradouro_Assinatura` VARCHAR(100) NOT NULL,
  `Bairro_Assinatura` VARCHAR(255) NOT NULL,
  `Cidade_Assinatura` VARCHAR(255) NOT NULL,
  `UF_Assinatura` CHAR(2) NOT NULL,
  `CEP_Assinatura` CHAR(8) NOT NULL,
  `IdAssinatura` INT NOT NULL,
  PRIMARY KEY (`AssinaturaID`),
  INDEX `FK_Assinatura_IdAssinatura` (`IdAssinatura` ASC) VISIBLE,
  CONSTRAINT `FK_Assinatura_IdAssinatura`
    FOREIGN KEY (`IdAssinatura`)
    REFERENCES `bpysjgvodzhdqziw3zwg`.`cliente` (`ClienteID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
 
 
-- -----------------------------------------------------
-- Table `bpysjgvodzhdqziw3zwg`.`imovel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bpysjgvodzhdqziw3zwg`.`imovel` (
  `ImovelID` INT NOT NULL,
  `Endereco_Imovel` VARCHAR(255) NOT NULL,
  `Logradouro_Imovel` VARCHAR(100) NOT NULL,
  `Bairro_Imovel` VARCHAR(255) NOT NULL,
  `Cidade_Imovel` VARCHAR(255) NOT NULL,
  `UF_Imovel` CHAR(2) NOT NULL,
  `CEP_Imovel` CHAR(8) NOT NULL,
  `IdImoveis` INT NOT NULL,
  PRIMARY KEY (`ImovelID`),
  INDEX `FK_Imovel_IdImoveis` (`IdImoveis` ASC) VISIBLE,
  CONSTRAINT `FK_Imovel_IdImoveis`
    FOREIGN KEY (`IdImoveis`)
    REFERENCES `bpysjgvodzhdqziw3zwg`.`cliente` (`ClienteID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
 
 
-- -----------------------------------------------------
-- Table `bpysjgvodzhdqziw3zwg`.`vaga`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bpysjgvodzhdqziw3zwg`.`vaga` (
  `VagaID` INT NOT NULL,
  `DescricaoVaga` TEXT NOT NULL,
  `CargaHoraria` VARCHAR(255) NOT NULL,
  `IdVagas` INT NOT NULL,
  PRIMARY KEY (`VagaID`),
  INDEX `FK_Vaga_IdVagas` (`IdVagas` ASC) VISIBLE,
  CONSTRAINT `FK_Vaga_IdVagas`
    FOREIGN KEY (`IdVagas`)
    REFERENCES `bpysjgvodzhdqziw3zwg`.`imovel` (`ImovelID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
 
 
-- -----------------------------------------------------
-- Table `bpysjgvodzhdqziw3zwg`.`candidato`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bpysjgvodzhdqziw3zwg`.`candidato` (
  `CandidatoID` INT NOT NULL,
  `Nome_Candidato` VARCHAR(255) NOT NULL,
  `CPF_Candidato` VARCHAR(11) NOT NULL,
  `Data_Nascimento` DATE NOT NULL,
  `Endereco_Candidato` VARCHAR(255) NOT NULL,
  `Logradouro_Candidato` VARCHAR(255) NOT NULL,
  `Bairro_Candidato` VARCHAR(255) NOT NULL,
  `Cidade_Candidato` VARCHAR(255) NOT NULL,
  `UF_Candidato` CHAR(2) NOT NULL,
  `CEP_Candidato` CHAR(8) NOT NULL,
  `Email_Candidato` VARCHAR(255) NOT NULL,
  `Celular_Candidato` VARCHAR(15) NOT NULL,
  `Contato_Candidato` VARCHAR(255) NOT NULL,
  `vaga_VagaID` INT NOT NULL,
  PRIMARY KEY (`CandidatoID`),
  INDEX `fk_candidato_vaga1_idx` (`vaga_VagaID` ASC) VISIBLE,
  CONSTRAINT `fk_candidato_vaga1`
    FOREIGN KEY (`vaga_VagaID`)
    REFERENCES `bpysjgvodzhdqziw3zwg`.`vaga` (`VagaID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
 
 
-- -----------------------------------------------------
-- Table `bpysjgvodzhdqziw3zwg`.`empresa`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bpysjgvodzhdqziw3zwg`.`empresa` (
  `EmpresaID` INT NOT NULL,
  `RazaoSocial` VARCHAR(255) NOT NULL,
  `EnderecoEmprego` VARCHAR(255) NOT NULL,
  `LogradouroEmprego` VARCHAR(100) NOT NULL,
  `BairroEmprego` VARCHAR(255) NOT NULL,
  `CidadeEmprego` VARCHAR(255) NOT NULL,
  `UFEmprego` CHAR(2) NOT NULL,
  `CEPEmprego` CHAR(8) NOT NULL,
  `CNPJEmpresa` CHAR(14) NOT NULL,
  PRIMARY KEY (`EmpresaID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
 
 
-- -----------------------------------------------------
-- Table `bpysjgvodzhdqziw3zwg`.`cargo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bpysjgvodzhdqziw3zwg`.`cargo` (
  `CargoID` INT NOT NULL,
  `NomeCargo` VARCHAR(255) NOT NULL,
  `EmpresaID` INT NOT NULL,
  PRIMARY KEY (`CargoID`),
  INDEX `FK_Cargo_Empresa` (`EmpresaID` ASC) VISIBLE,
  CONSTRAINT `FK_Cargo_Empresa`
    FOREIGN KEY (`EmpresaID`)
    REFERENCES `bpysjgvodzhdqziw3zwg`.`empresa` (`EmpresaID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
 
 
-- -----------------------------------------------------
-- Table `bpysjgvodzhdqziw3zwg`.`pagamento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bpysjgvodzhdqziw3zwg`.`pagamento` (
  `PagamentoID` INT NOT NULL,
  `DataPagamento` DATE NOT NULL,
  `ValorPago` DECIMAL(10,2) NOT NULL,
  `IdPagamento` INT NOT NULL,
  PRIMARY KEY (`PagamentoID`),
  INDEX `FK_Pagamento_IdPagamento` (`IdPagamento` ASC) VISIBLE,
  CONSTRAINT `FK_Pagamento_IdPagamento`
    FOREIGN KEY (`IdPagamento`)
    REFERENCES `bpysjgvodzhdqziw3zwg`.`assinatura` (`AssinaturaID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
 
 
-- -----------------------------------------------------
-- Table `bpysjgvodzhdqziw3zwg`.`alugar`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bpysjgvodzhdqziw3zwg`.`alugar` (
  `idalugar` INT NOT NULL,
  `nome_alugar` VARCHAR(255) NULL,
  `cnpj_alugar` CHAR(14) NULL,
  `cpf_alugar` CHAR(8) NULL,
  `email_alugar` VARCHAR(255) NULL,
  `celular_alugar` VARCHAR(14) NULL,
  `enderco_alugar` VARCHAR(255) NULL,
  `logradouro_alugar` VARCHAR(100) NULL,
  `bairro_alugar` VARCHAR(255) NULL,
  `cidade_alugar` VARCHAR(255) NULL,
  `uf_alugar` CHAR(2) NULL,
  `cep_alugar` CHAR(8) NULL,
  PRIMARY KEY (`idalugar`))
ENGINE = InnoDB;
 
 
-- -----------------------------------------------------
-- Table `bpysjgvodzhdqziw3zwg`.`alugar_has_cliente`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bpysjgvodzhdqziw3zwg`.`alugar_has_cliente` (
  `alugar_idalugar` INT NOT NULL,
  `cliente_ClienteID` INT NOT NULL,
  PRIMARY KEY (`alugar_idalugar`, `cliente_ClienteID`),
  INDEX `fk_alugar_has_cliente_cliente1_idx` (`cliente_ClienteID` ASC) VISIBLE,
  INDEX `fk_alugar_has_cliente_alugar1_idx` (`alugar_idalugar` ASC) VISIBLE,
  CONSTRAINT `fk_alugar_has_cliente_alugar1`
    FOREIGN KEY (`alugar_idalugar`)
    REFERENCES `bpysjgvodzhdqziw3zwg`.`alugar` (`idalugar`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_alugar_has_cliente_cliente1`
    FOREIGN KEY (`cliente_ClienteID`)
    REFERENCES `bpysjgvodzhdqziw3zwg`.`cliente` (`ClienteID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
 
 
-- -----------------------------------------------------
-- Table `bpysjgvodzhdqziw3zwg`.`alugar_has_imovel`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `bpysjgvodzhdqziw3zwg`.`alugar_has_imovel` (
  `alugar_idalugar` INT NOT NULL,
  `imovel_ImovelID` INT NOT NULL,
  PRIMARY KEY (`alugar_idalugar`, `imovel_ImovelID`),
  INDEX `fk_alugar_has_imovel_imovel1_idx` (`imovel_ImovelID` ASC) VISIBLE,
  INDEX `fk_alugar_has_imovel_alugar1_idx` (`alugar_idalugar` ASC) VISIBLE,
  CONSTRAINT `fk_alugar_has_imovel_alugar1`
    FOREIGN KEY (`alugar_idalugar`)
    REFERENCES `bpysjgvodzhdqziw3zwg`.`alugar` (`idalugar`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_alugar_has_imovel_imovel1`
    FOREIGN KEY (`imovel_ImovelID`)
    REFERENCES `bpysjgvodzhdqziw3zwg`.`imovel` (`ImovelID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;
 
 
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;