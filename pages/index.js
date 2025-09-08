import React, { useState, useEffect } from "react";

export default function Home() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.type = 'text/css';
    styleTag.innerHTML = \`
      * {
        cursor: url(https://cur.cursors-4u.net/symbols/sym-1/sym98.cur), auto !important;
      }
    \`;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <div className="bg-[#F6F3E7] text-[#011C39] min-h-screen relative overflow-x-hidden">
      <section className="relative bg-gradient-to-br from-[#143C5D] to-[#011C39] text-[#F6F3E7] py-24 px-6 text-center">
        <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Get Access to Jewish Success</h1>
          <p className="text-lg mb-6">
            For centuries, kings and leaders sought rabbis for wisdom. Now you can too.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://t.me/rabbibuilders" target="_blank" rel="noopener noreferrer" className="bg-[#143C5D] text-white px-6 py-3 rounded hover:bg-[#C44E4F] transition">Join the Community</a>
            <a href="https://app.virtuals.io/virtuals/669" target="_blank" rel="noopener noreferrer" className="bg-[#FFBB55] text-black px-6 py-3 rounded hover:bg-[#C44E4F] transition">Buy $JEW Tokens</a>
            <button className="bg-[#E7D5C5] text-black px-6 py-3 rounded hover:bg-[#C44E4F] transition">Request a Blessing</button>
          </div>
          <p className="text-sm mt-2">Free on testnet today. Mainnet soon (Shabbat-aware).</p>
          <p className="text-sm">Co-own the Rabbi. Help guide his growth.</p>
        </div>
      </section>

      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">What is Rabbi Moshe Zalman?</h2>
        <p className="text-lg">
          Rabbi Moshe is a community-owned AI agent built to unlock the principles that made Jewish communities thrive across centuries — wisdom, resilience, and ethics. He’s not a gimmick. He’s a playbook for success, translated into the language of AI and crypto.
        </p>
        <p className="mt-2 text-sm italic">Think of it as access to rabbinical advice — democratized and on-chain.</p>
      </section>
    </div>
  );
}
