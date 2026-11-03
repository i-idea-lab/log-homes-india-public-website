import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import Eyebrow from "@/components/Eyebrow";
import SplitHeading from "@/components/SplitHeading";
import RevealImage from "@/components/RevealImage";
import Reveal from "@/components/Reveal";
import StatsStrip from "@/components/StatsStrip";
import CTASection from "@/components/CTASection";

const PILLARS = [
  {
    title: "Craftsmanship",
    description:
      "Every joint, beam, and finish is executed by carpenters trained specifically in timber-frame construction — not adapted from conventional masonry work.",
  },
  {
    title: "Accountability",
    description:
      "One in-house team carries a project from first site visit through design, construction, and handover — a single point of contact throughout.",
  },
  {
    title: "Longevity",
    description:
      "Imported, kiln-dried timber and load-bearing frame construction are chosen for structures meant to last for decades, not seasons.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="About Us"
          title="Building Luxury With Logs Since 2012"
          intro="What began as a small team of timber-frame specialists has grown into a builder trusted with some of India's most distinguished resorts, farmhouses, and private residences."
        />

        <section className="bg-paper py-24 md:py-32">
          <Container className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              {/* PLACEHOLDER — replace with a real founder/team or job-site photo */}
              <RevealImage className="aspect-[4/5]" curtainColor="bg-putty">
                <div className="absolute inset-0 bg-gradient-to-br from-wood-mid to-wood-dark flex items-center justify-center">
                  <span className="font-body text-xs uppercase tracking-eyebrow text-putty/70">
                    Team photo pending
                  </span>
                </div>
              </RevealImage>
            </div>
            <Reveal>
              <Eyebrow>Our Story</Eyebrow>
              <SplitHeading
                as="h2"
                text="From a small timber-frame team to a name in luxury builds"
                className="font-display text-3xl md:text-4xl text-brand mb-6"
              />
              <p className="font-body text-neutral leading-relaxed mb-4">
                {/* PLACEHOLDER copy — replace with the owner's real founding
                    story once available. */}
                Log Homes India was founded on a simple premise: that a
                wooden home, built properly, is not a rustic compromise but
                a genuine luxury. Over a decade, that premise has taken
                shape across resorts, farmhouses, and private residences
                spanning the country.
              </p>
              <p className="font-body text-neutral leading-relaxed">
                Today, an in-house design and architecture team carries
                every project from first consultation to final handover,
                working out of offices in Mumbai, Pune, and Uttarakhand.
              </p>
            </Reveal>
          </Container>
        </section>

        <StatsStrip />

        <section className="bg-paper py-24 md:py-32">
          <Container>
            <Reveal className="max-w-xl mb-16">
              <Eyebrow>What Guides Us</Eyebrow>
              <SplitHeading
                as="h2"
                text="Three principles behind every build"
                className="font-display text-3xl md:text-4xl text-brand"
              />
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {PILLARS.map((pillar, i) => (
                <Reveal key={pillar.title} delay={i * 0.1}>
                  <span className="font-display text-3xl text-gold mb-4 block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl text-brand mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-neutral leading-relaxed">
                    {pillar.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
