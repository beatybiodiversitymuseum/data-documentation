// docs/assets/query-field-browser.mjs

// Resolve assets relative to the current page (works with subpaths + nested URLs)
const jsonUrl = new URL('schema.json', document.baseURI);

// Top-level await is fine in ES modules
const data = await fetch(jsonUrl).then(r => {
  if (!r.ok) throw new Error(`Failed to load schema.json: ${r.status} ${r.statusText}`);
  return r.json();
});

    const options = {
  includeScore: true,
  includeMatches: true,
  threshold: 0.2, // 0 is perfect match, 1.0 is match anything
  distance: 500,
  useExtendedSearch: true,
keys: [
    {name: 'label', weight: 0.70},
    {name: 'fields.label', weight: 0.10},
    {name: "fields.description", weight: 0.20},
]

}

const fuse = new Fuse(data, options)


const input = document.getElementById('searchInput');
const resultsList = document.getElementById('results');

  // Display all items initially
  renderResults(data.map(item => ({ item })));

  input.addEventListener('input', () => {
    const query = input.value.trim();
    const results = query ? fuse.search(query) : data.map(item => ({ item }));
    renderResults(results);
  });
  
  function renderResults(results) {
  resultsList.innerHTML = '';

  results.forEach(result => {
    const item = result.item;
    const li = document.createElement('li');
    const matches = result.matches || [];

    const grouped = groupMatchesByKey(matches);

    const nameHtml = grouped['label']
      ? highlightMatches(item.label, grouped['label'])
      : escapeHTML(item.label);


    let html = `<strong>${nameHtml}</strong>`;

    // ✅ Only show matched nested items using match.refIndex
    const nestedMatches = matches.filter(m => m.key.startsWith('fields.') && m.refIndex != null);

    const nestedGrouped = {};
    for (const match of nestedMatches) {
      const idx = match.refIndex;
      if (!nestedGrouped[idx]) nestedGrouped[idx] = {};
      if (!nestedGrouped[idx][match.key]) nestedGrouped[idx][match.key] = [];
      nestedGrouped[idx][match.key].push(...match.indices);
    }

    if (item.fields && Object.keys(nestedGrouped).length > 0) {
      const subItemsHtml = Object.entries(nestedGrouped).map(([index, fields]) => {
        const subItem = item.fields[index];
        const nameHtml = fields['fields.label']
          ? highlightMatches(subItem.label, fields['fields.label'])
          : escapeHTML(subItem.label);

        const descHtml = fields['fields.description']
          ? highlightMatches(subItem.description, fields['fields.description'])
          : escapeHTML(subItem.description);

        return `<li>${nameHtml} — ${descHtml}</li>`;
      }).join('');

      html += `<ul>${subItemsHtml}</ul>`;
    }

    li.innerHTML = html;
    resultsList.appendChild(li);
  });
}


function groupMatchesByKey(matches) {
  const result = {};
  for (const match of matches) {
    if (!result[match.key]) result[match.key] = [];
    result[match.key].push(...match.indices);
  }
  return result;
}

function highlightMatches(text, indices, {
  // Treat gaps made only of these chars as part of the same phrase
  gapRegex = /^[\s\-\u00A0_/.,:;|]+$/, // spaces, NBSP, dash, underscore, common punct
  // Also merge if the gap is tiny, even if it has other chars (tweak as you like)
  maxGap = 0,
} = {}) {
  if (!indices || !indices.length) return escapeHTML(text);

  // 1) Sort
  indices = indices.slice().sort((a, b) => a[0] - b[0]);

  // 2) Merge overlapping or touching ranges first
  const merged = [];
  let [s, e] = indices[0];
  for (let i = 1; i < indices.length; i++) {
    const [ns, ne] = indices[i];
    if (ns <= e + 1) {
      e = Math.max(e, ne);
    } else {
      merged.push([s, e]);
      [s, e] = [ns, ne];
    }
  }
  merged.push([s, e]);

  // 3) Phrase-coalesce: if the gap between consecutive merged ranges
  //    is only whitespace/punct (or very small), join them into one span.
  const phrases = [];
  let curStart = merged[0][0];
  let curEnd   = merged[0][1];

  for (let i = 1; i < merged.length; i++) {
    const [ns, ne] = merged[i];
    const gapText = text.slice(curEnd + 1, ns);      // characters between spans
    const smallGap = ns - curEnd - 1 <= maxGap;      // optional size rule
    if (gapRegex.test(gapText) || smallGap) {
      // extend current phrase to include the gap and next span
      curEnd = ne;
    } else {
      phrases.push([curStart, curEnd]);
      curStart = ns;
      curEnd   = ne;
    }
  }
  phrases.push([curStart, curEnd]);

  // 4) Render with phrase spans
  let out = '';
  let last = 0;
  for (const [ps, pe] of phrases) {
    out += escapeHTML(text.slice(last, ps));
    out += `<mark>${escapeHTML(text.slice(ps, pe + 1))}</mark>`;
    last = pe + 1;
  }
  out += escapeHTML(text.slice(last));
  return out;
}


function escapeHTML(str) {
  return String(str ?? '').replace(/[&<>"']/g, m => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[m]);
}
