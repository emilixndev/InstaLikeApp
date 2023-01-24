# InstaLike API 2023

## Documentation

Vous pouvez travailler directement sur l’API InstaLike en ligne ou l’installer en local en clonant le répertoire GitLab (n'hésitez pas à remonter les éventuels bugs ou proposer directement en PR des correctifs).

Une documentation des différents endpoints de l’API et leurs attributs est disponible.

## Comptes

Par défaut, chaque étudiant dispose d’un compte créé à partir de son adresse email Unistra avec un mot de passe temporaire (DWEB2023) modifiable. En cas de problème contacter j.metterrothan@unistra.fr

## Configuration

### Ajouter des variables d'environnement

#### **a. Ajouter le point d'API**

Créer un fichier à la racine du projet `".env"` et ajouter le point d'API.

```bash
VITE_API_ENDPOINT="https://api.instalike.fr"
```

> Les variables d'environnement préfixées avec VITE\_ seront exposées à l'application dans l'objet `"import.meta.env"`

```typescript
console.log(import.meta.env.VITE_API_ENDPOINT); // "https://api.instalike.fr"
```

Vous pouvez avoir un environnement différent selon le mode de lancement de l'application, par exemple cibler le mode de développement en créant un fichier `".env.development"`.

#### **b. Mettre à jour les types dans le fichier déclaration `"vite-env.d.ts"`**

Surcharger le typage de `"import.meta.env"` qui par défaut équivaut à `any` et préciser le type `string` de la nouvelle variable.

```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_ENDPOINT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

### Installer les dépendances

```bash
npm i axios@0.27.2 --save-exact
```

Les types liés aux ressources retournées par l’API InstaLike et des outils de développement spécifiques sont disponibles en installant le package npm :

```bash
npm i @jmetterrothan/instalike@latest --save-exact
```

### Mettre en place l'API

Créer un fichier dans `"src"` appelé `"instalikeApi.ts"`

```typescript
import axios from "axios";
import { createInstalikeApi } from "@jmetterrothan/instalike";

const instalikeApi = createInstalikeApi(
  axios.create({
    baseURL: import.meta.env.VITE_API_ENDPOINT,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
      Accept: "application/json",
    },
  })
);

export default instalikeApi;
```

## Exemple

Une fois l'API configurée, vous pourrez faire des appels de la manière suivante :

```typescript
const { data: post } = await instalikeApi.posts.find(7).fetch();

console.log(post);
```

> Chaque ressource possède une propriété `"resourceType"` permettant d’identifier le type associé.

```json
{
  "resourceType": "Post", // le type associé sera Instalike.Post
  "id": 7,
  "caption": "",
  "accessibilityCaption": "",
  "location": "Italy",
  "resources": [
    {
      "resourceType": "Media",
      "id": 7,
      "src": "https://api.instalike.fr/storage/media/148d92946e5a0848e03976aca31a3f8e.jpg",
      "aspectRatio": 1.5907504363001745,
      "width": 1823,
      "height": 1146,
      "color": "#6e7d70"
    }
  ],
  "hasCommentsDisabled": false,
  "likesCount": 0,
  "previewLikes": [],
  "commentsCount": 0,
  "previewComments": [],
  "viewerHasLiked": false,
  "owner": {
    "resourceType": "User",
    "id": 1,
    "firstName": "Jérémie",
    "lastName": "METTER-ROTHAN",
    "fullName": "Jérémie METTER-ROTHAN",
    "userName": "j.metterrothan",
    "email": "j.metterrothan@unistra.fr",
    "biography": "",
    "isViewer": true,
    "isFollowedByViewer": false,
    "followersCount": 14,
    "followingCount": 0,
    "postsCount": 11,
    "createdAt": "2023-01-23T07:27:37.000000Z",
    "updatedAt": "2023-01-23T07:27:37.000000Z"
  },
  "createdAt": "2023-01-23T07:27:41.000000Z",
  "updatedAt": "2023-01-23T07:27:41.000000Z"
}
```
