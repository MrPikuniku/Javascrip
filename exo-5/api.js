const fetch = require('node-fetch');

async function getArticle(chemin) {
  const UrlBase = 'https://dev.to/api/articles';
  const url = `${UrlBase}${chemin}`;

  try {
    const resp = await fetch(url);
    if (!resp.ok) {
      throw new Error(`Erreur ${resp.status}: 'article peut pas être récupéré.`);
    }
    const article = await resp.json();
    return article;
  } catch (error) {
    throw new Error(`Erreur en récupérant l'article: ${error.message}`);
  }
}

async function main() {
    try {
      const article = await getArticle('/ben/introducing-some-awful-new-dev-tags-ne1');
      console.log('Voici le Titre du vrai article:', article.title);
    } catch (error) {
        console.error('Erreur lors de la récupération du vrai article:', error.message);
      } 


      try {
        await getArticle('/not-existing/false-article');
      } catch (error) {
        console.error('Erreur lors de la récupération du faux article:', error.message);
      }
    }

    main()
    .then(() => {
      console.log("*** Le script s'est correctement exécuté ! ***");
      process.exit(0);
    })

    .catch(error => {
        console.error('Erreur inattendue:', error);
        process.exit(1);
      });


