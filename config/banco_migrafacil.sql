SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
 
 
CREATE SCHEMA IF NOT EXISTS `facilmigra` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE 'facilmigra'
CREATE TABLE IF NOT EXISTS `facilmigra`.`CARGOS` (
  `ID_CARGO` INT(11) NOT NULL,
  `NOME_CARGO` VARCHAR(45) NOT NULL,
  `CANDIDATOS_ID_CARGO` INT(11) NOT NULL,
  PRIMARY KEY (`ID_CARGO`, `CANDIDATOS_ID_CARGO`),
  INDEX `fk_CARGOS_CANDIDATOS_idx` (`CANDIDATOS_ID_CARGO` ASC) VISIBLE,
  CONSTRAINT `fk_CARGOS_CANDIDATOS`
    FOREIGN KEY (`CANDIDATOS_ID_CARGO`)
    REFERENCES `facilmigra`.`CANDIDATOS` (`ID_CARGO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
 
CREATE TABLE IF NOT EXISTS `facilmigra`.`CANDIDATOS` (
  `ID_CARGO` INT(11) NOT NULL,
  `ID_CANDIDATO` VARCHAR(45) NOT NULL,
  `NOME_CANDIDATO` VARCHAR(45) NULL DEFAULT NULL,
  `DATA_NASC_CANDIDATO` DATE NULL DEFAULT NULL,
  `CPF_CANDIDATO` VARCHAR(45) NOT NULL,
  `CONTATO_CANDIDATO` VARCHAR(45) NOT NULL,
  `ENDERCO_CANDIDATO` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`ID_CARGO`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
 
CREATE TABLE IF NOT EXISTS `facilmigra`.`EMPRESAS` (
  `ID_EMPRESA` INT(11) NOT NULL,
  `CNPJ_EMPRESA` VARCHAR(45) NOT NULL,
  `RAZAO_SOCIAL` VARCHAR(45) NOT NULL,
  `ENDERECO_EMPRESA` VARCHAR(45) NOT NULL,
  `CEP_EMPRESA` VARCHAR(45) NOT NULL,
  `UF_EMPRESA` VARCHAR(45) NOT NULL,
  `VAGAS_ID_VAGA` INT(11) NOT NULL,
  PRIMARY KEY (`ID_EMPRESA`, `VAGAS_ID_VAGA`),
  UNIQUE INDEX `CNPJ_EMPRESA_UNIQUE` (`CNPJ_EMPRESA` ASC) VISIBLE,
  UNIQUE INDEX `CEP_EMPRESA_UNIQUE` (`CEP_EMPRESA` ASC) VISIBLE,
  UNIQUE INDEX `UF_EMPRESA_UNIQUE` (`UF_EMPRESA` ASC) VISIBLE,
  INDEX `fk_EMPRESAS_VAGAS1_idx` (`VAGAS_ID_VAGA` ASC) VISIBLE,
  CONSTRAINT `fk_EMPRESAS_VAGAS1`
    FOREIGN KEY (`VAGAS_ID_VAGA`)
    REFERENCES `facilmigra`.`VAGAS` (`ID_VAGA`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
 
CREATE TABLE IF NOT EXISTS `facilmigra`.`VAGAS` (
  `ID_VAGA` INT(11) NOT NULL,
  `DESCRICAO_VAGA` VARCHAR(45) NULL DEFAULT NULL,
  `CARGA_HORARIO` VARCHAR(45) NULL DEFAULT NULL,
  `ID_EMPRESA` VARCHAR(45) NULL DEFAULT NULL,
  `ID_CONTRATO` VARCHAR(45) NULL DEFAULT NULL,
  `CONTRATOS_ID_CONTRATO` INT(11) NOT NULL,
  PRIMARY KEY (`ID_VAGA`, `CONTRATOS_ID_CONTRATO`),
  INDEX `fk_VAGAS_CONTRATOS1_idx` (`CONTRATOS_ID_CONTRATO` ASC) VISIBLE,
  CONSTRAINT `fk_VAGAS_CONTRATOS1`
    FOREIGN KEY (`CONTRATOS_ID_CONTRATO`)
    REFERENCES `facilmigra`.`CONTRATOS` (`ID_CONTRATO`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
 
CREATE TABLE IF NOT EXISTS `facilmigra`.`CONTRATOS` (
  `ID_CONTRATO` INT(11) NOT NULL,
  `TIPO_CONTRATO` VARCHAR(45) NOT NULL,
  `TEMPO_CONTRATO` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ID_CONTRATO`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;
 
 
SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


--
-- Table structure for table `tipo_usuario`
--

DROP TABLE IF EXISTS `tipo_usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_usuario` (
  `id_tipo_usuario` int NOT NULL AUTO_INCREMENT,
  `tipo_usuario` varchar(25) DEFAULT NULL,
  `descricao_usuario` varchar(155) DEFAULT NULL,
  `status_tipo_usuario` int DEFAULT '1',
  PRIMARY KEY (`id_tipo_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_usuario`
--

LOCK TABLES `tipo_usuario` WRITE;
/*!40000 ALTER TABLE `tipo_usuario` DISABLE KEYS */;
INSERT INTO `tipo_usuario` VALUES (1,'Comum','Usuário cadastrado no sistema',1),(2,'Encarregado','Usuário com acesso a consultas na área administrativa',1),(3,'ADM','Usuário com acesso a consultas e edições na área administrativa',1);
/*!40000 ALTER TABLE `tipo_usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `nome_usuario` varchar(45) DEFAULT NULL,
  `user_usuario` varchar(45) DEFAULT NULL,
  `senha_usuario` char(60) DEFAULT NULL,
  `email_usuario` varchar(45) DEFAULT NULL,
  `fone_usuario` varchar(11) DEFAULT NULL,
  `tipo_usuario` int NOT NULL DEFAULT '1',
  `status_usuario` int DEFAULT '1',
  PRIMARY KEY (`id_usuario`),
  KEY `fk_usuario_tipo_usuario_idx` (`tipo_usuario`),
  CONSTRAINT `fk_usuario_tipo_usuario` FOREIGN KEY (`tipo_usuario`) REFERENCES `tipo_usuario` (`id_tipo_usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Helvética','helvinha','$2a$12$/YjwhOmCrHVM.st6RBNc4OodyTOXGITgYAxx5Bysad0MaDzhapk6i','helvinh@gmail.com','11941549878',3,1);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-09  8:39:40

