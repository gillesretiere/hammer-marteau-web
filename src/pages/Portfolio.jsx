import Container from '../site/Container';
import ProjectGrid from '../site/ProjectGrid';
import useIndex from '../site/useIndex';
import reglages from '../contenus/portfolio';
import titre from '../site/titre';

const Portfolio = () => {
  const projects = useIndex('/portfolio-data/index.json');
  return (
    <Container>
      <title>{titre('Portfolio')}</title>
      <header className="py-14 sm:py-20">
        <h1 className="font-primary text-[clamp(2.2rem,6vw,4rem)] font-semibold leading-none tracking-[-0.025em] text-ink">Portfolio</h1>
      </header>
      <div className="rule-strong pt-6">{projects && <ProjectGrid projects={projects} composition={reglages.composition} />}</div>
    </Container>
  );
};

export default Portfolio;
