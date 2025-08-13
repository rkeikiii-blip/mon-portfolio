import React from "react";
import { 
  FaGithub, 
  FaTwitter, 
  FaTwitch, 
  FaTrophy, 
  FaLaptopCode, 
  FaHeadphones, 
  FaMicrophone,   
  FaGamepad
} from "react-icons/fa";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased font-sans">
      {/* Header */}
      <header className="max-w-5xl mx-auto px-6 py-10 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">rKeiki</h1>
          <p className="text-sm text-gray-500">Apprenti développeur · IGL Apex Legends</p>
        </div>
        <nav className="flex gap-6 items-center text-sm">
          <a href="#about" className="hover:underline">À propos</a>
          <a href="#projects" className="hover:underline">Projets</a>
          <a href="#esports" className="hover:underline">Esport</a>
          <a href="#contact" className="px-4 py-2 rounded-full border border-gray-200 text-sm">Contact</a>
        </nav>
      </header>

      {/* Section À propos */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-16 flex flex-col items-center gap-8">
        {/* Texte Dév • IGL */}
        <div className="text-center max-w-3xl">
          <h2 className="text-5xl font-extrabold leading-tight">Dév • IGL</h2>
          <p className="mt-6 text-lg text-gray-600">
            Apprenti développeur C++ passionné par la mécanique des jeux compétitifs. Je construis des logiciels simples — et je suis aussi joueur amateur d'Apex Legends.
          </p>

          <div className="mt-8 flex gap-4 justify-center">
            <a href="#projects" className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-black text-white text-sm font-medium shadow">
              Voir mes projets
            </a>
            <a href="#esports" className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border border-gray-200 text-sm">
              Ma philosophie IGL
            </a>
          </div>
        </div>

        {/* Mini-profil en pleine largeur */}
        <div className="w-full bg-gray-50 rounded-3xl p-6 shadow flex flex-col items-center">
          {/* Bannière avec coin supérieur droit arrondi */}
          <div className="relative w-full aspect-[3/1] overflow-hidden rounded-tr-3xl">
            <img
              src={`${import.meta.env.BASE_URL}img/banner.png`}
              alt="Bannière rKeiki"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Avatar et infos */}
          <div className="mt-6 flex flex-col items-center text-center w-full">
            <img
              src={`${import.meta.env.BASE_URL}img/avatar.gif`}
              alt="rKeiki"
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <h3 className="mt-4 text-lg font-semibold">rKeiki</h3>
            <p className="text-xs text-gray-500">IGL • Développeur</p>
          </div>

          {/* Objectif */}
          <div className="mt-6 text-xs text-gray-600 text-center">
            <strong>Objectif:</strong> Devenir IGL pro sur Apex tout en progressant comme développeur C++.
          </div>

          {/* Contact rapide */}
          <div className="mt-6 flex gap-3 w-full justify-center">
            <button className="text-xs py-2 px-4 rounded-lg border border-gray-200 hover:bg-gray-100 transition">
              Contact
            </button>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-14">
        <h3 className="text-2xl font-semibold text-center">Projets sélectionnés</h3>
        <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto text-center">
          Petits projets montrant mon travail côté dev.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white">
            <h4 className="text-lg font-medium">Bot Discord</h4>
            <p className="mt-2 text-sm text-gray-600">
              Queue management pour scrims, commandes de stats, intégration with APIs. (Node.js, Discord.js v14)
            </p>
            <div className="mt-4 text-xs text-gray-500">Stack: Node · Discord.js · MongoDB</div>
          </article>
          <article className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white">
            <h4 className="text-lg font-medium">Site Portfolio (ce site)</h4>
            <p className="mt-2 text-sm text-gray-600">Design épuré, responsive, axé performance et accessibilité.</p>
            <div className="mt-4 text-xs text-gray-500">Stack: React · Tailwind · Vite</div>
          </article>
          <article className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white">
            <h4 className="text-lg font-medium">Alpha d'un jeu UE5</h4>
            <p className="mt-2 text-sm text-gray-600">Création d'un jeu dans UE5.</p>
            <div className="mt-4 text-xs text-gray-500">UE5 · Blender · C++/Blueprint</div>
          </article>
          <article className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white">
            <h4 className="text-lg font-medium">Aim trainer analytics</h4>
            <p className="mt-2 text-sm text-gray-600">Prototype pour avoir des statistiques poussées sur son AIM.</p>
            <div className="mt-4 text-xs text-gray-500">JS · Python</div>
          </article>
        </div>
      </section>

      {/* Esports */}
      <section id="esports" className="max-w-5xl mx-auto px-6 py-14">
        <h3 className="text-2xl font-semibold text-center">Esport — philosophie IGL</h3>
        <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto text-center">
          IGL pragmatique : lis les patterns, impose le tempo, minimise le risque inutile et maximise l'info. Communication claire, petits check-ins, et plans B/C.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="p-6 rounded-2xl border border-gray-100 bg-white text-center">
            <h4 className="text-sm font-semibold">Macro</h4>
            <p className="mt-2 text-xs text-gray-600">Rotations fast, call de zone.</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-100 bg-white text-center">
            <h4 className="text-sm font-semibold">Shot-calling</h4>
            <p className="mt-2 text-xs text-gray-600">Appels simples, prioriser info essentielle, adaptatif.</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-100 bg-white text-center">
            <h4 className="text-sm font-semibold">Préparation</h4>
            <p className="mt-2 text-xs text-gray-600">Vods, scrims, notes de patch.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
