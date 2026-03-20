export function Footer() {
  return (
    <footer className="bg-[#304035] px-6 pt-16 pb-8 md:px-[60px] md:pt-20 md:pb-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-start md:justify-between mb-12">
          <div>
            <h3 className="text-white text-2xl font-bold mb-5">Contact us</h3>
            <a
              href="mailto:info@project-q.ai"
              className="inline-flex items-center gap-3 text-[#dfe6e0] text-base hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <rect x="2" y="4" width="16" height="12" rx="2" stroke="#fff" strokeWidth="1.5" />
                <path d="M2 6l8 5 8-5" stroke="#fff" strokeWidth="1.5" />
              </svg>
              info@project-q.ai
            </a>
          </div>
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="Project Q"
              className="h-[60px] w-auto rounded-full bg-white p-1"
            />
          </div>
        </div>

        <div className="h-px bg-white/15 my-10" />

        <div className="mt-5" id="imprint">
          <h4 className="text-white text-sm font-bold mb-3">Imprint</h4>
          <div className="flex flex-wrap gap-10 text-white/60 text-[13px] leading-relaxed">
            <p>
              Project Q GmbH<br />
              <strong>Managing Director:</strong> Leonard Wessendorff<br />
              c/o Dissmann Orth, Kardinal-Faulhaber-Str. 14A<br />
              80333 Munich, Germany
            </p>
            <p>
              <strong>Phone:</strong> +49 30 86 32 03 87<br />
              <strong>E-mail:</strong>{' '}
              <a href="mailto:info@project-q.ai" className="text-white/60 hover:text-white transition-colors">
                info@project-q.ai
              </a>
            </p>
            <p>
              Register court: Munich Local Court<br />
              Register number: HRB 293687<br />
              VAT ID (§27a UStG): DE368474963
            </p>
            <p>
              <strong>Responsible for content</strong><br />
              Leonard Wessendorff
            </p>
          </div>
        </div>

        <div className="h-px bg-white/15 my-10" />

        <div className="flex justify-between items-center flex-col gap-4 md:flex-row text-center">
          <p className="text-white/50 text-sm">&copy; 2026 Project Q GmbH</p>
        </div>
      </div>
    </footer>
  );
}
