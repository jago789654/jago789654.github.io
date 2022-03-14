





CRÉATION REPERTOIRE GIT ET GITHUB:


tony@tony-ThinkPad-T520:~$ cd wild/quests/shell/
tony@tony-ThinkPad-T520:~/wild/quests/shell$ mkdir projet#1
tony@tony-ThinkPad-T520:~/wild/quests/shell$ cd projet#1/
tony@tony-ThinkPad-T520:~/wild/quests/shell/projet#1$ touch .gitignore READMEexplain.md READMEbug.md index.txt contact.txt about.txt style.css secret_style.css script.js secret_script.js smallScreen.css largeScreen.css
tony@tony-ThinkPad-T520:~/wild/quests/shell/projet#1$ ls
about.txt    largeScreen.css   script.js         smallScreen.css
contact.txt  READMEbug.md      secret_script.js  style.css
index.txt    READMEexplain.md  secret_style.css
tony@tony-ThinkPad-T520:~/wild/quests/shell/projet#1$ git init
Dépôt Git vide initialisé dans /home/tony/wild/quests/shell/projet#1/.git/
tony@tony-ThinkPad-T520:~/wild/quests/shell/projet#1$ git status
Sur la branche master

Aucun commit

Fichiers non suivis:
  (utilisez "git add <fichier>..." pour inclure dans ce qui sera validé)
	.gitignore
	READMEbug.md
	READMEexplain.md
	about.txt
	contact.txt
	index.txt
	largeScreen.css
	script.js
	secret_script.js
	secret_style.css
	smallScreen.css
	style.css

aucune modification ajoutée à la validation mais des fichiers non suivis sont présents (utilisez "git add" pour les suivre)
tony@tony-ThinkPad-T520:~/wild/quests/shell/projet#1$ git add .
tony@tony-ThinkPad-T520:~/wild/quests/shell/projet#1$ git status
Sur la branche master

Aucun commit

Modifications qui seront validées :
  (utilisez "git rm --cached <fichier>..." pour désindexer)
	nouveau fichier : .gitignore
	nouveau fichier : READMEbug.md
	nouveau fichier : READMEexplain.md
	nouveau fichier : about.txt
	nouveau fichier : contact.txt
	nouveau fichier : index.txt
	nouveau fichier : largeScreen.css
	nouveau fichier : script.js
	nouveau fichier : secret_script.js
	nouveau fichier : secret_style.css
	nouveau fichier : smallScreen.css
	nouveau fichier : style.css

tony@tony-ThinkPad-T520:~/wild/quests/shell/projet#1$ git commit -m "first-commit"
[master (commit racine) b0123d5] first-commit
 12 files changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 .gitignore
 create mode 100644 READMEbug.md
 create mode 100644 READMEexplain.md
 create mode 100644 about.txt
 create mode 100644 contact.txt
 create mode 100644 index.txt
 create mode 100644 largeScreen.css
 create mode 100644 script.js
 create mode 100644 secret_script.js
 create mode 100644 secret_style.css
 create mode 100644 smallScreen.css
 create mode 100644 style.css
 tony@tony-ThinkPad-T520:~/wild/quests/shell/projet#1$ git branch -M main
tony@tony-ThinkPad-T520:~/wild/quests/shell/projet#1$ code .
tony@tony-ThinkPad-T520:~/wild/quests/shell/projet#1$ git remote add origin git@github.com:jago789654/projet-1.git
tony@tony-ThinkPad-T520:~/wild/quests/shell/projet#1$ git push -u origin main
Énumération des objets: 3, fait.
Décompte des objets: 100% (3/3), fait.
Compression par delta en utilisant jusqu'à 4 fils d'exécution
Compression des objets: 100% (2/2), fait.
Écriture des objets: 100% (3/3), 318 octets | 318.00 Kio/s, fait.
Total 3 (delta 0), réutilisés 0 (delta 0)
To github.com:jago789654/projet-1.git
 * [new branch]      main -> main
La branche 'main' est paramétrée pour suivre la branche distante 'main' depuis 'origin'.

