export default function Footer() {
  return (
    <footer className="mt-24 md:mt-32 bg-[#FFFDF7] border-t-[3px] border-[#1A1A2E]">
      {/* Decorative top strip */}
      <div className="w-full h-3 bg-[#FFE156] border-b-[3px] border-[#1A1A2E]"></div>

      <div className="py-10 md:py-14 flex flex-col justify-center items-center">
        {/* Decorative stars */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-[#FF6B35] text-2xl font-bold select-none">★</span>
          <span className="text-[#7B2FF2] text-lg font-bold select-none">★</span>
          <span className="text-[#00D4AA] text-xl font-bold select-none">★</span>
        </div>

        {/* Logo */}
        <p className="font-island text-5xl md:text-6xl text-[#1A1A2E] select-none">
          Ayak Dev
        </p>

        {/* Decorative divider */}
        <div className="flex items-center gap-3 mt-4 mb-4">
          <span className="block w-12 h-[3px] bg-[#1A1A2E]"></span>
          <span className="text-[#FF6B9D] text-sm font-bold select-none">✦</span>
          <span className="block w-12 h-[3px] bg-[#1A1A2E]"></span>
        </div>

        {/* Copyright */}
        <p className="font-montserrat text-sm md:text-base font-semibold text-[#1A1A2E]">
          Copyright © 2025 by <span className="font-bold text-[#FF6B35]">Ayak Dev</span>
        </p>

        {/* Bottom decorative stars */}
        <div className="flex items-center gap-4 mt-4">
          <span className="text-[#00D4AA] text-lg font-bold select-none">★</span>
          <span className="text-[#FF6B35] text-xl font-bold select-none">★</span>
          <span className="text-[#7B2FF2] text-2xl font-bold select-none">★</span>
        </div>
      </div>
    </footer>
  );
}