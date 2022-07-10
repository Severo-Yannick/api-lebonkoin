# API lebonkoin

## Introduction

lebonkoin est un projet de révision couvrant des principes vus durant mes études.

## Récupération du projet
https://github.com/Severo-Yannick/api-lebonkoin.git

Une fois le challenge cloné lancer:

```SHELL
  npm install
```

## Installation

Le SGBDR MySQL est utilisé pour cette base de donnée.

Installation d'un client MySQL en fonctionde votre OS : [Install MYSQL](https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/)

Une fois MYSQL installé sur votre machine connectez-vous avec l'utilisateur root ou le votre (si vous en avez créer un) et entrez votre mot de passe:

```SHELL
  mysql -u root -p
```
Une fois la connection établie un prompt est ouvert:
```SHELL
  mysql>
```

Lancer cette commande afin de créer la base de données:

```SHELL
  CREATE DATABASE lebonkoin;
```

Une fois la votre BDD crée, importer [le fichier sql](./data/create_lebonkoin.sql)

Pour ce faire vous pouvez aller dans le fichier data du projet dans votre terminal et lancer

```SHELL
  pwd
```

Cela permet d'afficher le chemin exact de votre fichier sql pour moi c'est :

```SHELL
/Users/yannick/Desktop/api-lebonkoin/data
```

Il est différent pour vous mais il est important de bien connaitre ce chemin pour ensuite utiliser le fichier MySQL

Retourner dans mysql depuis votre terminal et y copier le résultat de votre commande ```pwd``` en y rajoutant ```/create_lebonkoin.sql``` qui est le nom de notre fichier cela donne ceci :

```SHELL
  source /Users/yannick/Desktop/api-lebonkoin/data/create_lebonkoin.sql
```

Afin de vérifier que vous avez bien des catégories lancer:

```SHELL
  SELECT * FROM category;
```

Si vous avez ce résultat tout est ok !

| id  | name          |
| :--------------- |:---------------:|
| 1  |  Voitures       |  
| 2 | Informatique             |
| 3 | Jeux-Vidéo          |
| 4 | Consoles          |
| 5 | Immobilier         |
| 6 | Mode         |
| 7 | Maison         |
| 8 | Bricolage         |

Pour quitter la connexion à mysql depuis le terminal lancer:

```SHELL
  mysql> exit
```

------------------------------------------------

Le fichier ```.env.example``` contient les variables d'environnement nécessaires, notamment la connexion à la base de donnée ```myqsl```.

Tout se passe dans le fichier [config.js](./config.js)

| Key | Valeur     | Description                |
| :-------- | :------- | :------------------------- |
| `DB_HOST` | `string` | **Required**. l'hote pour votre BDD localhost ici |
| `DB_USER` | `string` | **Required**. l'user de connexion à la BDD (root ou autre) |
| `DB_PASS` | `string` | **Required**. le mot de passe du DB_USER pour votre BDD  |
| `DB_NAME` | `string` | **Required**. le nom de votre BDD ici lebonkoin |
