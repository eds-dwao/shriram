export default function decorate(block) {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  const sectionEl = document.createElement('section');
  sectionEl.setAttribute('_ngcontent-serverapp-c2882330755', '');
  sectionEl.setAttribute('class', 'sectionSpacer bg-light-grey-sw pb-0');

    const divEl = document.createElement('div');
    divEl.setAttribute('_ngcontent-serverapp-c2882330755', '');
    divEl.setAttribute('class', 'container');

      const divEl2 = document.createElement('div');
      divEl2.setAttribute('_ngcontent-serverapp-c2882330755', '');
      divEl2.setAttribute('class', 'row row-space row-gridSpace');

        const divEl3 = document.createElement('div');
        divEl3.setAttribute('_ngcontent-serverapp-c2882330755', '');
        divEl3.setAttribute('class', 'col-lg-4');

          const appiconcardsmallEl = document.createElement('appiconcardsmall');
          appiconcardsmallEl.setAttribute('_ngcontent-serverapp-c2882330755', '');
          appiconcardsmallEl.setAttribute('_nghost-serverapp-c2201166703', '');

            const divEl4 = document.createElement('div');
            divEl4.setAttribute('_ngcontent-serverapp-c2201166703', '');
            divEl4.setAttribute('class', 'card');

              const divEl5 = document.createElement('div');
              divEl5.setAttribute('_ngcontent-serverapp-c2201166703', '');
              divEl5.setAttribute('class', 'card__headWrap');

                const h2El = document.createElement('h2');
                h2El.setAttribute('_ngcontent-serverapp-c2201166703', '');
                h2El.setAttribute('class', 'card__heading');
                h2El.textContent = 'Investments';
              divEl5.append(h2El);

                const applinkEl = document.createElement('applink');
                applinkEl.setAttribute('_ngcontent-serverapp-c2201166703', '');
                applinkEl.setAttribute('classes', 'button-link');

                  const aEl = document.createElement('a');
                  aEl.setAttribute('title', 'View All');
                  aEl.setAttribute('id', 'investments_view_all');
                  aEl.setAttribute('class', 'button-link');
                  aEl.setAttribute('href', '/investments');
                  aEl.textContent = 'View All';
                applinkEl.append(aEl);
              divEl5.append(applinkEl);
            divEl4.append(divEl5);

              const divEl6 = document.createElement('div');
              divEl6.setAttribute('_ngcontent-serverapp-c2201166703', '');
              divEl6.setAttribute('class', 'card__contentWrap');

                const ulEl = document.createElement('ul');
                ulEl.setAttribute('_ngcontent-serverapp-c2201166703', '');
                ulEl.setAttribute('class', 'card__iconList');

                  const liEl = document.createElement('li');
                  liEl.setAttribute('_ngcontent-serverapp-c2201166703', '');
                  liEl.setAttribute('classes', 'card__itemLink');
                  liEl.setAttribute('class', 'card__item applink-flat');

                    const aEl2 = document.createElement('a');
                    aEl2.setAttribute('title', 'Fixed Deposit');
                    aEl2.setAttribute('id', 'investments_fixed_deposit');
                    aEl2.setAttribute('class', 'card__itemLink');
                    aEl2.setAttribute('href', '/fixed-deposit');

                      const spanEl = document.createElement('span');
                      spanEl.setAttribute('class', 'sr-only');
                      spanEl.textContent = 'Fixed Deposit';
                    aEl2.append(spanEl);
                  liEl.append(aEl2);

                    const pictureEl = document.createElement('picture');
                    pictureEl.setAttribute('_ngcontent-serverapp-c2201166703', '');
                    pictureEl.setAttribute('class', 'card__icon');

                      const imgEl = document.createElement('img');
                      imgEl.setAttribute('_ngcontent-serverapp-c2201166703', '');
                      imgEl.setAttribute('width', '40');
                      imgEl.setAttribute('height', '40');
                      imgEl.setAttribute('priority', '');
                      imgEl.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-03/fixed-deposit.svg');
                      imgEl.setAttribute('alt', 'fixed-deposit');
                      imgEl.setAttribute('title', 'Fixed Deposit');
                    pictureEl.append(imgEl);
                  liEl.append(pictureEl);

                    const spanEl2 = document.createElement('span');
                    spanEl2.setAttribute('_ngcontent-serverapp-c2201166703', '');
                    spanEl2.setAttribute('class', 'card__iconText');
                    spanEl2.textContent = 'Fixed Deposit';
                  liEl.append(spanEl2);
                ulEl.append(liEl);

                  const liEl2 = document.createElement('li');
                  liEl2.setAttribute('_ngcontent-serverapp-c2201166703', '');
                  liEl2.setAttribute('classes', 'card__itemLink');
                  liEl2.setAttribute('class', 'card__item applink-flat');

                    const aEl3 = document.createElement('a');
                    aEl3.setAttribute('title', 'Fixed Investment Plan');
                    aEl3.setAttribute('id', 'investments_fixed_investment_plan');
                    aEl3.setAttribute('class', 'card__itemLink');
                    aEl3.setAttribute('href', '/fixed-investment-plan');

                      const spanEl3 = document.createElement('span');
                      spanEl3.setAttribute('class', 'sr-only');
                      spanEl3.textContent = 'Fixed Investment Plan';
                    aEl3.append(spanEl3);
                  liEl2.append(aEl3);

                    const pictureEl2 = document.createElement('picture');
                    pictureEl2.setAttribute('_ngcontent-serverapp-c2201166703', '');
                    pictureEl2.setAttribute('class', 'card__icon');

                      const imgEl2 = document.createElement('img');
                      imgEl2.setAttribute('_ngcontent-serverapp-c2201166703', '');
                      imgEl2.setAttribute('width', '40');
                      imgEl2.setAttribute('height', '40');
                      imgEl2.setAttribute('priority', '');
                      imgEl2.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-04/fixed-investment-plan.svg');
                      imgEl2.setAttribute('alt', 'Fixed Investment Plan');
                      imgEl2.setAttribute('title', 'Fixed Investment Plan');
                    pictureEl2.append(imgEl2);
                  liEl2.append(pictureEl2);

                    const spanEl4 = document.createElement('span');
                    spanEl4.setAttribute('_ngcontent-serverapp-c2201166703', '');
                    spanEl4.setAttribute('class', 'card__iconText');
                    spanEl4.textContent = 'Fixed Investment Plan';
                  liEl2.append(spanEl4);
                ulEl.append(liEl2);

                  const liEl3 = document.createElement('li');
                  liEl3.setAttribute('_ngcontent-serverapp-c2201166703', '');
                  liEl3.setAttribute('classes', 'card__itemLink');
                  liEl3.setAttribute('class', 'card__item applink-flat');

                    const aEl4 = document.createElement('a');
                    aEl4.setAttribute('title', 'Digital Silver');
                    aEl4.setAttribute('id', 'investments_digital_silver');
                    aEl4.setAttribute('class', 'card__itemLink');
                    aEl4.setAttribute('href', '/digital-silver');

                      const spanEl5 = document.createElement('span');
                      spanEl5.setAttribute('class', 'sr-only');
                      spanEl5.textContent = 'Digital Silver';
                    aEl4.append(spanEl5);
                  liEl3.append(aEl4);

                    const pictureEl3 = document.createElement('picture');
                    pictureEl3.setAttribute('_ngcontent-serverapp-c2201166703', '');
                    pictureEl3.setAttribute('class', 'card__icon');

                      const imgEl3 = document.createElement('img');
                      imgEl3.setAttribute('_ngcontent-serverapp-c2201166703', '');
                      imgEl3.setAttribute('width', '40');
                      imgEl3.setAttribute('height', '40');
                      imgEl3.setAttribute('priority', '');
                      imgEl3.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-03/shriram-one-silver_0.svg');
                      imgEl3.setAttribute('alt', 'Digital Silver');
                      imgEl3.setAttribute('title', 'Digital Silver');
                    pictureEl3.append(imgEl3);
                  liEl3.append(pictureEl3);

                    const spanEl6 = document.createElement('span');
                    spanEl6.setAttribute('_ngcontent-serverapp-c2201166703', '');
                    spanEl6.setAttribute('class', 'card__iconText');
                    spanEl6.textContent = 'Digital Silver';
                  liEl3.append(spanEl6);
                ulEl.append(liEl3);
              divEl6.append(ulEl);
            divEl4.append(divEl6);
          appiconcardsmallEl.append(divEl4);
        divEl3.append(appiconcardsmallEl);
      divEl2.append(divEl3);

        const divEl7 = document.createElement('div');
        divEl7.setAttribute('_ngcontent-serverapp-c2882330755', '');
        divEl7.setAttribute('class', 'col-lg-4');

          const appiconcardsmallEl2 = document.createElement('appiconcardsmall');
          appiconcardsmallEl2.setAttribute('_ngcontent-serverapp-c2882330755', '');
          appiconcardsmallEl2.setAttribute('_nghost-serverapp-c2201166703', '');

            const divEl8 = document.createElement('div');
            divEl8.setAttribute('_ngcontent-serverapp-c2201166703', '');
            divEl8.setAttribute('class', 'card');

              const divEl9 = document.createElement('div');
              divEl9.setAttribute('_ngcontent-serverapp-c2201166703', '');
              divEl9.setAttribute('class', 'card__headWrap');

                const h2El2 = document.createElement('h2');
                h2El2.setAttribute('_ngcontent-serverapp-c2201166703', '');
                h2El2.setAttribute('class', 'card__heading');
                h2El2.textContent = 'Loans';
              divEl9.append(h2El2);

                const applinkEl2 = document.createElement('applink');
                applinkEl2.setAttribute('_ngcontent-serverapp-c2201166703', '');
                applinkEl2.setAttribute('classes', 'button-link');

                  const aEl5 = document.createElement('a');
                  aEl5.setAttribute('title', 'View All');
                  aEl5.setAttribute('id', 'loans_view_all');
                  aEl5.setAttribute('class', 'button-link');
                  aEl5.setAttribute('href', '/loans#personal-use');
                  aEl5.textContent = 'View All';
                applinkEl2.append(aEl5);
              divEl9.append(applinkEl2);
            divEl8.append(divEl9);

              const divEl10 = document.createElement('div');
              divEl10.setAttribute('_ngcontent-serverapp-c2201166703', '');
              divEl10.setAttribute('class', 'card__contentWrap');

                const ulEl2 = document.createElement('ul');
                ulEl2.setAttribute('_ngcontent-serverapp-c2201166703', '');
                ulEl2.setAttribute('class', 'card__iconList');

                  const liEl4 = document.createElement('li');
                  liEl4.setAttribute('_ngcontent-serverapp-c2201166703', '');
                  liEl4.setAttribute('classes', 'card__itemLink');
                  liEl4.setAttribute('class', 'card__item applink-flat');

                    const aEl6 = document.createElement('a');
                    aEl6.setAttribute('title', 'Two Wheeler Loan');
                    aEl6.setAttribute('id', 'loans_two_wheeler_loan');
                    aEl6.setAttribute('class', 'card__itemLink');
                    aEl6.setAttribute('href', '/two-wheeler-loan');

                      const spanEl7 = document.createElement('span');
                      spanEl7.setAttribute('class', 'sr-only');
                      spanEl7.textContent = 'Two Wheeler Loan';
                    aEl6.append(spanEl7);
                  liEl4.append(aEl6);

                    const pictureEl4 = document.createElement('picture');
                    pictureEl4.setAttribute('_ngcontent-serverapp-c2201166703', '');
                    pictureEl4.setAttribute('class', 'card__icon');

                      const imgEl4 = document.createElement('img');
                      imgEl4.setAttribute('_ngcontent-serverapp-c2201166703', '');
                      imgEl4.setAttribute('width', '40');
                      imgEl4.setAttribute('height', '40');
                      imgEl4.setAttribute('priority', '');
                      imgEl4.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2023-05/two-wheeler.svg');
                      imgEl4.setAttribute('alt', 'Two_wheeler');
                      imgEl4.setAttribute('title', 'Two Wheeler Loan');
                    pictureEl4.append(imgEl4);
                  liEl4.append(pictureEl4);

                    const spanEl8 = document.createElement('span');
                    spanEl8.setAttribute('_ngcontent-serverapp-c2201166703', '');
                    spanEl8.setAttribute('class', 'card__iconText');
                    spanEl8.textContent = 'Two Wheeler Loan';
                  liEl4.append(spanEl8);
                ulEl2.append(liEl4);

                  const liEl5 = document.createElement('li');
                  liEl5.setAttribute('_ngcontent-serverapp-c2201166703', '');
                  liEl5.setAttribute('classes', 'card__itemLink');
                  liEl5.setAttribute('class', 'card__item applink-flat');

                    const aEl7 = document.createElement('a');
                    aEl7.setAttribute('title', 'Personal Loan');
                    aEl7.setAttribute('id', 'loans_personal_loan');
                    aEl7.setAttribute('class', 'card__itemLink');
                    aEl7.setAttribute('href', '/personal-loan');

                      const spanEl9 = document.createElement('span');
                      spanEl9.setAttribute('class', 'sr-only');
                      spanEl9.textContent = 'Personal Loan';
                    aEl7.append(spanEl9);
                  liEl5.append(aEl7);

                    const pictureEl5 = document.createElement('picture');
                    pictureEl5.setAttribute('_ngcontent-serverapp-c2201166703', '');
                    pictureEl5.setAttribute('class', 'card__icon');

                      const imgEl5 = document.createElement('img');
                      imgEl5.setAttribute('_ngcontent-serverapp-c2201166703', '');
                      imgEl5.setAttribute('width', '40');
                      imgEl5.setAttribute('height', '40');
                      imgEl5.setAttribute('priority', '');
                      imgEl5.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-03/personal-loan.svg');
                      imgEl5.setAttribute('alt', 'personal-loan');
                      imgEl5.setAttribute('title', 'Personal Loan');
                    pictureEl5.append(imgEl5);
                  liEl5.append(pictureEl5);

                    const spanEl10 = document.createElement('span');
                    spanEl10.setAttribute('_ngcontent-serverapp-c2201166703', '');
                    spanEl10.setAttribute('class', 'card__iconText');
                    spanEl10.textContent = 'Personal Loan';
                  liEl5.append(spanEl10);
                ulEl2.append(liEl5);

                  const liEl6 = document.createElement('li');
                  liEl6.setAttribute('_ngcontent-serverapp-c2201166703', '');
                  liEl6.setAttribute('classes', 'card__itemLink');
                  liEl6.setAttribute('class', 'card__item applink-flat');

                    const aEl8 = document.createElement('a');
                    aEl8.setAttribute('title', 'Used Car Loan');
                    aEl8.setAttribute('id', 'loans_used_car_loan');
                    aEl8.setAttribute('class', 'card__itemLink');
                    aEl8.setAttribute('href', '/used-car-loan');

                      const spanEl11 = document.createElement('span');
                      spanEl11.setAttribute('class', 'sr-only');
                      spanEl11.textContent = 'Used Car Loan';
                    aEl8.append(spanEl11);
                  liEl6.append(aEl8);

                    const pictureEl6 = document.createElement('picture');
                    pictureEl6.setAttribute('_ngcontent-serverapp-c2201166703', '');
                    pictureEl6.setAttribute('class', 'card__icon');

                      const imgEl6 = document.createElement('img');
                      imgEl6.setAttribute('_ngcontent-serverapp-c2201166703', '');
                      imgEl6.setAttribute('width', '40');
                      imgEl6.setAttribute('height', '40');
                      imgEl6.setAttribute('priority', '');
                      imgEl6.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-03/used-car-loan.svg');
                      imgEl6.setAttribute('alt', 'used-car-loan');
                      imgEl6.setAttribute('title', 'Used Car Loan');
                    pictureEl6.append(imgEl6);
                  liEl6.append(pictureEl6);

                    const spanEl12 = document.createElement('span');
                    spanEl12.setAttribute('_ngcontent-serverapp-c2201166703', '');
                    spanEl12.setAttribute('class', 'card__iconText');
                    spanEl12.textContent = 'Used Car Loan';
                  liEl6.append(spanEl12);
                ulEl2.append(liEl6);

                  const liEl7 = document.createElement('li');
                  liEl7.setAttribute('_ngcontent-serverapp-c2201166703', '');
                  liEl7.setAttribute('classes', 'card__itemLink');
                  liEl7.setAttribute('class', 'card__item applink-flat');

                    const aEl9 = document.createElement('a');
                    aEl9.setAttribute('title', 'Business Loan');
                    aEl9.setAttribute('id', 'loans_business_loan');
                    aEl9.setAttribute('class', 'card__itemLink');
                    aEl9.setAttribute('href', '/business-loan');

                      const spanEl13 = document.createElement('span');
                      spanEl13.setAttribute('class', 'sr-only');
                      spanEl13.textContent = 'Business Loan';
                    aEl9.append(spanEl13);
                  liEl7.append(aEl9);

                    const pictureEl7 = document.createElement('picture');
                    pictureEl7.setAttribute('_ngcontent-serverapp-c2201166703', '');
                    pictureEl7.setAttribute('class', 'card__icon');

                      const imgEl7 = document.createElement('img');
                      imgEl7.setAttribute('_ngcontent-serverapp-c2201166703', '');
                      imgEl7.setAttribute('width', '40');
                      imgEl7.setAttribute('height', '40');
                      imgEl7.setAttribute('priority', '');
                      imgEl7.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-03/business-loan.svg');
                      imgEl7.setAttribute('alt', 'business-loan');
                      imgEl7.setAttribute('title', 'Business Loan');
                    pictureEl7.append(imgEl7);
                  liEl7.append(pictureEl7);

                    const spanEl14 = document.createElement('span');
                    spanEl14.setAttribute('_ngcontent-serverapp-c2201166703', '');
                    spanEl14.setAttribute('class', 'card__iconText');
                    spanEl14.textContent = 'Business Loan';
                  liEl7.append(spanEl14);
                ulEl2.append(liEl7);
              divEl10.append(ulEl2);
            divEl8.append(divEl10);
          appiconcardsmallEl2.append(divEl8);
        divEl7.append(appiconcardsmallEl2);
      divEl2.append(divEl7);

        const divEl11 = document.createElement('div');
        divEl11.setAttribute('_ngcontent-serverapp-c2882330755', '');
        divEl11.setAttribute('class', 'col-lg-4');

          const divEl12 = document.createElement('div');
          divEl12.setAttribute('_ngcontent-serverapp-c2882330755', '');
          divEl12.setAttribute('class', 'card');

            const divEl13 = document.createElement('div');
            divEl13.setAttribute('_ngcontent-serverapp-c2882330755', '');
            divEl13.setAttribute('class', 'goldZone');

              const divEl14 = document.createElement('div');
              divEl14.setAttribute('_ngcontent-serverapp-c2882330755', '');
              divEl14.setAttribute('class', 'goldZone__content');

                const divEl15 = document.createElement('div');
                divEl15.setAttribute('_ngcontent-serverapp-c2882330755', '');
                divEl15.setAttribute('class', 'goldZone__rapper');

                  const divEl16 = document.createElement('div');
                  divEl16.setAttribute('_ngcontent-serverapp-c2882330755', '');
                  divEl16.setAttribute('class', 'goldZone__rightText');

                    const pEl = document.createElement('p');
                    pEl.setAttribute('_ngcontent-serverapp-c2882330755', '');
                    pEl.setAttribute('class', 'goldZone__text');
                    pEl.textContent = 'Gold Zone';
                  divEl16.append(pEl);

                    const imgEl8 = document.createElement('img');
                    imgEl8.setAttribute('_ngcontent-serverapp-c2882330755', '');
                    imgEl8.setAttribute('alt', 'ribbon-image');
                    imgEl8.setAttribute('width', '52');
                    imgEl8.setAttribute('height', '16');
                    imgEl8.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-fe/assets/images/superweb/ribbon.svg');
                  divEl16.append(imgEl8);
                divEl15.append(divEl16);

                  const aEl10 = document.createElement('a');
                  aEl10.setAttribute('_ngcontent-serverapp-c2882330755', '');
                  aEl10.setAttribute('class', 'button-link');
                  aEl10.setAttribute('href', '/gold-zone');
                  aEl10.setAttribute('title', 'View All');
                  aEl10.textContent = 'View All';
                divEl15.append(aEl10);
              divEl14.append(divEl15);

                const divEl17 = document.createElement('div');
                divEl17.setAttribute('_ngcontent-serverapp-c2882330755', '');
                divEl17.setAttribute('class', 'card__contentWrap');

                  const ulEl3 = document.createElement('ul');
                  ulEl3.setAttribute('_ngcontent-serverapp-c2882330755', '');
                  ulEl3.setAttribute('class', 'card__iconList');

                    const liEl8 = document.createElement('li');
                    liEl8.setAttribute('_ngcontent-serverapp-c2882330755', '');
                    liEl8.setAttribute('class', 'card__item');

                      const aEl11 = document.createElement('a');
                      aEl11.setAttribute('_ngcontent-serverapp-c2882330755', '');
                      aEl11.setAttribute('class', 'card__itemLink');
                      aEl11.setAttribute('href', '/gold-loan');
                      aEl11.setAttribute('title', 'Apply Gold Loan');

                        const spanEl15 = document.createElement('span');
                        spanEl15.setAttribute('_ngcontent-serverapp-c2882330755', '');
                        spanEl15.setAttribute('class', 'sr-only');
                        spanEl15.textContent = 'Apply Gold Loan';
                      aEl11.append(spanEl15);
                    liEl8.append(aEl11);

                      const pictureEl8 = document.createElement('picture');
                      pictureEl8.setAttribute('_ngcontent-serverapp-c2882330755', '');
                      pictureEl8.setAttribute('class', 'card__icon');

                        const imgEl9 = document.createElement('img');
                        imgEl9.setAttribute('_ngcontent-serverapp-c2882330755', '');
                        imgEl9.setAttribute('width', '40');
                        imgEl9.setAttribute('height', '40');
                        imgEl9.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-10/gold-loan-apply.svg');
                        imgEl9.setAttribute('alt', 'gold-loan-apply');
                      pictureEl8.append(imgEl9);
                    liEl8.append(pictureEl8);

                      const spanEl16 = document.createElement('span');
                      spanEl16.setAttribute('_ngcontent-serverapp-c2882330755', '');
                      spanEl16.setAttribute('class', 'card__iconText');
                      spanEl16.textContent = 'Apply Gold Loan';
                    liEl8.append(spanEl16);
                  ulEl3.append(liEl8);

                    const liEl9 = document.createElement('li');
                    liEl9.setAttribute('_ngcontent-serverapp-c2882330755', '');
                    liEl9.setAttribute('class', 'card__item');

                      const aEl12 = document.createElement('a');
                      aEl12.setAttribute('_ngcontent-serverapp-c2882330755', '');
                      aEl12.setAttribute('class', 'card__itemLink');
                      aEl12.setAttribute('href', '/digital-gold');
                      aEl12.setAttribute('title', 'Digital Gold');

                        const spanEl17 = document.createElement('span');
                        spanEl17.setAttribute('_ngcontent-serverapp-c2882330755', '');
                        spanEl17.setAttribute('class', 'sr-only');
                        spanEl17.textContent = 'Digital Gold';
                      aEl12.append(spanEl17);
                    liEl9.append(aEl12);

                      const pictureEl9 = document.createElement('picture');
                      pictureEl9.setAttribute('_ngcontent-serverapp-c2882330755', '');
                      pictureEl9.setAttribute('class', 'card__icon');

                        const imgEl10 = document.createElement('img');
                        imgEl10.setAttribute('_ngcontent-serverapp-c2882330755', '');
                        imgEl10.setAttribute('width', '40');
                        imgEl10.setAttribute('height', '40');
                        imgEl10.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-10/shriram-one-gold.svg');
                        imgEl10.setAttribute('alt', 'shriram-one-gold');
                      pictureEl9.append(imgEl10);
                    liEl9.append(pictureEl9);

                      const spanEl18 = document.createElement('span');
                      spanEl18.setAttribute('_ngcontent-serverapp-c2882330755', '');
                      spanEl18.setAttribute('class', 'card__iconText');
                      spanEl18.textContent = 'Digital Gold';
                    liEl9.append(spanEl18);
                  ulEl3.append(liEl9);

                    const liEl10 = document.createElement('li');
                    liEl10.setAttribute('_ngcontent-serverapp-c2882330755', '');
                    liEl10.setAttribute('class', 'card__item');

                      const aEl13 = document.createElement('a');
                      aEl13.setAttribute('_ngcontent-serverapp-c2882330755', '');
                      aEl13.setAttribute('class', 'card__itemLink');
                      aEl13.setAttribute('href', '/branch-locator?locator=gold-zone');
                      aEl13.setAttribute('title', 'Locate Us');

                        const spanEl19 = document.createElement('span');
                        spanEl19.setAttribute('_ngcontent-serverapp-c2882330755', '');
                        spanEl19.setAttribute('class', 'sr-only');
                        spanEl19.textContent = 'Locate Us';
                      aEl13.append(spanEl19);
                    liEl10.append(aEl13);

                      const pictureEl10 = document.createElement('picture');
                      pictureEl10.setAttribute('_ngcontent-serverapp-c2882330755', '');
                      pictureEl10.setAttribute('class', 'card__icon');

                        const imgEl11 = document.createElement('img');
                        imgEl11.setAttribute('_ngcontent-serverapp-c2882330755', '');
                        imgEl11.setAttribute('width', '40');
                        imgEl11.setAttribute('height', '40');
                        imgEl11.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-10/location.svg');
                        imgEl11.setAttribute('alt', 'location');
                      pictureEl10.append(imgEl11);
                    liEl10.append(pictureEl10);

                      const spanEl20 = document.createElement('span');
                      spanEl20.setAttribute('_ngcontent-serverapp-c2882330755', '');
                      spanEl20.setAttribute('class', 'card__iconText');
                      spanEl20.textContent = 'Locate Us';
                    liEl10.append(spanEl20);
                  ulEl3.append(liEl10);

                    const liEl11 = document.createElement('li');
                    liEl11.setAttribute('_ngcontent-serverapp-c2882330755', '');
                    liEl11.setAttribute('class', 'card__item');

                      const aEl14 = document.createElement('a');
                      aEl14.setAttribute('_ngcontent-serverapp-c2882330755', '');
                      aEl14.setAttribute('class', 'card__itemLink');
                      aEl14.setAttribute('href', '/gold-zone/gold-calculator');
                      aEl14.setAttribute('title', 'Gold Calculator');

                        const spanEl21 = document.createElement('span');
                        spanEl21.setAttribute('_ngcontent-serverapp-c2882330755', '');
                        spanEl21.setAttribute('class', 'sr-only');
                        spanEl21.textContent = 'Gold Calculator';
                      aEl14.append(spanEl21);
                    liEl11.append(aEl14);

                      const pictureEl11 = document.createElement('picture');
                      pictureEl11.setAttribute('_ngcontent-serverapp-c2882330755', '');
                      pictureEl11.setAttribute('class', 'card__icon');

                        const imgEl12 = document.createElement('img');
                        imgEl12.setAttribute('_ngcontent-serverapp-c2882330755', '');
                        imgEl12.setAttribute('width', '40');
                        imgEl12.setAttribute('height', '40');
                        imgEl12.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-10/gold-calculator_0.svg');
                        imgEl12.setAttribute('alt', 'gold-calculator');
                      pictureEl11.append(imgEl12);
                    liEl11.append(pictureEl11);

                      const spanEl22 = document.createElement('span');
                      spanEl22.setAttribute('_ngcontent-serverapp-c2882330755', '');
                      spanEl22.setAttribute('class', 'card__iconText');
                      spanEl22.textContent = 'Gold Calculator';
                    liEl11.append(spanEl22);
                  ulEl3.append(liEl11);
                divEl17.append(ulEl3);
              divEl14.append(divEl17);
            divEl13.append(divEl14);
          divEl12.append(divEl13);
        divEl11.append(divEl12);
      divEl2.append(divEl11);
    divEl.append(divEl2);
  sectionEl.append(divEl);

    const divEl18 = document.createElement('div');
    divEl18.setAttribute('_ngcontent-serverapp-c2882330755', '');
    divEl18.setAttribute('class', 'container');

      const divEl19 = document.createElement('div');
      divEl19.setAttribute('_ngcontent-serverapp-c2882330755', '');
      divEl19.setAttribute('class', 'row row-space row-gridSpace');

        const appcarouselcard2El = document.createElement('appcarouselcard2');
        appcarouselcard2El.setAttribute('_ngcontent-serverapp-c2882330755', '');
        appcarouselcard2El.setAttribute('ngskiphydration', 'true');
        appcarouselcard2El.setAttribute('_nghost-serverapp-c2373743709', '');

          const divEl20 = document.createElement('div');
          divEl20.setAttribute('_ngcontent-serverapp-c2373743709', '');
          divEl20.setAttribute('class', 'relative slider--cardSlider carouselCard2');

            const swiperEl = document.createElement('swiper');
            swiperEl.setAttribute('_ngcontent-serverapp-c2373743709', '');
            swiperEl.setAttribute('class', 'cardSlider dot--navigation swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden');

              const divEl21 = document.createElement('div');
              divEl21.setAttribute('class', 'swiper-wrapper');

                const divEl22 = document.createElement('div');
                divEl22.setAttribute('data-swiper-slide-index', '0');
                divEl22.setAttribute('class', 'cardSlider__item cardSlider__item--dynamicSlide swiper-slide swiper-slide-active');
                divEl22.setAttribute('style', 'width: 362.667px; margin-right: 16px;');

                  const divEl23 = document.createElement('div');
                  divEl23.setAttribute('_ngcontent-serverapp-c2373743709', '');
                  divEl23.setAttribute('class', 'cardSlider__banner relative');

                    const applinkEl3 = document.createElement('applink');
                    applinkEl3.setAttribute('_ngcontent-serverapp-c2373743709', '');
                    applinkEl3.setAttribute('classes', 'cardSlider__link link-position cardSlider__linkText');

                      const aEl15 = document.createElement('a');
                      aEl15.setAttribute('title', 'Fixed Deposit');
                      aEl15.setAttribute('id', 'marketing_banner_0_fixed_deposit');
                      aEl15.setAttribute('class', 'cardSlider__link link-position cardSlider__linkText');
                      aEl15.setAttribute('href', '/fixed-deposit');
                      aEl15.setAttribute('target', '_self');
                      aEl15.textContent = 'Fixed Deposit';
                    applinkEl3.append(aEl15);
                  divEl23.append(applinkEl3);

                    const imgEl13 = document.createElement('img');
                    imgEl13.setAttribute('_ngcontent-serverapp-c2373743709', '');
                    imgEl13.setAttribute('width', '390');
                    imgEl13.setAttribute('height', '120');
                    imgEl13.setAttribute('fetchpriority', 'high');
                    imgEl13.setAttribute('priority', '');
                    imgEl13.setAttribute('alt', 'Fixed Deposit');
                    imgEl13.setAttribute('title', 'Fixed Deposit');
                    imgEl13.setAttribute('loading', 'eager');
                    imgEl13.setAttribute('ng-img', 'true');
                    imgEl13.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2025-06/fd-repo-interest-rate.webp');
                  divEl23.append(imgEl13);
                divEl22.append(divEl23);
              divEl21.append(divEl22);

                const divEl24 = document.createElement('div');
                divEl24.setAttribute('data-swiper-slide-index', '1');
                divEl24.setAttribute('class', 'cardSlider__item cardSlider__item--dynamicSlide swiper-slide swiper-slide-next');
                divEl24.setAttribute('style', 'width: 362.667px; margin-right: 16px;');

                  const divEl25 = document.createElement('div');
                  divEl25.setAttribute('_ngcontent-serverapp-c2373743709', '');
                  divEl25.setAttribute('class', 'cardSlider__banner relative');

                    const applinkEl4 = document.createElement('applink');
                    applinkEl4.setAttribute('_ngcontent-serverapp-c2373743709', '');
                    applinkEl4.setAttribute('classes', 'cardSlider__link link-position cardSlider__linkText');

                      const aEl16 = document.createElement('a');
                      aEl16.setAttribute('title', 'Gold Loan');
                      aEl16.setAttribute('href', 'https://www.shriramfinance.in/gold-loan');
                      aEl16.setAttribute('target', '_self');
                      aEl16.setAttribute('id', 'marketing_banner_1_gold_loan');
                      aEl16.setAttribute('class', 'cardSlider__link link-position cardSlider__linkText');
                      aEl16.textContent = 'Gold Loan';
                    applinkEl4.append(aEl16);
                  divEl25.append(applinkEl4);

                    const imgEl14 = document.createElement('img');
                    imgEl14.setAttribute('_ngcontent-serverapp-c2373743709', '');
                    imgEl14.setAttribute('width', '390');
                    imgEl14.setAttribute('height', '120');
                    imgEl14.setAttribute('fetchpriority', 'auto');
                    imgEl14.setAttribute('loading', 'lazy');
                    imgEl14.setAttribute('alt', 'Gold Loan');
                    imgEl14.setAttribute('title', 'Gold Loan');
                    imgEl14.setAttribute('ng-img', 'true');
                    imgEl14.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2025-06/gold-zone-marketing-banner.webp');
                    imgEl14.setAttribute('class', '  ng-lazyloaded');
                  divEl25.append(imgEl14);
                divEl24.append(divEl25);
              divEl21.append(divEl24);

                const divEl26 = document.createElement('div');
                divEl26.setAttribute('data-swiper-slide-index', '2');
                divEl26.setAttribute('class', 'cardSlider__item cardSlider__item--dynamicSlide swiper-slide');
                divEl26.setAttribute('style', 'width: 362.667px; margin-right: 16px;');

                  const divEl27 = document.createElement('div');
                  divEl27.setAttribute('_ngcontent-serverapp-c2373743709', '');
                  divEl27.setAttribute('class', 'cardSlider__banner relative');

                    const buttonEl = document.createElement('button');
                    buttonEl.setAttribute('_ngcontent-serverapp-c2373743709', '');
                    buttonEl.setAttribute('class', 'qrPopup button--desktop');
                    buttonEl.setAttribute('title', 'UPI');
                  divEl27.append(buttonEl);

                    const applinkEl5 = document.createElement('applink');
                    applinkEl5.setAttribute('_ngcontent-serverapp-c2373743709', '');
                    applinkEl5.setAttribute('target', '_blank');
                    applinkEl5.setAttribute('rel', 'noopener');
                    applinkEl5.setAttribute('class', 'qrPopup qrPopup__mb mobileView button--mobile');

                      const aEl17 = document.createElement('a');
                      aEl17.setAttribute('title', 'Download App');
                      aEl17.setAttribute('href', 'https://sri1.page.link/tngV');
                      aEl17.setAttribute('target', '_blank');
                      aEl17.setAttribute('id', '');
                      aEl17.textContent = 'Download App';
                    applinkEl5.append(aEl17);
                  divEl27.append(applinkEl5);

                    const imgEl15 = document.createElement('img');
                    imgEl15.setAttribute('_ngcontent-serverapp-c2373743709', '');
                    imgEl15.setAttribute('width', '390');
                    imgEl15.setAttribute('height', '120');
                    imgEl15.setAttribute('fetchpriority', 'auto');
                    imgEl15.setAttribute('loading', 'lazy');
                    imgEl15.setAttribute('alt', 'cashback banner');
                    imgEl15.setAttribute('title', 'cashback banner');
                    imgEl15.setAttribute('ng-img', 'true');
                    imgEl15.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2025-02/Cashback_banner_SW.webp');
                    imgEl15.setAttribute('class', '  ng-lazyloaded');
                  divEl27.append(imgEl15);
                divEl26.append(divEl27);
              divEl21.append(divEl26);
            swiperEl.append(divEl21);
          divEl20.append(swiperEl);

            const divEl28 = document.createElement('div');
            divEl28.setAttribute('_ngcontent-serverapp-c2373743709', '');
            divEl28.setAttribute('class', 'swiper-pagination-card text-center d-lg-none swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal swiper-pagination-lock');

              const spanEl23 = document.createElement('span');
              spanEl23.setAttribute('class', 'swiper-pagination-bullet swiper-pagination-bullet-active');
            divEl28.append(spanEl23);
          divEl20.append(divEl28);

            const divEl29 = document.createElement('div');
            divEl29.setAttribute('_ngcontent-serverapp-c2373743709', '');
            divEl29.setAttribute('class', 'slider__arrowCenter d-none d-lg-block');

              const divEl30 = document.createElement('div');
              divEl30.setAttribute('_ngcontent-serverapp-c2373743709', '');
              divEl30.setAttribute('id', 'swiper-button-prev-cards');
              divEl30.setAttribute('title', 'previous');
              divEl30.setAttribute('class', 'swiper-button-prev swiper-button-disabled swiper-button-lock');

                const spanEl24 = document.createElement('span');
                spanEl24.setAttribute('_ngcontent-serverapp-c2373743709', '');
                spanEl24.setAttribute('class', 'sr-only');
                spanEl24.textContent = 'Prev';
              divEl30.append(spanEl24);
            divEl29.append(divEl30);

              const divEl31 = document.createElement('div');
              divEl31.setAttribute('_ngcontent-serverapp-c2373743709', '');
              divEl31.setAttribute('id', 'swiper-button-next-cards');
              divEl31.setAttribute('title', 'Next');
              divEl31.setAttribute('class', 'swiper-button-next swiper-button-disabled swiper-button-lock');

                const spanEl25 = document.createElement('span');
                spanEl25.setAttribute('_ngcontent-serverapp-c2373743709', '');
                spanEl25.setAttribute('class', 'sr-only');
                spanEl25.textContent = 'Next';
              divEl31.append(spanEl25);
            divEl29.append(divEl31);
          divEl20.append(divEl29);
        appcarouselcard2El.append(divEl20);
      divEl19.append(appcarouselcard2El);
    divEl18.append(divEl19);
  sectionEl.append(divEl18);

    const divEl32 = document.createElement('div');
    divEl32.setAttribute('_ngcontent-serverapp-c2882330755', '');
    divEl32.setAttribute('class', 'container');

      const divEl33 = document.createElement('div');
      divEl33.setAttribute('_ngcontent-serverapp-c2882330755', '');
      divEl33.setAttribute('class', 'row row-space row-gridSpace');

        const divEl34 = document.createElement('div');
        divEl34.setAttribute('_ngcontent-serverapp-c2882330755', '');
        divEl34.setAttribute('class', 'col-12');

          const appiconcardlargeEl = document.createElement('appiconcardlarge');
          appiconcardlargeEl.setAttribute('_ngcontent-serverapp-c2882330755', '');
          appiconcardlargeEl.setAttribute('_nghost-serverapp-c1004086730', '');

            const divEl35 = document.createElement('div');
            divEl35.setAttribute('_ngcontent-serverapp-c1004086730', '');
            divEl35.setAttribute('class', 'card');

              const divEl36 = document.createElement('div');
              divEl36.setAttribute('_ngcontent-serverapp-c1004086730', '');
              divEl36.setAttribute('class', 'card__headWrap');

                const divEl37 = document.createElement('div');
                divEl37.setAttribute('_ngcontent-serverapp-c1004086730', '');
                divEl37.setAttribute('class', 'bharatLogo');

                  const h2El3 = document.createElement('h2');
                  h2El3.setAttribute('_ngcontent-serverapp-c1004086730', '');
                  h2El3.setAttribute('class', 'card__heading mb-0 mr-1');
                  h2El3.textContent = 'Bill Payments';
                divEl37.append(h2El3);

                  const imgEl16 = document.createElement('img');
                  imgEl16.setAttribute('_ngcontent-serverapp-c1004086730', '');
                  imgEl16.setAttribute('width', '24');
                  imgEl16.setAttribute('height', '24');
                  imgEl16.setAttribute('class', 'bharatLogo__icon');
                  imgEl16.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2025-03/bbps-bharath-logo.svg');
                  imgEl16.setAttribute('alt', 'Bharath');
                divEl37.append(imgEl16);

                  const imgEl17 = document.createElement('img');
                  imgEl17.setAttribute('_ngcontent-serverapp-c1004086730', '');
                  imgEl17.setAttribute('width', '93');
                  imgEl17.setAttribute('height', '16');
                  imgEl17.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2025-03/bbps-rewards.svg');
                  imgEl17.setAttribute('alt', 'BBPS Rewards');
                divEl37.append(imgEl17);
              divEl36.append(divEl37);

                const aEl18 = document.createElement('a');
                aEl18.setAttribute('_ngcontent-serverapp-c1004086730', '');
                aEl18.setAttribute('class', 'button-link');
                aEl18.setAttribute('title', 'View All');
                aEl18.setAttribute('id', 'hp_bbps_view_all');
                aEl18.setAttribute('href', '/bbps');
                aEl18.textContent = 'View All';
              divEl36.append(aEl18);
            divEl35.append(divEl36);

              const divEl38 = document.createElement('div');
              divEl38.setAttribute('_ngcontent-serverapp-c1004086730', '');
              divEl38.setAttribute('class', 'card__contentWrap');

                const ulEl4 = document.createElement('ul');
                ulEl4.setAttribute('_ngcontent-serverapp-c1004086730', '');
                ulEl4.setAttribute('class', 'card__iconList');

                  const liEl12 = document.createElement('li');
                  liEl12.setAttribute('_ngcontent-serverapp-c1004086730', '');

                    const aEl19 = document.createElement('a');
                    aEl19.setAttribute('_ngcontent-serverapp-c1004086730', '');
                    aEl19.setAttribute('title', 'Mobile Prepaid');
                    aEl19.setAttribute('href', '/mobile-recharge');
                    aEl19.setAttribute('id', 'hp_bbps_mobile_prepaid');

                      const pictureEl12 = document.createElement('picture');
                      pictureEl12.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      pictureEl12.setAttribute('class', 'card__icon');

                        const imgEl18 = document.createElement('img');
                        imgEl18.setAttribute('_ngcontent-serverapp-c1004086730', '');
                        imgEl18.setAttribute('width', '40');
                        imgEl18.setAttribute('height', '40');
                        imgEl18.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-10/mobile_recharge.svg');
                        imgEl18.setAttribute('alt', 'Mobile Prepaid');
                        imgEl18.setAttribute('title', 'mobile_recharge');
                      pictureEl12.append(imgEl18);
                    aEl19.append(pictureEl12);

                      const spanEl26 = document.createElement('span');
                      spanEl26.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      spanEl26.setAttribute('class', 'card__iconText');
                      spanEl26.textContent = 'Mobile Prepaid';
                    aEl19.append(spanEl26);
                  liEl12.append(aEl19);
                ulEl4.append(liEl12);

                  const liEl13 = document.createElement('li');
                  liEl13.setAttribute('_ngcontent-serverapp-c1004086730', '');

                    const aEl20 = document.createElement('a');
                    aEl20.setAttribute('_ngcontent-serverapp-c1004086730', '');
                    aEl20.setAttribute('title', 'Mobile Postpaid');
                    aEl20.setAttribute('href', '/mobile-postpaid-bill-payment');
                    aEl20.setAttribute('id', 'hp_bbps_mobile_postpaid');

                      const pictureEl13 = document.createElement('picture');
                      pictureEl13.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      pictureEl13.setAttribute('class', 'card__icon');

                        const imgEl19 = document.createElement('img');
                        imgEl19.setAttribute('_ngcontent-serverapp-c1004086730', '');
                        imgEl19.setAttribute('width', '40');
                        imgEl19.setAttribute('height', '40');
                        imgEl19.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-10/mobile_postpaid.svg');
                        imgEl19.setAttribute('alt', 'Mobile Postpaid');
                        imgEl19.setAttribute('title', 'mobile_postpaid');
                      pictureEl13.append(imgEl19);
                    aEl20.append(pictureEl13);

                      const spanEl27 = document.createElement('span');
                      spanEl27.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      spanEl27.setAttribute('class', 'card__iconText');
                      spanEl27.textContent = 'Mobile Postpaid';
                    aEl20.append(spanEl27);
                  liEl13.append(aEl20);
                ulEl4.append(liEl13);

                  const liEl14 = document.createElement('li');
                  liEl14.setAttribute('_ngcontent-serverapp-c1004086730', '');

                    const aEl21 = document.createElement('a');
                    aEl21.setAttribute('_ngcontent-serverapp-c1004086730', '');
                    aEl21.setAttribute('title', 'Landline Postpaid');
                    aEl21.setAttribute('href', '/landline-bill-payment');
                    aEl21.setAttribute('id', 'hp_bbps_landline_postpaid');

                      const pictureEl14 = document.createElement('picture');
                      pictureEl14.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      pictureEl14.setAttribute('class', 'card__icon');

                        const imgEl20 = document.createElement('img');
                        imgEl20.setAttribute('_ngcontent-serverapp-c1004086730', '');
                        imgEl20.setAttribute('width', '40');
                        imgEl20.setAttribute('height', '40');
                        imgEl20.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-10/landline_postpaid.svg');
                        imgEl20.setAttribute('alt', 'Landline Postpaid');
                        imgEl20.setAttribute('title', 'landline_postpaid');
                      pictureEl14.append(imgEl20);
                    aEl21.append(pictureEl14);

                      const spanEl28 = document.createElement('span');
                      spanEl28.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      spanEl28.setAttribute('class', 'card__iconText');
                      spanEl28.textContent = 'Landline Postpaid';
                    aEl21.append(spanEl28);
                  liEl14.append(aEl21);
                ulEl4.append(liEl14);

                  const liEl15 = document.createElement('li');
                  liEl15.setAttribute('_ngcontent-serverapp-c1004086730', '');

                    const aEl22 = document.createElement('a');
                    aEl22.setAttribute('_ngcontent-serverapp-c1004086730', '');
                    aEl22.setAttribute('title', 'DTH');
                    aEl22.setAttribute('href', '/dth-recharge');
                    aEl22.setAttribute('id', 'hp_bbps_dth');

                      const pictureEl15 = document.createElement('picture');
                      pictureEl15.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      pictureEl15.setAttribute('class', 'card__icon');

                        const imgEl21 = document.createElement('img');
                        imgEl21.setAttribute('_ngcontent-serverapp-c1004086730', '');
                        imgEl21.setAttribute('width', '40');
                        imgEl21.setAttribute('height', '40');
                        imgEl21.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-10/dth_recharge.svg');
                        imgEl21.setAttribute('alt', 'DTH');
                        imgEl21.setAttribute('title', 'dth_recharge');
                      pictureEl15.append(imgEl21);
                    aEl22.append(pictureEl15);

                      const spanEl29 = document.createElement('span');
                      spanEl29.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      spanEl29.setAttribute('class', 'card__iconText');
                      spanEl29.textContent = 'DTH';
                    aEl22.append(spanEl29);
                  liEl15.append(aEl22);
                ulEl4.append(liEl15);

                  const liEl16 = document.createElement('li');
                  liEl16.setAttribute('_ngcontent-serverapp-c1004086730', '');

                    const aEl23 = document.createElement('a');
                    aEl23.setAttribute('_ngcontent-serverapp-c1004086730', '');
                    aEl23.setAttribute('title', 'Fastag');
                    aEl23.setAttribute('href', '/fastag-recharge');
                    aEl23.setAttribute('id', 'hp_bbps_fastag');

                      const pictureEl16 = document.createElement('picture');
                      pictureEl16.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      pictureEl16.setAttribute('class', 'card__icon');

                        const imgEl22 = document.createElement('img');
                        imgEl22.setAttribute('_ngcontent-serverapp-c1004086730', '');
                        imgEl22.setAttribute('width', '40');
                        imgEl22.setAttribute('height', '40');
                        imgEl22.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-10/fastag_recharge.svg');
                        imgEl22.setAttribute('alt', 'Fastag');
                        imgEl22.setAttribute('title', 'fastag_recharge');
                      pictureEl16.append(imgEl22);
                    aEl23.append(pictureEl16);

                      const spanEl30 = document.createElement('span');
                      spanEl30.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      spanEl30.setAttribute('class', 'card__iconText');
                      spanEl30.textContent = 'Fastag';
                    aEl23.append(spanEl30);
                  liEl16.append(aEl23);
                ulEl4.append(liEl16);

                  const liEl17 = document.createElement('li');
                  liEl17.setAttribute('_ngcontent-serverapp-c1004086730', '');

                    const aEl24 = document.createElement('a');
                    aEl24.setAttribute('_ngcontent-serverapp-c1004086730', '');
                    aEl24.setAttribute('title', 'Electricity');
                    aEl24.setAttribute('href', '/electricity-bill-payment');
                    aEl24.setAttribute('id', 'hp_bbps_electricity');

                      const pictureEl17 = document.createElement('picture');
                      pictureEl17.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      pictureEl17.setAttribute('class', 'card__icon');

                        const imgEl23 = document.createElement('img');
                        imgEl23.setAttribute('_ngcontent-serverapp-c1004086730', '');
                        imgEl23.setAttribute('width', '40');
                        imgEl23.setAttribute('height', '40');
                        imgEl23.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-10/electricity_bill.svg');
                        imgEl23.setAttribute('alt', 'Electricity');
                        imgEl23.setAttribute('title', 'electricity_bill');
                      pictureEl17.append(imgEl23);
                    aEl24.append(pictureEl17);

                      const spanEl31 = document.createElement('span');
                      spanEl31.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      spanEl31.setAttribute('class', 'card__iconText');
                      spanEl31.textContent = 'Electricity';
                    aEl24.append(spanEl31);
                  liEl17.append(aEl24);
                ulEl4.append(liEl17);

                  const liEl18 = document.createElement('li');
                  liEl18.setAttribute('_ngcontent-serverapp-c1004086730', '');

                    const aEl25 = document.createElement('a');
                    aEl25.setAttribute('_ngcontent-serverapp-c1004086730', '');
                    aEl25.setAttribute('title', 'LPG Gas');
                    aEl25.setAttribute('href', '/cylinder-gas-booking');
                    aEl25.setAttribute('id', 'hp_bbps_lpg_gas');

                      const pictureEl18 = document.createElement('picture');
                      pictureEl18.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      pictureEl18.setAttribute('class', 'card__icon');

                        const imgEl24 = document.createElement('img');
                        imgEl24.setAttribute('_ngcontent-serverapp-c1004086730', '');
                        imgEl24.setAttribute('width', '40');
                        imgEl24.setAttribute('height', '40');
                        imgEl24.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-10/book_gas_cylinder.svg');
                        imgEl24.setAttribute('alt', 'LPG Gas');
                        imgEl24.setAttribute('title', 'book_gas_cylinder');
                      pictureEl18.append(imgEl24);
                    aEl25.append(pictureEl18);

                      const spanEl32 = document.createElement('span');
                      spanEl32.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      spanEl32.setAttribute('class', 'card__iconText');
                      spanEl32.textContent = 'LPG Gas';
                    aEl25.append(spanEl32);
                  liEl18.append(aEl25);
                ulEl4.append(liEl18);

                  const liEl19 = document.createElement('li');
                  liEl19.setAttribute('_ngcontent-serverapp-c1004086730', '');

                    const aEl26 = document.createElement('a');
                    aEl26.setAttribute('_ngcontent-serverapp-c1004086730', '');
                    aEl26.setAttribute('title', 'Gas');
                    aEl26.setAttribute('href', '/gas-bill-payment');
                    aEl26.setAttribute('id', 'hp_bbps_gas');

                      const pictureEl19 = document.createElement('picture');
                      pictureEl19.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      pictureEl19.setAttribute('class', 'card__icon');

                        const imgEl25 = document.createElement('img');
                        imgEl25.setAttribute('_ngcontent-serverapp-c1004086730', '');
                        imgEl25.setAttribute('width', '40');
                        imgEl25.setAttribute('height', '40');
                        imgEl25.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-10/piped_gas_bill.svg');
                        imgEl25.setAttribute('alt', 'Gas');
                        imgEl25.setAttribute('title', 'piped_gas_bill');
                      pictureEl19.append(imgEl25);
                    aEl26.append(pictureEl19);

                      const spanEl33 = document.createElement('span');
                      spanEl33.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      spanEl33.setAttribute('class', 'card__iconText');
                      spanEl33.textContent = 'Gas';
                    aEl26.append(spanEl33);
                  liEl19.append(aEl26);
                ulEl4.append(liEl19);

                  const liEl20 = document.createElement('li');
                  liEl20.setAttribute('_ngcontent-serverapp-c1004086730', '');

                    const aEl27 = document.createElement('a');
                    aEl27.setAttribute('_ngcontent-serverapp-c1004086730', '');
                    aEl27.setAttribute('title', 'Broadband Postpaid');
                    aEl27.setAttribute('href', '/broadband-bill-payment');
                    aEl27.setAttribute('id', 'hp_bbps_broadband_postpaid');

                      const pictureEl20 = document.createElement('picture');
                      pictureEl20.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      pictureEl20.setAttribute('class', 'card__icon');

                        const imgEl26 = document.createElement('img');
                        imgEl26.setAttribute('_ngcontent-serverapp-c1004086730', '');
                        imgEl26.setAttribute('width', '40');
                        imgEl26.setAttribute('height', '40');
                        imgEl26.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-10/broadband_Landline_0.svg');
                        imgEl26.setAttribute('alt', 'Broadband Postpaid');
                        imgEl26.setAttribute('title', 'broadband_Landline');
                      pictureEl20.append(imgEl26);
                    aEl27.append(pictureEl20);

                      const spanEl34 = document.createElement('span');
                      spanEl34.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      spanEl34.setAttribute('class', 'card__iconText');
                      spanEl34.textContent = 'Broadband Postpaid';
                    aEl27.append(spanEl34);
                  liEl20.append(aEl27);
                ulEl4.append(liEl20);

                  const liEl21 = document.createElement('li');
                  liEl21.setAttribute('_ngcontent-serverapp-c1004086730', '');

                    const aEl28 = document.createElement('a');
                    aEl28.setAttribute('_ngcontent-serverapp-c1004086730', '');
                    aEl28.setAttribute('title', 'Water');
                    aEl28.setAttribute('href', '/water-bill-payment');
                    aEl28.setAttribute('id', 'hp_bbps_water');

                      const pictureEl21 = document.createElement('picture');
                      pictureEl21.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      pictureEl21.setAttribute('class', 'card__icon');

                        const imgEl27 = document.createElement('img');
                        imgEl27.setAttribute('_ngcontent-serverapp-c1004086730', '');
                        imgEl27.setAttribute('width', '40');
                        imgEl27.setAttribute('height', '40');
                        imgEl27.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-10/water.svg');
                        imgEl27.setAttribute('alt', 'Water');
                        imgEl27.setAttribute('title', 'water');
                      pictureEl21.append(imgEl27);
                    aEl28.append(pictureEl21);

                      const spanEl35 = document.createElement('span');
                      spanEl35.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      spanEl35.setAttribute('class', 'card__iconText');
                      spanEl35.textContent = 'Water';
                    aEl28.append(spanEl35);
                  liEl21.append(aEl28);
                ulEl4.append(liEl21);

                  const liEl22 = document.createElement('li');
                  liEl22.setAttribute('_ngcontent-serverapp-c1004086730', '');

                    const aEl29 = document.createElement('a');
                    aEl29.setAttribute('_ngcontent-serverapp-c1004086730', '');
                    aEl29.setAttribute('title', 'Cable TV');
                    aEl29.setAttribute('href', '/cable-tv-recharge');
                    aEl29.setAttribute('id', 'hp_bbps_cable_tv');

                      const pictureEl22 = document.createElement('picture');
                      pictureEl22.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      pictureEl22.setAttribute('class', 'card__icon');

                        const imgEl28 = document.createElement('img');
                        imgEl28.setAttribute('_ngcontent-serverapp-c1004086730', '');
                        imgEl28.setAttribute('width', '40');
                        imgEl28.setAttribute('height', '40');
                        imgEl28.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-10/cable_TV.svg');
                        imgEl28.setAttribute('alt', 'Cable TV');
                        imgEl28.setAttribute('title', 'cable_TV');
                      pictureEl22.append(imgEl28);
                    aEl29.append(pictureEl22);

                      const spanEl36 = document.createElement('span');
                      spanEl36.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      spanEl36.setAttribute('class', 'card__iconText');
                      spanEl36.textContent = 'Cable TV';
                    aEl29.append(spanEl36);
                  liEl22.append(aEl29);
                ulEl4.append(liEl22);

                  const liEl23 = document.createElement('li');
                  liEl23.setAttribute('_ngcontent-serverapp-c1004086730', '');

                    const aEl30 = document.createElement('a');
                    aEl30.setAttribute('_ngcontent-serverapp-c1004086730', '');
                    aEl30.setAttribute('title', 'Credit Card');
                    aEl30.setAttribute('href', '/credit-card-bill-payment');
                    aEl30.setAttribute('id', 'hp_bbps_credit_card');

                      const pictureEl23 = document.createElement('picture');
                      pictureEl23.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      pictureEl23.setAttribute('class', 'card__icon');

                        const imgEl29 = document.createElement('img');
                        imgEl29.setAttribute('_ngcontent-serverapp-c1004086730', '');
                        imgEl29.setAttribute('width', '40');
                        imgEl29.setAttribute('height', '40');
                        imgEl29.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-10/credit_card_bill.svg');
                        imgEl29.setAttribute('alt', 'Credit Card');
                        imgEl29.setAttribute('title', 'credit_card_bill');
                      pictureEl23.append(imgEl29);
                    aEl30.append(pictureEl23);

                      const spanEl37 = document.createElement('span');
                      spanEl37.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      spanEl37.setAttribute('class', 'card__iconText');
                      spanEl37.textContent = 'Credit Card';
                    aEl30.append(spanEl37);
                  liEl23.append(aEl30);
                ulEl4.append(liEl23);

                  const liEl24 = document.createElement('li');
                  liEl24.setAttribute('_ngcontent-serverapp-c1004086730', '');

                    const aEl31 = document.createElement('a');
                    aEl31.setAttribute('_ngcontent-serverapp-c1004086730', '');
                    aEl31.setAttribute('title', 'Loan Repayment');
                    aEl31.setAttribute('href', '/loan-repayment');
                    aEl31.setAttribute('id', 'hp_bbps_loan_repayment');

                      const pictureEl24 = document.createElement('picture');
                      pictureEl24.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      pictureEl24.setAttribute('class', 'card__icon');

                        const imgEl30 = document.createElement('img');
                        imgEl30.setAttribute('_ngcontent-serverapp-c1004086730', '');
                        imgEl30.setAttribute('width', '40');
                        imgEl30.setAttribute('height', '40');
                        imgEl30.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-10/loan_repayment.svg');
                        imgEl30.setAttribute('alt', 'Loan Repayment');
                        imgEl30.setAttribute('title', 'loan_repayment');
                      pictureEl24.append(imgEl30);
                    aEl31.append(pictureEl24);

                      const spanEl38 = document.createElement('span');
                      spanEl38.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      spanEl38.setAttribute('class', 'card__iconText');
                      spanEl38.textContent = 'Loan Repayment';
                    aEl31.append(spanEl38);
                  liEl24.append(aEl31);
                ulEl4.append(liEl24);

                  const liEl25 = document.createElement('li');
                  liEl25.setAttribute('_ngcontent-serverapp-c1004086730', '');

                    const aEl32 = document.createElement('a');
                    aEl32.setAttribute('_ngcontent-serverapp-c1004086730', '');
                    aEl32.setAttribute('title', 'Insurance');
                    aEl32.setAttribute('href', '/insurance-premium-payment');
                    aEl32.setAttribute('id', 'hp_bbps_insurance');

                      const pictureEl25 = document.createElement('picture');
                      pictureEl25.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      pictureEl25.setAttribute('class', 'card__icon');

                        const imgEl31 = document.createElement('img');
                        imgEl31.setAttribute('_ngcontent-serverapp-c1004086730', '');
                        imgEl31.setAttribute('width', '40');
                        imgEl31.setAttribute('height', '40');
                        imgEl31.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-10/insurance.svg');
                        imgEl31.setAttribute('alt', 'Insurance');
                        imgEl31.setAttribute('title', 'insurance');
                      pictureEl25.append(imgEl31);
                    aEl32.append(pictureEl25);

                      const spanEl39 = document.createElement('span');
                      spanEl39.setAttribute('_ngcontent-serverapp-c1004086730', '');
                      spanEl39.setAttribute('class', 'card__iconText');
                      spanEl39.textContent = 'Insurance';
                    aEl32.append(spanEl39);
                  liEl25.append(aEl32);
                ulEl4.append(liEl25);
              divEl38.append(ulEl4);
            divEl35.append(divEl38);
          appiconcardlargeEl.append(divEl35);
        divEl34.append(appiconcardlargeEl);
      divEl33.append(divEl34);
    divEl32.append(divEl33);

      const divEl39 = document.createElement('div');
      divEl39.setAttribute('_ngcontent-serverapp-c2882330755', '');
      divEl39.setAttribute('class', 'row row-space row-gridSpace mb-0');

        const divEl40 = document.createElement('div');
        divEl40.setAttribute('_ngcontent-serverapp-c2882330755', '');
        divEl40.setAttribute('class', 'col-lg-8');

          const appiconcardmediumEl = document.createElement('appiconcardmedium');
          appiconcardmediumEl.setAttribute('_ngcontent-serverapp-c2882330755', '');
          appiconcardmediumEl.setAttribute('_nghost-serverapp-c2272046038', '');

            const divEl41 = document.createElement('div');
            divEl41.setAttribute('_ngcontent-serverapp-c2272046038', '');
            divEl41.setAttribute('class', 'card card--double');

              const divEl42 = document.createElement('div');
              divEl42.setAttribute('_ngcontent-serverapp-c2272046038', '');
              divEl42.setAttribute('class', 'd-md-none');

                const h2El4 = document.createElement('h2');
                h2El4.setAttribute('_ngcontent-serverapp-c2272046038', '');
                h2El4.setAttribute('class', 'card__heading card__heading--medium text-center');
                h2El4.textContent = 'Insurance';
              divEl42.append(h2El4);

                const divEl43 = document.createElement('div');
                divEl43.setAttribute('_ngcontent-serverapp-c2272046038', '');
                divEl43.setAttribute('class', 'd-flex justify-content-center hidden');

                  const divEl44 = document.createElement('div');
                  divEl44.setAttribute('_ngcontent-serverapp-c2272046038', '');
                  divEl44.setAttribute('role', 'group');
                  divEl44.setAttribute('aria-label', 'Tab');
                  divEl44.setAttribute('class', 'tabs');

                    const buttonEl2 = document.createElement('button');
                    buttonEl2.setAttribute('_ngcontent-serverapp-c2272046038', '');
                    buttonEl2.setAttribute('type', 'button');
                    buttonEl2.setAttribute('class', 'tabs__btn active');
                    buttonEl2.setAttribute('title', 'General Insurance');
                    buttonEl2.textContent = 'General Insurance';
                  divEl44.append(buttonEl2);

                    const buttonEl3 = document.createElement('button');
                    buttonEl3.setAttribute('_ngcontent-serverapp-c2272046038', '');
                    buttonEl3.setAttribute('type', 'button');
                    buttonEl3.setAttribute('class', 'tabs__btn');
                    buttonEl3.setAttribute('title', 'Life Insurance');
                    buttonEl3.textContent = 'Life Insurance';
                  divEl44.append(buttonEl3);
                divEl43.append(divEl44);
              divEl42.append(divEl43);
            divEl41.append(divEl42);

              const divEl45 = document.createElement('div');
              divEl45.setAttribute('_ngcontent-serverapp-c2272046038', '');
              divEl45.setAttribute('class', 'd-flex');

                const divEl46 = document.createElement('div');
                divEl46.setAttribute('_ngcontent-serverapp-c2272046038', '');
                divEl46.setAttribute('class', 'card__wrap d-none d-md-block d-block');

                  const divEl47 = document.createElement('div');
                  divEl47.setAttribute('_ngcontent-serverapp-c2272046038', '');
                  divEl47.setAttribute('class', 'card__headWrap d-none d-md-flex');

                    const h2El5 = document.createElement('h2');
                    h2El5.setAttribute('_ngcontent-serverapp-c2272046038', '');
                    h2El5.setAttribute('class', 'card__heading');
                    h2El5.textContent = 'General Insurance';
                  divEl47.append(h2El5);

                    const applinkEl6 = document.createElement('applink');
                    applinkEl6.setAttribute('_ngcontent-serverapp-c2272046038', '');
                    applinkEl6.setAttribute('classes', 'button-link');

                      const aEl33 = document.createElement('a');
                      aEl33.setAttribute('title', 'View All');
                      aEl33.setAttribute('id', 'general_insurance_view_all');
                      aEl33.setAttribute('class', 'button-link');
                      aEl33.setAttribute('href', '/insurance#general-insurance');
                      aEl33.textContent = 'View All';
                    applinkEl6.append(aEl33);
                  divEl47.append(applinkEl6);
                divEl46.append(divEl47);

                  const divEl48 = document.createElement('div');
                  divEl48.setAttribute('_ngcontent-serverapp-c2272046038', '');
                  divEl48.setAttribute('class', 'card__contentWrap');

                    const ulEl5 = document.createElement('ul');
                    ulEl5.setAttribute('_ngcontent-serverapp-c2272046038', '');
                    ulEl5.setAttribute('class', 'card__iconList');

                      const liEl26 = document.createElement('li');
                      liEl26.setAttribute('_ngcontent-serverapp-c2272046038', '');
                      liEl26.setAttribute('classes', 'card__itemLink');
                      liEl26.setAttribute('class', 'card__item applink-flat');

                        const aEl34 = document.createElement('a');
                        aEl34.setAttribute('title', 'Four Wheeler');
                        aEl34.setAttribute('id', 'general_insurance_four_wheeler');
                        aEl34.setAttribute('class', 'card__itemLink');
                        aEl34.setAttribute('href', '/insurance/car-insurance');

                          const spanEl40 = document.createElement('span');
                          spanEl40.setAttribute('class', 'sr-only');
                          spanEl40.textContent = 'Four Wheeler';
                        aEl34.append(spanEl40);
                      liEl26.append(aEl34);

                        const pictureEl26 = document.createElement('picture');
                        pictureEl26.setAttribute('_ngcontent-serverapp-c2272046038', '');
                        pictureEl26.setAttribute('class', 'card__icon');

                          const imgEl32 = document.createElement('img');
                          imgEl32.setAttribute('_ngcontent-serverapp-c2272046038', '');
                          imgEl32.setAttribute('width', '40');
                          imgEl32.setAttribute('height', '40');
                          imgEl32.setAttribute('alt', 'four-wheeler');
                          imgEl32.setAttribute('title', 'Four Wheeler');
                          imgEl32.setAttribute('loading', 'lazy');
                          imgEl32.setAttribute('fetchpriority', 'auto');
                          imgEl32.setAttribute('ng-img', 'true');
                          imgEl32.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-03/four-wheeler.svg');
                        pictureEl26.append(imgEl32);
                      liEl26.append(pictureEl26);

                        const spanEl41 = document.createElement('span');
                        spanEl41.setAttribute('_ngcontent-serverapp-c2272046038', '');
                        spanEl41.setAttribute('class', 'card__iconText');
                        spanEl41.textContent = 'Four Wheeler';
                      liEl26.append(spanEl41);
                    ulEl5.append(liEl26);

                      const liEl27 = document.createElement('li');
                      liEl27.setAttribute('_ngcontent-serverapp-c2272046038', '');
                      liEl27.setAttribute('classes', 'card__itemLink');
                      liEl27.setAttribute('class', 'card__item applink-flat');

                        const aEl35 = document.createElement('a');
                        aEl35.setAttribute('title', 'Two Wheeler');
                        aEl35.setAttribute('id', 'general_insurance_two_wheeler');
                        aEl35.setAttribute('class', 'card__itemLink');
                        aEl35.setAttribute('href', '/insurance/two-wheeler-insurance');

                          const spanEl42 = document.createElement('span');
                          spanEl42.setAttribute('class', 'sr-only');
                          spanEl42.textContent = 'Two Wheeler';
                        aEl35.append(spanEl42);
                      liEl27.append(aEl35);

                        const pictureEl27 = document.createElement('picture');
                        pictureEl27.setAttribute('_ngcontent-serverapp-c2272046038', '');
                        pictureEl27.setAttribute('class', 'card__icon');

                          const imgEl33 = document.createElement('img');
                          imgEl33.setAttribute('_ngcontent-serverapp-c2272046038', '');
                          imgEl33.setAttribute('width', '40');
                          imgEl33.setAttribute('height', '40');
                          imgEl33.setAttribute('alt', 'two-wheeler');
                          imgEl33.setAttribute('title', 'Two Wheeler');
                          imgEl33.setAttribute('loading', 'lazy');
                          imgEl33.setAttribute('fetchpriority', 'auto');
                          imgEl33.setAttribute('ng-img', 'true');
                          imgEl33.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-03/two-wheeler_0.svg');
                        pictureEl27.append(imgEl33);
                      liEl27.append(pictureEl27);

                        const spanEl43 = document.createElement('span');
                        spanEl43.setAttribute('_ngcontent-serverapp-c2272046038', '');
                        spanEl43.setAttribute('class', 'card__iconText');
                        spanEl43.textContent = 'Two Wheeler';
                      liEl27.append(spanEl43);
                    ulEl5.append(liEl27);

                      const liEl28 = document.createElement('li');
                      liEl28.setAttribute('_ngcontent-serverapp-c2272046038', '');
                      liEl28.setAttribute('classes', 'card__itemLink');
                      liEl28.setAttribute('class', 'card__item applink-flat');

                        const aEl36 = document.createElement('a');
                        aEl36.setAttribute('title', 'Goods vehicle');
                        aEl36.setAttribute('id', 'general_insurance_goods_vehicle');
                        aEl36.setAttribute('class', 'card__itemLink');
                        aEl36.setAttribute('href', '/insurance/goods-carrying-vehicle-insurance');

                          const spanEl44 = document.createElement('span');
                          spanEl44.setAttribute('class', 'sr-only');
                          spanEl44.textContent = 'Goods vehicle';
                        aEl36.append(spanEl44);
                      liEl28.append(aEl36);

                        const pictureEl28 = document.createElement('picture');
                        pictureEl28.setAttribute('_ngcontent-serverapp-c2272046038', '');
                        pictureEl28.setAttribute('class', 'card__icon');

                          const imgEl34 = document.createElement('img');
                          imgEl34.setAttribute('_ngcontent-serverapp-c2272046038', '');
                          imgEl34.setAttribute('width', '40');
                          imgEl34.setAttribute('height', '40');
                          imgEl34.setAttribute('alt', 'goods-vehicle');
                          imgEl34.setAttribute('title', 'Goods vehicle');
                          imgEl34.setAttribute('loading', 'lazy');
                          imgEl34.setAttribute('fetchpriority', 'auto');
                          imgEl34.setAttribute('ng-img', 'true');
                          imgEl34.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-03/goods-vehicle.svg');
                        pictureEl28.append(imgEl34);
                      liEl28.append(pictureEl28);

                        const spanEl45 = document.createElement('span');
                        spanEl45.setAttribute('_ngcontent-serverapp-c2272046038', '');
                        spanEl45.setAttribute('class', 'card__iconText');
                        spanEl45.textContent = 'Goods vehicle';
                      liEl28.append(spanEl45);
                    ulEl5.append(liEl28);

                      const liEl29 = document.createElement('li');
                      liEl29.setAttribute('_ngcontent-serverapp-c2272046038', '');
                      liEl29.setAttribute('classes', 'card__itemLink');
                      liEl29.setAttribute('class', 'card__item applink-flat');

                        const aEl37 = document.createElement('a');
                        aEl37.setAttribute('title', 'Shri Criti Care Insurance');
                        aEl37.setAttribute('id', 'general_insurance_shri_criti_care_insurance');
                        aEl37.setAttribute('class', 'card__itemLink');
                        aEl37.setAttribute('href', '/insurance/shri-criti-care-insurance');

                          const spanEl46 = document.createElement('span');
                          spanEl46.setAttribute('class', 'sr-only');
                          spanEl46.textContent = 'Shri Criti Care Insurance';
                        aEl37.append(spanEl46);
                      liEl29.append(aEl37);

                        const pictureEl29 = document.createElement('picture');
                        pictureEl29.setAttribute('_ngcontent-serverapp-c2272046038', '');
                        pictureEl29.setAttribute('class', 'card__icon');

                          const imgEl35 = document.createElement('img');
                          imgEl35.setAttribute('_ngcontent-serverapp-c2272046038', '');
                          imgEl35.setAttribute('width', '40');
                          imgEl35.setAttribute('height', '40');
                          imgEl35.setAttribute('alt', 'critical-care-insurance');
                          imgEl35.setAttribute('title', 'Shri Criti Care Insurance');
                          imgEl35.setAttribute('loading', 'lazy');
                          imgEl35.setAttribute('fetchpriority', 'auto');
                          imgEl35.setAttribute('ng-img', 'true');
                          imgEl35.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-03/critical-care-insurance.svg');
                        pictureEl29.append(imgEl35);
                      liEl29.append(pictureEl29);

                        const spanEl47 = document.createElement('span');
                        spanEl47.setAttribute('_ngcontent-serverapp-c2272046038', '');
                        spanEl47.setAttribute('class', 'card__iconText');
                        spanEl47.textContent = 'Shri Criti Care Insurance';
                      liEl29.append(spanEl47);
                    ulEl5.append(liEl29);

                      const liEl30 = document.createElement('li');
                      liEl30.setAttribute('_ngcontent-serverapp-c2272046038', '');
                      liEl30.setAttribute('class', 'd-md-none');

                        const aEl38 = document.createElement('a');
                        aEl38.setAttribute('_ngcontent-serverapp-c2272046038', '');
                        aEl38.setAttribute('class', 'button-viewAll');
                        aEl38.setAttribute('title', 'View All');
                        aEl38.setAttribute('id', 'mobile_general_insurance_view_all');
                        aEl38.setAttribute('href', '/insurance#general-insurance');

                          const spanEl48 = document.createElement('span');
                          spanEl48.setAttribute('_ngcontent-serverapp-c2272046038', '');
                          spanEl48.setAttribute('class', 'button-viewAll-icon');
                        aEl38.append(spanEl48);
                      liEl30.append(aEl38);
                    ulEl5.append(liEl30);
                  divEl48.append(ulEl5);
                divEl46.append(divEl48);
              divEl45.append(divEl46);

                const divEl49 = document.createElement('div');
                divEl49.setAttribute('_ngcontent-serverapp-c2272046038', '');
                divEl49.setAttribute('class', 'card__wrap d-none d-md-block');

                  const divEl50 = document.createElement('div');
                  divEl50.setAttribute('_ngcontent-serverapp-c2272046038', '');
                  divEl50.setAttribute('class', 'card__headWrap d-none d-md-flex');

                    const h2El6 = document.createElement('h2');
                    h2El6.setAttribute('_ngcontent-serverapp-c2272046038', '');
                    h2El6.setAttribute('class', 'card__heading');
                    h2El6.textContent = 'Life Insurance';
                  divEl50.append(h2El6);

                    const applinkEl7 = document.createElement('applink');
                    applinkEl7.setAttribute('_ngcontent-serverapp-c2272046038', '');
                    applinkEl7.setAttribute('classes', 'button-link');

                      const aEl39 = document.createElement('a');
                      aEl39.setAttribute('title', 'View All');
                      aEl39.setAttribute('id', 'life_insurance_view_all');
                      aEl39.setAttribute('class', 'button-link');
                      aEl39.setAttribute('href', '/insurance#life-insurance');
                      aEl39.textContent = 'View All';
                    applinkEl7.append(aEl39);
                  divEl50.append(applinkEl7);
                divEl49.append(divEl50);

                  const divEl51 = document.createElement('div');
                  divEl51.setAttribute('_ngcontent-serverapp-c2272046038', '');
                  divEl51.setAttribute('class', 'card__contentWrap');

                    const ulEl6 = document.createElement('ul');
                    ulEl6.setAttribute('_ngcontent-serverapp-c2272046038', '');
                    ulEl6.setAttribute('class', 'card__iconList');

                      const liEl31 = document.createElement('li');
                      liEl31.setAttribute('_ngcontent-serverapp-c2272046038', '');
                      liEl31.setAttribute('classes', 'card__itemLink');
                      liEl31.setAttribute('class', 'card__item applink-flat');

                        const aEl40 = document.createElement('a');
                        aEl40.setAttribute('title', 'Shriram Life Assured Income Plan');
                        aEl40.setAttribute('id', 'life_insurance_shriram_life_assured_income_plan');
                        aEl40.setAttribute('class', 'card__itemLink');
                        aEl40.setAttribute('href', '/insurance/shriram-life-assured-income-plan');

                          const spanEl49 = document.createElement('span');
                          spanEl49.setAttribute('class', 'sr-only');
                          spanEl49.textContent = 'Shriram Life Assured Income Plan';
                        aEl40.append(spanEl49);
                      liEl31.append(aEl40);

                        const pictureEl30 = document.createElement('picture');
                        pictureEl30.setAttribute('_ngcontent-serverapp-c2272046038', '');
                        pictureEl30.setAttribute('class', 'card__icon');

                          const imgEl36 = document.createElement('img');
                          imgEl36.setAttribute('_ngcontent-serverapp-c2272046038', '');
                          imgEl36.setAttribute('width', '40');
                          imgEl36.setAttribute('height', '40');
                          imgEl36.setAttribute('alt', 'shriram-life-assured-income-plan');
                          imgEl36.setAttribute('title', 'Shriram Life Assured Income Plan');
                          imgEl36.setAttribute('loading', 'lazy');
                          imgEl36.setAttribute('fetchpriority', 'auto');
                          imgEl36.setAttribute('ng-img', 'true');
                          imgEl36.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-03/shriram-life-assured-income-plan.svg');
                        pictureEl30.append(imgEl36);
                      liEl31.append(pictureEl30);

                        const spanEl50 = document.createElement('span');
                        spanEl50.setAttribute('_ngcontent-serverapp-c2272046038', '');
                        spanEl50.setAttribute('class', 'card__iconText');
                        spanEl50.textContent = 'Shriram Life Assured Income Plan';
                      liEl31.append(spanEl50);
                    ulEl6.append(liEl31);

                      const liEl32 = document.createElement('li');
                      liEl32.setAttribute('_ngcontent-serverapp-c2272046038', '');
                      liEl32.setAttribute('classes', 'card__itemLink');
                      liEl32.setAttribute('class', 'card__item applink-flat');

                        const aEl41 = document.createElement('a');
                        aEl41.setAttribute('title', 'Shriram Life Early Cash Plan');
                        aEl41.setAttribute('id', 'life_insurance_shriram_life_early_cash_plan');
                        aEl41.setAttribute('class', 'card__itemLink');
                        aEl41.setAttribute('href', '/insurance/shriram-life-early-cash-plan');

                          const spanEl51 = document.createElement('span');
                          spanEl51.setAttribute('class', 'sr-only');
                          spanEl51.textContent = 'Shriram Life Early Cash Plan';
                        aEl41.append(spanEl51);
                      liEl32.append(aEl41);

                        const pictureEl31 = document.createElement('picture');
                        pictureEl31.setAttribute('_ngcontent-serverapp-c2272046038', '');
                        pictureEl31.setAttribute('class', 'card__icon');

                          const imgEl37 = document.createElement('img');
                          imgEl37.setAttribute('_ngcontent-serverapp-c2272046038', '');
                          imgEl37.setAttribute('width', '40');
                          imgEl37.setAttribute('height', '40');
                          imgEl37.setAttribute('alt', 'early-cash-plan');
                          imgEl37.setAttribute('title', 'Shriram Life Early Cash Plan');
                          imgEl37.setAttribute('loading', 'lazy');
                          imgEl37.setAttribute('fetchpriority', 'auto');
                          imgEl37.setAttribute('ng-img', 'true');
                          imgEl37.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-03/early-cash-plan.svg');
                        pictureEl31.append(imgEl37);
                      liEl32.append(pictureEl31);

                        const spanEl52 = document.createElement('span');
                        spanEl52.setAttribute('_ngcontent-serverapp-c2272046038', '');
                        spanEl52.setAttribute('class', 'card__iconText');
                        spanEl52.textContent = 'Shriram Life Early Cash Plan';
                      liEl32.append(spanEl52);
                    ulEl6.append(liEl32);

                      const liEl33 = document.createElement('li');
                      liEl33.setAttribute('_ngcontent-serverapp-c2272046038', '');
                      liEl33.setAttribute('classes', 'card__itemLink');
                      liEl33.setAttribute('class', 'card__item applink-flat');

                        const aEl42 = document.createElement('a');
                        aEl42.setAttribute('title', 'Shriram Life Premier Assured Benefit Plan');
                        aEl42.setAttribute('id', 'life_insurance_shriram_life_premier_assured_benefit_plan');
                        aEl42.setAttribute('class', 'card__itemLink');
                        aEl42.setAttribute('href', '/insurance/shriram-life-premier-assured-benefit-plan');

                          const spanEl53 = document.createElement('span');
                          spanEl53.setAttribute('class', 'sr-only');
                          spanEl53.textContent = 'Shriram Life Premier Assured Benefit Plan';
                        aEl42.append(spanEl53);
                      liEl33.append(aEl42);

                        const pictureEl32 = document.createElement('picture');
                        pictureEl32.setAttribute('_ngcontent-serverapp-c2272046038', '');
                        pictureEl32.setAttribute('class', 'card__icon');

                          const imgEl38 = document.createElement('img');
                          imgEl38.setAttribute('_ngcontent-serverapp-c2272046038', '');
                          imgEl38.setAttribute('width', '40');
                          imgEl38.setAttribute('height', '40');
                          imgEl38.setAttribute('alt', 'shriram-life-early-cash-plan');
                          imgEl38.setAttribute('title', 'Shriram Life Premier Assured Benefit Plan');
                          imgEl38.setAttribute('loading', 'lazy');
                          imgEl38.setAttribute('fetchpriority', 'auto');
                          imgEl38.setAttribute('ng-img', 'true');
                          imgEl38.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-03/user.svg');
                        pictureEl32.append(imgEl38);
                      liEl33.append(pictureEl32);

                        const spanEl54 = document.createElement('span');
                        spanEl54.setAttribute('_ngcontent-serverapp-c2272046038', '');
                        spanEl54.setAttribute('class', 'card__iconText');
                        spanEl54.textContent = 'Shriram Life Premier Assured Benefit Plan';
                      liEl33.append(spanEl54);
                    ulEl6.append(liEl33);

                      const liEl34 = document.createElement('li');
                      liEl34.setAttribute('_ngcontent-serverapp-c2272046038', '');
                      liEl34.setAttribute('classes', 'card__itemLink');
                      liEl34.setAttribute('class', 'card__item applink-flat');

                        const aEl43 = document.createElement('a');
                        aEl43.setAttribute('title', 'Shriram Life New Shri Vidya Plan');
                        aEl43.setAttribute('id', 'life_insurance_shriram_life_new_shri_vidya_plan');
                        aEl43.setAttribute('class', 'card__itemLink');
                        aEl43.setAttribute('href', '/insurance/shriram-life-new-shri-vidya-plan');

                          const spanEl55 = document.createElement('span');
                          spanEl55.setAttribute('class', 'sr-only');
                          spanEl55.textContent = 'Shriram Life New Shri Vidya Plan';
                        aEl43.append(spanEl55);
                      liEl34.append(aEl43);

                        const pictureEl33 = document.createElement('picture');
                        pictureEl33.setAttribute('_ngcontent-serverapp-c2272046038', '');
                        pictureEl33.setAttribute('class', 'card__icon');

                          const imgEl39 = document.createElement('img');
                          imgEl39.setAttribute('_ngcontent-serverapp-c2272046038', '');
                          imgEl39.setAttribute('width', '40');
                          imgEl39.setAttribute('height', '40');
                          imgEl39.setAttribute('alt', 'shriram-life-assured-income-plan');
                          imgEl39.setAttribute('title', 'Shriram Life New Shri Vidya Plan');
                          imgEl39.setAttribute('loading', 'lazy');
                          imgEl39.setAttribute('fetchpriority', 'auto');
                          imgEl39.setAttribute('ng-img', 'true');
                          imgEl39.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-03/ticksheild_0.svg');
                        pictureEl33.append(imgEl39);
                      liEl34.append(pictureEl33);

                        const spanEl56 = document.createElement('span');
                        spanEl56.setAttribute('_ngcontent-serverapp-c2272046038', '');
                        spanEl56.setAttribute('class', 'card__iconText');
                        spanEl56.textContent = 'Shriram Life New Shri Vidya Plan';
                      liEl34.append(spanEl56);
                    ulEl6.append(liEl34);

                      const liEl35 = document.createElement('li');
                      liEl35.setAttribute('_ngcontent-serverapp-c2272046038', '');
                      liEl35.setAttribute('class', 'd-md-none');

                        const aEl44 = document.createElement('a');
                        aEl44.setAttribute('_ngcontent-serverapp-c2272046038', '');
                        aEl44.setAttribute('class', 'button-viewAll');
                        aEl44.setAttribute('title', 'View All');
                        aEl44.setAttribute('id', 'mobile_life_insurance_view_all');
                        aEl44.setAttribute('href', '/insurance#life-insurance');

                          const spanEl57 = document.createElement('span');
                          spanEl57.setAttribute('_ngcontent-serverapp-c2272046038', '');
                          spanEl57.setAttribute('class', 'button-viewAll-icon');
                        aEl44.append(spanEl57);
                      liEl35.append(aEl44);
                    ulEl6.append(liEl35);
                  divEl51.append(ulEl6);
                divEl49.append(divEl51);
              divEl45.append(divEl49);
            divEl41.append(divEl45);
          appiconcardmediumEl.append(divEl41);
        divEl40.append(appiconcardmediumEl);
      divEl39.append(divEl40);

        const divEl52 = document.createElement('div');
        divEl52.setAttribute('_ngcontent-serverapp-c2882330755', '');
        divEl52.setAttribute('class', 'col-lg-4');

          const appiconcardsmallEl3 = document.createElement('appiconcardsmall');
          appiconcardsmallEl3.setAttribute('_ngcontent-serverapp-c2882330755', '');
          appiconcardsmallEl3.setAttribute('_nghost-serverapp-c2201166703', '');

            const divEl53 = document.createElement('div');
            divEl53.setAttribute('_ngcontent-serverapp-c2201166703', '');
            divEl53.setAttribute('class', 'card');

              const divEl54 = document.createElement('div');
              divEl54.setAttribute('_ngcontent-serverapp-c2201166703', '');
              divEl54.setAttribute('class', 'card__headWrap');

                const h2El7 = document.createElement('h2');
                h2El7.setAttribute('_ngcontent-serverapp-c2201166703', '');
                h2El7.setAttribute('class', 'card__heading');
                h2El7.textContent = 'Two Wheeler Marketplace';
              divEl54.append(h2El7);

                const applinkEl8 = document.createElement('applink');
                applinkEl8.setAttribute('_ngcontent-serverapp-c2201166703', '');
                applinkEl8.setAttribute('classes', 'button-link');

                  const aEl45 = document.createElement('a');
                  aEl45.setAttribute('title', 'View more');
                  aEl45.setAttribute('href', 'https://auto.shriramfinance.in');
                  aEl45.setAttribute('target', '_blank');
                  aEl45.setAttribute('id', 'two_wheeler_marketplace_view_more');
                  aEl45.setAttribute('class', 'button-link');
                  aEl45.textContent = 'View more';
                applinkEl8.append(aEl45);
              divEl54.append(applinkEl8);
            divEl53.append(divEl54);

              const divEl55 = document.createElement('div');
              divEl55.setAttribute('_ngcontent-serverapp-c2201166703', '');
              divEl55.setAttribute('class', 'card__contentWrap');

                const ulEl7 = document.createElement('ul');
                ulEl7.setAttribute('_ngcontent-serverapp-c2201166703', '');
                ulEl7.setAttribute('class', 'card__iconList');

                  const liEl36 = document.createElement('li');
                  liEl36.setAttribute('_ngcontent-serverapp-c2201166703', '');
                  liEl36.setAttribute('classes', 'card__itemLink');
                  liEl36.setAttribute('class', 'card__item applink-flat');

                    const aEl46 = document.createElement('a');
                    aEl46.setAttribute('title', 'Bikes');
                    aEl46.setAttribute('href', 'https://auto.shriramfinance.in/latest-bikes');
                    aEl46.setAttribute('target', '_blank');
                    aEl46.setAttribute('id', 'two_wheeler_marketplace_bikes');
                    aEl46.setAttribute('class', 'card__itemLink');

                      const spanEl58 = document.createElement('span');
                      spanEl58.setAttribute('class', 'sr-only');
                      spanEl58.textContent = 'Bikes';
                    aEl46.append(spanEl58);
                  liEl36.append(aEl46);

                    const pictureEl34 = document.createElement('picture');
                    pictureEl34.setAttribute('_ngcontent-serverapp-c2201166703', '');
                    pictureEl34.setAttribute('class', 'card__icon');

                      const imgEl40 = document.createElement('img');
                      imgEl40.setAttribute('_ngcontent-serverapp-c2201166703', '');
                      imgEl40.setAttribute('width', '40');
                      imgEl40.setAttribute('height', '40');
                      imgEl40.setAttribute('priority', '');
                      imgEl40.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2025-03/tw-bike.svg');
                      imgEl40.setAttribute('alt', 'TW Bike');
                      imgEl40.setAttribute('title', 'Bikes');
                    pictureEl34.append(imgEl40);
                  liEl36.append(pictureEl34);

                    const spanEl59 = document.createElement('span');
                    spanEl59.setAttribute('_ngcontent-serverapp-c2201166703', '');
                    spanEl59.setAttribute('class', 'card__iconText');
                    spanEl59.textContent = 'Bikes';
                  liEl36.append(spanEl59);
                ulEl7.append(liEl36);

                  const liEl37 = document.createElement('li');
                  liEl37.setAttribute('_ngcontent-serverapp-c2201166703', '');
                  liEl37.setAttribute('classes', 'card__itemLink');
                  liEl37.setAttribute('class', 'card__item applink-flat');

                    const aEl47 = document.createElement('a');
                    aEl47.setAttribute('title', 'Scooters');
                    aEl47.setAttribute('href', 'https://auto.shriramfinance.in/latest-scooters');
                    aEl47.setAttribute('target', '_blank');
                    aEl47.setAttribute('id', 'two_wheeler_marketplace_scooters');
                    aEl47.setAttribute('class', 'card__itemLink');

                      const spanEl60 = document.createElement('span');
                      spanEl60.setAttribute('class', 'sr-only');
                      spanEl60.textContent = 'Scooters';
                    aEl47.append(spanEl60);
                  liEl37.append(aEl47);

                    const pictureEl35 = document.createElement('picture');
                    pictureEl35.setAttribute('_ngcontent-serverapp-c2201166703', '');
                    pictureEl35.setAttribute('class', 'card__icon');

                      const imgEl41 = document.createElement('img');
                      imgEl41.setAttribute('_ngcontent-serverapp-c2201166703', '');
                      imgEl41.setAttribute('width', '40');
                      imgEl41.setAttribute('height', '40');
                      imgEl41.setAttribute('priority', '');
                      imgEl41.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2025-03/tw-scooter.svg');
                      imgEl41.setAttribute('alt', 'TW Scooter');
                      imgEl41.setAttribute('title', 'Scooters');
                    pictureEl35.append(imgEl41);
                  liEl37.append(pictureEl35);

                    const spanEl61 = document.createElement('span');
                    spanEl61.setAttribute('_ngcontent-serverapp-c2201166703', '');
                    spanEl61.setAttribute('class', 'card__iconText');
                    spanEl61.textContent = 'Scooters';
                  liEl37.append(spanEl61);
                ulEl7.append(liEl37);

                  const liEl38 = document.createElement('li');
                  liEl38.setAttribute('_ngcontent-serverapp-c2201166703', '');
                  liEl38.setAttribute('classes', 'card__itemLink');
                  liEl38.setAttribute('class', 'card__item applink-flat');

                    const aEl48 = document.createElement('a');
                    aEl48.setAttribute('title', 'EV Hub');
                    aEl48.setAttribute('href', 'https://auto.shriramfinance.in/electric-bikes');
                    aEl48.setAttribute('target', '_blank');
                    aEl48.setAttribute('id', 'two_wheeler_marketplace_ev_hub');
                    aEl48.setAttribute('class', 'card__itemLink');

                      const spanEl62 = document.createElement('span');
                      spanEl62.setAttribute('class', 'sr-only');
                      spanEl62.textContent = 'EV Hub';
                    aEl48.append(spanEl62);
                  liEl38.append(aEl48);

                    const pictureEl36 = document.createElement('picture');
                    pictureEl36.setAttribute('_ngcontent-serverapp-c2201166703', '');
                    pictureEl36.setAttribute('class', 'card__icon');

                      const imgEl42 = document.createElement('img');
                      imgEl42.setAttribute('_ngcontent-serverapp-c2201166703', '');
                      imgEl42.setAttribute('width', '40');
                      imgEl42.setAttribute('height', '40');
                      imgEl42.setAttribute('priority', '');
                      imgEl42.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2025-03/tw-ev-hub.svg');
                      imgEl42.setAttribute('alt', 'EV Hub');
                      imgEl42.setAttribute('title', 'EV Hub');
                    pictureEl36.append(imgEl42);
                  liEl38.append(pictureEl36);

                    const spanEl63 = document.createElement('span');
                    spanEl63.setAttribute('_ngcontent-serverapp-c2201166703', '');
                    spanEl63.setAttribute('class', 'card__iconText');
                    spanEl63.textContent = 'EV Hub';
                  liEl38.append(spanEl63);
                ulEl7.append(liEl38);

                  const liEl39 = document.createElement('li');
                  liEl39.setAttribute('_ngcontent-serverapp-c2201166703', '');
                  liEl39.setAttribute('classes', 'card__itemLink');
                  liEl39.setAttribute('class', 'card__item applink-flat');

                    const aEl49 = document.createElement('a');
                    aEl49.setAttribute('title', 'Compare Bikes');
                    aEl49.setAttribute('href', 'https://auto.shriramfinance.in/compare-bikes');
                    aEl49.setAttribute('target', '_blank');
                    aEl49.setAttribute('id', 'two_wheeler_marketplace_compare_bikes');
                    aEl49.setAttribute('class', 'card__itemLink');

                      const spanEl64 = document.createElement('span');
                      spanEl64.setAttribute('class', 'sr-only');
                      spanEl64.textContent = 'Compare Bikes';
                    aEl49.append(spanEl64);
                  liEl39.append(aEl49);

                    const pictureEl37 = document.createElement('picture');
                    pictureEl37.setAttribute('_ngcontent-serverapp-c2201166703', '');
                    pictureEl37.setAttribute('class', 'card__icon');

                      const imgEl43 = document.createElement('img');
                      imgEl43.setAttribute('_ngcontent-serverapp-c2201166703', '');
                      imgEl43.setAttribute('width', '40');
                      imgEl43.setAttribute('height', '40');
                      imgEl43.setAttribute('priority', '');
                      imgEl43.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2025-03/tw-comp-bikes.svg');
                      imgEl43.setAttribute('alt', 'Compare Bikes');
                      imgEl43.setAttribute('title', 'Compare Bikes');
                    pictureEl37.append(imgEl43);
                  liEl39.append(pictureEl37);

                    const spanEl65 = document.createElement('span');
                    spanEl65.setAttribute('_ngcontent-serverapp-c2201166703', '');
                    spanEl65.setAttribute('class', 'card__iconText');
                    spanEl65.textContent = 'Compare Bikes';
                  liEl39.append(spanEl65);
                ulEl7.append(liEl39);
              divEl55.append(ulEl7);
            divEl53.append(divEl55);
          appiconcardsmallEl3.append(divEl53);
        divEl52.append(appiconcardsmallEl3);
      divEl39.append(divEl52);
    divEl32.append(divEl39);
  sectionEl.append(divEl32);
  container.append(sectionEl);


  block.textContent = '';
  block.append(container);
}