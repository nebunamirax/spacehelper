# Space Helper

Prototype web statique pour préparer une chasse aux invaders, filtrer la carte et suivre ses statuts `Flashé / À flasher / Ignoré`.

## Lancer

Ouvrir `index.html` dans un navigateur. Aucun serveur web n'est nécessaire pour l'usage portable : le fichier `data/invaders.js` embarque la base globale et évite les restrictions `file://` sur les imports JSON.

Si un serveur local est préféré :

```bash
python3 -m http.server 4173
```

puis ouvrir `http://localhost:4173`.

## Générer Le Fichier Standalone

Pour produire un seul fichier HTML portable :

```bash
./scripts/build-standalone.sh
```

ou directement :

```bash
node scripts/build-standalone.mjs
```

Le fichier généré est :

```text
dist/space-helper-standalone.html
```

Le même build génère aussi la version prête pour GitHub Pages :

```text
docs/index.html
docs/.nojekyll
```

Ce fichier embarque :

- le HTML de `index.html` ;
- le CSS de `styles.css` ;
- la base `data/invaders.js` ;
- le JavaScript de `src/app.js`.

Il garde Leaflet et les tuiles OpenStreetMap en ligne via CDN / réseau. Il faut donc une connexion internet pour afficher la carte et les images distantes, mais aucun serveur local n'est nécessaire pour ouvrir l'app.

Sur téléphone, transférer `dist/space-helper-standalone.html`, puis l'ouvrir dans le navigateur. Les données locales restent dans le stockage du navigateur associé à ce fichier.

## Publier Sur GitHub Pages

Le projet peut être publié sans backend via GitHub Pages. L'app reste statique, mais elle est servie en HTTPS, ce qui permet notamment à la géolocalisation navigateur de fonctionner.

1. Générer la version Pages :

```bash
./scripts/build-standalone.sh
```

2. Committer les fichiers générés dans `docs/`.

3. Pousser sur GitHub.

4. Dans GitHub, ouvrir `Settings > Pages`, puis choisir :

```text
Source: Deploy from a branch
Branch: main
Folder: /docs
```

GitHub donnera ensuite une URL du type :

```text
https://<utilisateur>.github.io/<repo>/
```

Les statuts flash, les filtres et les bases importées restent stockés localement dans le navigateur de chaque appareil.

## Données

La base portable est dans `data/invaders.js`, générée depuis `data/invaders.json`. Le JSON courant contient une clé `invaders` et couvre plusieurs villes/pays.

Le JSON contient aussi des métadonnées de fraîcheur :

- `generatedAt` : date de génération depuis Invamap.
- `lastUpdatedAt` : dernière actualisation complète de la base locale.
- `spotter.scrapedAt` : date de parsing d'Invader Spotter.
- `unmappedInvaders` : entrées trouvées sur Invader Spotter mais non affichables sur la carte faute de coordonnées.

Format minimal accepté par l'import :

```json
{
  "invaders": [
    {
      "id": "PA_1500",
      "cityCode": "PA",
      "city": "Paris",
      "lat": 48.86064,
      "lon": 2.35225,
      "points": 100,
      "status": "ok"
    }
  ]
}
```

L'app garde aussi la compatibilité avec les anciens fichiers qui contiennent directement un tableau ou une clé `parisInvaders`.

## Importer Une Base

Dans l'app, le bloc `Base invaders` ne contacte plus le web. Le bouton `Importer base` lit un fichier JSON local, remplace la base en mémoire, la mémorise dans `localStorage` sous `spacehelper_base_v2`, puis affiche `Sauvegarder JSON` pour exporter le résultat en dur.

Ce choix est volontaire : en mode portable `file://`, le navigateur ne peut pas garantir une récupération web stable à cause du CORS d'Invamap et des proxys publics.

Dans le fichier standalone, la base intégrée reste celle embarquée au moment de la génération du HTML. Pour mettre à jour la base ensuite, utiliser `Importer base` avec un JSON récent. Cette base importée sera mémorisée localement dans le navigateur et prendra le dessus sur la base intégrée.

## Générer Le JSON

Commande complète pour mettre à jour la base et régénérer le fichier standalone + GitHub Pages :

```bash
./scripts/update-database.sh
```

Cette commande exécute toute la chaîne : Invamap, enrichissement Invader Spotter, `data/invaders.js`, `dist/space-helper-standalone.html` et `docs/index.html`.

Méthode fiable depuis ce dossier :

```bash
node scripts/extract-invamap.mjs
node scripts/enrich-invader-spotter.mjs
node scripts/build-static-data.mjs
```

Le premier script récupère `https://invamap.si/map.php`, extrait les constantes chiffrées présentes dans la page, déchiffre le dataset côté Node avec Web Crypto, normalise tous les invaders géolocalisés, puis écrit `data/invaders.json`.

Le script `enrich-invader-spotter.mjs` lit `https://www.invader-spotter.art/villes.php`, poste ensuite les requêtes attendues vers `listing.php`, puis enrichit les invaders existants avec les points, dates de pose, dernier état connu et date/source de contrôle quand la correspondance existe. Invader Spotter ne fournit pas les coordonnées : les mosaïques absentes d'Invamap sont donc conservées dans `unmappedInvaders` mais ne sont pas affichées sur la carte.

Le dernier script génère `data/invaders.js`, utilisé directement par `index.html`.

Pour enrichir les arrondissements de Paris après extraction :

```bash
node scripts/enrich-paris-arrondissements.mjs
node scripts/build-static-data.mjs
```

## Procédure Pour Une IA Avec Navigateur

Si un agent IA doit refaire la base sans API officielle :

1. Ouvrir `https://invamap.si/map.php` dans le navigateur.
2. Lire le HTML de la page, pas seulement le rendu visuel.
3. Extraire les constantes JavaScript `ENC_KEY_HEX`, `LOCAL_DATA_ENC` et `LOCAL_POINTS_ENC`.
4. Déchiffrer `LOCAL_DATA_ENC` et `LOCAL_POINTS_ENC` en AES-GCM avec `ENC_KEY_HEX`. Les 12 premiers octets du blob base64 sont l'IV, le reste est le ciphertext avec tag GCM.
5. Normaliser chaque entrée en `{ id, cityCode, city, lat, lon, points, status, imageUrl, instagramUrl, sourceUrl }`.
6. Exporter un fichier JSON avec une clé `invaders`.
7. Dans Space Helper, utiliser `Importer base`, puis `Sauvegarder JSON`.

Le script `scripts/extract-invamap.mjs` est la référence exacte de cette procédure.

## Statut Flash

Chaque invader est `À flasher` par défaut tant qu'il n'est pas marqué `Flashé` ou `Ignoré`. Ces données restent dans le navigateur via `localStorage` sous la clé `spacehelper_inventory_v1`.

Le bloc `Mes flashs` exporte uniquement la clé `inventory`, ce qui permet de sauvegarder ou déplacer ses statuts flash sans compte utilisateur.

Dans le fichier standalone, les statuts flash continuent aussi d'être sauvegardés dans `localStorage`. Ils sont restaurés au prochain lancement tant que le même navigateur conserve le stockage local du fichier.

Pour éviter toute perte sur téléphone :

```text
Exporter flashs -> sauvegarde JSON des statuts personnels
Importer flashs -> restauration des statuts personnels
```

À retenir : un navigateur mobile peut purger du stockage local si l'espace manque ou si le fichier est ouvert depuis un autre emplacement. L'export JSON reste la sauvegarde fiable.

## Filtres Et Préférences

Les filtres et préférences d'affichage sont mémorisés dans `localStorage` sous la clé `spacehelper_filters_v1`.

Le bouton `Réinitialiser` dans les filtres remet les filtres à zéro et supprime cette sauvegarde.

## Prochaines Étapes

1. Ajouter une planification de balade avec une liste ordonnée d'invaders, distance estimée, point de départ et export partageable.
2. Ajouter une table de votes de viabilité avec score, date de confirmation et modération.
3. Brancher une synchronisation facultative des statuts flash pour plusieurs appareils.
