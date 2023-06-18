# ************************************************************
# Sequel Ace SQL dump
# Version 20033
#
# https://sequel-ace.com/
# https://github.com/Sequel-Ace/Sequel-Ace
#
# Host: 127.0.0.1 (MySQL 8.0.32)
# Database: ap_db
# Generation Time: 2023-06-18 15:45:40 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
SET NAMES utf8mb4;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE='NO_AUTO_VALUE_ON_ZERO', SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table payments
# ------------------------------------------------------------

DROP TABLE IF EXISTS `payments`;

CREATE TABLE `payments` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `numberPayment` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `zipcode` int DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

LOCK TABLES `payments` WRITE;
/*!40000 ALTER TABLE `payments` DISABLE KEYS */;

INSERT INTO `payments` (`id`, `numberPayment`, `address`, `zipcode`, `created_at`, `updated_at`)
VALUES
	(2,'pay0001','nongkheam',10160,'2023-06-18 11:59:55','2023-06-18 11:59:55'),
	(3,'pay0002','หนองแขม',10160,'2023-06-18 12:00:21','2023-06-18 12:00:21'),
	(4,'PAY101110','หนองแขม520/1เลียบคลองภาษีเจริญฝั่งเหนืออำเภอ/เขตหนองแขมตำบล/แขวงหนองแขมจังหวัดกรุงเทพมหานคร',10160,'2023-06-18 12:23:20','2023-06-18 12:23:20'),
	(5,'PAY101122','หมู่บ้าน/อาคารหนองแขม 5 20/1 เลียบคลองภาษีเจริญฝั่งเหนือ อำเภอ/เขตหนองแขม ตำบล/แขวงหนองแขม จังหวัดกรุงเทพมหานคร ',10160,'2023-06-18 13:11:57','2023-06-18 13:11:57'),
	(6,'1231234','หมู่บ้าน/อาคารหนองแขม 5 20/1 เลียบคลองภาษีเจริญฝั่งเหนือ อำเภอ/เขตหนองแขม ตำบล/แขวงหนองแขม จังหวัดกรุงเทพมหานคร ',10160,'2023-06-18 13:29:18','2023-06-18 13:29:18'),
	(7,'testsr','rersr',10160,'2023-06-18 13:40:03','2023-06-18 13:40:03'),
	(8,'tesrsdsd','sdsdsdsd',10160,'2023-06-18 13:40:10','2023-06-18 13:40:10'),
	(9,'sdsdsd','sdsdsdsd',10160,'2023-06-18 13:40:13','2023-06-18 13:40:13'),
	(10,'asdsadasd','asdasdasdasd',10160,'2023-06-18 13:40:20','2023-06-18 13:40:20'),
	(11,'3534sdf','234asdadwer',10160,'2023-06-18 13:40:27','2023-06-18 13:40:27'),
	(12,'asd23r','234we2f',10160,'2023-06-18 13:40:31','2023-06-18 13:40:31');

/*!40000 ALTER TABLE `payments` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
