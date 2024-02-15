# Mission Locale - Les Mureaux (Version 2)

Bienvenue dans la version 2 du projet Mission Locale - Les Mureaux, développé avec React et Vite.

## Description

Ce projet vise à faciliter l'accès du site de la mission locale sur différentes platformes ( ordinateur , smartphone etc )


## Technologies Utilisées

- React
- Vite
- Laravel ( sous forme d'API )
## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/votre-utilisateur/votre-projet.git

2. Accéder au répertoire du projet 
    ```bash
   cd missionlocale_front
3. Installez les dépendances
    ```bash
   npm install
4. Lancez l'application en mode développement :
   ```bash
   npm run dev



# Fusion Sélective de Fichiers entre Branches ( de certains fichiers par exemple )
Assurez-vous d'être sur la branche de destination :

```bash
git checkout branche_destination

# Utilisez git checkout --patch pour sélectionner les modifications du premier fichier

```bash
git checkout --patch branche_source -- chemin/vers/le/premier_fichier ( exemple : git checkout --patch dev -- chemin/vers/le/fichier.jsx )

Validez les modifications sélectionnées

```bash
git commit -m "Message"

Répétez le processus pour d'autres fichiers si nécessaire. 

**Le paramètre `--patch` permet une sélection interactive des modifications à fusionner. Vous aurez la possibilité d'accepter ou de rejeter chaque modification, ce qui vous donne un contrôle fin sur les changements que vous souhaitez intégrer.**

Lorsque vous utilisez `git checkout --patch`, Git vous montrera chaque modification de manière interactive et vous demandera si vous souhaitez l'inclure dans la fusion. Vous pouvez choisir parmi plusieurs options, notamment :

- `y` pour accepter la modification,
- `n` pour refuser la modification,
- `s` pour scinder la modification en parties plus petites,
- `q` pour quitter le processus.

Cela permet une fusion sélective, vous permettant de choisir précisément les parties des fichiers que vous souhaitez intégrer.

