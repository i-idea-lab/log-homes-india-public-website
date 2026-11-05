import Container from "./Container";
import StatCounter from "./StatCounter";
import Reveal from "./Reveal";

// NOTE: "homesBuilt" is a placeholder — replace with the real figure from
// the owner before this ships. Years/locations below are real, drawn from
// the current site (est. 2012; Mumbai, Pune, Uttarakhand offices).
const STATS = [
  { value: 13, suffix: "+", label: "Years of Craftsmanship" },
  { value: 3, suffix: "", label: "Locations Pan-India" },
  { value: 27, suffix: "+", label: "Homes Built" },
];

export default function StatsStrip() {
  return (
    <section className="bg-paper py-20 border-y border-putty">
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {STATS.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
