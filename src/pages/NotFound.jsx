import { Link } from 'react-router-dom';
import Container from '../site/Container';
import titre from '../site/titre';

const NotFound = () => (
  <Container className="py-24">
    <title>{titre('Page introuvable')}</title>
    <p className="text-sm text-ink-soft">Erreur 404</p>
    <h1 className="mt-3 font-primary text-4xl font-semibold tracking-tight text-ink">Cette page n'existe pas.</h1>
    <p className="mt-6"><Link to="/" className="text-ink underline decoration-accent decoration-2 underline-offset-4">Retour à l'accueil</Link></p>
  </Container>
);

export default NotFound;
