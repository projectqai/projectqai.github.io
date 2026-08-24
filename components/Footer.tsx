import { REPO_URL } from '@/lib/version';

export function Footer() {
  return (
    <footer className="border-t border-[#243029] bg-[#0d1815] px-6 pt-16 pb-8 md:px-[60px] md:pt-20 md:pb-10">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <img src="/logo.png" alt="Project Q" className="h-[60px] w-[60px]" />
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#8ea99a]">Contact</h3>
              <ul className="space-y-2 text-sm text-[#d9ebe0]">
                <li>
                  <a href="mailto:info@project-q.ai" className="transition-colors hover:text-[#77fe90]">
                    info@project-q.ai
                  </a>
                </li>
                <li>
                  <a href="tel:+493086320387" className="transition-colors hover:text-[#77fe90]">
                    +49 30 86 32 03 87
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#8ea99a]">Project Q</h3>
              <ul className="space-y-2 text-sm text-[#d9ebe0]">
                <li>
                  <a href="https://www.project-q.ai" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#77fe90]">
                    project-q.ai
                  </a>
                </li>
                <li>
                  <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#77fe90]">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="my-10 h-px bg-[#243029]" />

        <div id="imprint">
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#8ea99a]">Imprint</h3>
          <div className="flex flex-wrap gap-x-12 gap-y-6 text-[13px] leading-relaxed text-[#8ea99a]">
            <p>
              Project Q GmbH<br />
              <strong className="font-semibold text-[#d9ebe0]">Managing Director:</strong> Leonard Wessendorff<br />
              c/o Dissmann Orth, Kardinal-Faulhaber-Str. 14A<br />
              80333 Munich, Germany
            </p>
            <p>
              <strong className="font-semibold text-[#d9ebe0]">Phone:</strong>{' '}
              <a href="tel:+493086320387" className="transition-colors hover:text-[#77fe90]">
                +49 30 86 32 03 87
              </a>
              <br />
              <strong className="font-semibold text-[#d9ebe0]">E-mail:</strong>{' '}
              <a href="mailto:info@project-q.ai" className="transition-colors hover:text-[#77fe90]">
                info@project-q.ai
              </a>
            </p>
            <p>
              Register court: Munich Local Court<br />
              Register number: HRB 293687<br />
              VAT ID (§27a UStG): DE368474963
            </p>
            <p>
              <strong className="font-semibold text-[#d9ebe0]">Responsible for content</strong><br />
              Leonard Wessendorff
            </p>
          </div>
        </div>

        <div className="my-10 h-px bg-[#243029]" />

        <p className="text-sm text-[#8ea99a]">&copy; 2026 Project Q GmbH</p>
      </div>
    </footer>
  );
}
