
# Qualité de code

## TypeScript

Ajouter un nouveau script permettant la vérification du typage de votre code :

```json
{
    "check": "tsc --noEmit --skipLibCheck" // vérification du typage sur l'ensemble du projet
}
```

## Mettre en place ESLint et Prettier

> ⚠️ Les étapes suivantes nécessitent l'installation des extensions VSCode recommandées

### Installation des dépendances

```bash
npm install eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks @trivago/prettier-plugin-sort-imports --save-dev
```

### Configuration de Prettier

Un formatter comme Prettier va forcer l’écriture du code automatiquement dans un style particulier.

Créer un fichier `".prettierrc"` à la racine de votre projet :

```json
{
  "endOfLine": "lf",
  "trailingComma": "es5",
  "arrowParens": "always",
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "printWidth": 120,
  "bracketSameLine": false,
  "bracketSpacing": true,
  "importOrder": ["<THIRD_PARTY_MODULES>", "^@src/(.*)$", "^[./]"],
  "importOrderSeparation": true
}
```

Ensuite créer un autre fichier `".prettierignore"` au même endroit qui servira à exclure certains dossiers du formatage :

```txt
node_modules/
dist/
```

Ajouter dans `"package.json"` un nouveau script NPM :

```json
{
  "format": "prettier --write src/**/*.ts{,x}", // formatage auto sur l'ensemble des fichiers du projet
}
```

### Configuration ESLint

Un linter comme ESLint permet d’analyser le code et repérer les problèmes en fonction de règles prédéfinies. Il permet également de corriger certains problèmes automatiquement pour gagner en efficacité.

Créer un fichier `".eslintrc"` à la racine de votre projet qui contiendra :

```json
{
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier"
  ],
  "settings": {
    "react": {
      "version": "detect"
    },

    "import/resolver": {
      "node": {
        "paths": ["src"],
        "extensions": [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  "rules": {
    "react/react-in-jsx-scope": "off",
    "import/named": "off"
  }
}
```

C'est une configuration basique pour débuter que vous pouvez faire évoluer.

Ensuite créer un autre fichier `".eslintignore"` au même endroit qui servira à exclure certains fichiers ou dossiers de la vérification :

```txt
node_modules/
dist/
.prettierrc
.eslintrc 
```

Ajouter dans `"package.json"` un nouveau script NPM :

```json
{
    "lint": "eslint . --ext .ts,.tsx", // vérification ESLint sur l'ensemble du projet 
}
```

## Structure du projet

Il n’existe pas de structure type pour un projet React mais un ensemble de bonnes pratiques cohérentes qu’on peut adopter.
L’essentiel est de définir une structure de fichiers claire, des conventions de nommage et surtout de s’y tenir.

**Exemple de structure de fichiers simple suggérées :**

```text
src
├── assets
├── contexts
├── components                          # composants organisés par type
│   ├── modals
│   ├── cards
│   │   ├── PostCard.tsx
│   │   └── ...
│   ├── forms
│   │   ├── PostForm.tsx
│   │   └── ...
│   ├── guards
│   │   ├── AuthGuard.tsx
│   │   └── ...
│   ├── menus
│   │   ├── PostMenu.tsx
│   │   └── ...
│   ├── misc
│   └──App.tsx
├── hooks
│   ├── usePost.ts
│   ├── usePostActions.ts
│   ├── useFeed.ts
│   └── ...
├── types
├── enums
├── redux                               # code Redux organisé par fonctionnalités
│   └── feed
│     ├── actions.ts
│     ├── reducer.ts
│     ├── selectors.ts
│     └── thunks.ts
├── views                               # différents écrans de l'application
│   ├── FeedView.tsx
│   └── ...
└── main.tsx
```

Pour en savoir plus : https://fr.reactjs.org/docs/faq-structure.html

## Conventions de codage

D’une manière générale, il est préférable d’établir au début d’un projet un ensemble de règles et de bonnes pratiques de codage que chaque développeur va devoir adopter.

Par exemple, les guides les plus prévalents sont ceux proposés par airbnb :

- **JavaScript** : [https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)

- **React** : [https://github.com/airbnb/javascript/tree/master/react](https://github.com/airbnb/javascript/tree/master/react)
