import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import PageHero from "@/components/PageHero";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";

// PLACEHOLDER copy — review against the owner's actual policies (timelines,
// warranty terms, pricing approach) before this goes live.
const FAQS = [
  {
    question: "How long does a typical build take?",
    answer:
      "Timelines vary with size and site conditions, but most projects move from signed design to handover within several months, with clear milestones agreed upfront.",
  },
  {
    question: "Where does the timber come from?",
    answer:
      "Timber is imported and kiln-dried before it reaches any site, chosen specifically for structural and climate performance rather than local availability alone.",
  },
  {
    question: "Do you build outside Mumbai, Pune, and Uttarakhand?",
    answer:
      "Our offices are based in these three locations, but projects are undertaken across India — site visits and logistics are planned per project.",
  },
  {
    question: "What ongoing maintenance is required?",
    answer:
      "Wooden homes benefit from periodic finish and seal maintenance. Our team offers ongoing support to keep structures in condition for decades.",
  },
  {
    question: "Can I see 3D designs before construction begins?",
    answer:
      "Yes — our in-house design team produces detailed drawings and 3D walkthroughs as part of the design stage, before construction starts.",
  },
];

export default function FAQsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHero
          eyebrow="FAQs"
          title="Common Questions, Answered"
        />

        <section className="bg-paper py-16 md:py-24">
          <Container>
            <FAQAccordion items={FAQS.map(({ question, answer }) => ({ question, answer }))} />
          </Container>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
