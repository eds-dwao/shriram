export default function decorate(block) {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  const divEl = document.createElement('div');
  divEl.setAttribute('_ngcontent-serverapp-c1989808595', '');

    const scriptEl = document.createElement('script');
    scriptEl.setAttribute('type', 'application/ld+json');
    scriptEl.textContent = '{"@context":"https://schema.org/","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.shriramfinance.in"},{"@type":"ListItem","position":2,"name":"Articles","item":"https://www.shriramfinance.in/articles"},{"@type":"ListItem","position":3,"name":"10 Best Bikes Under ₹1 Lakh for the Mileage-Conscious Indian Bikers","item":"https://www.shriramfinance.in/article-10-best-bikes-under-rs1-lakh-for-the-mileage-conscious-indian-bikers"}]}';
  divEl.append(scriptEl);
  container.append(divEl);

  const divEl2 = document.createElement('div');
  divEl2.setAttribute('_ngcontent-serverapp-c1989808595', '');
  divEl2.setAttribute('class', 'container');

    const divEl3 = document.createElement('div');
    divEl3.setAttribute('_ngcontent-serverapp-c1989808595', '');
    divEl3.setAttribute('class', 'relative');

      const ulEl = document.createElement('ul');
      ulEl.setAttribute('_ngcontent-serverapp-c1989808595', '');
      ulEl.setAttribute('aria-label', 'breadcrumb');
      ulEl.setAttribute('class', 'breadcrumbs');

        const liEl = document.createElement('li');
        liEl.setAttribute('_ngcontent-serverapp-c1989808595', '');

          const aEl = document.createElement('a');
          aEl.setAttribute('_ngcontent-serverapp-c1989808595', '');
          aEl.setAttribute('title', 'Home');
          aEl.setAttribute('id', 'breadcrum_home');
          aEl.setAttribute('href', '/');
          aEl.textContent = 'Home';
        liEl.append(aEl);
      ulEl.append(liEl);

        const liEl2 = document.createElement('li');
        liEl2.setAttribute('_ngcontent-serverapp-c1989808595', '');

          const aEl2 = document.createElement('a');
          aEl2.setAttribute('_ngcontent-serverapp-c1989808595', '');
          aEl2.setAttribute('title', 'Articles');
          aEl2.setAttribute('id', 'breadcrum_articles');
          aEl2.setAttribute('href', '/articles');
          aEl2.textContent = 'Articles';
        liEl2.append(aEl2);
      ulEl.append(liEl2);

        const liEl3 = document.createElement('li');
        liEl3.setAttribute('_ngcontent-serverapp-c1989808595', '');

          const spanEl = document.createElement('span');
          spanEl.setAttribute('_ngcontent-serverapp-c1989808595', '');
          spanEl.setAttribute('title', '10 Best Bikes Under ₹1 Lakh for the Mileage-Conscious Indian Bikers');
          spanEl.setAttribute('id', 'breadcrum_10_best_bikes_under_₹1_lakh_for_the_mileage_conscious_indian_bikers');
          spanEl.textContent = '10 Best Bikes Under ₹1 Lakh for the Mileage-Conscious Indian Bikers';
        liEl3.append(spanEl);
      ulEl.append(liEl3);
    divEl3.append(ulEl);
  divEl2.append(divEl3);
  container.append(divEl2);


  block.textContent = '';
  block.append(container);
}