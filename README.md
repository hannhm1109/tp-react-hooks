# Exercice 1 : État et Effets
## Solution Implémentée
Pour cet exercice, j'ai implémenté une recherche en temps réel avec les fonctionnalités suivantes :
### Composant ProductSearch :
- Création d'un champ de recherche contrôlé
- Intégration avec le thème sombre/clair
- Transmission des termes de recherche au composant parent
### Hook useDebounce :
- Implémentation d'un hook personnalisé pour le debounce
- Délai de 500ms pour optimiser les appels API
- Réduction du nombre de requêtes pendant la saisie
### Modification de useProductSearch :
- Ajout du paramètre de recherche dans l'appel API
- Gestion des états de chargement et d'erreur
- Mise à jour dynamique des résultats

![exercie1](https://github.com/user-attachments/assets/1edf0472-5668-4a4c-8996-968b5545a7f3)

# Exercice 2 : Context et Internationalisation

## Solution Implémentée

Pour cet exercice, j'ai mis en place un système d'internationalisation avec les fonctionnalités suivantes :

### 🌍 LanguageContext
- Création d'un contexte pour gérer l'état de la langue
- Support pour le français et l'anglais
- Système de traductions centralisé

### 🎛️ Composant LanguageSelector
- Sélecteur de langue dans l'interface
- Intégration avec le thème sombre/clair
- Changement dynamique de la langue

### 📖 Traductions Implémentées
- Titres et en-têtes
- Messages de chargement
- Messages d'erreur
- Textes des boutons
- Placeholders des champs de recherche

![exercice2](https://github.com/user-attachments/assets/a4dbc638-c47f-411b-9bb1-6dafa503ac79)

# Exercice 3 : Hooks Personnalisés
Solution Implémentée

J'ai créé deux hooks personnalisés pour améliorer la réutilisabilité et la gestion d'état dans l'application de catalogue de produits :

1. **useDebounce Hook** :
   * Optimisation des recherches en temps réel
   * Délai paramétrable (500ms par défaut)
   * Réduction des appels API pendant la saisie de recherche
   * Implémenté dans le composant ProductSearch

2. **useLocalStorage Hook** :

* Persistance des préférences utilisateur
* Synchronisation automatique avec localStorage
* Gestion des erreurs intégrée
* Utilisé pour le thème et la langue

![exercice3](https://github.com/user-attachments/assets/ac9ce416-daa5-413e-a6df-05c21fafba53)

# Exercice 4 : Gestion Asynchrone et Pagination

## Solution Implémentée

### 1. Ajout du Bouton de Rechargement
* Implémentation d'un bouton de rechargement (↻) pour rafraîchir les données
* Intégration avec le thème sombre/clair existant
* Gestion des états de chargement pendant le rechargement

### 2. Implémentation de la Pagination
* Limitation à 9 produits par page
* Maximum de 9 pages affichées
* Navigation intuitive avec flèches (← →)
* Conservation du thème et de la langue sur toutes les pages

### 3. Fonctionnalités Clés
* `useProductSearch` hook amélioré :
  ```javascript
  const { products, loading, error, totalPages, reloadData } = useProductSearch(searchTerm, currentPage);

![exercice4](https://github.com/user-attachments/assets/8ec7873e-2047-46a9-aa32-dc9dfe525a68)

