# Forum des Solutions pour une IA Compatible avec l'Humanité

Site web pour la conférence "Reprendre le Contrôle" organisée par Pause IA, présentant une journée de conférences et d'échanges sur la gouvernance de l'IA.

## 🌟 Fonctionnalités

- Programme détaillé de la journée
- Présentation des intervenants
- Système d'inscription aux notifications (à venir)
- Design responsive et moderne
- Optimisation des images
- Transitions fluides entre les pages

## 🚀 Structure du Projet

```text
/
├── src/
│   ├── assets/            # Images et ressources statiques
│   ├── components/        # Composants Astro réutilisables
│   ├── content/          # Contenu structuré (YAML)
│   │   ├── schedule/     # Programme de la journée
│   │   └── speakers/     # Informations sur les intervenants
│   ├── layouts/          # Layouts Astro
│   └── pages/            # Pages du site
└── public/               # Fichiers statiques
```

## 🛠️ Technologies Utilisées

- [Astro](https://astro.build/) - Framework web moderne
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitaire
- YAML pour la gestion du contenu
- Optimisation automatique des images via Astro

## 🧞 Commandes

| Commande                 | Action                                           |
| :----------------------- | :----------------------------------------------- |
| `npm install`            | Installe les dépendances                        |
| `npm run dev`            | Lance le serveur de dev sur `localhost:4321`    |
| `npm run build`          | Compile le site pour la production              |
| `npm run preview`        | Prévisualise la version de production          |

## 📝 Mise à jour du Contenu

Le contenu du site est géré via des fichiers YAML dans le dossier `src/content/`:

- `schedule.yaml` - Programme de la journée
- `speakers/*.yaml` - Profils des intervenants

## 🎨 Design

Le site utilise une palette de couleurs bleue cohérente et un design moderne avec:
- Typographie optimisée (Inter & DM Sans)
- Effets de flou et de transparence
- Composants réactifs
- Transitions fluides
