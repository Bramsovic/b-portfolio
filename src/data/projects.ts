
import airbnbProjectImage from "@/img/cloneairbnb.png";
import agoraflowProjectImage from "@/img/agoraflow.png";
import leBonDuVtcImage from "@/img/lebonduvtc/lbdvtcimg1.png";
import leBonDuVtcImage1 from "@/img/lebonduvtc/lbdvtcimg2.png";
import leBonDuVtcImage2 from "@/img/lebonduvtc/lbdvtcimg3.png";
import leBonDuVtcImage3 from "@/img/lebonduvtc/lbdvtcimg4.png";
import leBonDuVtcImage4 from "@/img/lebonduvtc/lbdvtcimg5.png";
import stockflowProjectImage from "@/img/stockflow.png";

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  repoLink: string;
  category: "school" | "professional" | "freelance";
  showCaseStudy?: boolean;
  galleryImages?: string[];
  casestudy: {
    problem: string;
    solution: string;
    results: string;
  };
}

export const projects: Project[] = [
  {
    title: "AirBnB Clone",
    description: "Plateforme de location full-stack avec API REST, authentification sécurisée et interface responsive. Clone complet des fonctionnalités Airbnb avec gestion des utilisateurs et des annonces.",
    image: airbnbProjectImage,
    technologies: ["Python", "Flask", "SQLAlchemy", "JWT", "HTML", "CSS", "JavaScript"],
    demoLink: "https://demo.airbnbclone.com",
    repoLink: "https://github.com/Bramsovic/airbnb-clone",
    category: "school",
    casestudy: {
      problem: "Créer une plateforme de location complète avec des technologies web modernes",
      solution: "Développement d'une application full-stack avec API sécurisée et front-end responsive",
      results: "Plateforme fonctionnelle avec authentification utilisateur et gestion des biens"
    }
  },
  {
    title: "WL Nova",
    description: "WL Nova est une application web utilisée par les acteurs du médico-social dans les services publics français (PMI, santé scolaire, santé au travail). Elle centralise l'information dans un dossier usager unique pour mieux structurer et sécuriser le suivi.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d",
    technologies: ["Application web", "Médico-social", "PMI", "Dossier usager", "Reporting", "PHP", "MySQL", "Git"],
    demoLink: "https://www.worldline.com",
    repoLink: "https://www.worldline.com",
    category: "professional",
    casestudy: {
      problem: "Les équipes terrain ont besoin d'un suivi usager fiable, partagé et exploitable, sans ressaisies ni perte d'information.",
      solution: "Mise en place d'une plateforme unifiée avec gestion du dossier, planification, production de documents, historiques complets et coordination entre médecins, infirmiers, secrétariats et responsables de service.",
      results: "Parcours usagers plus fluides, workflows plus clairs, accès plus rapide aux informations critiques, et pilotage renforcé via tableaux de bord et indicateurs d'activité."
    }
  },
  {
    title: "French Driver",
    description: "Plateforme VTC full-stack développée pour un client, avec une architecture métier complète : réservation de trajets (client invité ou connecté), espace client (profil, historique, factures), back-office admin/dispatch, gestion des chauffeurs (candidatures et suivi) et portail hôtels partenaires.\n\nLe projet s’appuie sur une API Django REST sécurisée par JWT, des notifications email/Telegram, la génération de factures PDF et une base de données MySQL.\nLe tout dans une logique de mise en production.",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
    technologies: ["Vite", "JavaScript / JSX", "Tailwind CSS", "Django", "Django REST Framework (API REST)", "MySQL", "JWT"],
    demoLink: "https://demo.frenchdriver.com",
    repoLink: "https://github.com/Bramsovic/french-driver",
    category: "freelance",
    showCaseStudy: false,
    casestudy: {
      problem: "Développer une plateforme de réservation de trajets avec deux rôles utilisateurs",
      solution: "Création d'une API sécurisée avec authentification par rôles et système de réservation",
      results: "Plateforme VTC pleinement fonctionnelle avec gestion des trajets"
    }
  },
  {
    title: "Le Bon Du VTC",
    description: "Le Bon du VTC est une application web full-stack de génération de bons de commande pour chauffeurs VTC.\n\nL’utilisateur complète un formulaire multi-étapes (VTC, client, trajet, tarification) avec autocomplétion d’adresses (Adresse.gouv.fr / OpenStreetMap), calcul automatique HT/TVA/TTC et préremplissage des données récurrentes.\n\nCôté backend, une API Django sécurisée valide les données, génère un PDF A4 professionnel via WeasyPrint, attribue une référence de commande et archive le document avec ses métadonnées en base.\n\nLe projet intègre aussi des mesures de sécurité (Bearer token, rate limiting, anti-bot) et la gestion du consentement RGPD.",
    image: leBonDuVtcImage,
    technologies: ["React + Vite", "Django", "Django REST Framework", "WeasyPrint", "SQLite", "API Adresse.gouv.fr", "OpenStreetMap (Nominatim)"],
    demoLink: "https://lebonduvtc.fr",
    repoLink: "https://lebonduvtc.fr",
    category: "freelance",
    showCaseStudy: false,
    galleryImages: [leBonDuVtcImage, leBonDuVtcImage1, leBonDuVtcImage2, leBonDuVtcImage3, leBonDuVtcImage4],
    casestudy: {
      problem: "Créer une présence en ligne claire pour capter des demandes de trajets",
      solution: "Conception d'un site vitrine mobile-first avec structure orientée conversion",
      results: "Parcours utilisateur simplifié et meilleure visibilité du service VTC"
    }
  },
  {
    title: "AgoraFlow",
    description: "Système CRM complet conçu pour la coordination d'équipe et le suivi de la relation client, avec interfaces administrateur et utilisateur.",
    image: agoraflowProjectImage,
    technologies: ["NestJS", "PostgreSQL", "JWT", "Vue.js"],
    demoLink: "https://demo.agoraflow.com",
    repoLink: "https://github.com/Bramsovic/agoraflow",
    category: "school",
    casestudy: {
      problem: "Besoin d'un système efficace de gestion de la relation client",
      solution: "Conception d'un CRM scalable avec contrôle d'accès par rôles et interface moderne",
      results: "Suivi client plus fluide, informations centralisées et traitement des demandes plus rapide"
    }
  },
  {
    title: "StockFlow Cloud",
    description: "Système de gestion de stock avec opérations CRUD, suivi des entrées/sorties, gestion des rôles et interface React pour optimiser les flux.",
    image: stockflowProjectImage,
    technologies: ["Express.js", "PostgreSQL", "JWT", "React"],
    demoLink: "https://demo.stockflow.com",
    repoLink: "https://github.com/Bramsovic/stockflow-cloud",
    category: "school",
    casestudy: {
      problem: "Processus manuels de gestion de stock peu efficaces",
      solution: "Développement d'un système d'inventaire automatisé avec front-end React",
      results: "Moins d'erreurs de stock, suivi des entrées/sorties plus clair et gestion quotidienne plus fiable"
    }
  }
];
