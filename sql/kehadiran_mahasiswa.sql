CREATE DATABASE kawan_lama;
use kawan_lama;

CREATE TABLE kehadiran (id int primary key auto_increment,Tanggal
date not null,NIM varchar(10) not null) engine=InnoDB;

CREATE TABLE mahasiswa (id int primary key auto_increment,NIM
varchar(10) not null,Nama varchar(100) not null) engine=InnoDB;

INSERT INTO kehadiran (Tanggal, NIM) VALUES("2020-06-15",
"A001"), ("2020-06-18", "A003"),("2020-06-16", "A001"),
("2020-06-15", "A002"), ("2020-06-17", "A001"), ("2020-06-17",
"A002"),("2020-06-15", "A003"), ("2020-06-16", "A002"),
("2020-06-17", "A004"), ("2020-06-16", "A003");

INSERT INTO mahasiswa (NIM, Nama) VALUES("A001", "Mozarella"),
("A002", "Emmental"), ("A003", "Gouda"), ("A004", "Chevre");

SELECT a.NIM, a.Nama,b.Tanggal FROM mahasiswa a RIGHT JOIN kehadiran b
ON a.NIM = b.NIM WHERE b.Tanggal = "2020-06-15" OR b.Tanggal =
"2020-06-17" ORDER BY b.Tanggal DESC ;

SELECT mhs.Nama, COUNT(abs.Tanggal) FROM mahasiswa mhs RIGHT JOIN
kehadiran abs ON mhs.NIM = abs.NIM GROUP BY abs.NIM, mhs.Nama;;