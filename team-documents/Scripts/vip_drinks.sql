CREATE DATABASE  IF NOT EXISTS `vip_drinks` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `vip_drinks`;
-- MySQL dump 10.13  Distrib 5.7.24, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: vip_drinks
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `idcategories` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`idcategories`),
  UNIQUE KEY `idcategories_UNIQUE` (`idcategories`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (5,'Champagne'),(4,'Cognac'),(2,'Gin'),(9,'Ron'),(7,'Sake'),(8,'Tequila'),(6,'Vino'),(3,'Vodka'),(1,'Whisky');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `idproducts` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) DEFAULT NULL,
  `measure` varchar(100) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `short_description` varchar(150) DEFAULT NULL,
  `long_description` text DEFAULT NULL,
  `brand` varchar(100) DEFAULT NULL,
  `discount` decimal(1,0) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `img` varchar(200) DEFAULT NULL,
  `luxury` varchar(45) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `categories_idcategories` int(11) NOT NULL,
  PRIMARY KEY (`idproducts`),
  UNIQUE KEY `idproducts_UNIQUE` (`idproducts`),
  KEY `fk_products_categories1_idx` (`categories_idcategories`),
  CONSTRAINT `fk_products_categories1` FOREIGN KEY (`categories_idcategories`) REFERENCES `categories` (`idcategories`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (6,'Champagne Krug de Cuveé','750ml',99999,'Elaboración artesanal y sabor único,\nAlrededor de 120 vinos diferentes,\nProductos especialmente seleccionados\n15 años de edad','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aut impedit minima, at aperiam ut, eligendi quae, dicta illo consequuntur quam. Neque incidunt beatae dolorum consectetur vero reiciendis cum tenetur? Ducimus assumenda nostrum repudiandae possimus, corporis numquam tempora nobis sequi esse, magnam excepturi minus quibusdam quis harum nihil voluptatibus sit rem eligendi rerum! Cum, ullam? Voluptate sunt nulla magni id. e itaque ratione eius ipsa dolorem qui ipsam earum sunt illum. Quaerat eos tenetur fuga quos facere veritatis unde, quis obcaecati perspiciatis consectetur veniam dolorum aspernatur excepturi totam fugiat!Quos consequatur nihil vitae dolorem deserunt repellendus impedit, velit nam ducimus, voluptatem officia reprehenderit. Exercitationem voluptas id atque debitis, consequatur adipisci nihil magnam vitae animi sit reiciendis repellendus earum suscipit!','Krug',9,10,'champagne-Krug.png','false',15,5),(7,'Chivas Regal 25','750ml',79991,'Primer whisky de lujo en el mundo, Elaborado a partir de una seductora mezcla fruta,Una opción habitual para la alta sociedad, En Nueva York desde 190','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aut impedit minima, at aperiam ut, eligendi quae, dicta illo consequuntur quam. Neque incidunt beatae dolorum consectetur vero reiciendis cum tenetur? Ducimus assumenda nostrum repudiandae possimus, corporis numquam tempora nobis sequi esse, magnam excepturi minus quibusdam quis harum nihil voluptatibus sit rem eligendi rerum! Cum, ullam? Voluptate sunt nulla magni id. e itaque ratione eius ipsa dolorem qui ipsam earum sunt illum. Quaerat eos tenetur fuga quos facere veritatis unde, quis obcaecati perspiciatis consectetur veniam dolorum aspernatur excepturi totam fugiat!Quos consequatur nihil vitae dolorem deserunt repellendus impedit, velit nam ducimus, voluptatem officia reprehenderit. Exercitationem voluptas id atque debitis, consequatur adipisci nihil magnam vitae animi sit reiciendis repellendus earum suscipit! ','Chivas',9,10,'chivas.jpg','false',15,1),(8,'Tequila 925 Ley Diamante','750ml',99999,'Ley Diamante, Una pieza única, La botella de tequila más cara del mundo, La joya más importante fabricada en México ','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aut impedit minima, at aperiam ut, eligendi quae, dicta illo consequuntur quam. Neque incidunt beatae dolorum consectetur vero reiciendis cum tenetur? Ducimus assumenda nostrum repudiandae possimus, corporis numquam tempora nobis sequi esse, magnam excepturi minus quibusdam quis harum nihil voluptatibus sit rem eligendi rerum! Cum, ullam? Voluptate sunt nulla magni id. e itaque ratione eius ipsa dolorem qui ipsam earum sunt illum. Quaerat eos tenetur fuga quos facere veritatis unde, quis obcaecati perspiciatis consectetur veniam dolorum aspernatur excepturi totam fugiat!Quos consequatur nihil vitae dolorem deserunt repellendus impedit, velit nam ducimus, voluptatem officia reprehenderit. Exercitationem voluptas id atque debitis, consequatur adipisci nihil magnam vitae animi sit reiciendis repellendus earum suscipit! ','Ley Diamante',9,10,'tequila-Ley-925.png','false',15,8),(9,'Whisky Highland Park','750ml',39663,'12 años, Color oro pálido, Matiz anaranjado, Aromas de fruta blanca, Notas de miel con especias, Vainilla y Canela, Toques florales, Matices de yodo y','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aut impedit minima, at aperiam ut, eligendi quae, dicta illo consequuntur quam. Neque incidunt beatae dolorum consectetur vero reiciendis cum tenetur? Ducimus assumenda nostrum repudiandae possimus, corporis numquam tempora nobis sequi esse, magnam excepturi minus quibusdam quis harum nihil voluptatibus sit rem eligendi rerum! Cum, ullam? Voluptate sunt nulla magni id. e itaque ratione eius ipsa dolorem qui ipsam earum sunt illum. Quaerat eos tenetur fuga quos facere veritatis unde, quis obcaecati perspiciatis consectetur veniam dolorum aspernatur excepturi totam fugiat!Quos consequatur nihil vitae dolorem deserunt repellendus impedit, velit nam ducimus, voluptatem officia reprehenderit. Exercitationem voluptas id atque debitis, consequatur adipisci nihil magnam vitae animi sit reiciendis repellendus earum suscipit! ','Highland Park',9,10,'whisky-Highland-Park.png','false',15,1),(10,'Whisky Louis XIII','750ml',99999,'Fino y largo bouquet, Aroma a flores y sándalo, Sabor a frutos como higos y dátiles, Mezclados con nuez moscada y jengibre ','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aut impedit minima, at aperiam ut, eligendi quae, dicta illo consequuntur quam. Neque incidunt beatae dolorum consectetur vero reiciendis cum tenetur? Ducimus assumenda nostrum repudiandae possimus, corporis numquam tempora nobis sequi esse, magnam excepturi minus quibusdam quis harum nihil voluptatibus sit rem eligendi rerum! Cum, ullam? Voluptate sunt nulla magni id. e itaque ratione eius ipsa dolorem qui ipsam earum sunt illum. Quaerat eos tenetur fuga quos facere veritatis unde, quis obcaecati perspiciatis consectetur veniam dolorum aspernatur excepturi totam fugiat!Quos consequatur nihil vitae dolorem deserunt repellendus impedit, velit nam ducimus, voluptatem officia reprehenderit. Exercitationem voluptas id atque debitis, consequatur adipisci nihil magnam vitae animi sit reiciendis repellendus earum suscipit! ','Louis XIII',9,10,'whisky-Louis-XIII.png','false',15,1),(11,'Sake Jumai','750ml',99999,'Sake de arroz puro, Aroma fresco y afrutado, Arroz pulido y filtrado de forma natural ','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aut impedit minima, at aperiam ut, eligendi quae, dicta illo consequuntur quam. Neque incidunt beatae dolorum consectetur vero reiciendis cum tenetur? Ducimus assumenda nostrum repudiandae possimus, corporis numquam tempora nobis sequi esse, magnam excepturi minus quibusdam quis harum nihil voluptatibus sit rem eligendi rerum! Cum, ullam? Voluptate sunt nulla magni id. e itaque ratione eius ipsa dolorem qui ipsam earum sunt illum. Quaerat eos tenetur fuga quos facere veritatis unde, quis obcaecati perspiciatis consectetur veniam dolorum aspernatur excepturi totam fugiat!Quos consequatur nihil vitae dolorem deserunt repellendus impedit, velit nam ducimus, voluptatem officia reprehenderit. Exercitationem voluptas id atque debitis, consequatur adipisci nihil magnam vitae animi sit reiciendis repellendus earum suscipit! ','Jumai',9,10,'sake-Jumai.png','false',15,7),(12,'Havana Club Máximo','750ml',99999,'Extra Añejo, Brillo de color ámbar, potenciado por un añejado adicional,Experiencia extremadamente rica, intensa y persistente, Aroma delicado, Roble,','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aut impedit minima, at aperiam ut, eligendi quae, dicta illo consequuntur quam. Neque incidunt beatae dolorum consectetur vero reiciendis cum tenetur? Ducimus assumenda nostrum repudiandae possimus, corporis numquam tempora nobis sequi esse, magnam excepturi minus quibusdam quis harum nihil voluptatibus sit rem eligendi rerum! Cum, ullam? Voluptate sunt nulla magni id. e itaque ratione eius ipsa dolorem qui ipsam earum sunt illum. Quaerat eos tenetur fuga quos facere veritatis unde, quis obcaecati perspiciatis consectetur veniam dolorum aspernatur excepturi totam fugiat!Quos consequatur nihil vitae dolorem deserunt repellendus impedit, velit nam ducimus, voluptatem officia reprehenderit. Exercitationem voluptas id atque debitis, consequatur adipisci nihil magnam vitae animi sit reiciendis repellendus earum suscipit! ','Havana Club',9,10,'ron-Habana-Club.jpg','false',15,9),(13,'Colección de Champagnes Krug','750ml',64400,'lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aut impedit minima, at aperiam ut, eligendi quae, dicta illo consequuntur quam. Neque incidunt beatae dolorum consectetur vero reiciendis cum tenetur? Ducimus assumenda nostrum repudiandae possimus, corporis numquam tempora nobis sequi esse, magnam excepturi minus quibusdam quis harum nihil voluptatibus sit rem eligendi rerum! Cum, ullam? Voluptate sunt nulla magni id. e itaque ratione eius ipsa dolorem qui ipsam earum sunt illum. Quaerat eos tenetur fuga quos facere veritatis unde, quis obcaecati perspiciatis consectetur veniam dolorum aspernatur excepturi totam fugiat!Quos consequatur nihil vitae dolorem deserunt repellendus impedit, velit nam ducimus, voluptatem officia reprehenderit. Exercitationem voluptas id atque debitis, consequatur adipisci nihil magnam vitae animi sit reiciendis repellendus earum suscipit!','Krug',9,10,'champagne-krug-combo1.jpg','true',15,5),(14,'Colección de Whisky GOT 15 años','750ml',99999,'lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aut impedit minima, at aperiam ut, eligendi quae, dicta illo consequuntur quam. Neque incidunt beatae dolorum consectetur vero reiciendis cum tenetur? Ducimus assumenda nostrum repudiandae possimus, corporis numquam tempora nobis sequi esse, magnam excepturi minus quibusdam quis harum nihil voluptatibus sit rem eligendi rerum! Cum, ullam? Voluptate sunt nulla magni id. e itaque ratione eius ipsa dolorem qui ipsam earum sunt illum. Quaerat eos tenetur fuga quos facere veritatis unde, quis obcaecati perspiciatis consectetur veniam dolorum aspernatur excepturi totam fugiat!Quos consequatur nihil vitae dolorem deserunt repellendus impedit, velit nam ducimus, voluptatem officia reprehenderit. Exercitationem voluptas id atque debitis, consequatur adipisci nihil magnam vitae animi sit reiciendis repellendus earum suscipit!','GOT',9,10,'Whisky-combo-juegodetronos1.jpg','true',15,1),(15,'Combo de sabores Vodka Trump','750ml',99999,'lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aut impedit minima, at aperiam ut, eligendi quae, dicta illo consequuntur quam. Neque incidunt beatae dolorum consectetur vero reiciendis cum tenetur? Ducimus assumenda nostrum repudiandae possimus, corporis numquam tempora nobis sequi esse, magnam excepturi minus quibusdam quis harum nihil voluptatibus sit rem eligendi rerum! Cum, ullam? Voluptate sunt nulla magni id. e itaque ratione eius ipsa dolorem qui ipsam earum sunt illum. Quaerat eos tenetur fuga quos facere veritatis unde, quis obcaecati perspiciatis consectetur veniam dolorum aspernatur excepturi totam fugiat!Quos consequatur nihil vitae dolorem deserunt repellendus impedit, velit nam ducimus, voluptatem officia reprehenderit. Exercitationem voluptas id atque debitis, consequatur adipisci nihil magnam vitae animi sit reiciendis repellendus earum suscipit!','Trump',9,10,'vodka-trump-combo1.jpg','true',15,3),(16,'Combo de Tequila Ley 924','750ml',99999,'lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aut impedit minima, at aperiam ut, eligendi quae, dicta illo consequuntur quam. Neque incidunt beatae dolorum consectetur vero reiciendis cum tenetur? Ducimus assumenda nostrum repudiandae possimus, corporis numquam tempora nobis sequi esse, magnam excepturi minus quibusdam quis harum nihil voluptatibus sit rem eligendi rerum! Cum, ullam? Voluptate sunt nulla magni id. e itaque ratione eius ipsa dolorem qui ipsam earum sunt illum. Quaerat eos tenetur fuga quos facere veritatis unde, quis obcaecati perspiciatis consectetur veniam dolorum aspernatur excepturi totam fugiat!Quos consequatur nihil vitae dolorem deserunt repellendus impedit, velit nam ducimus, voluptatem officia reprehenderit. Exercitationem voluptas id atque debitis, consequatur adipisci nihil magnam vitae animi sit reiciendis repellendus earum suscipit!','Ley 924',9,10,'tequilaleycombo1.jpg','true',15,8),(17,'Colección de Vinos Rutini 15 años','750ml',99999,'lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aut impedit minima, at aperiam ut, eligendi quae, dicta illo consequuntur quam. Neque incidunt beatae dolorum consectetur vero reiciendis cum tenetur? Ducimus assumenda nostrum repudiandae possimus, corporis numquam tempora nobis sequi esse, magnam excepturi minus quibusdam quis harum nihil voluptatibus sit rem eligendi rerum! Cum, ullam? Voluptate sunt nulla magni id. e itaque ratione eius ipsa dolorem qui ipsam earum sunt illum. Quaerat eos tenetur fuga quos facere veritatis unde, quis obcaecati perspiciatis consectetur veniam dolorum aspernatur excepturi totam fugiat!Quos consequatur nihil vitae dolorem deserunt repellendus impedit, velit nam ducimus, voluptatem officia reprehenderit. Exercitationem voluptas id atque debitis, consequatur adipisci nihil magnam vitae animi sit reiciendis repellendus earum suscipit!','Rutini',9,10,'rutini-coleccion-combo1.jpg','true',15,6),(18,'Dos Cognac Remy','750ml',99999,'lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aut impedit minima, at aperiam ut, eligendi quae, dicta illo consequuntur quam. Neque incidunt beatae dolorum consectetur vero reiciendis cum tenetur? Ducimus assumenda nostrum repudiandae possimus, corporis numquam tempora nobis sequi esse, magnam excepturi minus quibusdam quis harum nihil voluptatibus sit rem eligendi rerum! Cum, ullam? Voluptate sunt nulla magni id. e itaque ratione eius ipsa dolorem qui ipsam earum sunt illum. Quaerat eos tenetur fuga quos facere veritatis unde, quis obcaecati perspiciatis consectetur veniam dolorum aspernatur excepturi totam fugiat!Quos consequatur nihil vitae dolorem deserunt repellendus impedit, velit nam ducimus, voluptatem officia reprehenderit. Exercitationem voluptas id atque debitis, consequatur adipisci nihil magnam vitae animi sit reiciendis repellendus earum suscipit!','Remy',9,10,'cognac-remy-combo1.jpg','true',15,4),(19,'Combo 3 Whisky Chivas','750ml',99999,'lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aut impedit minima, at aperiam ut, eligendi quae, dicta illo consequuntur quam. Neque incidunt beatae dolorum consectetur vero reiciendis cum tenetur? Ducimus assumenda nostrum repudiandae possimus, corporis numquam tempora nobis sequi esse, magnam excepturi minus quibusdam quis harum nihil voluptatibus sit rem eligendi rerum! Cum, ullam? Voluptate sunt nulla magni id. e itaque ratione eius ipsa dolorem qui ipsam earum sunt illum. Quaerat eos tenetur fuga quos facere veritatis unde, quis obcaecati perspiciatis consectetur veniam dolorum aspernatur excepturi totam fugiat!Quos consequatur nihil vitae dolorem deserunt repellendus impedit, velit nam ducimus, voluptatem officia reprehenderit. Exercitationem voluptas id atque debitis, consequatur adipisci nihil magnam vitae animi sit reiciendis repellendus earum suscipit!','Chivas',9,10,'chivas-combo1.jpg','true',15,1),(20,'Gin Pack JCB','750ml',99999,'lorem ipsum, lorem ipsum, lorem ipsum, lorem ipsum','Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla aut impedit minima, at aperiam ut, eligendi quae, dicta illo consequuntur quam. Neque incidunt beatae dolorum consectetur vero reiciendis cum tenetur? Ducimus assumenda nostrum repudiandae possimus, corporis numquam tempora nobis sequi esse, magnam excepturi minus quibusdam quis harum nihil voluptatibus sit rem eligendi rerum! Cum, ullam? Voluptate sunt nulla magni id. e itaque ratione eius ipsa dolorem qui ipsam earum sunt illum. Quaerat eos tenetur fuga quos facere veritatis unde, quis obcaecati perspiciatis consectetur veniam dolorum aspernatur excepturi totam fugiat!Quos consequatur nihil vitae dolorem deserunt repellendus impedit, velit nam ducimus, voluptatem officia reprehenderit. Exercitationem voluptas id atque debitis, consequatur adipisci nihil magnam vitae animi sit reiciendis repellendus earum suscipit!','JCB',9,10,'gin-jcb-combo1.jpg','true',15,2);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_has_users`
--

DROP TABLE IF EXISTS `products_has_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products_has_users` (
  `products_idproducts` int(11) NOT NULL,
  `users_idusers` int(11) NOT NULL,
  PRIMARY KEY (`products_idproducts`,`users_idusers`),
  KEY `fk_products_has_users_users1_idx` (`users_idusers`),
  KEY `fk_products_has_users_products_idx` (`products_idproducts`),
  CONSTRAINT `fk_products_has_users_products` FOREIGN KEY (`products_idproducts`) REFERENCES `products` (`idproducts`),
  CONSTRAINT `fk_products_has_users_users1` FOREIGN KEY (`users_idusers`) REFERENCES `users` (`idusers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_has_users`
--

LOCK TABLES `products_has_users` WRITE;
/*!40000 ALTER TABLE `products_has_users` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_has_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `idusers` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) DEFAULT NULL,
  `surname` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `img` varchar(1000) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `birthday` varchar(100) DEFAULT NULL,
  `profile` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`idusers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-15 22:18:23
