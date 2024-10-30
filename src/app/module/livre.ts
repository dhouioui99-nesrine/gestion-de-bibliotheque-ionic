export interface Livre {
    id?: string;           // Optionnel : l'identifiant du livre (généré par Firestore)
    title: string;        // Titre du livre
    author: string;       // Auteur du livre
    category: string;     // Catégorie du livre
    description: string;  // Description du livre
  }