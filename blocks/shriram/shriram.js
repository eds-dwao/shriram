export default function decorate(block) {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  const divEl = document.createElement('div');
  divEl.setAttribute('_ngcontent-serverapp-c407820957', '');
  divEl.setAttribute('class', 'relative mobileNav__wrap');

    const divEl2 = document.createElement('div');
    divEl2.setAttribute('_ngcontent-serverapp-c407820957', '');
    divEl2.setAttribute('class', 'js-active');

      const ulEl = document.createElement('ul');
      ulEl.setAttribute('_ngcontent-serverapp-c407820957', '');
      ulEl.setAttribute('class', 'mobileNav__list js-mobileNavList');

        const liEl = document.createElement('li');
        liEl.setAttribute('_ngcontent-serverapp-c407820957', '');
        liEl.setAttribute('class', 'app-link-flat');
        liEl.setAttribute('ngh', '3');

          const aEl = document.createElement('a');
          aEl.setAttribute('title', 'Home');
          aEl.setAttribute('id', 'main_nav_mobile_app_menu_home');
          aEl.setAttribute('href', '/');

            const spanEl = document.createElement('span');
            spanEl.setAttribute('class', 'sr-only');
            spanEl.textContent = 'Home';
          aEl.append(spanEl);
        liEl.append(aEl);

          const divEl3 = document.createElement('div');
          divEl3.setAttribute('_ngcontent-serverapp-c407820957', '');
          divEl3.setAttribute('class', 'mobileNav__iconWrap mobileNavL1 js-menuCloseLink');

            const pictureEl = document.createElement('picture');
            pictureEl.setAttribute('_ngcontent-serverapp-c407820957', '');
            pictureEl.setAttribute('class', 'mobileNav__icon mobileNav__icon--one');

              const imgEl = document.createElement('img');
              imgEl.setAttribute('_ngcontent-serverapp-c407820957', '');
              imgEl.setAttribute('width', '24');
              imgEl.setAttribute('height', '24');
              imgEl.setAttribute('alt', 'Home');
              imgEl.setAttribute('loading', 'lazy');
              imgEl.setAttribute('fetchpriority', 'auto');
              imgEl.setAttribute('ng-img', 'true');
              imgEl.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-03/home.svg');
            pictureEl.append(imgEl);
          divEl3.append(pictureEl);

            const spanEl2 = document.createElement('span');
            spanEl2.setAttribute('_ngcontent-serverapp-c407820957', '');
            spanEl2.setAttribute('class', 'mobileNav__linkText');
            spanEl2.textContent = 'Home';
          divEl3.append(spanEl2);
        liEl.append(divEl3);
      ulEl.append(liEl);

        const liEl2 = document.createElement('li');
        liEl2.setAttribute('_ngcontent-serverapp-c407820957', '');
        liEl2.setAttribute('class', 'app-link-flat');
        liEl2.setAttribute('ngh', '3');

          const aEl2 = document.createElement('a');
          aEl2.setAttribute('title', 'Locator');
          aEl2.setAttribute('id', 'main_nav_mobile_app_menu_locator');
          aEl2.setAttribute('href', '/branch-locator');

            const spanEl3 = document.createElement('span');
            spanEl3.setAttribute('class', 'sr-only');
            spanEl3.textContent = 'Locator';
          aEl2.append(spanEl3);
        liEl2.append(aEl2);

          const divEl4 = document.createElement('div');
          divEl4.setAttribute('_ngcontent-serverapp-c407820957', '');
          divEl4.setAttribute('class', 'mobileNav__iconWrap mobileNavL1 js-menuCloseLink');

            const pictureEl2 = document.createElement('picture');
            pictureEl2.setAttribute('_ngcontent-serverapp-c407820957', '');
            pictureEl2.setAttribute('class', 'mobileNav__icon mobileNav__icon--one');

              const imgEl2 = document.createElement('img');
              imgEl2.setAttribute('_ngcontent-serverapp-c407820957', '');
              imgEl2.setAttribute('width', '24');
              imgEl2.setAttribute('height', '24');
              imgEl2.setAttribute('alt', 'Location');
              imgEl2.setAttribute('loading', 'lazy');
              imgEl2.setAttribute('fetchpriority', 'auto');
              imgEl2.setAttribute('ng-img', 'true');
              imgEl2.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-03/location.svg');
            pictureEl2.append(imgEl2);
          divEl4.append(pictureEl2);

            const spanEl4 = document.createElement('span');
            spanEl4.setAttribute('_ngcontent-serverapp-c407820957', '');
            spanEl4.setAttribute('class', 'mobileNav__linkText');
            spanEl4.textContent = 'Locator';
          divEl4.append(spanEl4);
        liEl2.append(divEl4);
      ulEl.append(liEl2);

        const liEl3 = document.createElement('li');
        liEl3.setAttribute('_ngcontent-serverapp-c407820957', '');
        liEl3.setAttribute('class', 'app-link-flat sub_menu');
        liEl3.setAttribute('ngh', '2');

          const spanEl5 = document.createElement('span');
          spanEl5.setAttribute('class', 'sr-only');
          spanEl5.textContent = 'Products';
        liEl3.append(spanEl5);

          const divEl5 = document.createElement('div');
          divEl5.setAttribute('_ngcontent-serverapp-c407820957', '');
          divEl5.setAttribute('class', 'mobileNav__iconWrap mobileNavL1 js-mobileNavsubMenu');

            const pictureEl3 = document.createElement('picture');
            pictureEl3.setAttribute('_ngcontent-serverapp-c407820957', '');
            pictureEl3.setAttribute('class', 'mobileNav__icon mobileNav__icon--one js-menuIcon');

              const imgEl3 = document.createElement('img');
              imgEl3.setAttribute('_ngcontent-serverapp-c407820957', '');
              imgEl3.setAttribute('width', '24');
              imgEl3.setAttribute('height', '24');
              imgEl3.setAttribute('alt', 'Menu');
              imgEl3.setAttribute('loading', 'lazy');
              imgEl3.setAttribute('fetchpriority', 'auto');
              imgEl3.setAttribute('ng-img', 'true');
              imgEl3.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-03/menu.svg');
            pictureEl3.append(imgEl3);
          divEl5.append(pictureEl3);

            const pictureEl4 = document.createElement('picture');
            pictureEl4.setAttribute('_ngcontent-serverapp-c407820957', '');
            pictureEl4.setAttribute('class', 'mobileNav__icon mobileNav__icon--two js-menuCloseIcon');

              const imgEl4 = document.createElement('img');
              imgEl4.setAttribute('_ngcontent-serverapp-c407820957', '');
              imgEl4.setAttribute('alt', 'Locator');
              imgEl4.setAttribute('width', '24');
              imgEl4.setAttribute('height', '24');
              imgEl4.setAttribute('loading', 'lazy');
              imgEl4.setAttribute('fetchpriority', 'auto');
              imgEl4.setAttribute('ng-img', 'true');
              imgEl4.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-fe/assets/icons/close-circle.svg');
            pictureEl4.append(imgEl4);
          divEl5.append(pictureEl4);

            const spanEl6 = document.createElement('span');
            spanEl6.setAttribute('_ngcontent-serverapp-c407820957', '');
            spanEl6.setAttribute('class', 'mobileNav__linkText');
            spanEl6.textContent = 'Products';
          divEl5.append(spanEl6);
        liEl3.append(divEl5);

          const ulEl2 = document.createElement('ul');
          ulEl2.setAttribute('_ngcontent-serverapp-c407820957', '');
          ulEl2.setAttribute('class', 'mobileNav__roundList js-mobileRoundList');

            const liEl4 = document.createElement('li');
            liEl4.setAttribute('_ngcontent-serverapp-c407820957', '');
            liEl4.setAttribute('classes', 'mobileNav__iconWrap');
            liEl4.setAttribute('class', 'app-link-flat');
            liEl4.setAttribute('ngh', '3');

              const aEl3 = document.createElement('a');
              aEl3.setAttribute('title', 'Loans');
              aEl3.setAttribute('id', 'main_nav_mobile_app_menu_products_loans');
              aEl3.setAttribute('class', 'mobileNav__iconWrap');
              aEl3.setAttribute('href', '/loans');

                const spanEl7 = document.createElement('span');
                spanEl7.setAttribute('class', 'sr-only');
                spanEl7.textContent = 'Loans';
              aEl3.append(spanEl7);
            liEl4.append(aEl3);

              const divEl6 = document.createElement('div');
              divEl6.setAttribute('_ngcontent-serverapp-c407820957', '');
              divEl6.setAttribute('class', 'mobileNav__spacing');

                const pictureEl5 = document.createElement('picture');
                pictureEl5.setAttribute('_ngcontent-serverapp-c407820957', '');
                pictureEl5.setAttribute('class', 'mobileNav__icon');

                  const imgEl5 = document.createElement('img');
                  imgEl5.setAttribute('_ngcontent-serverapp-c407820957', '');
                  imgEl5.setAttribute('width', '24');
                  imgEl5.setAttribute('height', '24');
                  imgEl5.setAttribute('alt', 'Loans');
                  imgEl5.setAttribute('loading', 'lazy');
                  imgEl5.setAttribute('fetchpriority', 'auto');
                  imgEl5.setAttribute('ng-img', 'true');
                  imgEl5.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-03/money.svg');
                pictureEl5.append(imgEl5);
              divEl6.append(pictureEl5);

                const spanEl8 = document.createElement('span');
                spanEl8.setAttribute('_ngcontent-serverapp-c407820957', '');
                spanEl8.setAttribute('class', 'mobileNav__linkText');
                spanEl8.textContent = 'Loans';
              divEl6.append(spanEl8);
            liEl4.append(divEl6);
          ulEl2.append(liEl4);

            const liEl5 = document.createElement('li');
            liEl5.setAttribute('_ngcontent-serverapp-c407820957', '');
            liEl5.setAttribute('classes', 'mobileNav__iconWrap');
            liEl5.setAttribute('class', 'app-link-flat');
            liEl5.setAttribute('ngh', '3');

              const aEl4 = document.createElement('a');
              aEl4.setAttribute('title', 'Insurance');
              aEl4.setAttribute('id', 'main_nav_mobile_app_menu_products_insurance');
              aEl4.setAttribute('class', 'mobileNav__iconWrap');
              aEl4.setAttribute('href', '/insurance');

                const spanEl9 = document.createElement('span');
                spanEl9.setAttribute('class', 'sr-only');
                spanEl9.textContent = 'Insurance';
              aEl4.append(spanEl9);
            liEl5.append(aEl4);

              const divEl7 = document.createElement('div');
              divEl7.setAttribute('_ngcontent-serverapp-c407820957', '');
              divEl7.setAttribute('class', 'mobileNav__spacing');

                const pictureEl6 = document.createElement('picture');
                pictureEl6.setAttribute('_ngcontent-serverapp-c407820957', '');
                pictureEl6.setAttribute('class', 'mobileNav__icon');

                  const imgEl6 = document.createElement('img');
                  imgEl6.setAttribute('_ngcontent-serverapp-c407820957', '');
                  imgEl6.setAttribute('width', '24');
                  imgEl6.setAttribute('height', '24');
                  imgEl6.setAttribute('alt', 'insurance');
                  imgEl6.setAttribute('loading', 'lazy');
                  imgEl6.setAttribute('fetchpriority', 'auto');
                  imgEl6.setAttribute('ng-img', 'true');
                  imgEl6.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-03/insurance.svg');
                pictureEl6.append(imgEl6);
              divEl7.append(pictureEl6);

                const spanEl10 = document.createElement('span');
                spanEl10.setAttribute('_ngcontent-serverapp-c407820957', '');
                spanEl10.setAttribute('class', 'mobileNav__linkText');
                spanEl10.textContent = 'Insurance';
              divEl7.append(spanEl10);
            liEl5.append(divEl7);
          ulEl2.append(liEl5);

            const liEl6 = document.createElement('li');
            liEl6.setAttribute('_ngcontent-serverapp-c407820957', '');
            liEl6.setAttribute('classes', 'mobileNav__iconWrap');
            liEl6.setAttribute('class', 'app-link-flat');
            liEl6.setAttribute('ngh', '3');

              const aEl5 = document.createElement('a');
              aEl5.setAttribute('title', 'Invest');
              aEl5.setAttribute('id', 'main_nav_mobile_app_menu_products_invest');
              aEl5.setAttribute('class', 'mobileNav__iconWrap');
              aEl5.setAttribute('href', '/investments');

                const spanEl11 = document.createElement('span');
                spanEl11.setAttribute('class', 'sr-only');
                spanEl11.textContent = 'Invest';
              aEl5.append(spanEl11);
            liEl6.append(aEl5);

              const divEl8 = document.createElement('div');
              divEl8.setAttribute('_ngcontent-serverapp-c407820957', '');
              divEl8.setAttribute('class', 'mobileNav__spacing');

                const pictureEl7 = document.createElement('picture');
                pictureEl7.setAttribute('_ngcontent-serverapp-c407820957', '');
                pictureEl7.setAttribute('class', 'mobileNav__icon');

                  const imgEl7 = document.createElement('img');
                  imgEl7.setAttribute('_ngcontent-serverapp-c407820957', '');
                  imgEl7.setAttribute('width', '24');
                  imgEl7.setAttribute('height', '24');
                  imgEl7.setAttribute('alt', 'invest');
                  imgEl7.setAttribute('loading', 'lazy');
                  imgEl7.setAttribute('fetchpriority', 'auto');
                  imgEl7.setAttribute('ng-img', 'true');
                  imgEl7.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-03/invest.svg');
                pictureEl7.append(imgEl7);
              divEl8.append(pictureEl7);

                const spanEl12 = document.createElement('span');
                spanEl12.setAttribute('_ngcontent-serverapp-c407820957', '');
                spanEl12.setAttribute('class', 'mobileNav__linkText');
                spanEl12.textContent = 'Invest';
              divEl8.append(spanEl12);
            liEl6.append(divEl8);
          ulEl2.append(liEl6);
        liEl3.append(ulEl2);
      ulEl.append(liEl3);

        const liEl7 = document.createElement('li');
        liEl7.setAttribute('_ngcontent-serverapp-c407820957', '');
        liEl7.setAttribute('class', 'app-link-flat');
        liEl7.setAttribute('ngh', '3');

          const aEl6 = document.createElement('a');
          aEl6.setAttribute('title', 'Rewards');
          aEl6.setAttribute('id', 'main_nav_mobile_app_menu_rewards');
          aEl6.setAttribute('href', '/rewards');

            const spanEl13 = document.createElement('span');
            spanEl13.setAttribute('class', 'sr-only');
            spanEl13.textContent = 'Rewards';
          aEl6.append(spanEl13);
        liEl7.append(aEl6);

          const divEl9 = document.createElement('div');
          divEl9.setAttribute('_ngcontent-serverapp-c407820957', '');
          divEl9.setAttribute('class', 'mobileNav__iconWrap mobileNavL1 js-menuCloseLink');

            const pictureEl8 = document.createElement('picture');
            pictureEl8.setAttribute('_ngcontent-serverapp-c407820957', '');
            pictureEl8.setAttribute('class', 'mobileNav__icon mobileNav__icon--one');

              const imgEl8 = document.createElement('img');
              imgEl8.setAttribute('_ngcontent-serverapp-c407820957', '');
              imgEl8.setAttribute('width', '24');
              imgEl8.setAttribute('height', '24');
              imgEl8.setAttribute('alt', 'reward');
              imgEl8.setAttribute('loading', 'lazy');
              imgEl8.setAttribute('fetchpriority', 'auto');
              imgEl8.setAttribute('ng-img', 'true');
              imgEl8.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-03/reward.svg');
            pictureEl8.append(imgEl8);
          divEl9.append(pictureEl8);

            const spanEl14 = document.createElement('span');
            spanEl14.setAttribute('_ngcontent-serverapp-c407820957', '');
            spanEl14.setAttribute('class', 'mobileNav__linkText');
            spanEl14.textContent = 'Rewards';
          divEl9.append(spanEl14);
        liEl7.append(divEl9);
      ulEl.append(liEl7);

        const liEl8 = document.createElement('li');
        liEl8.setAttribute('_ngcontent-serverapp-c407820957', '');
        liEl8.setAttribute('class', 'app-link-flat');
        liEl8.setAttribute('ngh', '4');

          const aEl7 = document.createElement('a');
          aEl7.setAttribute('title', 'My Account	');
          aEl7.setAttribute('href', 'https://secure.shriramfinance.in/');
          aEl7.setAttribute('target', '_blank');
          aEl7.setAttribute('id', 'main_nav_mobile_app_menu_my_account');

            const spanEl15 = document.createElement('span');
            spanEl15.setAttribute('class', 'sr-only');
            spanEl15.textContent = 'My Account';
          aEl7.append(spanEl15);
        liEl8.append(aEl7);

          const divEl10 = document.createElement('div');
          divEl10.setAttribute('_ngcontent-serverapp-c407820957', '');
          divEl10.setAttribute('class', 'mobileNav__iconWrap mobileNavL1 js-menuCloseLink');

            const pictureEl9 = document.createElement('picture');
            pictureEl9.setAttribute('_ngcontent-serverapp-c407820957', '');
            pictureEl9.setAttribute('class', 'mobileNav__icon mobileNav__icon--one');

              const imgEl9 = document.createElement('img');
              imgEl9.setAttribute('_ngcontent-serverapp-c407820957', '');
              imgEl9.setAttribute('width', '24');
              imgEl9.setAttribute('height', '24');
              imgEl9.setAttribute('alt', 'my-accounts');
              imgEl9.setAttribute('loading', 'lazy');
              imgEl9.setAttribute('fetchpriority', 'auto');
              imgEl9.setAttribute('ng-img', 'true');
              imgEl9.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-03/setting.svg');
            pictureEl9.append(imgEl9);
          divEl10.append(pictureEl9);

            const spanEl16 = document.createElement('span');
            spanEl16.setAttribute('_ngcontent-serverapp-c407820957', '');
            spanEl16.setAttribute('class', 'mobileNav__linkText');
            spanEl16.textContent = 'My Account';
          divEl10.append(spanEl16);
        liEl8.append(divEl10);
      ulEl.append(liEl8);
    divEl2.append(ulEl);
  divEl.append(divEl2);

    const spanEl17 = document.createElement('span');
    spanEl17.setAttribute('_ngcontent-serverapp-c407820957', '');
    spanEl17.setAttribute('class', 'mobileNav__activeState js-menuActive');

      const spanEl18 = document.createElement('span');
      spanEl18.setAttribute('_ngcontent-serverapp-c407820957', '');
      spanEl18.setAttribute('class', 'sr-only');
      spanEl18.textContent = 'active';
    spanEl17.append(spanEl18);
  divEl.append(spanEl17);
  container.append(divEl);

  const divEl11 = document.createElement('div');
  divEl11.setAttribute('_ngcontent-serverapp-c407820957', '');
  divEl11.setAttribute('id', 'js-mobileNavOvelay');
  divEl11.setAttribute('class', 'mobileNav__overlay js-mobileNavOvelay');
  container.append(divEl11);


  block.textContent = '';
  block.append(container);
}