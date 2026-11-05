import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { OFFICES } from "@/lib/offices";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="Contact"
          title="Tell Us About Your Site"
          intro="Reach out for a consultation, or visit us at one of our three offices."
        />

        <section className="bg-paper py-16 md:py-24">
          <Container className="grid grid-cols-1 md:grid-cols-[1.2fr,1fr] gap-16">
            <Reveal>
              <ContactForm defaultCountryIso="IN" />
            </Reveal>

            <Reveal delay={0.1} className="space-y-10">
              {/* Google Maps Location */}
              <div className="w-full aspect-[16/10] overflow-hidden border border-gold/30 shadow-md bg-sand/30 rounded-xs">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d863.1438712354759!2d73.0620388706978!3d19.02837152707059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c756501a7be7%3A0xd5765490fb3aca8!2sLog%20Homes%20India%20Private%20Limited!5e1!3m2!1sen!2sin!4v1793875650568!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Log Homes India Headquarters Location"
                  className="w-full h-full"
                />
              </div>

              {OFFICES.map((office) => (
                <div key={office.name}>
                  <Eyebrow>{office.name}</Eyebrow>
                  <p className="font-body text-neutral leading-relaxed mb-2">
                    {office.address}
                  </p>
                  <a
                    href={`tel:${office.phone}`}
                    className="font-body text-brand hover:text-gold"
                  >
                    {office.phone}
                  </a>
                </div>
              ))}
            </Reveal>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
