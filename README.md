# Projet Micro-Frontend

Ce projet est une application basée sur l'architecture micro-frontend utilisant Vite et Module Federation. Il se compose de deux parties principales :
- Une application shell (conteneur principal)
- Un micro-frontend pour le header

## Structure du Projet

```
microfrontend/
├── shell/           # Application shell principale
└── header-mfe/      # Micro-frontend du header
```

## Prérequis

- Node.js (version 16 ou supérieure)
- npm (inclus avec Node.js)

## Installation

1. Clonez le dépôt :
```bash
git clone [URL_DU_REPO]
cd microfrontend
```

2. Installez les dépendances pour le header-mfe :
```bash
cd header-mfe
npm install
```

3. Installez les dépendances pour le shell :
```bash
cd ../shell
npm install
```

## Démarrage des Applications

Pour que l'application fonctionne correctement, vous devez démarrer les deux parties dans l'ordre suivant :

1. Démarrez le header-mfe :
```bash
cd header-mfe
npm run build    # Build l'application
npm run preview  # Démarre le serveur de preview sur le port 5001
```

2. Dans un nouveau terminal, démarrez le shell :
```bash
cd shell
npm run dev      # Démarre le serveur de développement sur le port 5000
```

## Ports Utilisés

- Shell : http://localhost:5000
- Header MFE : http://localhost:5001

## Architecture

- Le header-mfe expose un composant Header via Module Federation
- Le shell importe et utilise ce composant Header
- La communication entre les applications se fait via Module Federation de Vite

## Scripts Disponibles

Dans chaque application (shell et header-mfe) :

- `npm run dev` : Démarre le serveur de développement
- `npm run build` : Crée une version de production
- `npm run preview` : Démarre un serveur de prévisualisation pour la version de production
- `npm run lint` : Vérifie le code avec ESLint

## Notes Importantes

- Le header-mfe doit être en mode preview (après build) pour que Module Federation fonctionne correctement
- Assurez-vous que les ports 5000 et 5001 sont disponibles sur votre machine
- En cas de problème, vérifiez que les deux applications sont bien en cours d'exécution

## Dépannage

Si vous rencontrez des erreurs :
1. Vérifiez que les deux applications sont en cours d'exécution
2. Assurez-vous que le header-mfe est accessible sur http://localhost:5001
3. Vérifiez les erreurs dans la console du navigateur
4. Essayez de reconstruire les applications 