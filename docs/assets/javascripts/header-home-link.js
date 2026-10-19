// Make the header text a real home link, just like the StyleCore logo.
(function () {
  function linkHeaderTitles() {
    const logo = document.querySelector('a.md-header__button.md-logo[href]');
    if (!logo) return;

    // Material uses a site title and (sometimes) a scrolled page title.
    // Link both without changing their layout or the logo's own behavior.
    document.querySelectorAll('.md-header__title .md-header__topic').forEach((topic) => {
      if (topic.querySelector('.sc-header-home-link')) return;
      const label = topic.querySelector('.md-ellipsis');
      if (!label) return;

      const link = document.createElement('a');
      link.className = 'sc-header-home-link';
      link.href = logo.href;
      link.setAttribute('aria-label', 'Go to StyleCore Docs home');
      label.parentNode.insertBefore(link, label);
      link.appendChild(label);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', linkHeaderTitles);
  } else {
    linkHeaderTitles();
  }
  // Re-run after MkDocs Material's instant navigation updates the page.
  if (typeof document$ !== 'undefined' && document$.subscribe) {
    document$.subscribe(linkHeaderTitles);
  }
})();
