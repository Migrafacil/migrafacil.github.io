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
-- Table structure for table `assinatura`
--

DROP TABLE IF EXISTS `assinatura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assinatura` (
  `AssinaturaID` int NOT NULL,
  `DATA_PAGAMENTO` date NOT NULL,
  `VALOR_PAGO` decimal(10,0) NOT NULL,
  `usuario_ID_USUARIO` int NOT NULL,
  `PLANO_ID_PLANO` int NOT NULL,
  PRIMARY KEY (`AssinaturaID`),
  KEY `fk_assinatura_usuario1_idx` (`usuario_ID_USUARIO`),
  KEY `fk_assinatura_PLANO1_idx` (`PLANO_ID_PLANO`),
  CONSTRAINT `fk_assinatura_PLANO1` FOREIGN KEY (`PLANO_ID_PLANO`) REFERENCES `plano` (`ID_PLANO`),
  CONSTRAINT `fk_assinatura_usuario1` FOREIGN KEY (`usuario_ID_USUARIO`) REFERENCES `usuario` (`ID_USUARIO`)
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
-- Table structure for table `cargo`
--

DROP TABLE IF EXISTS `cargo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cargo` (
  `CargoID` int NOT NULL,
  `NomeCargo` varchar(255) NOT NULL,
  PRIMARY KEY (`CargoID`)
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
-- Table structure for table `imovel`
--

DROP TABLE IF EXISTS `imovel`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imovel` (
  `ImovelID` int NOT NULL,
  `CEP_Imovel` char(8) NOT NULL,
  `usuario_ID_USUARIO` int NOT NULL,
  `NUMERO_IMOVEL` varchar(45) DEFAULT NULL,
  `COMPLEMENTO_USUARIO` varchar(45) DEFAULT NULL,
  `IMAGEM1_IMOVEL` varchar(45) DEFAULT NULL,
  `IMAGEM2_IMOVEL` varchar(45) DEFAULT NULL,
  `IMAGEM3_IMOVEL` varchar(45) DEFAULT NULL,
  `IMAGEM4_IMOVEL` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`ImovelID`),
  KEY `fk_imovel_usuario1_idx` (`usuario_ID_USUARIO`),
  CONSTRAINT `fk_imovel_usuario1` FOREIGN KEY (`usuario_ID_USUARIO`) REFERENCES `usuario` (`ID_USUARIO`)
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
-- Table structure for table `plano`
--

DROP TABLE IF EXISTS `plano`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plano` (
  `ID_PLANO` int NOT NULL AUTO_INCREMENT,
  `DESCRICAO_PLANO` varchar(45) DEFAULT NULL,
  `PRECO_PLANO` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`ID_PLANO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plano`
--

LOCK TABLES `plano` WRITE;
/*!40000 ALTER TABLE `plano` DISABLE KEYS */;
/*!40000 ALTER TABLE `plano` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_usuario`
--

DROP TABLE IF EXISTS `tipo_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_usuario` (
  `idtipo_usuario` int NOT NULL AUTO_INCREMENT,
  `TIPO_USUARIO` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idtipo_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_usuario`
--

LOCK TABLES `tipo_usuario` WRITE;
/*!40000 ALTER TABLE `tipo_usuario` DISABLE KEYS */;
INSERT INTO `tipo_usuario` VALUES (1,'COMUM'),(2,'EMPRESA'),(3,'IMOBILIARIA'),(4,'PROPRIETARIO');
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
  `CPF_CNPJ_USUARIO` varchar(18) NOT NULL,
  `SENHA_USUARIO` char(60) NOT NULL,
  `NOME_USUARIO` varchar(45) NOT NULL,
  `tipo_usuario_idtipo_usuario` int NOT NULL,
  `CEP_USUARIO` char(9) DEFAULT NULL,
  `COMPLEMENTO_USUARIO` varchar(45) DEFAULT NULL,
  `NUMERO_USUARIO` varchar(45) DEFAULT NULL,
  `CELULAR_USUARIO` char(11) DEFAULT NULL,
  PRIMARY KEY (`ID_USUARIO`),
  KEY `fk_usuario_tipo_usuario1_idx` (`tipo_usuario_idtipo_usuario`),
  CONSTRAINT `fk_usuario_tipo_usuario1` FOREIGN KEY (`tipo_usuario_idtipo_usuario`) REFERENCES `tipo_usuario` (`idtipo_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (8,'arroyo@gmail.com','314.844.998-35','$2a$12$pH3LNUAvqGQis8NUl1kIGu7JPfCO.O0HNZrFSQK/mdCe9VB6gFCvi','luanny',0,NULL,NULL,NULL,NULL),(9,'https@gmail.com','256.322.566-98','$2a$12$jjUtJdIEpDAQU6gDsvYHZO8Incktsp9I9lmyGbdJxzb1d/hWeClja','luanny ',0,NULL,NULL,NULL,NULL),(10,'eliana@gmail.com','555.555.555-55','$2a$12$xffx0I1VNcxgsiiuSSMQSuaXawuzwMD3uP/xocayTQP1GJn/NtdmO','eliana',0,NULL,NULL,NULL,NULL),(11,'cleo.arroyo@porto.com','419.500.438-19','$2a$12$hYdIGJc/mHbHoyTROswm9egISo2CbXNFpPR3ds7fsSvYDBOsT0zxW','luanny',0,NULL,NULL,NULL,NULL),(12,'cleo.arroyo@hilu.com','419.500.438-10','$2a$12$hYdIGJc/mHbHoyTROswm9egISo2CbXNFpPR3ds7fsSvYDBOsT0zxW','luanny',0,NULL,NULL,NULL,NULL),(13,'julia@santos.com','360.233.656-51','$2a$12$U7wlUxRZkUKC1Z6SLRvAXeG5HZcCJeApkfofV0dLE126dUdgLAIYu','julia',0,NULL,NULL,NULL,NULL),(14,'lui@gmail.com','314.844.998-98','$2a$12$8gEAaV135WAJFW00py3VZeB3apjJ9qiqRKM.zrt5pYVeEg4SNpEAa','luanny',0,NULL,NULL,NULL,NULL),(15,'lua.arroyo@gmail.com','41950043819','$2a$12$AUb4v0DrwbqJJgVqc/46.OnuMDBLwJveoqvh5nfXVQyWjvZ3Ln9Sq','luanny ',0,NULL,NULL,NULL,NULL),(16,'luanny@arroyo.com','45645645689','$2a$12$AUb4v0DrwbqJJgVqc/46.OnuMDBLwJveoqvh5nfXVQyWjvZ3Ln9Sq','luanny',0,NULL,NULL,NULL,NULL),(17,'rafa@fael.com','314.844.99698','$2a$12$KTCKo4f5iKupr7.oXrcVHOhkTOQeFUXdUfsnfZ30klvckCZcBHm5S','luanny',0,NULL,NULL,NULL,NULL),(18,'luanny@arroyosilva.com','41950043818','$2a$12$KTCKo4f5iKupr7.oXrcVHOhkTOQeFUXdUfsnfZ30klvckCZcBHm5S','luanny',0,NULL,NULL,NULL,NULL),(19,'arroyo2006@gmail.com','314.784.498-32','$2a$12$gmXDW1uQJ1Lr0tIc534wJuDH32whvP2EwBjB3xvnumz6mzwdd0cMS','luanny arroyo',0,NULL,NULL,NULL,NULL),(20,'popo@gmail.com','32165498725','$2a$12$3y/Jv3IvsxE99Jek/KZqBuFVw.17YXFAMiVeNvnXMjw3tCxzb04.O','luanny arroyo',0,NULL,NULL,NULL,NULL),(21,'juliamarques.brasil@gmail.com','55063303838','$2a$12$ZLGsLzVi/1nflz.QPBrSvu.FJ14tqJRDvxs4yQOOFqYO.oVbBVlSy','julia marques',0,NULL,NULL,NULL,NULL),(22,'juli@gmail.com','314.844.25665','$2a$12$z5tEB4zu/SpsWdox7lfKfO5a12GMHOW5YH52HGtghFxu9QY1pbXW.','julia marques',0,NULL,NULL,NULL,NULL),(23,'eu@gmail.com','41950043889','$2a$12$nzvxvVYjRupSU2y/0Bvb8e6dWtMLNwuSgUt26ONa351E9VHwdl5AO','euu',0,NULL,NULL,NULL,NULL),(25,'acme@acme.com','123.456.789-12','$2a$12$.1wg9T532EhYUlCrYMIP9u.EafiPzIigTEi4z08n0EqNWQHccg6/q','Indústrias ACME Inc.',1,NULL,NULL,NULL,NULL),(26,'fefe@gmail.com','321.654.987-98','$2a$12$tr7/V6r1rfiSOUp6W5izJePSG46uocyf.FvKCBv3kZDUIOWePULSa','luanny arroyo',1,NULL,NULL,NULL,NULL),(27,'piper@gmail.com','635.241.987-98','$2a$12$Cr.WR//pJ7ys0VqtqMjcj.LjWNv8RU8euwyB47Xg7AiqNgZhlxlaS','luanny arroyo',1,NULL,NULL,NULL,NULL),(28,'tere@gmail.com','321.654.987-89','$2a$12$cnXjnRI20tzT/RklVd7qteBxRN3UNU1egXH/yz86dSj7CVvhwJnB6',' lolo',1,NULL,NULL,NULL,NULL),(29,'julio@gmail.com','887.945.465-65','$2a$12$IQes1FYoBIdtCcZ156cvnuran2QDx18SDQtXxNEHvGJRZcYJfzGNa','luanny',1,NULL,NULL,NULL,NULL),(30,'juca@gmail.com','321.654.987-97','$2a$12$icDIZy.JzbxhLCfvGf1ixe5cpYvo.FKB8qRUDP5yb1TpJyLx5cIMC','joca',1,NULL,NULL,NULL,NULL),(31,'juoi@gmail.com','32165498798789','$2a$12$GpUYJ1BvK49liiyfd/i2u.oqUWHv9C2Vwzzg2MIuSDOBcJvR6Sx2W','loiu',1,NULL,NULL,NULL,NULL),(32,'luannyarroyo0908@gmail.com','314.844.998-32','$2a$12$Oa7Yh0uyC60/b5YyO.whbuU9vn0DLxFe2hZhW/T3cxl7cWUUlvicS','Luanny',1,NULL,NULL,NULL,NULL),(33,'paula@gmail.com','314.844.998-32','$2a$12$ZM4HWQeXw.Xice111Z2Zlur99370iuhUq.6mCwkQ4hCn0bFTrCOWm','luanny',1,NULL,NULL,NULL,NULL),(34,'fafa@gmail.com','419.500.438-19','$2a$12$a7LLRtOE5WputqMTS2odS.C4f81gQQc9BSy/CW0.4ffyJ1URN2tXC','luanny',1,NULL,NULL,NULL,NULL),(35,'lua0707@gmail.com','419.500.438-19','$2a$12$a7LLRtOE5WputqMTS2odS.C4f81gQQc9BSy/CW0.4ffyJ1URN2tXC','luanny',1,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_aluga`
--

DROP TABLE IF EXISTS `usuario_aluga`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_aluga` (
  `imovel_ImovelID` int NOT NULL,
  `usuario_ID_USUARIO` int NOT NULL,
  `DATA_INICIO` date DEFAULT NULL,
  `DATA_FIM` date DEFAULT NULL,
  KEY `fk_imovel_has_usuario_usuario1_idx` (`usuario_ID_USUARIO`),
  KEY `fk_imovel_has_usuario_imovel1_idx` (`imovel_ImovelID`),
  CONSTRAINT `fk_imovel_has_usuario_imovel1` FOREIGN KEY (`imovel_ImovelID`) REFERENCES `imovel` (`ImovelID`),
  CONSTRAINT `fk_imovel_has_usuario_usuario1` FOREIGN KEY (`usuario_ID_USUARIO`) REFERENCES `usuario` (`ID_USUARIO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_aluga`
--

LOCK TABLES `usuario_aluga` WRITE;
/*!40000 ALTER TABLE `usuario_aluga` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario_aluga` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario_has_vaga`
--

DROP TABLE IF EXISTS `usuario_has_vaga`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario_has_vaga` (
  `usuario_ID_USUARIO` int NOT NULL,
  `vaga_VagaID` int NOT NULL,
  `DATA_CANDIDATURA` datetime DEFAULT NULL,
  KEY `fk_usuario_has_vaga_vaga1_idx` (`vaga_VagaID`),
  KEY `fk_usuario_has_vaga_usuario1_idx` (`usuario_ID_USUARIO`),
  CONSTRAINT `fk_usuario_has_vaga_usuario1` FOREIGN KEY (`usuario_ID_USUARIO`) REFERENCES `usuario` (`ID_USUARIO`),
  CONSTRAINT `fk_usuario_has_vaga_vaga1` FOREIGN KEY (`vaga_VagaID`) REFERENCES `vaga` (`VagaID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario_has_vaga`
--

LOCK TABLES `usuario_has_vaga` WRITE;
/*!40000 ALTER TABLE `usuario_has_vaga` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuario_has_vaga` ENABLE KEYS */;
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
  `cargo_CargoID` int NOT NULL,
  `empresa_EmpresaID` int NOT NULL,
  `usuario_ID_USUARIO` int NOT NULL,
  PRIMARY KEY (`VagaID`),
  KEY `fk_vaga_cargo1_idx` (`cargo_CargoID`),
  KEY `fk_vaga_usuario1_idx` (`usuario_ID_USUARIO`),
  CONSTRAINT `fk_vaga_cargo1` FOREIGN KEY (`cargo_CargoID`) REFERENCES `cargo` (`CargoID`),
  CONSTRAINT `fk_vaga_usuario1` FOREIGN KEY (`usuario_ID_USUARIO`) REFERENCES `usuario` (`ID_USUARIO`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vaga`
--

LOCK TABLES `vaga` WRITE;
/*!40000 ALTER TABLE `vaga` DISABLE KEYS */;
/*!40000 ALTER TABLE `vaga` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-09-21  9:35:03
