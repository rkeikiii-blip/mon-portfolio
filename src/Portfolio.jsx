import React from "react";
import { 
  FaGithub, 
  FaTwitter, 
  FaTwitch, 
  FaTrophy, 
  FaLaptopCode, 
  FaHeadphones, 
  FaMicrophone,   
  FaGamepad, 
  FaEnvelope, 
  FaYoutube 
} from "react-icons/fa";
import { SiDiscord } from "react-icons/si";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased font-sans">
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

      <section id="about" className="max-w-5xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-5xl font-extrabold leading-tight">Dév • IGL</h2>
          <p className="mt-6 text-lg text-gray-600 mx-auto md:mx-0 max-w-xl">
            Apprenti développeur C++ passionné par la mécanique des jeux compétitifs. Je construis des logiciels et simples — et je suis aussi joueur Amateur de Apex Legend.
          </p>

          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a href="#projects" className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-black text-white text-sm font-medium shadow">
              Voir mes projets
            </a>
            <a href="#esports" className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border border-gray-200 text-sm">
              Ma philosophie IGL
            </a>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-4 text-sm text-gray-700 max-w-md mx-auto">
            <li>
              <strong>Langages</strong><br />
              Python, C++ .
            </li>
            <li>
              <strong>Outils</strong><br />
              VScode.
            </li>
            <li>
              <strong>Audio</strong><br />
              DAC et Casque .
            </li>
            <li>
              <strong>Esport</strong><br />
              IGL
            </li>
          </ul>
        </div>
<aside className="w-full md:w-72 bg-gray-50 rounded-3xl p-6 shadow-sm flex-shrink-0 overflow-hidden">
  {/* Conteneur bannière - ratio 3:1 (3000x1000) */}
  <div className="relative aspect-[3/1] w-full -mx-6 -mt-6">
<img
  src={`${import.meta.env.BASE_URL}img/banner.png`}
  alt="Bannière rKeiki"
  className="absolute inset-0 w-full h-full object-cover"
  loading="lazy"
/>

  </div>

  {/* Avatar et infos */}
  <div className="relative -mt-16 flex flex-col items-center">
<img
  src={`${import.meta.env.BASE_URL}img/avatar.gif`}
  alt="rKeiki"
  className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
/>
    <h3 className="mt-4 text-lg font-semibold">rKeiki</h3>
    <p className="text-xs text-gray-500">IGL • Développeur</p>
  </div>




          <div className="mt-6 text-xs text-gray-600">
            <p>
              <strong>Objectif</strong><br />
              Devenir IGL pro sur Apex tout en progressant comme développeur C++ .
            </p>
          </div>

          <div className="mt-6 flex gap-3">
            <a className="flex-1 text-center text-xs py-2 rounded-lg border border-gray-200 cursor-pointer hover:bg-gray-100 transition">Contact</a>
          </div>
        </aside>
      </section>

<section id="projects" className="max-w-5xl mx-auto px-6 py-14">
  <h3 className="text-2xl font-semibold text-center">Projets sélectionnés</h3>
  <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto text-center">
    Petits projets montrant mon travail côté dev.
  </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <article className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white">
            <h4 className="text-lg font-medium">Bot Discord </h4>
            <p className="mt-2 text-sm text-gray-600">
              Queue management pour scrims, commandes de stats, intégration with APIs. (Node.js, Discord.js v14)
            </p>
            <div className="mt-4 text-xs text-gray-500">Stack: Node · Discord.js · MongoDB</div>
          </article>

          <article className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white">
            <h4 className="text-lg font-medium">Site Portfolio (ce site)</h4>
            <p className="mt-2 text-sm text-gray-600">Design épuré, responsive, Axés performance et accessibilité.</p>
            <div className="mt-4 text-xs text-gray-500">Stack: React · Tailwind · Vite</div>
          </article>

          <article className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white">
            <h4 className="text-lg font-medium">Alpha d'un jeu UE5</h4>
            <p className="mt-2 text-sm text-gray-600">Création d'un jeu dans UE5.</p>
            <div className="mt-4 text-xs text-gray-500">UE5 · Blender · C++/Blueprint</div>
          </article>

          <article className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white">
            <h4 className="text-lg font-medium">Aim trainer analitycs</h4>
            <p className="mt-2 text-sm text-gray-600">Prototype pour avoir des statistiques poussé sur son AIM.</p>
            <div className="mt-4 text-xs text-gray-500">JS · Python</div>
          </article>
        </div>
      </section>

<section id="esports" className="max-w-5xl mx-auto px-6 py-14">
  <h3 className="text-2xl font-semibold text-center">Esport — philosophie IGL</h3>
  <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto text-center">
    IGL pragmatique : lis les patterns, impose le tempo, minimise le risque inutile et maximise l'info. Communication claire, petits check-ins, et plans B/C.
  </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="p-6 rounded-2xl border border-gray-100 bg-white">
            <h4 className="text-sm font-semibold">Macro</h4>
            <p className="mt-2 text-xs text-gray-600">Rotations fast, call de zone.</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-100 bg-white">
            <h4 className="text-sm font-semibold">Shot-calling</h4>
            <p className="mt-2 text-xs text-gray-600">Appels simples, prioriser info essentielle, adaptatif.</p>
          </div>
          <div className="p-6 rounded-2xl border border-gray-100 bg-white">
            <h4 className="text-sm font-semibold">Préparation</h4>
            <p className="mt-2 text-xs text-gray-600">Vods, scrims, notes de patch.</p>
          </div>
        </div>

      </section>

      {/* Liens & Setup section */}
      <section id="links" className="max-w-5xl mx-auto px-6 py-14 border-t border-gray-100">
        <h3 className="text-2xl font-semibold mb-8">Mes Liens</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <a href="https://github.com/Yuuki002Ch" className="flex items-center gap-4 p-6 bg-gray-100 rounded-2xl hover:bg-gray-200 transition">
            <FaGithub size={28} /> <span className="font-medium">GitHub</span>
          </a>
          <a href="https://www.twitch.tv/rkeiki_" className="flex items-center gap-4 p-6 bg-purple-600 text-white rounded-2xl hover:opacity-90 transition">
            <FaTwitch size={28} /> <span className="font-medium">Twitch</span>
          </a>
          <a href="https://x.com/rKeikii" className="flex items-center gap-4 p-6 bg-blue-500 text-white rounded-2xl hover:opacity-90 transition">
            <FaTwitter size={28} /> <span className="font-medium">Twitter</span>
          </a>
          <a href="https://overstat.gg/player/3634365.MIAW%20%7C%20rKeiki%20%EF%BE%97/overview" className="flex items-center gap-4 p-6 bg-red-500 text-white rounded-2xl hover:opacity-90 transition">
            <FaGamepad size={28} /> <span className="font-medium">Stats Apex</span>
          </a>
        </div>
      </section>

      <section id="setup" className="max-w-5xl mx-auto px-6 py-14 border-t border-gray-100">
        <h3 className="text-2xl font-semibold mb-8">Mon Setup</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex items-center gap-4 p-6 bg-gray-100 rounded-2xl">
            <FaLaptopCode size={28} /> <span className="font-medium">PC : Ryzen 9 7900x · RTX 4070 · 32 Go RAM DDR5</span>
          </div>
          <div className="flex items-center gap-4 p-6 bg-gray-100 rounded-2xl">
            <FaHeadphones size={28} /> <span className="font-medium">Casque : Logitech G pro X</span>
          </div>
          <div className="flex items-center gap-4 p-6 bg-gray-100 rounded-2xl">
            <FaMicrophone size={28} /> <span className="font-medium">DAC(pas encore reçu) : Focusrite Scarlett Solo · Tonor TD510 </span>
          </div>
          <div className="flex items-center gap-4 p-6 bg-gray-100 rounded-2xl">
            <FaGamepad size={28} /> <span className="font-medium">Souris : Logitech G 502x | Controller: Scuf PS5
            </span>
          </div>
        </div>
      </section>

      {/* Trophées */}
      <section id="trophies" className="max-w-5xl mx-auto px-6 py-14 border-t border-gray-100">
        <h3 className="text-2xl font-semibold mb-8">Résultats</h3>
        <div className="flex flex-wrap gap-4">
          {[
            { label: "EEC Lobby 7 (10e) ", url: "https://overstat.gg/tournament/eternal/11759.Lobby7_2_26_2025/standings/overall/scoreboard" },
          ].map(({ label, url }) => (
            <a
              key={label}
              href={url}
              className="flex items-center gap-2 bg-yellow-100 hover:bg-yellow-200 px-4 py-2 rounded-lg transition"
            >
              <FaTrophy className="text-yellow-600" />
              {label}
            </a>
          ))}
        </div>
      </section>

     <section id="contact" className="max-w-5xl mx-auto px-6 py-14">
  <h3 className="text-2xl font-semibold">Contact</h3>
  <p className="mt-3 text-sm text-gray-600">Disponible.</p>

  <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="rounded-2xl p-6 border border-gray-100">
      <div className="text-xs text-gray-500">Email</div>
      <div className="mt-2 font-medium">rkeikiii@gmail.com</div>
    </div>

    <div className="rounded-2xl p-6 border border-gray-100">
      <div className="text-xs text-gray-500">Discord</div>
      <div className="mt-2 font-medium">keiki._.</div>
    </div>

    <div className="rounded-2xl p-6 border border-gray-100">
      <div className="text-xs text-gray-500">Twitch</div>
      <div className="mt-2 font-medium">twitch.tv/rkeiki_</div>
    </div>
  </div>
</section>  

      <footer className="border-t border-gray-100 mt-16">
        <div className="max-w-5xl mx-auto px-6 py-8 text-xs text-gray-400 flex justify-between">
          <div>© {new Date().getFullYear()} rKeiki</div>
          <div>Design - Dev rKeiki</div>
        </div>
      </footer>
    </main>
  );
}  
