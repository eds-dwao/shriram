export default function decorate(block) {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  const divEl = document.createElement('div');
  divEl.setAttribute('_ngcontent-serverapp-c284380868', '');
  divEl.setAttribute('class', 'header__top superWeb');

    const divEl2 = document.createElement('div');
    divEl2.setAttribute('_ngcontent-serverapp-c284380868', '');
    divEl2.setAttribute('class', 'container');

      const divEl3 = document.createElement('div');
      divEl3.setAttribute('_ngcontent-serverapp-c284380868', '');
      divEl3.setAttribute('class', 'row align-items-center');

        const divEl4 = document.createElement('div');
        divEl4.setAttribute('_ngcontent-serverapp-c284380868', '');
        divEl4.setAttribute('class', 'col-7 col-md-4');

          const divEl5 = document.createElement('div');
          divEl5.setAttribute('_ngcontent-serverapp-c284380868', '');
          divEl5.setAttribute('class', 'header__left');

            const buttonEl = document.createElement('button');
            buttonEl.setAttribute('_ngcontent-serverapp-c284380868', '');
            buttonEl.setAttribute('hamburger', 'menu');
            buttonEl.setAttribute('aria-label', 'hamburger');
            buttonEl.setAttribute('id', 'js-hamburger');
            buttonEl.setAttribute('class', 'navigation__menuMobile js-hamburger');
          divEl5.append(buttonEl);

            const divEl6 = document.createElement('div');
            divEl6.setAttribute('_ngcontent-serverapp-c284380868', '');
            divEl6.setAttribute('class', 'header__logo');

              const aEl = document.createElement('a');
              aEl.setAttribute('_ngcontent-serverapp-c284380868', '');
              aEl.setAttribute('title', 'Shriram Finance');
              aEl.setAttribute('id', 'logo_click');
              aEl.setAttribute('href', '/');

                const pictureEl = document.createElement('picture');
                pictureEl.setAttribute('_ngcontent-serverapp-c284380868', '');
                pictureEl.setAttribute('class', 'campaign-logo');

                  const imgEl = document.createElement('img');
                  imgEl.setAttribute('_ngcontent-serverapp-c284380868', '');
                  imgEl.setAttribute('alt', 'shriram-finance');
                  imgEl.setAttribute('id', 'shriram_finance');
                  imgEl.setAttribute('width', '199');
                  imgEl.setAttribute('height', '64');
                  imgEl.setAttribute('fetchpriority', 'high');
                  imgEl.setAttribute('loading', 'eager');
                  imgEl.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-fe/assets/images/sw-logo.svg');
                pictureEl.append(imgEl);
              aEl.append(pictureEl);
            divEl6.append(aEl);
          divEl5.append(divEl6);
        divEl4.append(divEl5);
      divEl3.append(divEl4);

        const divEl7 = document.createElement('div');
        divEl7.setAttribute('_ngcontent-serverapp-c284380868', '');
        divEl7.setAttribute('class', 'col-5 col-md-8');

          const ulEl = document.createElement('ul');
          ulEl.setAttribute('_ngcontent-serverapp-c284380868', '');
          ulEl.setAttribute('class', 'header__right');

            const liEl = document.createElement('li');
            liEl.setAttribute('_ngcontent-serverapp-c284380868', '');
            liEl.setAttribute('class', 'd-none d-md-block');

              const divEl8 = document.createElement('div');
              divEl8.setAttribute('_ngcontent-serverapp-c284380868', '');
              divEl8.setAttribute('id', 'topnavpricelist');
              divEl8.setAttribute('class', 'price__list');

                const ulEl2 = document.createElement('ul');
                ulEl2.setAttribute('_ngcontent-serverapp-c284380868', '');
                ulEl2.setAttribute('class', 'price__listBox');

                  const liEl2 = document.createElement('li');
                  liEl2.setAttribute('_ngcontent-serverapp-c284380868', '');

                    const divEl9 = document.createElement('div');
                    divEl9.setAttribute('_ngcontent-serverapp-c284380868', '');
                    divEl9.setAttribute('class', 'price__listContent');

                      const imgEl2 = document.createElement('img');
                      imgEl2.setAttribute('_ngcontent-serverapp-c284380868', '');
                      imgEl2.setAttribute('width', '24');
                      imgEl2.setAttribute('height', '24');
                      imgEl2.setAttribute('class', 'price__listImage');
                      imgEl2.setAttribute('alt', 'Gold');
                      imgEl2.setAttribute('loading', 'lazy');
                      imgEl2.setAttribute('fetchpriority', 'auto');
                      imgEl2.setAttribute('ng-img', 'true');
                      imgEl2.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-08/gold-rate-icon.svg');
                    divEl9.append(imgEl2);

                      const divEl10 = document.createElement('div');
                      divEl10.setAttribute('_ngcontent-serverapp-c284380868', '');
                      divEl10.setAttribute('class', 'price__listInner');

                        const spanEl = document.createElement('span');
                        spanEl.setAttribute('_ngcontent-serverapp-c284380868', '');
                        spanEl.setAttribute('class', 'price__listHeading');

                          const pEl = document.createElement('p');

                            const spanEl2 = document.createElement('span');
                            spanEl2.textContent = '| 24k (999 Purity)';
                          pEl.append(spanEl2);
                        spanEl.append(pEl);
                      divEl10.append(spanEl);

                        const pEl2 = document.createElement('p');
                        pEl2.setAttribute('_ngcontent-serverapp-c284380868', '');
                        pEl2.setAttribute('class', 'price__listText');
                        pEl2.textContent = 'N/A';
                      divEl10.append(pEl2);
                    divEl9.append(divEl10);
                  liEl2.append(divEl9);
                ulEl2.append(liEl2);

                  const liEl3 = document.createElement('li');
                  liEl3.setAttribute('_ngcontent-serverapp-c284380868', '');

                    const divEl11 = document.createElement('div');
                    divEl11.setAttribute('_ngcontent-serverapp-c284380868', '');
                    divEl11.setAttribute('class', 'price__listContent');

                      const imgEl3 = document.createElement('img');
                      imgEl3.setAttribute('_ngcontent-serverapp-c284380868', '');
                      imgEl3.setAttribute('width', '24');
                      imgEl3.setAttribute('height', '24');
                      imgEl3.setAttribute('class', 'price__listImage');
                      imgEl3.setAttribute('alt', 'Silver');
                      imgEl3.setAttribute('loading', 'lazy');
                      imgEl3.setAttribute('fetchpriority', 'auto');
                      imgEl3.setAttribute('ng-img', 'true');
                      imgEl3.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-08/silver-rate-icon.svg');
                    divEl11.append(imgEl3);

                      const divEl12 = document.createElement('div');
                      divEl12.setAttribute('_ngcontent-serverapp-c284380868', '');
                      divEl12.setAttribute('class', 'price__listInner');

                        const spanEl3 = document.createElement('span');
                        spanEl3.setAttribute('_ngcontent-serverapp-c284380868', '');
                        spanEl3.setAttribute('class', 'price__listHeading');

                          const pEl3 = document.createElement('p');

                            const spanEl4 = document.createElement('span');
                            spanEl4.textContent = '| 24k (999 Purity)';
                          pEl3.append(spanEl4);
                        spanEl3.append(pEl3);
                      divEl12.append(spanEl3);

                        const pEl4 = document.createElement('p');
                        pEl4.setAttribute('_ngcontent-serverapp-c284380868', '');
                        pEl4.setAttribute('class', 'price__listText');
                        pEl4.textContent = 'N/A';
                      divEl12.append(pEl4);
                    divEl11.append(divEl12);
                  liEl3.append(divEl11);
                ulEl2.append(liEl3);
              divEl8.append(ulEl2);
            liEl.append(divEl8);
          ulEl.append(liEl);

            const liEl4 = document.createElement('li');
            liEl4.setAttribute('_ngcontent-serverapp-c284380868', '');

              const buttonEl2 = document.createElement('button');
              buttonEl2.setAttribute('_ngcontent-serverapp-c284380868', '');
              buttonEl2.setAttribute('type', 'button');
              buttonEl2.setAttribute('title', 'Notification');
              buttonEl2.setAttribute('notification-click', 'notes');
              buttonEl2.setAttribute('id', 'notification_icon');
              buttonEl2.setAttribute('class', 'header__notification');

                const pictureEl2 = document.createElement('picture');
                pictureEl2.setAttribute('_ngcontent-serverapp-c284380868', '');
                pictureEl2.setAttribute('aria-label', 'Notification Icon');

                  const imgEl4 = document.createElement('img');
                  imgEl4.setAttribute('_ngcontent-serverapp-c284380868', '');
                  imgEl4.setAttribute('width', '24');
                  imgEl4.setAttribute('height', '24');
                  imgEl4.setAttribute('alt', 'Notification');
                  imgEl4.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-fe/assets/images/superweb/notification.svg');
                pictureEl2.append(imgEl4);
              buttonEl2.append(pictureEl2);

                const spanEl5 = document.createElement('span');
                spanEl5.setAttribute('_ngcontent-serverapp-c284380868', '');
                spanEl5.setAttribute('class', 'header__count');
                spanEl5.textContent = '5';
              buttonEl2.append(spanEl5);
            liEl4.append(buttonEl2);
          ulEl.append(liEl4);

            const liEl5 = document.createElement('li');
            liEl5.setAttribute('_ngcontent-serverapp-c284380868', '');
            liEl5.setAttribute('class', 'd-none d-xl-block');

              const aEl2 = document.createElement('a');
              aEl2.setAttribute('_ngcontent-serverapp-c284380868', '');
              aEl2.setAttribute('target', '_blank');
              aEl2.setAttribute('class', 'header__login button button--orange relative header--button');
              aEl2.setAttribute('href', 'https://secure.shriramfinance.in/');
              aEl2.setAttribute('title', 'Register / Login');
              aEl2.setAttribute('id', 'top_nav_register__login');

                const spanEl6 = document.createElement('span');
                spanEl6.setAttribute('_ngcontent-serverapp-c284380868', '');
                spanEl6.setAttribute('class', 'header__profile');

                  const spanEl7 = document.createElement('span');
                  spanEl7.setAttribute('_ngcontent-serverapp-c284380868', '');
                  spanEl7.setAttribute('class', 'sr-only');
                  spanEl7.textContent = 'Profile Icon';
                spanEl6.append(spanEl7);
              aEl2.append(spanEl6);

                const spanEl8 = document.createElement('span');
                spanEl8.setAttribute('_ngcontent-serverapp-c284380868', '');
                spanEl8.setAttribute('class', 'd-none d-md-block header__text');
                spanEl8.textContent = 'Register / Login';
              aEl2.append(spanEl8);
            liEl5.append(aEl2);
          ulEl.append(liEl5);
        divEl7.append(ulEl);
      divEl3.append(divEl7);
    divEl2.append(divEl3);
  divEl.append(divEl2);
  container.append(divEl);

  const divEl13 = document.createElement('div');
  divEl13.setAttribute('_ngcontent-serverapp-c284380868', '');
  divEl13.setAttribute('role', 'navigation');
  divEl13.setAttribute('class', 'header__bottom header__bottom--listMenu superWeb');

    const divEl14 = document.createElement('div');
    divEl14.setAttribute('_ngcontent-serverapp-c284380868', '');
    divEl14.setAttribute('class', 'container');

      const navEl = document.createElement('nav');
      navEl.setAttribute('_ngcontent-serverapp-c284380868', '');
      navEl.setAttribute('navigation', 'nav');
      navEl.setAttribute('id', 'header-nav');
      navEl.setAttribute('aria-label', 'Global Header Menu');
      navEl.setAttribute('class', 'navbar navbar--main');

        const ulEl3 = document.createElement('ul');
        ulEl3.setAttribute('_ngcontent-serverapp-c284380868', '');
        ulEl3.setAttribute('role', 'list');
        ulEl3.setAttribute('aria-label', 'Navigation Main Menu');
        ulEl3.setAttribute('class', 'navbar__list d-none d-xl-flex justify-content-xl-between');

          const liEl6 = document.createElement('li');
          liEl6.setAttribute('_ngcontent-serverapp-c284380868', '');
          liEl6.setAttribute('menu-link', 'link');
          liEl6.setAttribute('class', 'js-navbar js-heading app-link-flat dynamicMenu_0 is_bbps_enabled');
          liEl6.setAttribute('ngh', '0');

            const aEl3 = document.createElement('a');
            aEl3.setAttribute('title', '');
            aEl3.setAttribute('id', 'main_nav_investments');
            aEl3.setAttribute('href', '/investments');
            aEl3.textContent = 'Investments';
          liEl6.append(aEl3);
        ulEl3.append(liEl6);

          const liEl7 = document.createElement('li');
          liEl7.setAttribute('_ngcontent-serverapp-c284380868', '');
          liEl7.setAttribute('menu-link', 'link');
          liEl7.setAttribute('class', 'js-navbar js-heading app-link-flat dynamicMenu_1 navbar-largeMenu');
          liEl7.setAttribute('ngh', '0');

            const aEl4 = document.createElement('a');
            aEl4.setAttribute('title', '');
            aEl4.setAttribute('id', 'main_nav_loans');
            aEl4.setAttribute('href', '/loans');
            aEl4.textContent = 'Loans';
          liEl7.append(aEl4);
        ulEl3.append(liEl7);

          const liEl8 = document.createElement('li');
          liEl8.setAttribute('_ngcontent-serverapp-c284380868', '');
          liEl8.setAttribute('menu-link', 'link');
          liEl8.setAttribute('class', 'js-navbar js-heading app-link-flat dynamicMenu_2');
          liEl8.setAttribute('ngh', '1');

            const aEl5 = document.createElement('a');
            aEl5.setAttribute('title', '');
            aEl5.setAttribute('href', 'https://auto.shriramfinance.in');
            aEl5.setAttribute('target', '_blank');
            aEl5.setAttribute('id', 'main_nav_two_wheeler_marketplace');
            aEl5.textContent = 'Two Wheeler Marketplace';
          liEl8.append(aEl5);
        ulEl3.append(liEl8);

          const liEl9 = document.createElement('li');
          liEl9.setAttribute('_ngcontent-serverapp-c284380868', '');
          liEl9.setAttribute('menu-link', 'link');
          liEl9.setAttribute('class', 'js-navbar js-heading app-link-flat dynamicMenu_3 is_bbps_enabled');
          liEl9.setAttribute('ngh', '2');

            const spanEl9 = document.createElement('span');
            spanEl9.textContent = 'Payments';
          liEl9.append(spanEl9);
        ulEl3.append(liEl9);

          const liEl10 = document.createElement('li');
          liEl10.setAttribute('_ngcontent-serverapp-c284380868', '');
          liEl10.setAttribute('menu-link', 'link');
          liEl10.setAttribute('class', 'js-navbar js-heading app-link-flat dynamicMenu_4 navbar-largeMenu');
          liEl10.setAttribute('ngh', '0');

            const aEl6 = document.createElement('a');
            aEl6.setAttribute('title', '');
            aEl6.setAttribute('id', 'main_nav_insurance');
            aEl6.setAttribute('href', '/insurance');
            aEl6.textContent = 'Insurance';
          liEl10.append(aEl6);
        ulEl3.append(liEl10);

          const liEl11 = document.createElement('li');
          liEl11.setAttribute('_ngcontent-serverapp-c284380868', '');
          liEl11.setAttribute('menu-link', 'link');
          liEl11.setAttribute('class', 'js-navbar js-heading app-link-flat no--subMenu dynamicMenu_5 no-arrow');
          liEl11.setAttribute('ngh', '0');

            const aEl7 = document.createElement('a');
            aEl7.setAttribute('title', '');
            aEl7.setAttribute('id', 'main_nav_rewards');
            aEl7.setAttribute('href', '/rewards');
            aEl7.textContent = 'Rewards';
          liEl11.append(aEl7);
        ulEl3.append(liEl11);

          const liEl12 = document.createElement('li');
          liEl12.setAttribute('_ngcontent-serverapp-c284380868', '');
          liEl12.setAttribute('menu-link', 'link');
          liEl12.setAttribute('class', 'js-navbar js-heading app-link-flat dynamicMenu_6');
          liEl12.setAttribute('ngh', '0');

            const aEl8 = document.createElement('a');
            aEl8.setAttribute('title', '');
            aEl8.setAttribute('id', 'main_nav_calculators');
            aEl8.setAttribute('href', '/calculator');
            aEl8.textContent = 'Calculators';
          liEl12.append(aEl8);
        ulEl3.append(liEl12);

          const liEl13 = document.createElement('li');
          liEl13.setAttribute('_ngcontent-serverapp-c284380868', '');
          liEl13.setAttribute('menu-link', 'link');
          liEl13.setAttribute('class', 'js-navbar js-heading app-link-flat dynamicMenu_7');
          liEl13.setAttribute('ngh', '2');

            const spanEl10 = document.createElement('span');
            spanEl10.textContent = 'Discover Shriram';
          liEl13.append(spanEl10);
        ulEl3.append(liEl13);

          const liEl14 = document.createElement('li');
          liEl14.setAttribute('_ngcontent-serverapp-c284380868', '');
          liEl14.setAttribute('menu-link', 'link');
          liEl14.setAttribute('class', 'js-navbar js-heading app-link-flat no--subMenu dynamicMenu_8 no-arrow');
          liEl14.setAttribute('ngh', '0');

            const aEl9 = document.createElement('a');
            aEl9.setAttribute('title', '');
            aEl9.setAttribute('id', 'main_nav_investors');
            aEl9.setAttribute('href', '/investors/financials');
            aEl9.textContent = 'Investors';
          liEl14.append(aEl9);
        ulEl3.append(liEl14);
      navEl.append(ulEl3);
    divEl14.append(navEl);
  divEl13.append(divEl14);
  container.append(divEl13);

  const divEl15 = document.createElement('div');
  divEl15.setAttribute('_ngcontent-serverapp-c284380868', '');
  divEl15.setAttribute('overlay', 'overlay');
  divEl15.setAttribute('id', 'header__overlay');
  divEl15.setAttribute('class', 'header__overlay');
  container.append(divEl15);


  block.textContent = '';
  block.append(container);
}