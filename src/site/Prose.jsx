import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

// Texte long (fiche projet, article) : colonne de lecture, couleurs du site, titres soulignés d'un filet.
const proseVars = {
  '--tw-prose-body': 'var(--ink)',
  '--tw-prose-headings': 'var(--ink)',
  '--tw-prose-links': 'var(--ink)',
  '--tw-prose-bold': 'var(--ink)',
  '--tw-prose-bullets': 'var(--ink-soft)',
  '--tw-prose-counters': 'var(--ink-soft)',
  '--tw-prose-quotes': 'var(--ink-soft)',
  '--tw-prose-quote-borders': 'var(--accent)',
  '--tw-prose-hr': 'var(--rule)',
  '--tw-prose-th-borders': 'var(--rule)',
  '--tw-prose-td-borders': 'var(--rule)',
  '--tw-prose-code': 'var(--ink)',
  '--tw-prose-pre-code': 'var(--ink)',
  '--tw-prose-pre-bg': 'var(--paper-2)',
  '--tw-prose-captions': 'var(--ink-soft)',
};

// article : le corps prend --font-article (articles du blog) ; sinon la police du texte.
const Prose = ({ children, article = false }) => (
  <div
    style={article ? { ...proseVars, fontFamily: 'var(--font-article)' } : proseVars}
    className="prose prose-lg max-w-[68ch] prose-headings:font-primary prose-headings:tracking-tight prose-h2:mt-12 prose-h2:border-t prose-h2:border-rule prose-h2:pt-4 prose-h2:text-2xl prose-a:decoration-accent prose-a:decoration-2 prose-a:underline-offset-4 prose-pre:border prose-pre:border-rule prose-img:rounded-none"
  >
    <Markdown remarkPlugins={[remarkGfm, remarkMath]} rehypePlugins={[rehypeKatex]}>{children}</Markdown>
  </div>
);

export default Prose;
