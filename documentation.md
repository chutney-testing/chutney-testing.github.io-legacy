---
layout: page
title: Documentation
subtitle: 
---

# Chutney User Manual
## Utiliser les valeurs définies dans le context

Après avoir déclaré des valeurs, elles sont accèssibles depuis n'importe qu'elle étape grâce à la clef donnée.

Attention : 
Si une prochaine étape ajoute une autre valeur en utilisant la même clef,
alors la valeur précédente sera perdue et remplacée par la nouvelle.

Pour pouvoir utiliser la valeur il faut l'écrire avec un `#`, exemple : `#clef_définie`
L'utilisation doit se faire à l'intérieur d'un bloc *d'évaluation* : `${ }`

Exemple, `${#clef_définie}`
```json
{
    "type":"context-put",
    "inputs": {
        "entries": {
            "prenom" : "toto" <1>
        }
    }
},
{
    "type": "context-put"
    "inputs": {
      "entries":
      {
        "réutilisation": "${#prenom}" <2>
        "concaténation": "${#prenom.concat(" à la plage")}" <3>
      }
    }
  }
}
```

1. La clef `prenom` contiendra la valeur `toto`
2. On utilise la valeur de `#prenom`, donc la clef `réutilisation` contiendra aussi `toto`
3. La clef `concaténation` contiendra `toto à la plage`

## Injecter des données utilisables dans un scénario

Par exemple, pour créer une variable avec :

* Une valeur fixe : `"Id" : "0000014822"`
* Une valeur calculée au moment de l'exécution :
    * Date à l'instant _t_ : `"startDate" : "$\{T(java.time.LocalDateTime).now().toString()}Z"`
    * Date dans le futur (instant _t_ + 1800 secondes) : `"endDate" : "$\{T(java.time.LocalDateTime).now().plusSeconds(1800).toString()}Z"`

Cette action prend 1 paramètre en entrée :

* `entries`
    * C'est une `Map`, c'est à dire une *liste* de *"clef": "valeur"*

```json
{
    "type":"context-put", <1>
    "inputs": { <2>
        "entries": { <3>
            "un_nom_de_clef" : "une valeur", <4>
            "un_autre_nom_de_clef" : "une autre valeur"
        }
    }
}
```
1. on défini l'action à effectuer : `context-put`
2. on ouvre le bloc `inputs`, c'est là que sont déclarés les entrées nécessaires à une action
3. on défini le paramètre `entries`, qui est nécessaire à l'action `context-put`
4. on défini une valeur


