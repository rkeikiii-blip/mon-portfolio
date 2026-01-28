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
  FaHeart, 
  FaCrosshairs,
  FaYoutube
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";


export default function Portfolio() {
  return (
    <main className="min-h-screen bg-white text-gray-900 antialiased font-sans">
      {/* Header */}
      <header className="max-w-5xl mx-auto px-6 py-10 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">rKeiki</h1>
          <p className="text-sm text-gray-500">Apprenti développeur · Monteur</p>
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
          <h2 className="text-5xl font-extrabold leading-tight">Dév • Monteur</h2>
          <p className="mt-6 text-lg text-gray-600">
            Apprenti développeur C++ passionné par le montage.
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
              src={`${import.meta.env.BASE_URL}img/avatar.jpg`}
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

<section id="projects" className="max-w-5xl mx-auto px-6 py-14 text-center">
  <h3 className="text-2xl font-semibold">Projets sélectionnés</h3>
  <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto">
    Petits projets montrant mon travail côté dev.
  </p>
  <div className="mt-8 grid gap-6 md:grid-cols-2 justify-center">
    <article className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white text-center">
      <h4 className="text-lg font-medium">Bot Discord</h4>
      <p className="mt-2 text-sm text-gray-600">
        Queue management pour scrims, commandes de stats, intégration with APIs. (Node.js, Discord.js v14)
      </p>
      <div className="mt-4 text-xs text-gray-500">Stack: Node · Discord.js · MongoDB</div>
    </article>

    <article className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white text-center">
      <h4 className="text-lg font-medium">Site Portfolio (ce site)</h4>
      <p className="mt-2 text-sm text-gray-600">Design épuré, responsive, Axés performance et accessibilité.</p>
      <div className="mt-4 text-xs text-gray-500">Stack: React · Tailwind · Vite</div>
    </article>

    <article className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white text-center">
      <h4 className="text-lg font-medium">Alpha d'un jeu UE5</h4>
      <p className="mt-2 text-sm text-gray-600">Création d'un jeu dans UE5.</p>
      <div className="mt-4 text-xs text-gray-500">UE5 · Blender · C++/Blueprint</div>
    </article>

    <article className="p-6 rounded-2xl border border-gray-100 shadow-sm bg-white text-center">
      <h4 className="text-lg font-medium">Aim trainer analitycs</h4>
      <p className="mt-2 text-sm text-gray-600">Prototype pour avoir des statistiques poussé sur son AIM.</p>
      <div className="mt-4 text-xs text-gray-500">JS · Python</div>
    </article>
  </div>
</section>

<section id="esports" className="max-w-5xl mx-auto px-6 py-14 text-center">
  <h3 className="text-2xl font-semibold">Esport — philosophie IGL</h3>
  <p className="mt-3 text-sm text-gray-600 max-w-2xl mx-auto">
    IGL pragmatique : lis les patterns, impose le tempo, minimise le risque inutile et maximise l'info. Communication claire, petits check-ins, et plans B/C.
  </p>
  <div className="mt-8 grid gap-6 md:grid-cols-3 justify-center text-center">
    <div className="p-6 rounded-2xl border border-gray-100 bg-white">
      <h4 className="text-sm font-semibold">Macro</h4>
      <p className="mt-2 text-xs text-gray-600">Rotations fast, call de zone.</p>
    </div>
    <div className="p-6 rounded-2xl border border-gray-100 bg-white">
      <h4 className="text-sm font-semibold">Short-call</h4>
      <p className="mt-2 text-xs text-gray-600">Appels simples, prioriser info essentielle, adaptatif.</p>
    </div>
    <div className="p-6 rounded-2xl border border-gray-100 bg-white">
      <h4 className="text-sm font-semibold">Préparation</h4>
      <p className="mt-2 text-xs text-gray-600">Vods, scrims, notes de patch.</p>
    </div>
  </div>
</section>

<section id="links" className="max-w-5xl mx-auto px-6 py-14 border-t border-gray-100 text-center">
  <h3 className="text-2xl font-semibold mb-8">Mes Liens</h3>
  <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-center">
    <a href="https://github.com/Yuuki002Ch" className="flex flex-col items-center gap-2 p-6 bg-gray-100 rounded-2xl hover:bg-gray-200 transition">
      <FaGithub size={28} /> <span className="font-medium">GitHub</span>
    </a>
    <a href="https://www.twitch.tv/rkeiki_" className="flex flex-col items-center gap-2 p-6 bg-purple-600 text-white rounded-2xl hover:opacity-90 transition">
      <FaTwitch size={28} /> <span className="font-medium">Twitch</span>
    </a>
    <a href="https://x.com/rKeikii" className="flex flex-col items-center gap-2 p-6 bg-blue-500 text-white rounded-2xl hover:opacity-90 transition">
      <FaTwitter size={28} /> <span className="font-medium">Twitter</span>
    </a>
    <a href="https://www.youtube.com/@DxspKeiki" className="flex flex-col items-center gap-2 p-6 bg-red-600 text-white rounded-2xl hover:opacity-90 transition">
      <FaYoutube size={28} /> <span className="font-medium">YouTube</span>
    </a>
    <a href="https://www.tiktok.com/@aleph.0x?is_from_webapp=1&sender_device=pc" className="flex flex-col items-center gap-2 p-6 bg-black text-white rounded-2xl hover:opacity-90 transition">
      <SiTiktok size={28} /> <span className="font-medium">TikTok</span>
    </a>
    <a href="https://overstat.gg/player/3634365.MIAW%20%7C%20rKeiki%20%EF%BE%97/overview" className="flex flex-col items-center gap-2 p-6 bg-red-500 text-white rounded-2xl hover:opacity-90 transition">
      <FaGamepad size={28} /> <span className="font-medium">Stats Apex</span>
    </a>
     <a href="https://ko-fi.com/rkeiki" className="flex flex-col items-center gap-2 p-6 bg-pink-400 text-white rounded-2xl hover:opacity-90 transition">
      <FaHeart size={28} /> <span className="font-medium">Ko-fi</span>
    </a>
    <a href="https://guns.lol/rkeiki " className="flex flex-col items-center gap-2 p-6 bg-gray-800 text-white rounded-2xl hover:opacity-90 transition">
      <FaCrosshairs size={28} /> <span className="font-medium">Guns.gg</span>
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
<section id="trophies" className="max-w-5xl mx-auto px-6 py-14 border-t border-gray-100 text-center">
  <h3 className="text-2xl font-semibold mb-8">Résultats</h3>
  {/*
  <div className="flex flex-wrap justify-center gap-4">
    {[
      { label: "EEC Lobby 7 (10e) ", url: "https://overstat.gg/tournament/eternal/11759.Lobby7_2_26_2025/standings/overall/scoreboard" },
    ].map(({ label, url }) => (
      <a
        key={label}
        href={url}
        className="flex items-center justify-center gap-2 bg-yellow-100 hover:bg-yellow-200 px-4 py-2 rounded-lg transition"
      >
        <FaTrophy className="text-yellow-600" />
        {label}
      </a>
    ))}
  </div>
  */}
</section>

<section id="contact" className="max-w-5xl mx-auto px-6 py-14 text-center">
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