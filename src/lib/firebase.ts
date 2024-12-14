import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDtX_T_V_lqXDC8-L8-0Ym7iw5Bw0QxH9Q",         // Clé de test temporaire
  authDomain: "leon-city-dev.firebaseapp.com",               // Domaine de test temporaire
  projectId: "leon-city-dev",                                // Projet de test temporaire
  storageBucket: "leon-city-dev.appspot.com",               // Bucket de test temporaire
  messagingSenderId: "123456789012",                        // ID temporaire
  appId: "1:123456789012:web:abcdef1234567890abcdef"       // App ID temporaire
};

// Initialisation de Firebase avec gestion d'erreur
try {
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
} catch (error) {
  console.error("Erreur d'initialisation Firebase:", error);
  throw new Error("Veuillez configurer correctement vos clés Firebase");
}