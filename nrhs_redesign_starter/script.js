/* Loads the preserved school markup separately so the redesign files stay manageable. */
(async function () {
  const mount = document.getElementById('school-content');
  if (!mount) return;

  try {
    const response = await fetch('./school-content.html');
    if (!response.ok) throw new Error(`Could not load school-content.html (${response.status})`);
    mount.innerHTML = await response.text();

    // Improve basic behavior for links and images after inserting the preserved markup.
    mount.querySelectorAll('a[href]').forEach((link) => {
      const href = link.getAttribute('href') || '';
      if (/^https?:\/\//i.test(href) && !link.hasAttribute('target')) {
        try {
          const url = new URL(href);
          if (url.hostname !== window.location.hostname) {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
          }
        } catch (_) {}
      }
    });

    mount.querySelectorAll('img').forEach((img) => {
      if (!img.getAttribute('src') && img.dataset.src) img.src = img.dataset.src;
      img.loading = img.loading || 'lazy';
    });

    const loading = mount.querySelector('.loading-message');
    if (loading) loading.remove();
  } catch (error) {
    mount.innerHTML = '<section class="load-error"><h1>Content could not be loaded</h1><p>Make sure <code>school-content.html</code> is in the same folder as <code>index.html</code>, then open the site through GitHub Pages or a local web server.</p></section>';
    console.error(error);
  }
})();
