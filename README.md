# Arc — carnet d'entraînement

Application web premium (PWA) : suivi série par série avec molette iOS, génération de séances
(type ou muscle ciblé) selon la fatigue, et statistiques en temps réel. 100 % local, aucune donnée
envoyée sur un serveur (tout est stocké dans le navigateur via `localStorage`).

## Fichiers

| Fichier | Rôle |
|---|---|
| `index.html` | Structure de la page |
| `styles.css` | Design system (thème clair indigo, typographie) |
| `app.js` | Toute la logique (séances, molette, coach, stats) |
| `manifest.webmanifest` | Métadonnées PWA (installation) |
| `sw.js` | Service worker (fonctionnement hors-ligne) |
| `icon-*.png`, `apple-touch-icon.png`, `favicon.png` | Icônes |
| `splash-*.png` | Écrans de lancement iOS (mode plein écran) |

## Fonctionnalités

- Séances **Push / Pull / Legs** éditables + **onglets personnalisés** (bouton `+` sur l'accueil,
  renommer / supprimer via les réglages).
- Suivi **série par série** avec molette iOS (reps + poids).
- **Autocomplétion** des exercices (bibliothèque + tes exercices perso mémorisés).
- **Coach** : génération de séance selon la fatigue, par type (Auto / Full body / Superset / PPL)
  ou en ciblant un muscle. La séance générée apparaît dans son propre onglet.
- **Statistiques en temps réel** : volume, séries, reps, volume par muscle, équilibre PPL,
  progression 1RM par exercice, records, historique.

## Lancer en local

Le service worker et le manifeste nécessitent un serveur (ils ne marchent pas en `file://`).

```bash
# depuis le dossier du projet
python3 -m http.server 8080
# puis ouvrir http://localhost:8080
```

## Héberger sur GitHub Pages (recommandé)

1. Crée un dépôt GitHub, par ex. `arc`.
2. Pousse tous les fichiers à la racine du dépôt.
3. Dans **Settings → Pages**, source = branche `main`, dossier `/root`.
4. L'app est en ligne sur `https://<ton-user>.github.io/arc/`.
5. Sur iPhone : ouvre l'URL dans **Safari → Partager → « Sur l'écran d'accueil »**.
   L'app s'installe en plein écran et fonctionne **hors-ligne** (grâce au service worker).

## Typographie

L'app utilise **Plus Jakarta Sans** (variable) chargée depuis Google Fonts, avec repli sur la police
système iOS (SF Pro). Hiérarchie : titres 600, corps 400/450, boutons 600.

### Passer à Satoshi (optionnel)

Satoshi est le premier choix mais la version gratuite (Fontshare) n'expose pas de graisse 600.
Pour l'utiliser proprement, self-héberge la **variable** :

1. Télécharge `Satoshi-Variable.woff2` sur https://www.fontshare.com/fonts/satoshi
2. Place-le dans un dossier `fonts/`.
3. Dans `index.html`, retire le `<link>` Google Fonts et ajoute dans `styles.css` :

   ```css
   @font-face{
     font-family:'Satoshi';
     src:url('fonts/Satoshi-Variable.woff2') format('woff2');
     font-weight:300 900; font-display:swap;
   }
   :root{ --font:'Satoshi',-apple-system,BlinkMacSystemFont,sans-serif; }
   ```

4. Ajoute `./fonts/Satoshi-Variable.woff2` au tableau `SHELL` dans `sw.js` (et incrémente `CACHE`).

## Vers l'App Store

Cette base PWA est prête à être empaquetée :

- **PWABuilder** (https://www.pwabuilder.com) : colle l'URL GitHub Pages → génère un projet Xcode.
- ou **Capacitor** (`npm i @capacitor/core @capacitor/ios`) : encapsule ces fichiers web dans une
  app iOS native, puis publication via Xcode.

Pense à incrémenter la constante `CACHE` dans `sw.js` à chaque mise à jour pour forcer le
rafraîchissement du cache.

## Données

Tout est stocké localement sous la clé `arc_v2`. « Tout réinitialiser » dans les réglages efface le
programme, la séance générée et l'historique.
