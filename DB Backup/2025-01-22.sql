CREATE DATABASE  IF NOT EXISTS `pikplay` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `pikplay`;
-- MySQL dump 10.13  Distrib 8.0.38, for macos14 (x86_64)
--
-- Host: 34.48.175.54    Database: pikplay
-- ------------------------------------------------------
-- Server version	5.5.5-10.6.18-MariaDB-0ubuntu0.22.04.1

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
-- Table structure for table `addresses`
--

DROP TABLE IF EXISTS `addresses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `addresses` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `addresses`
--

LOCK TABLES `addresses` WRITE;
/*!40000 ALTER TABLE `addresses` DISABLE KEYS */;
INSERT INTO `addresses` VALUES (1,1,'casa','cll 68 # 59 - 54 apt. 110'),(2,1,'trabajo','fake street 123'),(3,2,'apartamento','carrera 98 # 99 - 77 edificio fake'),(4,2,'nando','');
/*!40000 ALTER TABLE `addresses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `challenges`
--

DROP TABLE IF EXISTS `challenges`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `challenges` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL,
  `pid` int(11) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `coins` varchar(45) DEFAULT NULL,
  `experience` int(11) DEFAULT NULL,
  `detail` varchar(45) DEFAULT NULL,
  `message_top` varchar(45) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `challenges`
--

LOCK TABLES `challenges` WRITE;
/*!40000 ALTER TABLE `challenges` DISABLE KEYS */;
INSERT INTO `challenges` VALUES (1,NULL,NULL,'Dale un toque a tu perfil','10',1000,'Cambia tu imagen de perfil',NULL,'1','2024-12-29 20:56:36'),(2,NULL,NULL,'Invita a tu primer referido','20',2000,NULL,NULL,'1','2024-12-29 20:57:58'),(3,NULL,NULL,'Sube tu primera factura','50',5000,NULL,NULL,'1','2025-01-11 01:40:14'),(4,NULL,NULL,'Parcicipar en un sorteo','10',1000,'Parcicipar en un sorteo','Felicidades por tu primera insignia de Sorteo','1','2025-01-12 20:30:20'),(5,NULL,NULL,'Regalar X Pikcoins a un amigo ',NULL,NULL,NULL,NULL,NULL,'2025-01-15 13:45:53'),(6,NULL,NULL,'Reclamar Pikcoins obtenidos por referidos',NULL,NULL,NULL,NULL,NULL,'2025-01-15 13:46:20'),(7,NULL,NULL,'Compartir un producto a un amigo',NULL,NULL,NULL,'',NULL,'2025-01-17 19:36:20'),(8,NULL,NULL,'Guardar un productos en favoritos',NULL,NULL,NULL,'',NULL,'2025-01-17 19:36:21');
/*!40000 ALTER TABLE `challenges` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coins`
--

DROP TABLE IF EXISTS `coins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coins` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` int(11) DEFAULT NULL,
  `notification` int(11) DEFAULT NULL,
  `publication` int(11) DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL,
  `value` int(11) DEFAULT NULL,
  `created` timestamp NULL DEFAULT current_timestamp(),
  `modified` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=182 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coins`
--

LOCK TABLES `coins` WRITE;
/*!40000 ALTER TABLE `coins` DISABLE KEYS */;
INSERT INTO `coins` VALUES (92,62,90,NULL,'228 Pikcoins por tu compra de Dirt 5',228,'2022-01-17 00:46:36','2022-04-07 21:28:44'),(93,25,92,NULL,'5000 Pikcoins por tu compra de Audífonos APPLE Air',5000,'2022-02-19 23:42:39','2022-04-07 21:28:44'),(111,103,103,NULL,'Completaste el perfil',2500,'2022-04-02 18:13:37','2022-04-07 21:28:44'),(134,61,120,NULL,'Juancho Fenix y Pikplay te dan 10.000 para que compres en Pikplay.co',5000,'2022-04-09 04:34:05','2022-04-09 05:07:39'),(138,104,126,NULL,'Completaste el perfil',2500,'2022-04-20 14:22:45','2022-04-20 22:07:52'),(139,104,126,NULL,'Completaste el perfil',2500,'2022-04-20 14:22:45','2022-04-20 22:07:58'),(142,61,126,NULL,'Completaste el perfil',2500,'2022-04-25 03:20:22','2022-04-25 03:29:30'),(143,61,123,NULL,'Juancho Fenix y Pikplay te dan 10.000 para que compres en Pikplay.co',5000,'2022-04-25 03:20:22','2022-04-25 03:29:58'),(144,61,132,NULL,'Juancho Fenix y Pikplay te dan 5.000 para que compres en Pikplay.co',5000,'2022-04-25 03:20:22','2022-04-25 03:32:28'),(152,61,132,NULL,'Juancho Fenix y Pikplay te dan 5.000 para que compres en Pikplay.co',5000,'2022-04-26 03:21:47','2022-04-26 03:21:47'),(153,61,138,NULL,'Gravity y Pikplay te regalan 5.000 pikcoins para que lo redimas comprando en Pikplay.co',5000,'2022-04-30 17:13:29','2022-04-30 17:13:29'),(159,110,142,NULL,'Completaste el perfil',2500,'2022-04-30 20:39:22','2022-04-30 20:39:22'),(160,110,142,NULL,'Completaste el perfil',2500,'2022-04-30 20:43:34','2022-04-30 20:43:34'),(161,110,141,NULL,'Gravity y Pikplay te regalan 5.000 pikcoins para que lo redimas comprando en Pikplay.co',5000,'2022-04-30 20:43:51','2022-04-30 20:43:51'),(163,110,141,NULL,'Gravity y Pikplay te regalan 5.000 pikcoins para que lo redimas comprando en Pikplay.co',5000,'2022-05-01 16:10:49','2022-05-01 16:10:49'),(164,110,141,NULL,'Gravity y Pikplay te regalan 5.000 pikcoins para que lo redimas comprando en Pikplay.co',5000,'2022-05-01 16:10:57','2022-05-01 16:10:57'),(167,61,NULL,195,'Obtuviste 10.000 para la compra de Mario Origami',10000,'2022-05-06 17:02:31','2022-05-06 17:02:31'),(168,61,NULL,195,'Obtuviste 10.000 para la compra de Mario Origami',10000,'2022-05-06 17:04:17','2022-05-06 17:04:17'),(169,61,NULL,195,'Obtuviste 10.000 para la compra de Mario Origami',10000,'2022-05-07 01:49:26','2022-05-07 01:49:26'),(170,61,NULL,195,'Obtuviste 10.000 para la compra de Mario Origami',10000,'2022-05-07 02:08:15','2022-05-07 02:08:15'),(171,61,NULL,195,'Obtuviste 10.000 para la compra de Mario Origami',10000,'2022-05-08 01:57:49','2022-05-08 01:57:49'),(172,61,NULL,195,'Obtuviste 10.000 para la compra de Mario Origami',10000,'2022-05-08 02:24:46','2022-05-08 02:24:46'),(173,61,NULL,195,'Obtuviste 10.000 para la compra de Mario Origami',10000,'2022-05-08 03:53:49','2022-05-08 03:53:49'),(174,61,NULL,182,'Gravity y Pikplay te regalan 10.000 pikcoins para que compres tu soporte de controles y diademas',10000,'2022-05-08 17:43:52','2022-05-08 17:43:52'),(175,61,156,NULL,'Gravity y Pikplay te regalan 5.000 pikcoins para que lo redimas comprando en Pikplay.co',5000,'2022-05-08 18:26:17','2022-05-08 18:26:17'),(176,61,158,NULL,'Juancho Fenix y Pikplay te regalan 5.000 para que los redimas comprando en Pikplay.co',10000,'2022-05-14 18:02:36','2022-05-14 18:02:36'),(177,118,162,NULL,'Completaste el perfil',2500,'2022-05-18 03:02:27','2022-05-18 03:02:27'),(178,117,NULL,199,'Descuento de prueba',20000,'2022-05-18 05:06:49','2022-05-18 05:06:49'),(179,117,163,NULL,'Descuento de prueba',20000,'2022-05-19 20:58:28','2022-05-19 20:58:28'),(180,61,NULL,195,'Juancho Fenix y Pikplay te regalan 10.000 pikcoins para que compres Mario Paper, enjoy it!',10000,'2022-05-26 17:35:26','2022-05-26 17:35:26'),(181,61,168,NULL,'Juancho Fenix y Pikplay te regalan 10.000 pikcoins para que compres Mario Paper, enjoy it!',10000,'2022-05-26 20:45:21','2022-05-26 20:45:21');
/*!40000 ALTER TABLE `coins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `competitions`
--

DROP TABLE IF EXISTS `competitions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `competitions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  `slug` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `award` varchar(100) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `members_capacity` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `competitions`
--

LOCK TABLES `competitions` WRITE;
/*!40000 ALTER TABLE `competitions` DISABLE KEYS */;
INSERT INTO `competitions` VALUES (1,120,'Act 4 Sorteo de Navidad','act-4-sorteo-de-navidad','Liberación de cupos el sábado 27 de OCT','PS5 de Disco',32500,32,'2024-12-31 22:53:14');
/*!40000 ALTER TABLE `competitions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `competitions_members`
--

DROP TABLE IF EXISTS `competitions_members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `competitions_members` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `competition_id` varchar(45) DEFAULT NULL,
  `uid` int(11) DEFAULT NULL,
  `is_paid` tinyint(1) DEFAULT 0,
  `number` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_competition_member` (`competition_id`,`number`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `competitions_members`
--

LOCK TABLES `competitions_members` WRITE;
/*!40000 ALTER TABLE `competitions_members` DISABLE KEYS */;
INSERT INTO `competitions_members` VALUES (58,'1',61,0,7,'2025-01-19 02:28:00');
/*!40000 ALTER TABLE `competitions_members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `configurations`
--

DROP TABLE IF EXISTS `configurations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `configurations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `value` varchar(45) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `configurations`
--

LOCK TABLES `configurations` WRITE;
/*!40000 ALTER TABLE `configurations` DISABLE KEYS */;
INSERT INTO `configurations` VALUES (1,'HOME_PRODUCTS','[51]','2024-10-20 03:18:19'),(2,'HOME_CATEGORIES_ORDER','[3]','2024-10-20 03:18:19');
/*!40000 ALTER TABLE `configurations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coupons`
--

DROP TABLE IF EXISTS `coupons`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coupons` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(45) DEFAULT NULL,
  `coins` int(11) DEFAULT NULL,
  `detail` varchar(255) DEFAULT NULL,
  `publication` int(11) DEFAULT NULL COMMENT 'Si el cupón es válido solo para una publicación aquí debe ir el ID de la publicación',
  `quantity` int(11) DEFAULT NULL,
  `original_quantity` int(11) DEFAULT NULL,
  `available` tinyint(1) DEFAULT NULL COMMENT 'Boolean que indica si esta disponible el cupón',
  `type` varchar(45) DEFAULT NULL,
  `modified` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coupons`
--

LOCK TABLES `coupons` WRITE;
/*!40000 ALTER TABLE `coupons` DISABLE KEYS */;
INSERT INTO `coupons` VALUES (5,'PIKJUANCHO',10000,'Juancho Fenix y Pikplay te regalan 10.000 pikcoins para que compres Mario Paper, enjoy it!',195,4,5,1,'PUBLICATION_COUPON','2022-05-26 17:35:26','2022-05-06 02:49:54'),(6,'PIKGRAVITY',10000,'Gravity y Pikplay te regalan 10.000 pikcoins para que compres tu soporte de controles y diademas',182,5,5,1,'PUBLICATION_COUPON','2022-05-08 18:29:36','2022-05-08 16:10:28'),(7,'TEST',20000,'Descuento de prueba',199,0,1,1,'PUBLICATION_COUPON','2022-05-18 05:06:49','2022-05-17 15:50:38');
/*!40000 ALTER TABLE `coupons` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `coupons_claimed`
--

DROP TABLE IF EXISTS `coupons_claimed`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coupons_claimed` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `coupon` varchar(50) DEFAULT NULL COMMENT 'ID del cupon',
  `user` int(11) DEFAULT NULL,
  `created` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coupons_claimed`
--

LOCK TABLES `coupons_claimed` WRITE;
/*!40000 ALTER TABLE `coupons_claimed` DISABLE KEYS */;
INSERT INTO `coupons_claimed` VALUES (2,'JUANCHOPIK',60,'2022-04-10 15:49:06'),(3,'JUANCHOPIK',61,'2022-04-25 03:32:12'),(18,'MARIO',61,'2022-05-08 03:53:49'),(20,'PIKGRAVITY',61,'2022-05-08 17:43:52'),(22,'TEST',117,'2022-05-18 05:06:49'),(23,'PIKJUANCHO',61,'2022-05-26 17:35:26');
/*!40000 ALTER TABLE `coupons_claimed` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `following`
--

DROP TABLE IF EXISTS `following`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `following` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `publication` int(11) DEFAULT NULL,
  `user` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `following`
--

LOCK TABLES `following` WRITE;
/*!40000 ALTER TABLE `following` DISABLE KEYS */;
INSERT INTO `following` VALUES (6,45,61),(8,45,61),(38,166,0),(39,157,0),(40,178,0),(41,176,0),(43,170,110),(49,191,116),(50,192,116),(62,199,117),(63,192,117),(64,202,61);
/*!40000 ALTER TABLE `following` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` int(11) DEFAULT NULL,
  `url` varchar(255) DEFAULT NULL,
  `order` tinyint(4) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `leads`
--

DROP TABLE IF EXISTS `leads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `leads` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `referral_uid` int(11) DEFAULT NULL COMMENT 'UID de la persona que refirió al usuario',
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `phone_UNIQUE` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=69 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `leads`
--

LOCK TABLES `leads` WRITE;
/*!40000 ALTER TABLE `leads` DISABLE KEYS */;
INSERT INTO `leads` VALUES (66,'Abuela','+573052024144',61,'2025-01-21 02:58:21'),(67,'Abuelo Hector','+573004046309',61,'2025-01-21 02:58:21'),(68,'Alan El Heraldo','(317)300-4776',61,'2025-01-21 02:58:36');
/*!40000 ALTER TABLE `leads` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logs`
--

DROP TABLE IF EXISTS `logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` varchar(45) DEFAULT NULL,
  `detail` text DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logs`
--

LOCK TABLES `logs` WRITE;
/*!40000 ALTER TABLE `logs` DISABLE KEYS */;
INSERT INTO `logs` VALUES (1,NULL,'Se cambio el valor de los creditos de la challenge de referitos de 10 a 20','2024-12-29 20:59:00');
/*!40000 ALTER TABLE `logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notifications` (
  `nid` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL DEFAULT 0,
  `cid` int(11) DEFAULT 0,
  `description` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `coins` int(11) NOT NULL DEFAULT 0,
  `checked` tinyint(1) DEFAULT 0,
  `claimed` tinyint(1) DEFAULT 0,
  `link` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`nid`)
) ENGINE=InnoDB AUTO_INCREMENT=230 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
INSERT INTO `notifications` VALUES (209,0,4,'Felicidades por tu primera insignia de Sorteo',NULL,10,0,0,NULL,NULL,'2025-01-12 21:57:22'),(210,0,4,'Felicidades por tu primera insignia de Sorteo',NULL,10,0,0,NULL,NULL,'2025-01-12 22:01:21'),(212,0,4,'Felicidades por tu primera insignia de Sorteo',NULL,10,0,0,NULL,NULL,'2025-01-12 22:37:39'),(220,128,4,'Felicidades por tu primera insignia de Sorteo',NULL,10,0,0,NULL,NULL,'2025-01-13 02:44:26'),(221,128,4,'Felicidades por tu primera insignia de Sorteo',NULL,10,0,0,NULL,NULL,'2025-01-13 02:45:44'),(225,129,1,'Felicidades ?, tus primeros Pikcoins están aquí!',NULL,10,0,0,NULL,NULL,'2025-01-13 14:17:22'),(227,61,0,'Gracias por subir la factura de tu compra, tus <b>Pikcoins</b> se encuentran en validación por uno de nuestros agentes',NULL,0,0,0,NULL,NULL,'2025-01-18 21:45:09'),(228,124,1,'Felicidades ?, tus primeros Pikcoins están aquí!',NULL,10,0,0,NULL,NULL,'2025-01-19 21:49:59'),(229,124,1,'Felicidades ?, tus primeros Pikcoins están aquí!',NULL,10,0,0,NULL,NULL,'2025-01-19 21:56:47');
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `redemptions`
--

DROP TABLE IF EXISTS `redemptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `redemptions` (
  `rid` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL,
  `amount` int(11) DEFAULT NULL,
  `verification_code` int(11) DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL COMMENT 'UID de quien hizo la última actualización',
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE current_timestamp(),
  PRIMARY KEY (`rid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `redemptions`
--

LOCK TABLES `redemptions` WRITE;
/*!40000 ALTER TABLE `redemptions` DISABLE KEYS */;
INSERT INTO `redemptions` VALUES (1,61,5000,1234,NULL,'2025-01-10 02:18:38','0000-00-00 00:00:00');
/*!40000 ALTER TABLE `redemptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transactions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL,
  `seller_uid` int(11) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT 0,
  `type` varchar(100) DEFAULT 'PURCHASE' COMMENT 'PURCHASE',
  `invoice_url` varchar(255) DEFAULT NULL COMMENT 'URL del archivo de la factura en Firebase',
  `amount` int(11) DEFAULT 0,
  `experience` int(11) DEFAULT 0,
  `redemption_id` int(11) DEFAULT NULL,
  `credits` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `purshase_date` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=114 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
INSERT INTO `transactions` VALUES (38,61,120,'Corte de cabello y barba',0,'PURCHASE','https://firebasestorage.googleapis.com/v0/b/pikplay-72843.firebasestorage.app/o/invoices%2F61%2F38%2Fgames.jpg?alt=media&token=0597750e-cb8a-4438-804d-640a1ded57f0',12500,12,NULL,12,'2025-01-17 01:37:00','2022-02-23 01:37:00','2025-01-18 23:27:44'),(39,61,120,'Corte de cabello y lavado',1,'PURCHASE',NULL,16900,16,NULL,16,'2025-01-05 01:37:00','2022-02-06 01:37:00','2025-01-18 23:35:08'),(113,61,124,'das',0,'PURCHASE',NULL,0,0,NULL,0,'2025-01-20 01:23:00','2025-01-20 01:23:00','2025-01-20 01:23:00');
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) DEFAULT NULL,
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `preferences` varchar(500) DEFAULT NULL,
  `certificate` int(11) DEFAULT 0 COMMENT 'Si la cuenta esta certificada',
  `apply_cashback` int(11) DEFAULT 0 COMMENT 'Se utiliza para saber si el vendedor que publico el producto ofrece cashback a sus clientes',
  `email` varchar(255) DEFAULT NULL,
  `login_code` int(11) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL,
  `token` varchar(500) DEFAULT NULL,
  `picture` varchar(500) DEFAULT '/images/users/profile_default.png',
  `city` varchar(255) DEFAULT NULL,
  `banner_bottom` varchar(500) DEFAULT NULL,
  `banner_top` varchar(500) DEFAULT NULL,
  `category` varchar(50) DEFAULT 'Bronce',
  `rol` varchar(45) DEFAULT 'client' COMMENT 'rol / client',
  `is_admin` int(11) DEFAULT 0,
  `interests` varchar(50) DEFAULT NULL,
  `document_number` varchar(50) DEFAULT NULL COMMENT 'Número de identificacion (cedula)',
  `is_certificated` tinyint(1) DEFAULT NULL,
  `league` varchar(45) DEFAULT 'bronce',
  `badge` varchar(45) DEFAULT NULL,
  `identification_number` varchar(45) DEFAULT NULL,
  `modified_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`uid`),
  UNIQUE KEY `phone_UNIQUE` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=130 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (NULL,61,'Nandi 2.0',NULL,0,0,NULL,1316,'573187414972','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjU3MzE4NzQxNDk3MiIsImNvZGUiOjEzMTYsImlhdCI6MTczNzQyNjMwMX0.J1_KQQv8Oa5oX8SY9mgyzgIa5fFd8SdzdLtemSHHZpg','https://firebasestorage.googleapis.com/v0/b/pikplay-72843.firebasestorage.app/o/profile%2F61%2F17367372701315779511089924474551.jpg?alt=media&token=b8c68318-d63f-401b-9513-6be6e9a77ed1',NULL,NULL,NULL,'Bronce','client',1,NULL,NULL,NULL,'bronce',NULL,NULL,'2025-01-21 02:25:01','2025-01-06 02:57:26'),(NULL,120,'Bluepanther',NULL,0,0,NULL,NULL,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjU3MzAxNTk3MTQ1OCIsImNvZGUiOjcxNTUsImlhdCI6MTczNDU2MzU3MH0.6bEic0CYvvRmX0Dsiwdre4ZZgjhqCvhPR7NIQqP5VHM','https://firebasestorage.googleapis.com/v0/b/pikplay-72843.firebasestorage.app/o/profile%2F61%2Fseller-woman-farm-products-grocery-street-vector-26569435.jpg?alt=media&token=600121cd-704d-46aa-bef8-d77e57815fdd',NULL,NULL,NULL,'Bronce','client',0,NULL,NULL,NULL,'bronce',NULL,NULL,'2025-01-06 16:11:01','2024-12-18 23:07:20'),(NULL,121,'Another Seller',NULL,0,0,NULL,NULL,NULL,NULL,'/images/icons/user.png',NULL,NULL,NULL,'Bronce','client',0,NULL,NULL,NULL,'bronce',NULL,NULL,'2024-12-19 15:30:26','2024-12-19 15:30:26'),(NULL,124,'Alvaro Dev',NULL,0,0,NULL,1234,'573024287752','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjU3MzAyNDI4Nzc1MiIsImNvZGUiOjEyMzQsImlhdCI6MTczNzMyMzQ2OX0.6OItMS502k2HtLTpuGX1WpzglHRZVaMPTuvx98qK6Sw','https://firebasestorage.googleapis.com/v0/b/pikplay-72843.firebasestorage.app/o/profile%2F124%2Fwallhaven-4yykkd.jpg?alt=media&token=c59d4851-1dc3-4778-9133-7377363f7757',NULL,NULL,NULL,'Bronce','client',1,NULL,NULL,NULL,'bronce',NULL,NULL,'2025-01-19 21:56:47','2024-12-20 03:34:48'),(NULL,129,'RMontesL',NULL,0,0,NULL,5443,'573242604138','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwaG9uZSI6IjU3MzI0MjYwNDEzOCIsImNvZGUiOjU0NDMsImlhdCI6MTczNjc3Nzc5N30.wDI5mmzfKDVdfubS1qhAkr6R8W8IuO_H2QwRGTbOB2c','/images/users/profile_default.png',NULL,NULL,NULL,'Bronce','client',0,NULL,NULL,NULL,'bronce',NULL,NULL,'2025-01-13 14:17:22','2025-01-13 14:16:18');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_experiences`
--

DROP TABLE IF EXISTS `users_experiences`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_experiences` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) DEFAULT NULL COMMENT 'User ID',
  `pid` int(11) DEFAULT NULL,
  `cid` int(11) DEFAULT NULL COMMENT 'Challenge ID',
  `experience_type` varchar(45) DEFAULT NULL COMMENT 'CHALLENGE, REFERRAL',
  `coins` int(11) DEFAULT NULL,
  `experience` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_experiences`
--

LOCK TABLES `users_experiences` WRITE;
/*!40000 ALTER TABLE `users_experiences` DISABLE KEYS */;
INSERT INTO `users_experiences` VALUES (22,61,NULL,3,'CHALLENGE',50,5000,'2025-01-18 21:45:10');
/*!40000 ALTER TABLE `users_experiences` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-22 21:24:20
