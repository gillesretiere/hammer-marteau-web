// En-tête YAML simple (clé: valeur, tags en liste) en tête d'un fichier Markdown.
export const parseFrontmatter = (text) => {
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) return { meta: {}, body: text };
  const meta = {};
  m[1].split('\n').forEach((line) => {
    const i = line.indexOf(':');
    if (i < 1) return;
    const key = line.slice(0, i).trim();
    const value = line.slice(i + 1).trim().replace(/^["']|["']$/g, '');
    if (value.startsWith('[')) {
      try { meta[key] = JSON.parse(value.replace(/'/g, '"')); return; } catch { /* liste mal formée */ }
      meta[key] = value.replace(/[[\]'"]/g, '').split(',').map((t) => t.trim()).filter(Boolean);
      return;
    }
    meta[key] = value;
  });
  return { meta, body: m[2] };
};

// Retire un titre « # … » en tête : la page affiche déjà le titre.
export const dropLeadingH1 = (body) => body.replace(/^\s*#\s[^\n]*\n/, '');
