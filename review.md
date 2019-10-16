# Petite review avant notre call :

Bon, le premier truc que tu dois faire/améliorer, c'est créer un fichier d'initialiser pour ton jeu : ce dernier regrouperait toutes tes istanciations, par exemple : 

```JavaScript

// Exemple pour les players
const player1 = new Player("Deep Space Nine", "player1", 100, weapon0, "<div></div>", 10);
const player2 = new Player("Millenium Falcon", "player2", 100, weapon0, "<div></div>", 10); 

// Puis à la fin (donc, le fichier game) : 
const newGame = new Game();

newGame.screenStart();
newGame.trajectory();
newGame.setOnClick()
```

Je pense aussi que tu peux commencer à ajouter des commentaires. Et maintenant, je vais reprendre par fichier :D :

## Board.js

- J'ai 12 unreachable box alors que tu en instancies 14.
- `this._x = 0` et `this._y = 0` dans ton constructor. J'ai du mal à voir l'utilité (surtout que tu modifies cette valeur dans generateBoard avec le this). Je trouve ça un peu bizarre.


## Game.js

- Globalement, c'est du bon boulot : elle est lisible, les méthodes sont propres, c'est cool :). Peut-être juste `setOnClick` pourrait être renommer.
- Tu n'utilises pas encore bien les getters (pas mal de ._nomDeLaPropriété qui trainent). Ça pourrait être cool de refacto ça.
- Du coup, ce qui se passe à partir de la ligne 280 pourrait passer dans ton fichier d'init.

## Player.js
- Il n'y a pas de getter dans cette classe ?

## Weapon.js

- Fais moi quelques getter dans cette classe pour la rendre un peu plus cool et bouge moi l'instanciation dans un fichier init.


## Bilan

Ça commence à être bien ta petite histoire :) : ton projet est bientôt terminé et tu as vraiment bien bossé !
On se voit tout à l'heure en session.