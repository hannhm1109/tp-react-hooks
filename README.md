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
