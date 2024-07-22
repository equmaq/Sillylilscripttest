  function replaceAvatars() {
    const images = document.querySelectorAll('img[src^="https://cdn.discordapp.com/avatars/"]');
    for (const image of images) {
      const url = new URL(image.src);
      url.searchParams.set('size', 512);
      image.src = url.toString();
    }
  }

  replaceAvatars();

  const observer = new MutationObserver(replaceAvatars);
  observer.observe(document.body, { childList: true, subtree: true });
