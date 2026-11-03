import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import { OFFICES } from "@/lib/offices";

export default function Footer() {
  return (
    <footer className="bg-wood-dark text-putty py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <Image
              src="/logo.png"
              alt="Log Homes India"
              width={140}
              height={90}
              className="h-16 w-auto object-contain mb-4 bg-putty/5 rounded"
            />
            <p className="font-body text-sm text-putty/70">
              Building Luxury With Logs...!
            </p>
          </div>

          {OFFICES.map((office) => (
            <div key={office.name}>
              <p className="font-body text-xs uppercase tracking-eyebrow text-gold mb-3">
                {office.name}
              </p>
              <p className="font-body text-sm text-putty/70 leading-relaxed mb-2">
                {office.address}
              </p>
              <a href={`tel:${office.phone}`} className="font-body text-sm text-putty hover:text-gold">
                {office.phone}
              </a>
            </div>
          ))}
        </div>

        <div className="border-t border-putty/15 pt-8 flex flex-col gap-4 font-body text-xs text-putty/50 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Log Homes India Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-gold">
              Privacy Policy
            </Link>
            {/* Cross-link to the International site — wire up once that domain is live */}
            <a href="#" className="hover:text-gold">
              Log Homes International (Oman) →
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
