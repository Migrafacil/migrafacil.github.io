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
