-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Waktu pembuatan: 28 Jun 2020 pada 16.54
-- Versi server: 10.1.30-MariaDB
-- Versi PHP: 7.2.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `libraryapp-api`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `author`
--

CREATE TABLE `author` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `author`
--

INSERT INTO `author` (`id`, `name`) VALUES
(1, 'J.K Rowling'),
(2, 'Masashi Kishimoto'),
(3, 'Andrea Hirata'),
(4, 'Donny Dhirgantoro'),
(5, 'Pidi Baiqd'),
(10, 'ddd'),
(13, 'dwikys'),
(14, '2222'),
(17, 'eeqqqwww'),
(19, 'asad');

-- --------------------------------------------------------

--
-- Struktur dari tabel `books`
--

CREATE TABLE `books` (
  `id` int(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL,
  `genre_id` int(255) NOT NULL,
  `author_id` int(255) NOT NULL,
  `status` varchar(255) NOT NULL DEFAULT 'Available',
  `date_added` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date_updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `books`
--

INSERT INTO `books` (`id`, `title`, `description`, `image`, `genre_id`, `author_id`, `status`, `date_added`, `date_updated`) VALUES
(1, 'Harry Potter and the Philosopher\'s Stone', 'Harry Potter and the Philosopher\'s Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling\'s debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. ', 'image-1593068233645.jpg', 1, 1, 'Unavailable', '2020-04-22 06:17:00', '2020-06-25 13:57:13'),
(2, 'Harry Potter and the Chamber of Secret', 'Harry Potter and the Chamber of Secrets is a fantasy novel written by British author J. K. Rowling and the second novel in the Harry Potter series. The plot follows Harry\'s second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school\'s corridors warn that the \"Chamber of Secrets\" has been opened', 'image-1591467680410.jpg', 1, 1, 'Available', '2020-04-22 06:39:31', '2020-06-12 22:09:54'),
(4, 'Naruto Vol. 10: A Great Ninja...!', 'Naruto (???) is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells ... Other Naruto-related merchandise includes light novels, video games, and trading cards', 'image-1588499675406.jpg', 1, 2, 'Unavailable', '2020-04-22 07:31:31', '2020-06-25 19:42:46'),
(5, 'Dilan 2022', 'Pada September 1990, Milea dan keluarganya pindah dari Jakarta ke Bandung. Saat hendak masuk di sebuah SMA, Milea bertemu dengan Dilan sang panglima geng motor. Dilan tak memperkenalkan dirinya, namun dengan sangat percaya diri segera meramal kalau Milea akan naik motor bersamanya dan menjadi pacarnya. Dilan, entah bagaimana caranya, ', 'dilan.jpeg', 2, 5, 'Available', '2020-04-22 13:01:44', '2020-06-08 22:08:30'),
(11, 'Harry Potter and the Goblet of Fire', 'Harry Potter and the Goblet of Fire is a fantasy book written by British author J. K. Rowling and the fourth novel in the Harry Potter series. It follows Harry Potter, a wizard in his fourth year at Hogwarts School of Witchcraft and Wizardry, and the mystery surrounding the entry of Harry\'s name into the Triwizard Tournament, in which he is forced to compete.\r\n\r\nThe book was published in the United Kingdom by Bloomsbury ', 'image-1588513859566.jpg', 5, 1, 'Unavailable', '2020-04-23 10:33:08', '2020-05-03 20:50:59'),
(12, 'harry', '2nd books of Harry Potter', 'image-1588512243617.jpg', 1, 1, 'Unavailable', '2020-04-23 11:04:39', '2020-05-03 20:24:03'),
(85, 'Laskar pelangi', 'Kisah anak-anak tidak selalu diwarnai dengan bermacam sukacita. Laskar Pelangi pun hadir dengan ceritanya yang berbeda.\n\nDi balik canda tawa dan keseruan anak-anak SD Muhammadiyah Belitung, terdapat duka dan masalah pahit yang mereka deritakan.\n\nNovel fiksi yang inspiratif ini pernah hits pada masanya. Tidak mengherankan pula bahwa novel ini dibuat versi layar lebarnya dan telah menjadi salah satu film tersukses sepanjang sejarah sinema Indonesia.', '5.-Laskar-Pelangi-696x696.jpg', 5, 3, 'Available', '2020-04-25 23:02:03', '2020-06-10 22:53:44'),
(119, '5 CM', 'Kisah anak-anak tidak selalu diwarnai dengan bermacam sukacita. Laskar Pelangi pun hadir dengan ceritanya yang berbeda.\n\nDi balik canda tawa dan keseruan anak-anak SD Muhammadiyah Belitung, terdapat duka dan masalah pahit yang mereka deritakan.\n\nNovel fiksi yang inspiratif ini pernah hits pada masanya. Tidak mengherankan pula bahwa novel ini dibuat versi layar lebarnya dan telah menjadi salah satu film tersukses sepanjang sejarah sinema Indonesia.', 'image-1588499708663.jpg', 5, 3, 'Available', '2020-04-28 16:40:13', '2020-06-10 23:08:45'),
(122, 'coba www', 'Kisah anak-anak tidak selalu diwarnai dengan bermacam sukacita. Laskar Pelangi pun hadir dengan ceritanya yang berbeda.\n\nDi balik canda tawa dan keseruan anak-anak SD Muhammadiyah Belitung, terdapat duka dan masalah pahit yang mereka deritakan.\n\nNovel fiksi yang inspiratif ini pernah hits pada masanya. Tidak mengherankan pula bahwa novel ini dibuat versi layar lebarnya dan telah menjadi salah satu film tersukses sepanjang sejarah sinema Indonesia.', 'image-1590061432592.jpg', 2, 3, 'Available', '2020-04-28 17:43:50', '2020-06-10 23:03:16'),
(123, 'coba presentasi', 'Kisah anak-anak tidak selalu diwarnai dengan bermacam sukacita. Laskar Pelangi pun hadir dengan ceritanya yang berbeda.\n\nDi balik canda tawa dan keseruan anak-anak SD Muhammadiyah Belitung, terdapat duka dan masalah pahit yang mereka deritakan.\n\nNovel fiksi yang inspiratif ini pernah hits pada masanya. Tidak mengherankan pula bahwa novel ini dibuat versi layar lebarnya dan telah menjadi salah satu film tersukses sepanjang sejarah sinema Indonesia.', 'image-1588071322480.jpg', 5, 3, 'Available', '2020-04-28 17:55:22', '2020-06-08 22:48:53'),
(124, 'coba presentasi', 'Kisah anak-anak tidak selalu diwarnai dengan bermacam sukacita. Laskar Pelangi pun hadir dengan ceritanya yang berbeda.\n\nDi balik canda tawa dan keseruan anak-anak SD Muhammadiyah Belitung, terdapat duka dan masalah pahit yang mereka deritakan.\n\nNovel fiksi yang inspiratif ini pernah hits pada masanya. Tidak mengherankan pula bahwa novel ini dibuat versi layar lebarnya dan telah menjadi salah satu film tersukses sepanjang sejarah sinema Indonesia.', 'image-1588071890109.jpg', 5, 3, 'Available', '2020-04-28 18:04:50', '2020-05-18 10:59:35'),
(125, 'coba presentasi', 'Kisah anak-anak tidak selalu diwarnai dengan bermacam sukacita. Laskar Pelangi pun hadir dengan ceritanya yang berbeda.\n\nDi balik canda tawa dan keseruan anak-anak SD Muhammadiyah Belitung, terdapat duka dan masalah pahit yang mereka deritakan.\n\nNovel fiksi yang inspiratif ini pernah hits pada masanya. Tidak mengherankan pula bahwa novel ini dibuat versi layar lebarnya dan telah menjadi salah satu film tersukses sepanjang sejarah sinema Indonesia.', 'image-1588071906702.jpg', 5, 3, 'Available', '2020-04-28 18:05:06', '2020-06-10 23:03:27'),
(126, 'coba presentasi', 'Kisah anak-anak tidak selalu diwarnai dengan bermacam sukacita. Laskar Pelangi pun hadir dengan ceritanya yang berbeda.\n\nDi balik canda tawa dan keseruan anak-anak SD Muhammadiyah Belitung, terdapat duka dan masalah pahit yang mereka deritakan.\n\nNovel fiksi yang inspiratif ini pernah hits pada masanya. Tidak mengherankan pula bahwa novel ini dibuat versi layar lebarnya dan telah menjadi salah satu film tersukses sepanjang sejarah sinema Indonesia.', 'image-1588071965750.jpg', 5, 3, 'Available', '2020-04-28 18:06:05', '2020-05-08 19:04:58'),
(127, 'coba presentasi', 'Kisah anak-anak tidak selalu diwarnai dengan bermacam sukacita. Laskar Pelangi pun hadir dengan ceritanya yang berbeda.\n\nDi balik canda tawa dan keseruan anak-anak SD Muhammadiyah Belitung, terdapat duka dan masalah pahit yang mereka deritakan.\n\nNovel fiksi yang inspiratif ini pernah hits pada masanya. Tidak mengherankan pula bahwa novel ini dibuat versi layar lebarnya dan telah menjadi salah satu film tersukses sepanjang sejarah sinema Indonesia.', 'image-1588072018050.jpg', 5, 3, 'Available', '2020-04-28 18:06:58', '2020-04-28 18:06:58'),
(128, 'coba presentasi', 'Kisah anak-anak tidak selalu diwarnai dengan bermacam sukacita. Laskar Pelangi pun hadir dengan ceritanya yang berbeda.\n\nDi balik canda tawa dan keseruan anak-anak SD Muhammadiyah Belitung, terdapat duka dan masalah pahit yang mereka deritakan.\n\nNovel fiksi yang inspiratif ini pernah hits pada masanya. Tidak mengherankan pula bahwa novel ini dibuat versi layar lebarnya dan telah menjadi salah satu film tersukses sepanjang sejarah sinema Indonesia.', 'image-1588073113625.jpg', 5, 3, 'Available', '2020-04-28 18:25:13', '2020-04-28 18:25:13'),
(129, 'coba presentasi', 'Kisah anak-anak tidak selalu diwarnai dengan bermacam sukacita. Laskar Pelangi pun hadir dengan ceritanya yang berbeda.\n\nDi balik canda tawa dan keseruan anak-anak SD Muhammadiyah Belitung, terdapat duka dan masalah pahit yang mereka deritakan.\n\nNovel fiksi yang inspiratif ini pernah hits pada masanya. Tidak mengherankan pula bahwa novel ini dibuat versi layar lebarnya dan telah menjadi salah satu film tersukses sepanjang sejarah sinema Indonesia.', 'image-1588565611405.jpg', 5, 3, 'Available', '2020-04-28 18:35:27', '2020-05-04 11:13:31'),
(132, 'coba presentasi', 'Kisah anak-anak tidak selalu diwarnai dengan bermacam sukacita. Laskar Pelangi pun hadir dengan ceritanya yang berbeda.\n\nDi balik canda tawa dan keseruan anak-anak SD Muhammadiyah Belitung, terdapat duka dan masalah pahit yang mereka deritakan.\n\nNovel fiksi yang inspiratif ini pernah hits pada masanya. Tidak mengherankan pula bahwa novel ini dibuat versi layar lebarnya dan telah menjadi salah satu film tersukses sepanjang sejarah sinema Indonesia.', 'image-1588251959696.jpg', 5, 3, 'Available', '2020-04-30 20:05:59', '2020-04-30 20:05:59'),
(133, 'coba presentasi', 'Kisah anak-anak tidak selalu diwarnai dengan bermacam sukacita. Laskar Pelangi pun hadir dengan ceritanya yang berbeda.\n\nDi balik canda tawa dan keseruan anak-anak SD Muhammadiyah Belitung, terdapat duka dan masalah pahit yang mereka deritakan.\n\nNovel fiksi yang inspiratif ini pernah hits pada masanya. Tidak mengherankan pula bahwa novel ini dibuat versi layar lebarnya dan telah menjadi salah satu film tersukses sepanjang sejarah sinema Indonesia.', 'image-1588252043509.jpg', 5, 3, 'Available', '2020-04-30 20:07:23', '2020-04-30 20:07:23'),
(137, 'coba presentasi', 'Kisah anak-anak tidak selalu diwarnai dengan bermacam sukacita. Laskar Pelangi pun hadir dengan ceritanya yang berbeda.\n\nDi balik canda tawa dan keseruan anak-anak SD Muhammadiyah Belitung, terdapat duka dan masalah pahit yang mereka deritakan.\n\nNovel fiksi yang inspiratif ini pernah hits pada masanya. Tidak mengherankan pula bahwa novel ini dibuat versi layar lebarnya dan telah menjadi salah satu film tersukses sepanjang sejarah sinema Indonesia.', 'image-1588252295530.jpg', 5, 3, 'Available', '2020-04-30 20:11:35', '2020-04-30 20:11:35'),
(138, 'si Doel', 'Harry Potter and the Philosopher\'s Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling\'s debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, Harry faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry\'s parents, but failed to kill Harry when he was just 15 months old.', 'image-1588303141404.jpg', 2, 1, 'Available', '2020-05-01 10:19:01', '2020-05-01 10:19:01'),
(146, 'Harry dd', 'asdasdasfasf', 'image-1588569457091.png', 2, 1, 'Available', '2020-05-02 21:00:37', '2020-05-13 10:28:37'),
(151, 'bismillah', 'asdsda', 'image-1588734359602.jpg', 5, 3, 'Available', '2020-05-04 13:42:30', '2020-05-12 20:03:46'),
(152, 'Laskar Pelangi', 'Kisah anak-anak tidak selalu diwarnai dengan bermacam sukacita. Laskar Pelangi pun hadir dengan ceritanya yang berbeda.Di balik canda tawa dan keseruan anak-anak SD Muhammadiyah Belitung, terdapat duka dan masalah pahit yang mereka deritakan.Novel fiksi yang inspiratif ini pernah hits pada masanya. Tidak mengherankan pula bahwa novel ini dibuat versi layar lebarnya dan telah menjadi salah satu film tersukses sepanjang sejarah sinema Indonesia.', 'image-1589051945499.-Laskar-Pelangi-696x696', 5, 3, 'Available', '2020-05-04 13:43:33', '2020-05-17 21:10:29'),
(185, '11', 'ww', 'image-1589643245145.jpg', 1, 1, 'Unavailable', '2020-05-13 10:18:54', '2020-05-16 22:34:05'),
(188, 'tesssdsdsda', 'ggg', 'image-1589643389586.jpg', 5, 13, 'Unavailable', '2020-05-13 12:12:06', '2020-05-17 15:24:39'),
(191, 'aas', 'sdsasadsasdsdSSS', 'image-1589706573864.jpg', 2, 2, 'Unavailable', '2020-05-13 12:20:05', '2020-05-17 16:24:48'),
(193, 'narto', 'sads', 'image-1589527510552.jpg', 1, 1, 'Available', '2020-05-15 14:25:10', '2020-06-05 18:36:31'),
(195, 'sss', 'ddssssss', 'image-1589527875907.png', 5, 2, 'Unavailable', '2020-05-15 14:31:15', '2020-05-17 16:04:18'),
(208, 'bukukuww', 'qdwq', 'image-1589731019783.jpg', 66, 10, 'Unavailable', '2020-05-17 22:56:59', '2020-05-26 14:07:02'),
(209, 'dddd', 'sssss', 'image-1591519019498.jpg', 1, 1, 'Available', '2020-06-07 15:36:59', '2020-06-12 22:07:51'),
(210, 'sdasdasd', 'dasdasdsa', 'image-1592023619345.jpg', 67, 10, 'Available', '2020-06-13 11:46:59', '2020-06-13 11:46:59'),
(211, 'eeee', 'eeeee', 'image-1592024885624.jpg', 1, 1, 'Available', '2020-06-13 12:08:05', '2020-06-13 12:08:05'),
(212, '232332', '323', 'image-1592024963036.jpg', 1, 1, 'Available', '2020-06-13 12:09:23', '2020-06-13 12:09:23'),
(213, '1111', '1111', 'image-1592025027743.jpg', 1, 1, 'Available', '2020-06-13 12:10:27', '2020-06-13 12:10:27'),
(214, '4444', '4444', 'image-1592025116743.jpg', 1, 1, 'Available', '2020-06-13 12:11:56', '2020-06-13 12:11:56'),
(215, 'tttt', 'ttttt', 'image-1592025206282.jpg', 1, 1, 'Available', '2020-06-13 12:13:26', '2020-06-13 12:13:26'),
(216, 'zzz', 'zzz', 'image-1592025492293.jpg', 1, 1, 'Available', '2020-06-13 12:18:12', '2020-06-13 12:18:12'),
(217, 'zzz', 'zzz', 'image-1592025492700.jpg', 1, 1, 'Available', '2020-06-13 12:18:12', '2020-06-13 12:18:12'),
(218, 'ccccxc', 'cc', 'image-1592025762049.jpg', 1, 1, 'Available', '2020-06-13 12:22:42', '2020-06-13 12:22:42'),
(219, '3333', '3333', 'image-1592025808543.jpg', 1, 1, 'Available', '2020-06-13 12:23:28', '2020-06-13 12:23:28'),
(220, 'czxcxz', 'xczxc', 'image-1592025853057.jpg', 1, 1, 'Available', '2020-06-13 12:24:13', '2020-06-13 12:24:13'),
(221, 'asdqweq', 'qwe', 'image-1592203486072.jpg', 1, 2, 'Available', '2020-06-15 13:44:46', '2020-06-15 13:44:46');

-- --------------------------------------------------------

--
-- Struktur dari tabel `borrow`
--

CREATE TABLE `borrow` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_book` int(11) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` varchar(255) NOT NULL DEFAULT 'Borrowed'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `borrow`
--

INSERT INTO `borrow` (`id`, `id_user`, `id_book`, `created_at`, `updated_at`, `status`) VALUES
(28, 1, 1, '2020-05-08 22:36:52', '2020-05-08 22:36:52', 'Returned'),
(76, 4, 146, '2020-05-12 19:59:34', '2020-05-12 19:59:34', 'Returned'),
(78, 4, 151, '2020-05-12 20:01:14', '2020-05-12 20:01:14', 'Returned'),
(86, 4, 4, '2020-05-14 21:33:10', '2020-05-14 21:33:10', 'Returned'),
(88, 4, 185, '2020-05-14 21:38:10', '2020-05-14 21:38:10', 'Returned'),
(92, 4, 4, '2020-05-14 23:07:04', '2020-05-14 23:07:04', 'Returned'),
(99, 4, 188, '2020-05-16 19:41:38', '2020-05-16 19:41:38', 'Returned'),
(100, 4, 185, '2020-05-16 19:44:06', '2020-05-16 19:44:06', 'Returned'),
(103, 4, 188, '2020-05-16 20:06:04', '2020-05-16 20:06:04', 'Returned'),
(104, 4, 185, '2020-05-16 20:07:21', '2020-05-16 20:07:21', 'Returned'),
(113, 4, 2, '2020-05-16 20:35:34', '2020-05-16 20:35:34', 'Returned'),
(114, 4, 85, '2020-05-16 20:40:50', '2020-05-16 20:40:50', 'Returned'),
(120, 4, 152, '2020-05-17 21:08:38', '2020-05-17 21:08:38', 'Returned'),
(123, 145, 85, '2020-05-18 09:58:30', '2020-05-18 09:58:30', 'Returned'),
(124, 4, 124, '2020-05-18 10:59:25', '2020-05-18 10:59:25', 'Returned'),
(125, 145, 2, '2020-05-18 11:00:10', '2020-05-18 11:00:10', 'Returned'),
(126, 146, 2, '2020-05-18 11:04:10', '2020-05-18 11:04:10', 'Returned'),
(127, 4, 2, '2020-05-18 13:34:22', '2020-05-18 13:34:22', 'Returned'),
(128, 4, 119, '2020-05-21 11:11:40', '2020-05-21 11:11:40', 'Returned'),
(131, 4, 85, '2020-05-21 11:56:33', '2020-05-21 11:56:33', 'Returned'),
(132, 4, 85, '2020-05-21 11:58:03', '2020-05-21 11:58:03', 'Returned'),
(133, 4, 119, '2020-05-21 12:28:16', '2020-05-21 12:28:16', 'Returned'),
(134, 4, 2, '2020-06-05 13:05:44', '2020-06-05 13:05:44', 'Returned'),
(135, 1, 1, '2020-06-05 13:09:42', '2020-06-05 13:09:42', 'Returned'),
(136, 4, 2, '2020-06-05 23:20:24', '2020-06-05 23:20:24', 'Returned'),
(137, 4, 2, '2020-06-05 23:27:25', '2020-06-05 23:27:25', 'Returned'),
(138, 4, 122, '2020-06-05 23:27:46', '2020-06-05 23:27:46', 'Returned'),
(139, 4, 4, '2020-06-05 23:33:20', '2020-06-05 23:33:20', 'Returned'),
(140, 4, 2, '2020-06-06 00:03:19', '2020-06-06 00:03:39', 'Returned'),
(141, 4, 1, '2020-06-08 11:12:06', '2020-06-08 11:15:55', 'Returned'),
(142, 177, 1, '2020-06-08 11:28:11', '2020-06-08 11:55:31', 'Returned'),
(143, 177, 2, '2020-06-08 11:32:11', '2020-06-08 11:40:42', 'Returned'),
(144, 4, 4, '2020-06-08 11:36:44', '2020-06-10 22:39:45', 'Returned'),
(145, 4, 1, '2020-06-08 11:58:05', '2020-06-08 11:59:49', 'Returned'),
(146, 4, 2, '2020-06-08 12:27:15', '2020-06-08 21:40:24', 'Returned'),
(147, 4, 1, '2020-06-08 12:27:39', '2020-06-08 12:31:07', 'Returned'),
(148, 4, 1, '2020-06-08 13:02:39', '2020-06-08 21:24:58', 'Returned'),
(149, 4, 5, '2020-06-08 16:03:58', '2020-06-08 21:33:06', 'Returned'),
(150, 4, 122, '2020-06-08 18:33:56', '2020-06-10 23:03:16', 'Returned'),
(151, 4, 119, '2020-06-08 18:36:14', '2020-06-08 21:21:58', 'Returned'),
(159, 4, 5, '2020-06-08 22:06:40', '2020-06-08 22:08:30', 'Returned'),
(160, 4, 1, '2020-06-08 22:08:15', '2020-06-08 22:13:53', 'Returned'),
(162, 4, 1, '2020-06-08 22:23:47', '2020-06-08 22:31:27', 'Returned'),
(163, 4, 119, '2020-06-08 22:28:54', '2020-06-10 23:08:45', 'Returned'),
(164, 4, 1, '2020-06-08 22:31:40', '2020-06-08 22:49:25', 'Returned'),
(165, 4, 2, '2020-06-08 22:34:41', '2020-06-08 22:40:25', 'Returned'),
(166, 4, 2, '2020-06-08 22:40:38', '2020-06-08 22:49:03', 'Returned'),
(167, 4, 85, '2020-06-08 22:46:51', '2020-06-10 22:53:44', 'Returned'),
(168, 4, 123, '2020-06-08 22:47:34', '2020-06-08 22:48:53', 'Returned'),
(169, 4, 1, '2020-06-08 22:50:04', '2020-06-09 19:01:43', 'Returned'),
(170, 4, 2, '2020-06-08 22:50:32', '2020-06-08 23:00:13', 'Returned'),
(171, 4, 125, '2020-06-08 22:58:10', '2020-06-10 23:03:27', 'Returned'),
(176, 4, 2, '2020-06-08 23:21:39', '2020-06-08 23:23:43', 'Returned'),
(177, 4, 2, '2020-06-08 23:23:58', '2020-06-08 23:24:20', 'Returned'),
(178, 4, 2, '2020-06-09 12:42:47', '2020-06-09 12:43:15', 'Returned'),
(187, 4, 1, '2020-06-10 18:33:35', '2020-06-10 18:34:14', 'Returned'),
(188, 4, 1, '2020-06-10 22:33:09', '2020-06-10 22:34:35', 'Returned'),
(189, 4, 1, '2020-06-10 22:35:02', '2020-06-10 22:35:51', 'Returned'),
(197, 4, 2, '2020-06-12 15:52:52', '2020-06-12 21:52:30', 'Returned'),
(198, 4, 1, '2020-06-12 21:52:12', '2020-06-12 21:52:37', 'Returned'),
(199, 4, 4, '2020-06-12 21:53:46', '2020-06-12 21:54:01', 'Returned'),
(200, 4, 1, '2020-06-12 22:02:44', '2020-06-12 22:03:14', 'Returned'),
(201, 4, 209, '2020-06-12 22:07:23', '2020-06-12 22:07:51', 'Returned'),
(202, 4, 1, '2020-06-12 22:09:10', '2020-06-12 22:10:21', 'Returned'),
(203, 4, 2, '2020-06-12 22:09:34', '2020-06-12 22:09:54', 'Returned'),
(204, 4, 1, '2020-06-15 13:48:26', '2020-06-15 13:48:59', 'Returned'),
(205, 4, 1, '2020-06-15 14:02:25', '2020-06-15 14:02:25', 'Borrowed'),
(206, 4, 4, '2020-06-25 19:42:46', '2020-06-25 19:42:46', 'Borrowed');

-- --------------------------------------------------------

--
-- Struktur dari tabel `genre`
--

CREATE TABLE `genre` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `genre`
--

INSERT INTO `genre` (`id`, `name`) VALUES
(1, 'Fantasy/Adventure'),
(2, 'Romance'),
(5, 'Non Fiction'),
(65, 'Horror'),
(66, 'Fabel'),
(67, 'Fiktif'),
(68, 'Romantice'),
(69, 'Encyclopedia');

-- --------------------------------------------------------

--
-- Struktur dari tabel `role`
--

CREATE TABLE `role` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'admin'),
(2, 'user');

-- --------------------------------------------------------

--
-- Struktur dari tabel `user`
--

CREATE TABLE `user` (
  `id` int(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `role`) VALUES
(1, 'dwikysahut@gmail.com', '3f8a391085c0d5f79dfb622e02e3e9f4', 1),
(2, 'kamu@gmail.com', 'saya', 1),
(3, 'mereka@gmail.com', '38b72f41c4d61c14cf84e3e7f8884c64', 1),
(4, 'kita@gmail.com', 'e3919ec02c4f67a0f3a8f1a6320a0e0a', 2),
(5, 'sriasih@gmail.com', '3449c9e5e332f1dbb81505cd739fbf3f', 1),
(6, 'arkademy@gmail.com', '3449c9e5e332f1dbb81505cd739fbf3f', 1),
(7, 'satria@gmail.com', '3449c9e5e332f1dbb81505cd739fbf3f', 1),
(8, 'cinta@gmail.com', '3449c9e5e332f1dbb81505cd739fbf3f', 1),
(10, 'kusatu@gmail.com', '8dfe516ed0bf080bb23bafc09241e456', 2),
(11, 'dua@gmail.com', 'a319360336c8cac32102f4dffbee4260', 1),
(12, 'arkademy@gmail.com', '613c7ba724da56ce7964e60cdd1160ce', 2),
(77, 'dsadsa', '9b6c2f080b3e4215e5b99c734c4d9ae0', 1),
(93, 'aaaaaaaaa', 'cef468eeda569cc1b16b45fd53200b9c', 1),
(106, 'sadsa', '8d1d4357e1e1c6b3e4ea6df4ff01fede', 1),
(109, 'sdsd', '6226f7cbe59e99a90b5cef6f94f966fd', 1),
(137, 'asdsds', '8bb93ae34ab3ce46229df04d0b2d1d73', 1),
(144, 'aaaa', '6eb45edbc190a179915c7e9e5503c6fa', 1),
(145, 'arka@gmail.com', '395adceaae6b927e564ab8d4b20f80a6', 2),
(146, 'saya@gmail.com', 'e8de4a1923e500b80ad25a5a88d1ec1f', 2),
(147, 'iiiii@gmail.com', '6d2fe1d6f097816949a2f54ed3d986a8', 2),
(148, 'qqqqq@gmail.com', 'cf5bdfb40421ac1f30cc4d45b66b5a81', 2),
(149, 'sssiii@gmail.com', '96e79218965eb72c92a549dd5a330112', 2),
(150, 'qqwww@gmail.com', '343b1c4a3ea721b2d640fc8700db0f36', 2),
(151, 'aia@gmail.com', '0b4e7a0e5fe84ad35fb5f95b9ceeac79', 2),
(152, 'qwerty@gmail.com', 'e86fdc2283aff4717103f2d44d0610f7', 2),
(153, '123@gmail.com', '4297f44b13955235245b2497399d7a93', 2),
(154, 'kkk@gmail.com', 'e3ceb5881a0a1fdaad01296d7554868d', 2),
(155, 'asdasd@gmail.com', '96e79218965eb72c92a549dd5a330112', 2),
(156, 'ooo@gmail.com', 'e3ceb5881a0a1fdaad01296d7554868d', 2),
(157, 'uuu@gmail.com', '1a100d2c0dab19c4430e7d73762b3423', 2),
(158, 'fff@gmail.com', 'eed8cdc400dfd4ec85dff70a170066b7', 2),
(159, 'mmm@gmail.ocm', '9aee390f19345028f03bb16c588550e1', 2),
(160, 'sss@gmail.com', 'af15d5fdacd5fdfea300e88a8e253e82', 2),
(161, 'hhh@gamil.com', 'd785c99d298a4e9e6e13fe99e602ef42', 2),
(162, 'jjj@gmail.com', '3abf00fa61bfae2fff9133375e142416', 2),
(163, 'eee@gmail.com', 'cd87cd5ef753a06ee79fc75dc7cfe66c', 2),
(164, 'fgh@gmail.com', '87cb491f7c5f2f6182f1685f37f0bce8', 2),
(165, 'hhh@gmail.com', 'f14029217ff5e7a50cdc7e70f686cf29', 2),
(166, 'fffff@gmail.com', '0b4e7a0e5fe84ad35fb5f95b9ceeac79', 2),
(167, 'kittttt@gmail.com', '0b4e7a0e5fe84ad35fb5f95b9ceeac79', 2),
(168, '4444@gmail.com', 'd785c99d298a4e9e6e13fe99e602ef42', 2),
(169, '777@gmail.com', 'd785c99d298a4e9e6e13fe99e602ef42', 2),
(170, '555@gmail.com', '96e79218965eb72c92a549dd5a330112', 2),
(171, 'hut@gmail.com', '980ac217c6b51e7dc41040bec1edfec8', 2),
(172, '555t@gmail.com', '980ac217c6b51e7dc41040bec1edfec8', 2),
(173, '33t@gmail.com', '980ac217c6b51e7dc41040bec1edfec8', 2),
(174, 'lil@gmail.com', 'af15d5fdacd5fdfea300e88a8e253e82', 2),
(175, 'ggggg@gmail.com', 'c08ac56ae1145566f2ce54cbbea35fa3', 2),
(176, 'llll@gmail.com', 'c08ac56ae1145566f2ce54cbbea35fa3', 2),
(177, 'aaa@gmail.com', '0b4e7a0e5fe84ad35fb5f95b9ceeac79', 2),
(178, 'sssss@gmail.com', 'af15d5fdacd5fdfea300e88a8e253e82', 2),
(180, 'kitakita@gmail.com', 'e3919ec02c4f67a0f3a8f1a6320a0e0a', 2),
(181, 'kita2@gmail.com', 'e3919ec02c4f67a0f3a8f1a6320a0e0a', 2);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `author`
--
ALTER TABLE `author`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `author_id` (`author_id`),
  ADD KEY `genre_id` (`genre_id`);

--
-- Indeks untuk tabel `borrow`
--
ALTER TABLE `borrow`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_book` (`id_book`),
  ADD KEY `id_user` (`id_user`);

--
-- Indeks untuk tabel `genre`
--
ALTER TABLE `genre`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `role` (`role`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `author`
--
ALTER TABLE `author`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT untuk tabel `books`
--
ALTER TABLE `books`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=222;

--
-- AUTO_INCREMENT untuk tabel `borrow`
--
ALTER TABLE `borrow`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=207;

--
-- AUTO_INCREMENT untuk tabel `genre`
--
ALTER TABLE `genre`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT untuk tabel `user`
--
ALTER TABLE `user`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=182;

--
-- Ketidakleluasaan untuk tabel pelimpahan (Dumped Tables)
--

--
-- Ketidakleluasaan untuk tabel `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`author_id`) REFERENCES `author` (`id`),
  ADD CONSTRAINT `books_ibfk_2` FOREIGN KEY (`genre_id`) REFERENCES `genre` (`id`);

--
-- Ketidakleluasaan untuk tabel `borrow`
--
ALTER TABLE `borrow`
  ADD CONSTRAINT `borrow_ibfk_1` FOREIGN KEY (`id_book`) REFERENCES `books` (`id`),
  ADD CONSTRAINT `borrow_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);

--
-- Ketidakleluasaan untuk tabel `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `user_ibfk_1` FOREIGN KEY (`role`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
