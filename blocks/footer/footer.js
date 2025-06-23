export default function decorate(block) {
  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  const footerEl = document.createElement('footer');
  footerEl.setAttribute('_ngcontent-serverapp-c553831109', '');
  footerEl.setAttribute('data-floating', 'footer');
  footerEl.setAttribute('id', 'footer-show');
  footerEl.setAttribute('class', 'footer footer-show');

    const sectionEl = document.createElement('section');
    sectionEl.setAttribute('_ngcontent-serverapp-c553831109', '');
    sectionEl.setAttribute('id', 'footer-section');
    sectionEl.setAttribute('class', 'footer__top');

      const divEl = document.createElement('div');
      divEl.setAttribute('_ngcontent-serverapp-c553831109', '');
      divEl.setAttribute('class', 'container');

        const divEl2 = document.createElement('div');
        divEl2.setAttribute('_ngcontent-serverapp-c553831109', '');
        divEl2.setAttribute('aria-label', 'global footer menu');
        divEl2.setAttribute('class', 'footer__overview');

          const divEl3 = document.createElement('div');
          divEl3.setAttribute('_ngcontent-serverapp-c553831109', '');
          divEl3.setAttribute('class', 'footer__group');

            const divEl4 = document.createElement('div');
            divEl4.setAttribute('_ngcontent-serverapp-c553831109', '');
            divEl4.setAttribute('class', 'footer__head js-footer');

              const h5El = document.createElement('h5');
              h5El.setAttribute('_ngcontent-serverapp-c553831109', '');
              h5El.setAttribute('class', 'footer__heading app-link-flat');

                const aEl = document.createElement('a');
                aEl.setAttribute('title', 'Investments');
                aEl.setAttribute('id', 'footer_nav_investments');
                aEl.setAttribute('href', '/investments');
                aEl.textContent = 'Investments';
              h5El.append(aEl);

                const spanEl = document.createElement('span');
                spanEl.setAttribute('_ngcontent-serverapp-c553831109', '');
                spanEl.setAttribute('class', 'footer__arrow');
              h5El.append(spanEl);
            divEl4.append(h5El);
          divEl3.append(divEl4);

            const divEl5 = document.createElement('div');
            divEl5.setAttribute('_ngcontent-serverapp-c553831109', '');
            divEl5.setAttribute('class', 'footer__content');

              const ulEl = document.createElement('ul');
              ulEl.setAttribute('_ngcontent-serverapp-c553831109', '');
              ulEl.setAttribute('class', 'footer__list');

                const liEl = document.createElement('li');
                liEl.setAttribute('_ngcontent-serverapp-c553831109', '');
                liEl.setAttribute('class', 'app-link-flat no--subMenu');

                  const aEl2 = document.createElement('a');
                  aEl2.setAttribute('title', 'Fixed Deposit');
                  aEl2.setAttribute('id', 'footer_nav_investments_fixed_deposit');
                  aEl2.setAttribute('href', '/fixed-deposit');
                  aEl2.textContent = 'Fixed Deposit';
                liEl.append(aEl2);
              ulEl.append(liEl);

                const liEl2 = document.createElement('li');
                liEl2.setAttribute('_ngcontent-serverapp-c553831109', '');
                liEl2.setAttribute('class', 'app-link-flat no--subMenu');

                  const aEl3 = document.createElement('a');
                  aEl3.setAttribute('title', 'FD Calculator');
                  aEl3.setAttribute('id', 'footer_nav_investments_fd_calculator');
                  aEl3.setAttribute('href', '/fixed-deposit-calculator');
                  aEl3.textContent = 'FD Calculator';
                liEl2.append(aEl3);
              ulEl.append(liEl2);

                const liEl3 = document.createElement('li');
                liEl3.setAttribute('_ngcontent-serverapp-c553831109', '');
                liEl3.setAttribute('class', 'app-link-flat no--subMenu');

                  const aEl4 = document.createElement('a');
                  aEl4.setAttribute('title', 'FD Interest rate');
                  aEl4.setAttribute('id', 'footer_nav_investments_fd_interest_rate');
                  aEl4.setAttribute('href', '/fixed-deposit-interest-rates');
                  aEl4.textContent = 'FD Interest rate';
                liEl3.append(aEl4);
              ulEl.append(liEl3);

                const liEl4 = document.createElement('li');
                liEl4.setAttribute('_ngcontent-serverapp-c553831109', '');
                liEl4.setAttribute('class', 'app-link-flat no--subMenu');

                  const aEl5 = document.createElement('a');
                  aEl5.setAttribute('title', 'FD Schemes');
                  aEl5.setAttribute('href', 'https://www.shriramfinance.in/fd-schemes');
                  aEl5.setAttribute('target', '_self');
                  aEl5.setAttribute('id', 'footer_nav_investments_fd_schemes');
                  aEl5.textContent = 'FD Schemes';
                liEl4.append(aEl5);
              ulEl.append(liEl4);

                const liEl5 = document.createElement('li');
                liEl5.setAttribute('_ngcontent-serverapp-c553831109', '');
                liEl5.setAttribute('class', 'app-link-flat no--subMenu');

                  const aEl6 = document.createElement('a');
                  aEl6.setAttribute('title', 'Fixed Investment Plan');
                  aEl6.setAttribute('id', 'footer_nav_investments_fixed_investment_plan');
                  aEl6.setAttribute('href', '/fixed-investment-plan');
                  aEl6.textContent = 'Fixed Investment Plan';
                liEl5.append(aEl6);
              ulEl.append(liEl5);

                const liEl6 = document.createElement('li');
                liEl6.setAttribute('_ngcontent-serverapp-c553831109', '');
                liEl6.setAttribute('class', 'app-link-flat no--subMenu');

                  const aEl7 = document.createElement('a');
                  aEl7.setAttribute('title', 'FIP Calculator');
                  aEl7.setAttribute('id', 'footer_nav_investments_fip_calculator');
                  aEl7.setAttribute('href', '/fixed-investment-plan-calculator');
                  aEl7.textContent = 'FIP Calculator';
                liEl6.append(aEl7);
              ulEl.append(liEl6);

                const liEl7 = document.createElement('li');
                liEl7.setAttribute('_ngcontent-serverapp-c553831109', '');
                liEl7.setAttribute('class', 'app-link-flat no--subMenu');

                  const aEl8 = document.createElement('a');
                  aEl8.setAttribute('title', 'Digital Gold');
                  aEl8.setAttribute('id', 'footer_nav_investments_digital_gold');
                  aEl8.setAttribute('href', '/digital-gold');
                  aEl8.textContent = 'Digital Gold';
                liEl7.append(aEl8);
              ulEl.append(liEl7);

                const liEl8 = document.createElement('li');
                liEl8.setAttribute('_ngcontent-serverapp-c553831109', '');
                liEl8.setAttribute('class', 'app-link-flat no--subMenu');

                  const aEl9 = document.createElement('a');
                  aEl9.setAttribute('title', 'Digital Silver');
                  aEl9.setAttribute('id', 'footer_nav_investments_digital_silver');
                  aEl9.setAttribute('href', '/digital-silver');
                  aEl9.textContent = 'Digital Silver';
                liEl8.append(aEl9);
              ulEl.append(liEl8);

                const liEl9 = document.createElement('li');
                liEl9.setAttribute('_ngcontent-serverapp-c553831109', '');
                liEl9.setAttribute('class', 'app-link-flat no--subMenu');

                  const aEl10 = document.createElement('a');
                  aEl10.setAttribute('title', 'Health Care Plus');
                  aEl10.setAttribute('id', 'footer_nav_investments_health_care_plus');
                  aEl10.setAttribute('href', '/health-care-plus');
                  aEl10.textContent = 'Health Care Plus';
                liEl9.append(aEl10);
              ulEl.append(liEl9);
            divEl5.append(ulEl);
          divEl3.append(divEl5);
        divEl2.append(divEl3);

          const divEl6 = document.createElement('div');
          divEl6.setAttribute('_ngcontent-serverapp-c553831109', '');
          divEl6.setAttribute('class', 'footer__group');

            const divEl7 = document.createElement('div');
            divEl7.setAttribute('_ngcontent-serverapp-c553831109', '');
            divEl7.setAttribute('class', 'footer__head js-footer');

              const h5El2 = document.createElement('h5');
              h5El2.setAttribute('_ngcontent-serverapp-c553831109', '');
              h5El2.setAttribute('class', 'footer__heading app-link-flat');

                const aEl11 = document.createElement('a');
                aEl11.setAttribute('title', 'Loans');
                aEl11.setAttribute('id', 'footer_nav_loans');
                aEl11.setAttribute('href', '/loans');
                aEl11.textContent = 'Loans';
              h5El2.append(aEl11);

                const spanEl2 = document.createElement('span');
                spanEl2.setAttribute('_ngcontent-serverapp-c553831109', '');
                spanEl2.setAttribute('class', 'footer__arrow');
              h5El2.append(spanEl2);
            divEl7.append(h5El2);
          divEl6.append(divEl7);

            const divEl8 = document.createElement('div');
            divEl8.setAttribute('_ngcontent-serverapp-c553831109', '');
            divEl8.setAttribute('class', 'footer__content');

              const divEl9 = document.createElement('div');
              divEl9.setAttribute('_ngcontent-serverapp-c553831109', '');
              divEl9.setAttribute('class', 'footer__col footer__col--oneBythree');

                const divEl10 = document.createElement('div');
                divEl10.setAttribute('_ngcontent-serverapp-c553831109', '');
                divEl10.setAttribute('class', 'footer__inner');

                  const h5El3 = document.createElement('h5');
                  h5El3.setAttribute('_ngcontent-serverapp-c553831109', '');
                  h5El3.setAttribute('class', 'app-link-flat footer__listHead');

                    const spanEl3 = document.createElement('span');
                    spanEl3.textContent = 'Personal Use';
                  h5El3.append(spanEl3);
                divEl10.append(h5El3);

                  const divEl11 = document.createElement('div');
                  divEl11.setAttribute('_ngcontent-serverapp-c553831109', '');

                    const divEl12 = document.createElement('div');
                    divEl12.setAttribute('_ngcontent-serverapp-c553831109', '');

                      const divEl13 = document.createElement('div');
                      divEl13.setAttribute('_ngcontent-serverapp-c553831109', '');
                      divEl13.setAttribute('class', 'footer__loans--left');

                        const applinkEl = document.createElement('app-link');
                        applinkEl.setAttribute('_ngcontent-serverapp-c553831109', '');

                          const aEl12 = document.createElement('a');
                          aEl12.setAttribute('title', 'Personal Loan');
                          aEl12.setAttribute('id', 'footer_nav_loans_personal_use_personal_loan');
                          aEl12.setAttribute('class', 'no--subMenu');
                          aEl12.setAttribute('href', '/personal-loan');
                          aEl12.textContent = 'Personal Loan';
                        applinkEl.append(aEl12);
                      divEl13.append(applinkEl);
                    divEl12.append(divEl13);
                  divEl11.append(divEl12);

                    const divEl14 = document.createElement('div');
                    divEl14.setAttribute('_ngcontent-serverapp-c553831109', '');

                      const divEl15 = document.createElement('div');
                      divEl15.setAttribute('_ngcontent-serverapp-c553831109', '');
                      divEl15.setAttribute('class', 'footer__loans--left');

                        const applinkEl2 = document.createElement('app-link');
                        applinkEl2.setAttribute('_ngcontent-serverapp-c553831109', '');

                          const aEl13 = document.createElement('a');
                          aEl13.setAttribute('title', 'Two-Wheeler Loan');
                          aEl13.setAttribute('id', 'footer_nav_loans_personal_use_two_wheeler_loan');
                          aEl13.setAttribute('class', 'no--subMenu');
                          aEl13.setAttribute('href', '/two-wheeler-loan');
                          aEl13.textContent = 'Two-Wheeler Loan';
                        applinkEl2.append(aEl13);
                      divEl15.append(applinkEl2);
                    divEl14.append(divEl15);
                  divEl11.append(divEl14);

                    const divEl16 = document.createElement('div');
                    divEl16.setAttribute('_ngcontent-serverapp-c553831109', '');

                      const divEl17 = document.createElement('div');
                      divEl17.setAttribute('_ngcontent-serverapp-c553831109', '');
                      divEl17.setAttribute('class', 'footer__loans--left');

                        const applinkEl3 = document.createElement('app-link');
                        applinkEl3.setAttribute('_ngcontent-serverapp-c553831109', '');

                          const aEl14 = document.createElement('a');
                          aEl14.setAttribute('title', 'Gold Loan');
                          aEl14.setAttribute('href', 'https://www.shriramfinance.in/gold-loan');
                          aEl14.setAttribute('target', '_self');
                          aEl14.setAttribute('id', 'footer_nav_loans_personal_use_gold_loan');
                          aEl14.setAttribute('class', 'no--subMenu');
                          aEl14.textContent = 'Gold Loan';
                        applinkEl3.append(aEl14);
                      divEl17.append(applinkEl3);
                    divEl16.append(divEl17);
                  divEl11.append(divEl16);

                    const divEl18 = document.createElement('div');
                    divEl18.setAttribute('_ngcontent-serverapp-c553831109', '');

                      const divEl19 = document.createElement('div');
                      divEl19.setAttribute('_ngcontent-serverapp-c553831109', '');
                      divEl19.setAttribute('class', 'footer__loans--left');

                        const applinkEl4 = document.createElement('app-link');
                        applinkEl4.setAttribute('_ngcontent-serverapp-c553831109', '');

                          const aEl15 = document.createElement('a');
                          aEl15.setAttribute('title', 'Used Car Loan');
                          aEl15.setAttribute('id', 'footer_nav_loans_personal_use_used_car_loan');
                          aEl15.setAttribute('class', 'no--subMenu');
                          aEl15.setAttribute('href', '/used-car-loan');
                          aEl15.textContent = 'Used Car Loan';
                        applinkEl4.append(aEl15);
                      divEl19.append(applinkEl4);
                    divEl18.append(divEl19);
                  divEl11.append(divEl18);
                divEl10.append(divEl11);
              divEl9.append(divEl10);

                const divEl20 = document.createElement('div');
                divEl20.setAttribute('_ngcontent-serverapp-c553831109', '');
                divEl20.setAttribute('class', 'footer__inner');

                  const h5El4 = document.createElement('h5');
                  h5El4.setAttribute('_ngcontent-serverapp-c553831109', '');
                  h5El4.setAttribute('class', 'app-link-flat footer__listHead');

                    const spanEl4 = document.createElement('span');
                    spanEl4.textContent = 'Commercial Use';
                  h5El4.append(spanEl4);
                divEl20.append(h5El4);

                  const divEl21 = document.createElement('div');
                  divEl21.setAttribute('_ngcontent-serverapp-c553831109', '');
                  divEl21.setAttribute('class', 'footer__loansright');

                    const divEl22 = document.createElement('div');
                    divEl22.setAttribute('_ngcontent-serverapp-c553831109', '');
                    divEl22.setAttribute('class', 'footer__inner');

                      const divEl23 = document.createElement('div');
                      divEl23.setAttribute('_ngcontent-serverapp-c553831109', '');
                      divEl23.setAttribute('class', 'footer__loans');

                        const h5El5 = document.createElement('h5');
                        h5El5.setAttribute('_ngcontent-serverapp-c553831109', '');
                        h5El5.setAttribute('class', 'app-link-flat footer__listHead');

                          const aEl16 = document.createElement('a');
                          aEl16.setAttribute('title', '');
                          aEl16.setAttribute('id', 'footer_nav_loans_loans_commercial_vehicle_loans');
                          aEl16.setAttribute('href', '/commercial-vehicle-loan');
                          aEl16.textContent = 'Commercial Vehicle Loans';
                        h5El5.append(aEl16);
                      divEl23.append(h5El5);

                        const ulEl2 = document.createElement('ul');
                        ulEl2.setAttribute('_ngcontent-serverapp-c553831109', '');
                        ulEl2.setAttribute('class', 'footer__list');

                          const liEl10 = document.createElement('li');
                          liEl10.setAttribute('_ngcontent-serverapp-c553831109', '');
                          liEl10.setAttribute('class', 'no--subMenu');

                            const applinkEl5 = document.createElement('app-link');
                            applinkEl5.setAttribute('_ngcontent-serverapp-c553831109', '');

                              const aEl17 = document.createElement('a');
                              aEl17.setAttribute('title', 'Commercial Goods Vehicle Finance');
                              aEl17.setAttribute('id', 'footer_nav_loans_commercial_use_commercial_vehicle_loans_commercial_goods_vehicle_finance');
                              aEl17.setAttribute('class', 'no--subMenu');
                              aEl17.setAttribute('href', '/commercial-goods-vehicle-finance');
                              aEl17.textContent = 'Commercial Goods Vehicle Finance';
                            applinkEl5.append(aEl17);
                          liEl10.append(applinkEl5);
                        ulEl2.append(liEl10);

                          const liEl11 = document.createElement('li');
                          liEl11.setAttribute('_ngcontent-serverapp-c553831109', '');
                          liEl11.setAttribute('class', 'no--subMenu');

                            const applinkEl6 = document.createElement('app-link');
                            applinkEl6.setAttribute('_ngcontent-serverapp-c553831109', '');

                              const aEl18 = document.createElement('a');
                              aEl18.setAttribute('title', 'Passenger Commercial Vehicle Finance');
                              aEl18.setAttribute('id', 'footer_nav_loans_commercial_use_commercial_vehicle_loans_passenger_commercial_vehicle_finance');
                              aEl18.setAttribute('class', 'no--subMenu');
                              aEl18.setAttribute('href', '/passenger-commercial-vehicle-finance');
                              aEl18.textContent = 'Passenger Commercial Vehicle Finance';
                            applinkEl6.append(aEl18);
                          liEl11.append(applinkEl6);
                        ulEl2.append(liEl11);

                          const liEl12 = document.createElement('li');
                          liEl12.setAttribute('_ngcontent-serverapp-c553831109', '');
                          liEl12.setAttribute('class', 'no--subMenu');

                            const applinkEl7 = document.createElement('app-link');
                            applinkEl7.setAttribute('_ngcontent-serverapp-c553831109', '');

                              const aEl19 = document.createElement('a');
                              aEl19.setAttribute('title', 'Tractor & Farm Equipment Loan');
                              aEl19.setAttribute('id', 'footer_nav_loans_commercial_use_commercial_vehicle_loans_tractor_&_farm_equipment_loan');
                              aEl19.setAttribute('class', 'no--subMenu');
                              aEl19.setAttribute('href', '/tractor-farm-equipment-finance');
                              aEl19.textContent = 'Tractor & Farm Equipment Loan';
                            applinkEl7.append(aEl19);
                          liEl12.append(applinkEl7);
                        ulEl2.append(liEl12);

                          const liEl13 = document.createElement('li');
                          liEl13.setAttribute('_ngcontent-serverapp-c553831109', '');
                          liEl13.setAttribute('class', 'no--subMenu');

                            const applinkEl8 = document.createElement('app-link');
                            applinkEl8.setAttribute('_ngcontent-serverapp-c553831109', '');

                              const aEl20 = document.createElement('a');
                              aEl20.setAttribute('title', 'Construction Equipment Loan');
                              aEl20.setAttribute('id', 'footer_nav_loans_commercial_use_commercial_vehicle_loans_construction_equipment_loan');
                              aEl20.setAttribute('class', 'no--subMenu');
                              aEl20.setAttribute('href', '/construction-equipment-finance');
                              aEl20.textContent = 'Construction Equipment Loan';
                            applinkEl8.append(aEl20);
                          liEl13.append(applinkEl8);
                        ulEl2.append(liEl13);

                          const liEl14 = document.createElement('li');
                          liEl14.setAttribute('_ngcontent-serverapp-c553831109', '');
                          liEl14.setAttribute('class', 'no--subMenu');

                            const applinkEl9 = document.createElement('app-link');
                            applinkEl9.setAttribute('_ngcontent-serverapp-c553831109', '');

                              const aEl21 = document.createElement('a');
                              aEl21.setAttribute('title', 'Used Commercial Goods Vehicle Finance');
                              aEl21.setAttribute('id', 'footer_nav_loans_commercial_use_commercial_vehicle_loans_used_commercial_goods_vehicle_finance');
                              aEl21.setAttribute('class', 'no--subMenu');
                              aEl21.setAttribute('href', '/used-commercial-goods-vehicle-finance');
                              aEl21.textContent = 'Used Commercial Goods Vehicle Finance';
                            applinkEl9.append(aEl21);
                          liEl14.append(applinkEl9);
                        ulEl2.append(liEl14);

                          const liEl15 = document.createElement('li');
                          liEl15.setAttribute('_ngcontent-serverapp-c553831109', '');
                          liEl15.setAttribute('class', 'no--subMenu');

                            const applinkEl10 = document.createElement('app-link');
                            applinkEl10.setAttribute('_ngcontent-serverapp-c553831109', '');

                              const aEl22 = document.createElement('a');
                              aEl22.setAttribute('title', 'Used Passenger Commercial Vehicle Finance');
                              aEl22.setAttribute('id', 'footer_nav_loans_commercial_use_commercial_vehicle_loans_used_passenger_commercial_vehicle_finance');
                              aEl22.setAttribute('class', 'no--subMenu');
                              aEl22.setAttribute('href', '/used-passenger-commercial-vehicle-finance');
                              aEl22.textContent = 'Used Passenger Commercial Vehicle Finance';
                            applinkEl10.append(aEl22);
                          liEl15.append(applinkEl10);
                        ulEl2.append(liEl15);
                      divEl23.append(ulEl2);
                    divEl22.append(divEl23);
                  divEl21.append(divEl22);

                    const divEl24 = document.createElement('div');
                    divEl24.setAttribute('_ngcontent-serverapp-c553831109', '');
                    divEl24.setAttribute('class', 'footer__inner');

                      const divEl25 = document.createElement('div');
                      divEl25.setAttribute('_ngcontent-serverapp-c553831109', '');
                      divEl25.setAttribute('class', 'footer__loans');

                        const h5El6 = document.createElement('h5');
                        h5El6.setAttribute('_ngcontent-serverapp-c553831109', '');
                        h5El6.setAttribute('class', 'app-link-flat footer__listHead');

                          const aEl23 = document.createElement('a');
                          aEl23.setAttribute('title', '');
                          aEl23.setAttribute('id', 'footer_nav_loans_loans_working_capital_loans');
                          aEl23.setAttribute('href', '/working-capital-loan');
                          aEl23.textContent = 'Working Capital Loans';
                        h5El6.append(aEl23);
                      divEl25.append(h5El6);

                        const ulEl3 = document.createElement('ul');
                        ulEl3.setAttribute('_ngcontent-serverapp-c553831109', '');
                        ulEl3.setAttribute('class', 'footer__list');

                          const liEl16 = document.createElement('li');
                          liEl16.setAttribute('_ngcontent-serverapp-c553831109', '');
                          liEl16.setAttribute('class', 'no--subMenu');

                            const applinkEl11 = document.createElement('app-link');
                            applinkEl11.setAttribute('_ngcontent-serverapp-c553831109', '');

                              const aEl24 = document.createElement('a');
                              aEl24.setAttribute('title', 'Tyre Finance');
                              aEl24.setAttribute('id', 'footer_nav_loans_commercial_use_working_capital_loans_tyre_finance');
                              aEl24.setAttribute('class', 'no--subMenu');
                              aEl24.setAttribute('href', '/tyre-finance');
                              aEl24.textContent = 'Tyre Finance';
                            applinkEl11.append(aEl24);
                          liEl16.append(applinkEl11);
                        ulEl3.append(liEl16);

                          const liEl17 = document.createElement('li');
                          liEl17.setAttribute('_ngcontent-serverapp-c553831109', '');
                          liEl17.setAttribute('class', 'no--subMenu');

                            const applinkEl12 = document.createElement('app-link');
                            applinkEl12.setAttribute('_ngcontent-serverapp-c553831109', '');

                              const aEl25 = document.createElement('a');
                              aEl25.setAttribute('title', 'Tax Finance');
                              aEl25.setAttribute('id', 'footer_nav_loans_commercial_use_working_capital_loans_tax_finance');
                              aEl25.setAttribute('class', 'no--subMenu');
                              aEl25.setAttribute('href', '/tax-finance');
                              aEl25.textContent = 'Tax Finance';
                            applinkEl12.append(aEl25);
                          liEl17.append(applinkEl12);
                        ulEl3.append(liEl17);

                          const liEl18 = document.createElement('li');
                          liEl18.setAttribute('_ngcontent-serverapp-c553831109', '');
                          liEl18.setAttribute('class', 'no--subMenu');

                            const applinkEl13 = document.createElement('app-link');
                            applinkEl13.setAttribute('_ngcontent-serverapp-c553831109', '');

                              const aEl26 = document.createElement('a');
                              aEl26.setAttribute('title', 'Toll Finance');
                              aEl26.setAttribute('id', 'footer_nav_loans_commercial_use_working_capital_loans_toll_finance');
                              aEl26.setAttribute('class', 'no--subMenu');
                              aEl26.setAttribute('href', '/toll-finance');
                              aEl26.textContent = 'Toll Finance';
                            applinkEl13.append(aEl26);
                          liEl18.append(applinkEl13);
                        ulEl3.append(liEl18);

                          const liEl19 = document.createElement('li');
                          liEl19.setAttribute('_ngcontent-serverapp-c553831109', '');
                          liEl19.setAttribute('class', 'no--subMenu');

                            const applinkEl14 = document.createElement('app-link');
                            applinkEl14.setAttribute('_ngcontent-serverapp-c553831109', '');

                              const aEl27 = document.createElement('a');
                              aEl27.setAttribute('title', 'Repair & Top-up Loan');
                              aEl27.setAttribute('id', 'footer_nav_loans_commercial_use_working_capital_loans_repair_&_top_up_loan');
                              aEl27.setAttribute('class', 'no--subMenu');
                              aEl27.setAttribute('href', '/repair-top-up-loan');
                              aEl27.textContent = 'Repair & Top-up Loan';
                            applinkEl14.append(aEl27);
                          liEl19.append(applinkEl14);
                        ulEl3.append(liEl19);

                          const liEl20 = document.createElement('li');
                          liEl20.setAttribute('_ngcontent-serverapp-c553831109', '');
                          liEl20.setAttribute('class', 'no--subMenu');

                            const applinkEl15 = document.createElement('app-link');
                            applinkEl15.setAttribute('_ngcontent-serverapp-c553831109', '');

                              const aEl28 = document.createElement('a');
                              aEl28.setAttribute('title', 'Fuel Finance');
                              aEl28.setAttribute('id', 'footer_nav_loans_commercial_use_working_capital_loans_fuel_finance');
                              aEl28.setAttribute('class', 'no--subMenu');
                              aEl28.setAttribute('href', '/fuel-finance');
                              aEl28.textContent = 'Fuel Finance';
                            applinkEl15.append(aEl28);
                          liEl20.append(applinkEl15);
                        ulEl3.append(liEl20);

                          const liEl21 = document.createElement('li');
                          liEl21.setAttribute('_ngcontent-serverapp-c553831109', '');
                          liEl21.setAttribute('class', 'no--subMenu');

                            const applinkEl16 = document.createElement('app-link');
                            applinkEl16.setAttribute('_ngcontent-serverapp-c553831109', '');

                              const aEl29 = document.createElement('a');
                              aEl29.setAttribute('title', 'Challan Discounting');
                              aEl29.setAttribute('id', 'footer_nav_loans_commercial_use_working_capital_loans_challan_discounting');
                              aEl29.setAttribute('class', 'no--subMenu');
                              aEl29.setAttribute('href', '/challan-discounting');
                              aEl29.textContent = 'Challan Discounting';
                            applinkEl16.append(aEl29);
                          liEl21.append(applinkEl16);
                        ulEl3.append(liEl21);
                      divEl25.append(ulEl3);
                    divEl24.append(divEl25);
                  divEl21.append(divEl24);

                    const divEl26 = document.createElement('div');
                    divEl26.setAttribute('_ngcontent-serverapp-c553831109', '');
                    divEl26.setAttribute('class', 'footer__inner');

                      const divEl27 = document.createElement('div');
                      divEl27.setAttribute('_ngcontent-serverapp-c553831109', '');
                      divEl27.setAttribute('class', 'footer__loans');

                        const h5El7 = document.createElement('h5');
                        h5El7.setAttribute('_ngcontent-serverapp-c553831109', '');
                        h5El7.setAttribute('class', 'app-link-flat footer__listHead');

                          const spanEl5 = document.createElement('span');
                          spanEl5.textContent = 'Business Loans';
                        h5El7.append(spanEl5);
                      divEl27.append(h5El7);

                        const ulEl4 = document.createElement('ul');
                        ulEl4.setAttribute('_ngcontent-serverapp-c553831109', '');
                        ulEl4.setAttribute('class', 'footer__list');

                          const liEl22 = document.createElement('li');
                          liEl22.setAttribute('_ngcontent-serverapp-c553831109', '');
                          liEl22.setAttribute('class', 'no--subMenu');

                            const applinkEl17 = document.createElement('app-link');
                            applinkEl17.setAttribute('_ngcontent-serverapp-c553831109', '');

                              const aEl30 = document.createElement('a');
                              aEl30.setAttribute('title', 'Business Loan');
                              aEl30.setAttribute('id', 'footer_nav_loans_commercial_use_business_loans_business_loan');
                              aEl30.setAttribute('class', 'no--subMenu');
                              aEl30.setAttribute('href', '/business-loan');
                              aEl30.textContent = 'Business Loan';
                            applinkEl17.append(aEl30);
                          liEl22.append(applinkEl17);
                        ulEl4.append(liEl22);
                      divEl27.append(ulEl4);
                    divEl26.append(divEl27);
                  divEl21.append(divEl26);

                    const divEl28 = document.createElement('div');
                    divEl28.setAttribute('_ngcontent-serverapp-c553831109', '');
                    divEl28.setAttribute('class', 'footer__inner');

                      const divEl29 = document.createElement('div');
                      divEl29.setAttribute('_ngcontent-serverapp-c553831109', '');
                      divEl29.setAttribute('class', 'footer__loans');

                        const h5El8 = document.createElement('h5');
                        h5El8.setAttribute('_ngcontent-serverapp-c553831109', '');
                        h5El8.setAttribute('class', 'app-link-flat footer__listHead');

                          const spanEl6 = document.createElement('span');
                          spanEl6.textContent = 'Green Finance';
                        h5El8.append(spanEl6);
                      divEl29.append(h5El8);

                        const ulEl5 = document.createElement('ul');
                        ulEl5.setAttribute('_ngcontent-serverapp-c553831109', '');
                        ulEl5.setAttribute('class', 'footer__list');

                          const liEl23 = document.createElement('li');
                          liEl23.setAttribute('_ngcontent-serverapp-c553831109', '');
                          liEl23.setAttribute('class', 'no--subMenu');

                            const applinkEl18 = document.createElement('app-link');
                            applinkEl18.setAttribute('_ngcontent-serverapp-c553831109', '');

                              const aEl31 = document.createElement('a');
                              aEl31.setAttribute('title', 'EV Two-Wheeler Loan');
                              aEl31.setAttribute('id', 'footer_nav_loans_commercial_use_green_finance_ev_two_wheeler_loan');
                              aEl31.setAttribute('class', 'no--subMenu');
                              aEl31.setAttribute('href', '/two-wheeler-loan-electric');
                              aEl31.textContent = 'EV Two-Wheeler Loan';
                            applinkEl18.append(aEl31);
                          liEl23.append(applinkEl18);
                        ulEl5.append(liEl23);

                          const liEl24 = document.createElement('li');
                          liEl24.setAttribute('_ngcontent-serverapp-c553831109', '');
                          liEl24.setAttribute('class', 'no--subMenu');

                            const applinkEl19 = document.createElement('app-link');
                            applinkEl19.setAttribute('_ngcontent-serverapp-c553831109', '');

                              const aEl32 = document.createElement('a');
                              aEl32.setAttribute('title', 'EV Three Wheeler Loan');
                              aEl32.setAttribute('id', 'footer_nav_loans_commercial_use_green_finance_ev_three_wheeler_loan');
                              aEl32.setAttribute('class', 'no--subMenu');
                              aEl32.setAttribute('href', '/three-wheeler-loan-electric');
                              aEl32.textContent = 'EV Three Wheeler Loan';
                            applinkEl19.append(aEl32);
                          liEl24.append(applinkEl19);
                        ulEl5.append(liEl24);

                          const liEl25 = document.createElement('li');
                          liEl25.setAttribute('_ngcontent-serverapp-c553831109', '');
                          liEl25.setAttribute('class', 'no--subMenu');

                            const applinkEl20 = document.createElement('app-link');
                            applinkEl20.setAttribute('_ngcontent-serverapp-c553831109', '');

                              const aEl33 = document.createElement('a');
                              aEl33.setAttribute('title', 'EV Four Wheeler Loan');
                              aEl33.setAttribute('id', 'footer_nav_loans_commercial_use_green_finance_ev_four_wheeler_loan');
                              aEl33.setAttribute('class', 'no--subMenu');
                              aEl33.setAttribute('href', '/four-wheeler-loan-electric');
                              aEl33.textContent = 'EV Four Wheeler Loan';
                            applinkEl20.append(aEl33);
                          liEl25.append(applinkEl20);
                        ulEl5.append(liEl25);

                          const liEl26 = document.createElement('li');
                          liEl26.setAttribute('_ngcontent-serverapp-c553831109', '');
                          liEl26.setAttribute('class', 'no--subMenu');

                            const applinkEl21 = document.createElement('app-link');
                            applinkEl21.setAttribute('_ngcontent-serverapp-c553831109', '');

                              const aEl34 = document.createElement('a');
                              aEl34.setAttribute('title', 'EV Charging Station Finance');
                              aEl34.setAttribute('id', 'footer_nav_loans_commercial_use_green_finance_ev_charging_station_finance');
                              aEl34.setAttribute('class', 'no--subMenu');
                              aEl34.setAttribute('href', '/ev-charging-station-finance');
                              aEl34.textContent = 'EV Charging Station Finance';
                            applinkEl21.append(aEl34);
                          liEl26.append(applinkEl21);
                        ulEl5.append(liEl26);

                          const liEl27 = document.createElement('li');
                          liEl27.setAttribute('_ngcontent-serverapp-c553831109', '');
                          liEl27.setAttribute('class', 'no--subMenu');

                            const applinkEl22 = document.createElement('app-link');
                            applinkEl22.setAttribute('_ngcontent-serverapp-c553831109', '');

                              const aEl35 = document.createElement('a');
                              aEl35.setAttribute('title', 'Solar Panel Finance');
                              aEl35.setAttribute('id', 'footer_nav_loans_commercial_use_green_finance_solar_panel_finance');
                              aEl35.setAttribute('class', 'no--subMenu');
                              aEl35.setAttribute('href', '/solar-panel-finance');
                              aEl35.textContent = 'Solar Panel Finance';
                            applinkEl22.append(aEl35);
                          liEl27.append(applinkEl22);
                        ulEl5.append(liEl27);
                      divEl29.append(ulEl5);
                    divEl28.append(divEl29);
                  divEl21.append(divEl28);
                divEl20.append(divEl21);
              divEl9.append(divEl20);
            divEl8.append(divEl9);
          divEl6.append(divEl8);
        divEl2.append(divEl6);

          const divEl30 = document.createElement('div');
          divEl30.setAttribute('_ngcontent-serverapp-c553831109', '');
          divEl30.setAttribute('class', 'footer__group');

            const divEl31 = document.createElement('div');
            divEl31.setAttribute('_ngcontent-serverapp-c553831109', '');
            divEl31.setAttribute('class', 'footer__head js-footer');

              const h5El9 = document.createElement('h5');
              h5El9.setAttribute('_ngcontent-serverapp-c553831109', '');
              h5El9.setAttribute('class', 'footer__heading');

                const applinkEl23 = document.createElement('app-link');
                applinkEl23.setAttribute('_ngcontent-serverapp-c553831109', '');

                  const aEl36 = document.createElement('a');
                  aEl36.setAttribute('title', 'Gold Zone');
                  aEl36.setAttribute('href', 'https://www.shriramfinance.in/gold-zone');
                  aEl36.setAttribute('target', '_self');
                  aEl36.setAttribute('id', 'footer_nav_gold_zone');
                  aEl36.setAttribute('class', 'no--subMenu');
                  aEl36.textContent = 'Gold Zone';
                applinkEl23.append(aEl36);
              h5El9.append(applinkEl23);
            divEl31.append(h5El9);
          divEl30.append(divEl31);
        divEl2.append(divEl30);

          const divEl32 = document.createElement('div');
          divEl32.setAttribute('_ngcontent-serverapp-c553831109', '');
          divEl32.setAttribute('class', 'footer__group');

            const divEl33 = document.createElement('div');
            divEl33.setAttribute('_ngcontent-serverapp-c553831109', '');
            divEl33.setAttribute('class', 'footer__head js-footer');

              const h5El10 = document.createElement('h5');
              h5El10.setAttribute('_ngcontent-serverapp-c553831109', '');
              h5El10.setAttribute('class', 'footer__heading app-link-flat');

                const aEl37 = document.createElement('a');
                aEl37.setAttribute('title', 'Insurance');
                aEl37.setAttribute('id', 'footer_nav_insurance');
                aEl37.setAttribute('href', '/insurance');
                aEl37.textContent = 'Insurance';
              h5El10.append(aEl37);

                const spanEl7 = document.createElement('span');
                spanEl7.setAttribute('_ngcontent-serverapp-c553831109', '');
                spanEl7.setAttribute('class', 'footer__arrow');
              h5El10.append(spanEl7);
            divEl33.append(h5El10);
          divEl32.append(divEl33);

            const divEl34 = document.createElement('div');
            divEl34.setAttribute('_ngcontent-serverapp-c553831109', '');
            divEl34.setAttribute('class', 'footer__content');

              const divEl35 = document.createElement('div');
              divEl35.setAttribute('_ngcontent-serverapp-c553831109', '');
              divEl35.setAttribute('class', 'footer__doubleMenu');

                const h5El11 = document.createElement('h5');
                h5El11.setAttribute('_ngcontent-serverapp-c553831109', '');
                h5El11.setAttribute('class', 'app-link-flat footer__listHead');

                  const aEl38 = document.createElement('a');
                  aEl38.setAttribute('title', '');
                  aEl38.setAttribute('id', 'footer_nav_insurance_general_insurance');
                  aEl38.setAttribute('href', '/insurance#general-insurance');
                  aEl38.textContent = 'General Insurance';
                h5El11.append(aEl38);
              divEl35.append(h5El11);

                const divEl36 = document.createElement('div');
                divEl36.setAttribute('_ngcontent-serverapp-c553831109', '');
                divEl36.setAttribute('class', 'footer__insurance footer__col footer__col--four footer__insurance--typeThree');

                  const divEl37 = document.createElement('div');
                  divEl37.setAttribute('_ngcontent-serverapp-c553831109', '');
                  divEl37.setAttribute('class', 'footer__inner');

                    const h5El12 = document.createElement('h5');
                    h5El12.setAttribute('_ngcontent-serverapp-c553831109', '');
                    h5El12.setAttribute('class', 'app-link-flat footer__listHead');

                      const spanEl8 = document.createElement('span');
                      spanEl8.textContent = 'Motor Insurance';
                    h5El12.append(spanEl8);
                  divEl37.append(h5El12);

                    const ulEl6 = document.createElement('ul');
                    ulEl6.setAttribute('_ngcontent-serverapp-c553831109', '');
                    ulEl6.setAttribute('class', 'footer__list');

                      const liEl28 = document.createElement('li');
                      liEl28.setAttribute('_ngcontent-serverapp-c553831109', '');

                        const applinkEl24 = document.createElement('app-link');
                        applinkEl24.setAttribute('_ngcontent-serverapp-c553831109', '');

                          const aEl39 = document.createElement('a');
                          aEl39.setAttribute('title', 'Four Wheeler Insurance');
                          aEl39.setAttribute('id', 'footer_nav_insurance_general_insurance_motor_insurance_four_wheeler_insurance');
                          aEl39.setAttribute('class', 'no--subMenu');
                          aEl39.setAttribute('href', '/insurance/car-insurance');
                          aEl39.textContent = 'Four Wheeler Insurance';
                        applinkEl24.append(aEl39);
                      liEl28.append(applinkEl24);
                    ulEl6.append(liEl28);

                      const liEl29 = document.createElement('li');
                      liEl29.setAttribute('_ngcontent-serverapp-c553831109', '');

                        const applinkEl25 = document.createElement('app-link');
                        applinkEl25.setAttribute('_ngcontent-serverapp-c553831109', '');

                          const aEl40 = document.createElement('a');
                          aEl40.setAttribute('title', 'Two Wheeler Insurance');
                          aEl40.setAttribute('id', 'footer_nav_insurance_general_insurance_motor_insurance_two_wheeler_insurance');
                          aEl40.setAttribute('class', 'no--subMenu');
                          aEl40.setAttribute('href', '/insurance/two-wheeler-insurance');
                          aEl40.textContent = 'Two Wheeler Insurance';
                        applinkEl25.append(aEl40);
                      liEl29.append(applinkEl25);
                    ulEl6.append(liEl29);

                      const liEl30 = document.createElement('li');
                      liEl30.setAttribute('_ngcontent-serverapp-c553831109', '');

                        const applinkEl26 = document.createElement('app-link');
                        applinkEl26.setAttribute('_ngcontent-serverapp-c553831109', '');

                          const aEl41 = document.createElement('a');
                          aEl41.setAttribute('title', 'Passenger Carrying Commercial vehicle (PCCV) Insurance	');
                          aEl41.setAttribute('id', 'footer_nav_insurance_general_insurance_motor_insurance_passenger_carrying_commercial_vehicle_(pccv)_insurance');
                          aEl41.setAttribute('class', 'no--subMenu');
                          aEl41.setAttribute('href', '/insurance/passenger-carrying-vehicle-insurance');
                          aEl41.textContent = 'Passenger Carrying Commercial vehicle (PCCV) Insurance';
                        applinkEl26.append(aEl41);
                      liEl30.append(applinkEl26);
                    ulEl6.append(liEl30);

                      const liEl31 = document.createElement('li');
                      liEl31.setAttribute('_ngcontent-serverapp-c553831109', '');

                        const applinkEl27 = document.createElement('app-link');
                        applinkEl27.setAttribute('_ngcontent-serverapp-c553831109', '');

                          const aEl42 = document.createElement('a');
                          aEl42.setAttribute('title', 'Goods carrying Commercial Vehicle Insurance');
                          aEl42.setAttribute('id', 'footer_nav_insurance_general_insurance_motor_insurance_goods_carrying_commercial_vehicle_insurance');
                          aEl42.setAttribute('class', 'no--subMenu');
                          aEl42.setAttribute('href', '/insurance/goods-carrying-vehicle-insurance');
                          aEl42.textContent = 'Goods carrying Commercial Vehicle Insurance';
                        applinkEl27.append(aEl42);
                      liEl31.append(applinkEl27);
                    ulEl6.append(liEl31);
                  divEl37.append(ulEl6);
                divEl36.append(divEl37);

                  const divEl38 = document.createElement('div');
                  divEl38.setAttribute('_ngcontent-serverapp-c553831109', '');
                  divEl38.setAttribute('class', 'footer__inner');

                    const h5El13 = document.createElement('h5');
                    h5El13.setAttribute('_ngcontent-serverapp-c553831109', '');
                    h5El13.setAttribute('class', 'app-link-flat footer__listHead');

                      const spanEl9 = document.createElement('span');
                      spanEl9.textContent = 'Non Motor Insurance';
                    h5El13.append(spanEl9);
                  divEl38.append(h5El13);

                    const ulEl7 = document.createElement('ul');
                    ulEl7.setAttribute('_ngcontent-serverapp-c553831109', '');
                    ulEl7.setAttribute('class', 'footer__list');

                      const liEl32 = document.createElement('li');
                      liEl32.setAttribute('_ngcontent-serverapp-c553831109', '');

                        const applinkEl28 = document.createElement('app-link');
                        applinkEl28.setAttribute('_ngcontent-serverapp-c553831109', '');

                          const aEl43 = document.createElement('a');
                          aEl43.setAttribute('title', 'Personal Accident Insurance	');
                          aEl43.setAttribute('id', 'footer_nav_insurance_general_insurance_non_motor_insurance_personal_accident_insurance');
                          aEl43.setAttribute('class', 'no--subMenu');
                          aEl43.setAttribute('href', '/insurance/personal-accident-insurance');
                          aEl43.textContent = 'Personal Accident Insurance';
                        applinkEl28.append(aEl43);
                      liEl32.append(applinkEl28);
                    ulEl7.append(liEl32);

                      const liEl33 = document.createElement('li');
                      liEl33.setAttribute('_ngcontent-serverapp-c553831109', '');

                        const applinkEl29 = document.createElement('app-link');
                        applinkEl29.setAttribute('_ngcontent-serverapp-c553831109', '');

                          const aEl44 = document.createElement('a');
                          aEl44.setAttribute('title', 'Shri Criti Care Insurance');
                          aEl44.setAttribute('id', 'footer_nav_insurance_general_insurance_non_motor_insurance_shri_criti_care_insurance');
                          aEl44.setAttribute('class', 'no--subMenu');
                          aEl44.setAttribute('href', '/insurance/shri-criti-care-insurance');
                          aEl44.textContent = 'Shri Criti Care Insurance';
                        applinkEl29.append(aEl44);
                      liEl33.append(applinkEl29);
                    ulEl7.append(liEl33);

                      const liEl34 = document.createElement('li');
                      liEl34.setAttribute('_ngcontent-serverapp-c553831109', '');

                        const applinkEl30 = document.createElement('app-link');
                        applinkEl30.setAttribute('_ngcontent-serverapp-c553831109', '');

                          const aEl45 = document.createElement('a');
                          aEl45.setAttribute('title', 'Home Insurance	');
                          aEl45.setAttribute('id', 'footer_nav_insurance_general_insurance_non_motor_insurance_home_insurance');
                          aEl45.setAttribute('class', 'no--subMenu');
                          aEl45.setAttribute('href', '/insurance/home-insurance');
                          aEl45.textContent = 'Home Insurance';
                        applinkEl30.append(aEl45);
                      liEl34.append(applinkEl30);
                    ulEl7.append(liEl34);
                  divEl38.append(ulEl7);
                divEl36.append(divEl38);
              divEl35.append(divEl36);
            divEl34.append(divEl35);

              const divEl39 = document.createElement('div');
              divEl39.setAttribute('_ngcontent-serverapp-c553831109', '');
              divEl39.setAttribute('class', 'footer__doubleMenu');

                const h5El14 = document.createElement('h5');
                h5El14.setAttribute('_ngcontent-serverapp-c553831109', '');
                h5El14.setAttribute('class', 'app-link-flat footer__listHead');

                  const aEl46 = document.createElement('a');
                  aEl46.setAttribute('title', '');
                  aEl46.setAttribute('id', 'footer_nav_insurance_life_insurance');
                  aEl46.setAttribute('href', '/insurance#life-insurance');
                  aEl46.textContent = 'Life Insurance';
                h5El14.append(aEl46);
              divEl39.append(h5El14);

                const divEl40 = document.createElement('div');
                divEl40.setAttribute('_ngcontent-serverapp-c553831109', '');
                divEl40.setAttribute('class', 'footer__insurance footer__col footer__col--four footer__insurance--typeThree');

                  const divEl41 = document.createElement('div');
                  divEl41.setAttribute('_ngcontent-serverapp-c553831109', '');
                  divEl41.setAttribute('class', 'footer__inner');

                    const h5El15 = document.createElement('h5');
                    h5El15.setAttribute('_ngcontent-serverapp-c553831109', '');
                    h5El15.setAttribute('class', 'app-link-flat footer__listHead');

                      const spanEl10 = document.createElement('span');
                      spanEl10.textContent = 'Savings Plan';
                    h5El15.append(spanEl10);
                  divEl41.append(h5El15);

                    const ulEl8 = document.createElement('ul');
                    ulEl8.setAttribute('_ngcontent-serverapp-c553831109', '');
                    ulEl8.setAttribute('class', 'footer__list');

                      const liEl35 = document.createElement('li');
                      liEl35.setAttribute('_ngcontent-serverapp-c553831109', '');

                        const applinkEl31 = document.createElement('app-link');
                        applinkEl31.setAttribute('_ngcontent-serverapp-c553831109', '');

                          const aEl47 = document.createElement('a');
                          aEl47.setAttribute('title', 'Shriram Life Assured Income Plan');
                          aEl47.setAttribute('id', 'footer_nav_insurance_life_insurance_savings_plan_shriram_life_assured_income_plan');
                          aEl47.setAttribute('class', 'no--subMenu');
                          aEl47.setAttribute('href', '/insurance/shriram-life-assured-income-plan');
                          aEl47.textContent = 'Shriram Life Assured Income Plan';
                        applinkEl31.append(aEl47);
                      liEl35.append(applinkEl31);
                    ulEl8.append(liEl35);

                      const liEl36 = document.createElement('li');
                      liEl36.setAttribute('_ngcontent-serverapp-c553831109', '');

                        const applinkEl32 = document.createElement('app-link');
                        applinkEl32.setAttribute('_ngcontent-serverapp-c553831109', '');

                          const aEl48 = document.createElement('a');
                          aEl48.setAttribute('title', 'Shriram Life Early Cash Plan');
                          aEl48.setAttribute('id', 'footer_nav_insurance_life_insurance_savings_plan_shriram_life_early_cash_plan');
                          aEl48.setAttribute('class', 'no--subMenu');
                          aEl48.setAttribute('href', '/insurance/shriram-life-early-cash-plan');
                          aEl48.textContent = 'Shriram Life Early Cash Plan';
                        applinkEl32.append(aEl48);
                      liEl36.append(applinkEl32);
                    ulEl8.append(liEl36);

                      const liEl37 = document.createElement('li');
                      liEl37.setAttribute('_ngcontent-serverapp-c553831109', '');

                        const applinkEl33 = document.createElement('app-link');
                        applinkEl33.setAttribute('_ngcontent-serverapp-c553831109', '');

                          const aEl49 = document.createElement('a');
                          aEl49.setAttribute('title', 'Shriram Life Premier Assured Benefit');
                          aEl49.setAttribute('id', 'footer_nav_insurance_life_insurance_savings_plan_shriram_life_premier_assured_benefit');
                          aEl49.setAttribute('class', 'no--subMenu');
                          aEl49.setAttribute('href', '/insurance/shriram-life-premier-assured-benefit-plan');
                          aEl49.textContent = 'Shriram Life Premier Assured Benefit';
                        applinkEl33.append(aEl49);
                      liEl37.append(applinkEl33);
                    ulEl8.append(liEl37);

                      const liEl38 = document.createElement('li');
                      liEl38.setAttribute('_ngcontent-serverapp-c553831109', '');

                        const applinkEl34 = document.createElement('app-link');
                        applinkEl34.setAttribute('_ngcontent-serverapp-c553831109', '');

                          const aEl50 = document.createElement('a');
                          aEl50.setAttribute('title', 'Shriram Life POS assured savings plan	');
                          aEl50.setAttribute('id', 'footer_nav_insurance_life_insurance_savings_plan_shriram_life_pos_assured_savings_plan');
                          aEl50.setAttribute('class', 'no--subMenu');
                          aEl50.setAttribute('href', '/insurance/shriram-life-assured-savings-plan');
                          aEl50.textContent = 'Shriram Life POS assured savings plan';
                        applinkEl34.append(aEl50);
                      liEl38.append(applinkEl34);
                    ulEl8.append(liEl38);

                      const liEl39 = document.createElement('li');
                      liEl39.setAttribute('_ngcontent-serverapp-c553831109', '');

                        const applinkEl35 = document.createElement('app-link');
                        applinkEl35.setAttribute('_ngcontent-serverapp-c553831109', '');

                          const aEl51 = document.createElement('a');
                          aEl51.setAttribute('title', 'Shriram Life New Shri life plan');
                          aEl51.setAttribute('id', 'footer_nav_insurance_life_insurance_savings_plan_shriram_life_new_shri_life_plan');
                          aEl51.setAttribute('class', 'no--subMenu');
                          aEl51.setAttribute('href', '/insurance/shriram-life-new-shri-life-plan');
                          aEl51.textContent = 'Shriram Life New Shri life plan';
                        applinkEl35.append(aEl51);
                      liEl39.append(applinkEl35);
                    ulEl8.append(liEl39);
                  divEl41.append(ulEl8);
                divEl40.append(divEl41);

                  const divEl42 = document.createElement('div');
                  divEl42.setAttribute('_ngcontent-serverapp-c553831109', '');
                  divEl42.setAttribute('class', 'footer__inner');

                    const h5El16 = document.createElement('h5');
                    h5El16.setAttribute('_ngcontent-serverapp-c553831109', '');
                    h5El16.setAttribute('class', 'app-link-flat footer__listHead');

                      const spanEl11 = document.createElement('span');
                      spanEl11.textContent = 'Child plans';
                    h5El16.append(spanEl11);
                  divEl42.append(h5El16);

                    const ulEl9 = document.createElement('ul');
                    ulEl9.setAttribute('_ngcontent-serverapp-c553831109', '');
                    ulEl9.setAttribute('class', 'footer__list');

                      const liEl40 = document.createElement('li');
                      liEl40.setAttribute('_ngcontent-serverapp-c553831109', '');

                        const applinkEl36 = document.createElement('app-link');
                        applinkEl36.setAttribute('_ngcontent-serverapp-c553831109', '');

                          const aEl52 = document.createElement('a');
                          aEl52.setAttribute('title', 'Shriram Life New Shri Vidya	');
                          aEl52.setAttribute('id', 'footer_nav_insurance_life_insurance_child_plans_shriram_life_new_shri_vidya');
                          aEl52.setAttribute('class', 'no--subMenu');
                          aEl52.setAttribute('href', '/insurance/shriram-life-new-shri-vidya-plan');
                          aEl52.textContent = 'Shriram Life New Shri Vidya';
                        applinkEl36.append(aEl52);
                      liEl40.append(applinkEl36);
                    ulEl9.append(liEl40);
                  divEl42.append(ulEl9);
                divEl40.append(divEl42);

                  const divEl43 = document.createElement('div');
                  divEl43.setAttribute('_ngcontent-serverapp-c553831109', '');
                  divEl43.setAttribute('class', 'footer__inner');

                    const h5El17 = document.createElement('h5');
                    h5El17.setAttribute('_ngcontent-serverapp-c553831109', '');
                    h5El17.setAttribute('class', 'app-link-flat footer__listHead');

                      const spanEl12 = document.createElement('span');
                      spanEl12.textContent = 'Protection Plan';
                    h5El17.append(spanEl12);
                  divEl43.append(h5El17);

                    const ulEl10 = document.createElement('ul');
                    ulEl10.setAttribute('_ngcontent-serverapp-c553831109', '');
                    ulEl10.setAttribute('class', 'footer__list');

                      const liEl41 = document.createElement('li');
                      liEl41.setAttribute('_ngcontent-serverapp-c553831109', '');

                        const applinkEl37 = document.createElement('app-link');
                        applinkEl37.setAttribute('_ngcontent-serverapp-c553831109', '');

                          const aEl53 = document.createElement('a');
                          aEl53.setAttribute('title', 'Shriram Life Cashback Term Plan');
                          aEl53.setAttribute('id', 'footer_nav_insurance_life_insurance_protection_plan_shriram_life_cashback_term_plan');
                          aEl53.setAttribute('class', 'no--subMenu');
                          aEl53.setAttribute('href', '/insurance/shriram-life-cash-back-term-plan');
                          aEl53.textContent = 'Shriram Life Cashback Term Plan';
                        applinkEl37.append(aEl53);
                      liEl41.append(applinkEl37);
                    ulEl10.append(liEl41);

                      const liEl42 = document.createElement('li');
                      liEl42.setAttribute('_ngcontent-serverapp-c553831109', '');

                        const applinkEl38 = document.createElement('app-link');
                        applinkEl38.setAttribute('_ngcontent-serverapp-c553831109', '');

                          const aEl54 = document.createElement('a');
                          aEl54.setAttribute('title', 'Shriram Life Comprehensive Cancer Care Plan	');
                          aEl54.setAttribute('id', 'footer_nav_insurance_life_insurance_protection_plan_shriram_life_comprehensive_cancer_care_plan');
                          aEl54.setAttribute('class', 'no--subMenu');
                          aEl54.setAttribute('href', '/insurance/shriram-life-cancer-care-plan');
                          aEl54.textContent = 'Shriram Life Comprehensive Cancer Care Plan';
                        applinkEl38.append(aEl54);
                      liEl42.append(applinkEl38);
                    ulEl10.append(liEl42);

                      const liEl43 = document.createElement('li');
                      liEl43.setAttribute('_ngcontent-serverapp-c553831109', '');

                        const applinkEl39 = document.createElement('app-link');
                        applinkEl39.setAttribute('_ngcontent-serverapp-c553831109', '');

                          const aEl55 = document.createElement('a');
                          aEl55.setAttribute('title', 'Shriram Life Online Term Plan');
                          aEl55.setAttribute('id', 'footer_nav_insurance_life_insurance_protection_plan_shriram_life_online_term_plan');
                          aEl55.setAttribute('class', 'no--subMenu');
                          aEl55.setAttribute('href', '/insurance/shriram-life-online-term-plan');
                          aEl55.textContent = 'Shriram Life Online Term Plan';
                        applinkEl39.append(aEl55);
                      liEl43.append(applinkEl39);
                    ulEl10.append(liEl43);

                      const liEl44 = document.createElement('li');
                      liEl44.setAttribute('_ngcontent-serverapp-c553831109', '');

                        const applinkEl40 = document.createElement('app-link');
                        applinkEl40.setAttribute('_ngcontent-serverapp-c553831109', '');

                          const aEl56 = document.createElement('a');
                          aEl56.setAttribute('title', 'Shriram Life Family Protection Plan	');
                          aEl56.setAttribute('id', 'footer_nav_insurance_life_insurance_protection_plan_shriram_life_family_protection_plan');
                          aEl56.setAttribute('class', 'no--subMenu');
                          aEl56.setAttribute('href', '/insurance/shriram-life-family-protection-plan');
                          aEl56.textContent = 'Shriram Life Family Protection Plan';
                        applinkEl40.append(aEl56);
                      liEl44.append(applinkEl40);
                    ulEl10.append(liEl44);
                  divEl43.append(ulEl10);
                divEl40.append(divEl43);
              divEl39.append(divEl40);
            divEl34.append(divEl39);
          divEl32.append(divEl34);
        divEl2.append(divEl32);

          const divEl44 = document.createElement('div');
          divEl44.setAttribute('_ngcontent-serverapp-c553831109', '');
          divEl44.setAttribute('class', 'footer__group');

            const divEl45 = document.createElement('div');
            divEl45.setAttribute('_ngcontent-serverapp-c553831109', '');
            divEl45.setAttribute('class', 'footer__head js-footer');

              const h5El18 = document.createElement('h5');
              h5El18.setAttribute('_ngcontent-serverapp-c553831109', '');
              h5El18.setAttribute('class', 'footer__heading app-link-flat');

                const spanEl13 = document.createElement('span');
                spanEl13.textContent = 'Payments';
              h5El18.append(spanEl13);

                const spanEl14 = document.createElement('span');
                spanEl14.setAttribute('_ngcontent-serverapp-c553831109', '');
                spanEl14.setAttribute('class', 'footer__arrow');
              h5El18.append(spanEl14);
            divEl45.append(h5El18);
          divEl44.append(divEl45);

            const divEl46 = document.createElement('div');
            divEl46.setAttribute('_ngcontent-serverapp-c553831109', '');
            divEl46.setAttribute('class', 'footer__content');

              const divEl47 = document.createElement('div');
              divEl47.setAttribute('_ngcontent-serverapp-c553831109', '');
              divEl47.setAttribute('class', 'footer__doubleMenu');

                const h5El19 = document.createElement('h5');
                h5El19.setAttribute('_ngcontent-serverapp-c553831109', '');
                h5El19.setAttribute('class', 'app-link-flat footer__listHead');

                  const aEl57 = document.createElement('a');
                  aEl57.setAttribute('title', '');
                  aEl57.setAttribute('href', 'https://www.shriramfinance.in/bbps');
                  aEl57.setAttribute('target', '_self');
                  aEl57.setAttribute('id', 'footer_nav_payments_bbps');
                  aEl57.textContent = 'BBPS';
                h5El19.append(aEl57);
              divEl47.append(h5El19);

                const divEl48 = document.createElement('div');
                divEl48.setAttribute('_ngcontent-serverapp-c553831109', '');
                divEl48.setAttribute('class', 'footer__insurance footer__col footer__col--four footer__insurance--typeThree');

                  const divEl49 = document.createElement('div');
                  divEl49.setAttribute('_ngcontent-serverapp-c553831109', '');
                  divEl49.setAttribute('class', 'footer__inner');

                    const h5El20 = document.createElement('h5');
                    h5El20.setAttribute('_ngcontent-serverapp-c553831109', '');
                    h5El20.setAttribute('class', 'footer__listHead');
                    h5El20.textContent = 'Recharges';
                  divEl49.append(h5El20);

                    const ulEl11 = document.createElement('ul');
                    ulEl11.setAttribute('_ngcontent-serverapp-c553831109', '');
                    ulEl11.setAttribute('class', 'footer__list');

                      const liEl45 = document.createElement('li');
                      liEl45.setAttribute('_ngcontent-serverapp-c553831109', '');

                        const ulEl12 = document.createElement('ul');
                        ulEl12.setAttribute('_ngcontent-serverapp-c553831109', '');
                        ulEl12.setAttribute('class', 'navbar__subMenulist');

                          const liEl46 = document.createElement('li');
                          liEl46.setAttribute('_ngcontent-serverapp-c553831109', '');

                            const aEl58 = document.createElement('a');
                            aEl58.setAttribute('_ngcontent-serverapp-c553831109', '');
                            aEl58.setAttribute('href', '/mobile-recharge');
                            aEl58.setAttribute('id', 'footer_nav_payments_bbps_recharges_mobile_recharge');
                            aEl58.textContent = 'Mobile Recharge';
                          liEl46.append(aEl58);
                        ulEl12.append(liEl46);

                          const liEl47 = document.createElement('li');
                          liEl47.setAttribute('_ngcontent-serverapp-c553831109', '');

                            const aEl59 = document.createElement('a');
                            aEl59.setAttribute('_ngcontent-serverapp-c553831109', '');
                            aEl59.setAttribute('href', '/mobile-postpaid-bill-payment');
                            aEl59.setAttribute('id', 'footer_nav_payments_bbps_recharges_mobile_postpaid_bill_payment');
                            aEl59.textContent = 'Mobile Postpaid Bill Payment';
                          liEl47.append(aEl59);
                        ulEl12.append(liEl47);

                          const liEl48 = document.createElement('li');
                          liEl48.setAttribute('_ngcontent-serverapp-c553831109', '');

                            const aEl60 = document.createElement('a');
                            aEl60.setAttribute('_ngcontent-serverapp-c553831109', '');
                            aEl60.setAttribute('href', '/landline-bill-payment');
                            aEl60.setAttribute('id', 'footer_nav_payments_bbps_recharges_landline_bill_payment');
                            aEl60.textContent = 'Landline Bill Payment';
                          liEl48.append(aEl60);
                        ulEl12.append(liEl48);

                          const liEl49 = document.createElement('li');
                          liEl49.setAttribute('_ngcontent-serverapp-c553831109', '');

                            const aEl61 = document.createElement('a');
                            aEl61.setAttribute('_ngcontent-serverapp-c553831109', '');
                            aEl61.setAttribute('href', '/dth-recharge');
                            aEl61.setAttribute('id', 'footer_nav_payments_bbps_recharges_dth_recharge');
                            aEl61.textContent = 'DTH Recharge';
                          liEl49.append(aEl61);
                        ulEl12.append(liEl49);

                          const liEl50 = document.createElement('li');
                          liEl50.setAttribute('_ngcontent-serverapp-c553831109', '');

                            const aEl62 = document.createElement('a');
                            aEl62.setAttribute('_ngcontent-serverapp-c553831109', '');
                            aEl62.setAttribute('href', '/fastag-recharge');
                            aEl62.setAttribute('id', 'footer_nav_payments_bbps_recharges_fastag_recharge');
                            aEl62.textContent = 'FASTag Recharge';
                          liEl50.append(aEl62);
                        ulEl12.append(liEl50);
                      liEl45.append(ulEl12);
                    ulEl11.append(liEl45);
                  divEl49.append(ulEl11);
                divEl48.append(divEl49);

                  const divEl50 = document.createElement('div');
                  divEl50.setAttribute('_ngcontent-serverapp-c553831109', '');
                  divEl50.setAttribute('class', 'footer__inner');

                    const h5El21 = document.createElement('h5');
                    h5El21.setAttribute('_ngcontent-serverapp-c553831109', '');
                    h5El21.setAttribute('class', 'footer__listHead');
                    h5El21.textContent = 'Utilities & Bills';
                  divEl50.append(h5El21);

                    const ulEl13 = document.createElement('ul');
                    ulEl13.setAttribute('_ngcontent-serverapp-c553831109', '');
                    ulEl13.setAttribute('class', 'footer__list');

                      const liEl51 = document.createElement('li');
                      liEl51.setAttribute('_ngcontent-serverapp-c553831109', '');

                        const ulEl14 = document.createElement('ul');
                        ulEl14.setAttribute('_ngcontent-serverapp-c553831109', '');
                        ulEl14.setAttribute('class', 'navbar__subMenulist');

                          const liEl52 = document.createElement('li');
                          liEl52.setAttribute('_ngcontent-serverapp-c553831109', '');

                            const aEl63 = document.createElement('a');
                            aEl63.setAttribute('_ngcontent-serverapp-c553831109', '');
                            aEl63.setAttribute('href', '/electricity-bill-payment');
                            aEl63.setAttribute('id', 'footer_nav_payments_bbps_utilities_&_bills_electricity_bill_payment');
                            aEl63.textContent = 'Electricity Bill Payment';
                          liEl52.append(aEl63);
                        ulEl14.append(liEl52);

                          const liEl53 = document.createElement('li');
                          liEl53.setAttribute('_ngcontent-serverapp-c553831109', '');

                            const aEl64 = document.createElement('a');
                            aEl64.setAttribute('_ngcontent-serverapp-c553831109', '');
                            aEl64.setAttribute('href', '/cylinder-gas-booking');
                            aEl64.setAttribute('id', 'footer_nav_payments_bbps_utilities_&_bills_lpg_gas_booking');
                            aEl64.textContent = 'LPG Gas Booking';
                          liEl53.append(aEl64);
                        ulEl14.append(liEl53);

                          const liEl54 = document.createElement('li');
                          liEl54.setAttribute('_ngcontent-serverapp-c553831109', '');

                            const aEl65 = document.createElement('a');
                            aEl65.setAttribute('_ngcontent-serverapp-c553831109', '');
                            aEl65.setAttribute('href', '/gas-bill-payment');
                            aEl65.setAttribute('id', 'footer_nav_payments_bbps_utilities_&_bills_gas_bill_payment');
                            aEl65.textContent = 'Gas Bill Payment';
                          liEl54.append(aEl65);
                        ulEl14.append(liEl54);

                          const liEl55 = document.createElement('li');
                          liEl55.setAttribute('_ngcontent-serverapp-c553831109', '');

                            const aEl66 = document.createElement('a');
                            aEl66.setAttribute('_ngcontent-serverapp-c553831109', '');
                            aEl66.setAttribute('href', '/broadband-bill-payment');
                            aEl66.setAttribute('id', 'footer_nav_payments_bbps_utilities_&_bills_broadband_bill_payment');
                            aEl66.textContent = 'Broadband Bill Payment';
                          liEl55.append(aEl66);
                        ulEl14.append(liEl55);

                          const liEl56 = document.createElement('li');
                          liEl56.setAttribute('_ngcontent-serverapp-c553831109', '');

                            const aEl67 = document.createElement('a');
                            aEl67.setAttribute('_ngcontent-serverapp-c553831109', '');
                            aEl67.setAttribute('href', '/water-bill-payment');
                            aEl67.setAttribute('id', 'footer_nav_payments_bbps_utilities_&_bills_water_bill_payment');
                            aEl67.textContent = 'Water Bill Payment';
                          liEl56.append(aEl67);
                        ulEl14.append(liEl56);

                          const liEl57 = document.createElement('li');
                          liEl57.setAttribute('_ngcontent-serverapp-c553831109', '');

                            const aEl68 = document.createElement('a');
                            aEl68.setAttribute('_ngcontent-serverapp-c553831109', '');
                            aEl68.setAttribute('href', '/cable-tv-recharge');
                            aEl68.setAttribute('id', 'footer_nav_payments_bbps_utilities_&_bills_cable_tv_recharge');
                            aEl68.textContent = 'Cable TV Recharge';
                          liEl57.append(aEl68);
                        ulEl14.append(liEl57);
                      liEl51.append(ulEl14);
                    ulEl13.append(liEl51);
                  divEl50.append(ulEl13);
                divEl48.append(divEl50);

                  const divEl51 = document.createElement('div');
                  divEl51.setAttribute('_ngcontent-serverapp-c553831109', '');
                  divEl51.setAttribute('class', 'footer__inner');

                    const h5El22 = document.createElement('h5');
                    h5El22.setAttribute('_ngcontent-serverapp-c553831109', '');
                    h5El22.setAttribute('class', 'footer__listHead');
                    h5El22.textContent = 'Financial services & Taxes';
                  divEl51.append(h5El22);

                    const ulEl15 = document.createElement('ul');
                    ulEl15.setAttribute('_ngcontent-serverapp-c553831109', '');
                    ulEl15.setAttribute('class', 'footer__list');

                      const liEl58 = document.createElement('li');
                      liEl58.setAttribute('_ngcontent-serverapp-c553831109', '');

                        const ulEl16 = document.createElement('ul');
                        ulEl16.setAttribute('_ngcontent-serverapp-c553831109', '');
                        ulEl16.setAttribute('class', 'navbar__subMenulist');

                          const liEl59 = document.createElement('li');
                          liEl59.setAttribute('_ngcontent-serverapp-c553831109', '');

                            const aEl69 = document.createElement('a');
                            aEl69.setAttribute('_ngcontent-serverapp-c553831109', '');
                            aEl69.setAttribute('href', '/credit-card-bill-payment');
                            aEl69.setAttribute('id', 'footer_nav_payments_bbps_financial_services_&_taxes_credit_card_bill_payment');
                            aEl69.textContent = 'Credit Card Bill Payment';
                          liEl59.append(aEl69);
                        ulEl16.append(liEl59);

                          const liEl60 = document.createElement('li');
                          liEl60.setAttribute('_ngcontent-serverapp-c553831109', '');

                            const aEl70 = document.createElement('a');
                            aEl70.setAttribute('_ngcontent-serverapp-c553831109', '');
                            aEl70.setAttribute('href', '/loan-repayment');
                            aEl70.setAttribute('id', 'footer_nav_payments_bbps_financial_services_&_taxes_loan_repayment');
                            aEl70.textContent = 'Loan Repayment';
                          liEl60.append(aEl70);
                        ulEl16.append(liEl60);

                          const liEl61 = document.createElement('li');
                          liEl61.setAttribute('_ngcontent-serverapp-c553831109', '');

                            const aEl71 = document.createElement('a');
                            aEl71.setAttribute('_ngcontent-serverapp-c553831109', '');
                            aEl71.setAttribute('href', '/insurance-premium-payment');
                            aEl71.setAttribute('id', 'footer_nav_payments_bbps_financial_services_&_taxes_insurance_premium_payment');
                            aEl71.textContent = 'Insurance Premium Payment';
                          liEl61.append(aEl71);
                        ulEl16.append(liEl61);

                          const liEl62 = document.createElement('li');
                          liEl62.setAttribute('_ngcontent-serverapp-c553831109', '');

                            const aEl72 = document.createElement('a');
                            aEl72.setAttribute('_ngcontent-serverapp-c553831109', '');
                            aEl72.setAttribute('href', '/municipal-services-and-taxes');
                            aEl72.setAttribute('id', 'footer_nav_payments_bbps_financial_services_&_taxes_municipal_services_and_taxes_pay');
                            aEl72.textContent = 'Municipal Services and taxes Pay';
                          liEl62.append(aEl72);
                        ulEl16.append(liEl62);

                          const liEl63 = document.createElement('li');
                          liEl63.setAttribute('_ngcontent-serverapp-c553831109', '');

                            const aEl73 = document.createElement('a');
                            aEl73.setAttribute('_ngcontent-serverapp-c553831109', '');
                            aEl73.setAttribute('href', '/recurring-deposit-payment');
                            aEl73.setAttribute('id', 'footer_nav_payments_bbps_financial_services_&_taxes_recurring_deposit_payment');
                            aEl73.textContent = 'Recurring Deposit Payment';
                          liEl63.append(aEl73);
                        ulEl16.append(liEl63);
                      liEl58.append(ulEl16);
                    ulEl15.append(liEl58);
                  divEl51.append(ulEl15);
                divEl48.append(divEl51);

                  const divEl52 = document.createElement('div');
                  divEl52.setAttribute('_ngcontent-serverapp-c553831109', '');
                  divEl52.setAttribute('class', 'footer__inner');

                    const h5El23 = document.createElement('h5');
                    h5El23.setAttribute('_ngcontent-serverapp-c553831109', '');
                    h5El23.setAttribute('class', 'footer__listHead');
                    h5El23.textContent = 'Other Services';
                  divEl52.append(h5El23);

                    const ulEl17 = document.createElement('ul');
                    ulEl17.setAttribute('_ngcontent-serverapp-c553831109', '');
                    ulEl17.setAttribute('class', 'footer__list');

                      const liEl64 = document.createElement('li');
                      liEl64.setAttribute('_ngcontent-serverapp-c553831109', '');

                        const ulEl18 = document.createElement('ul');
                        ulEl18.setAttribute('_ngcontent-serverapp-c553831109', '');
                        ulEl18.setAttribute('class', 'navbar__subMenulist');

                          const liEl65 = document.createElement('li');
                          liEl65.setAttribute('_ngcontent-serverapp-c553831109', '');

                            const aEl74 = document.createElement('a');
                            aEl74.setAttribute('_ngcontent-serverapp-c553831109', '');
                            aEl74.setAttribute('href', '/hospital-bill-payment');
                            aEl74.setAttribute('id', 'footer_nav_payments_bbps_other_services_hospital_bill_payment');
                            aEl74.textContent = 'Hospital Bill Payment';
                          liEl65.append(aEl74);
                        ulEl18.append(liEl65);

                          const liEl66 = document.createElement('li');
                          liEl66.setAttribute('_ngcontent-serverapp-c553831109', '');

                            const aEl75 = document.createElement('a');
                            aEl75.setAttribute('_ngcontent-serverapp-c553831109', '');
                            aEl75.setAttribute('href', '/housing-society');
                            aEl75.setAttribute('id', 'footer_nav_payments_bbps_other_services_housing_society_bill_payment');
                            aEl75.textContent = 'Housing Society Bill Payment';
                          liEl66.append(aEl75);
                        ulEl18.append(liEl66);

                          const liEl67 = document.createElement('li');
                          liEl67.setAttribute('_ngcontent-serverapp-c553831109', '');

                            const aEl76 = document.createElement('a');
                            aEl76.setAttribute('_ngcontent-serverapp-c553831109', '');
                            aEl76.setAttribute('href', '/clubs-and-associations');
                            aEl76.setAttribute('id', 'footer_nav_payments_bbps_other_services_clubs_and_associations_bill_payment');
                            aEl76.textContent = 'Clubs and Associations Bill Payment';
                          liEl67.append(aEl76);
                        ulEl18.append(liEl67);

                          const liEl68 = document.createElement('li');
                          liEl68.setAttribute('_ngcontent-serverapp-c553831109', '');

                            const aEl77 = document.createElement('a');
                            aEl77.setAttribute('_ngcontent-serverapp-c553831109', '');
                            aEl77.setAttribute('href', '/education-fees');
                            aEl77.setAttribute('id', 'footer_nav_payments_bbps_other_services_education_fees_pay');
                            aEl77.textContent = 'Education Fees Pay';
                          liEl68.append(aEl77);
                        ulEl18.append(liEl68);
                      liEl64.append(ulEl18);
                    ulEl17.append(liEl64);
                  divEl52.append(ulEl17);
                divEl48.append(divEl52);
              divEl47.append(divEl48);
            divEl46.append(divEl47);

              const divEl53 = document.createElement('div');
              divEl53.setAttribute('_ngcontent-serverapp-c553831109', '');
              divEl53.setAttribute('class', 'footer__doubleMenu');

                const h5El24 = document.createElement('h5');
                h5El24.setAttribute('_ngcontent-serverapp-c553831109', '');
                h5El24.setAttribute('class', 'app-link-flat footer__listHead no--subMenu');

                  const aEl78 = document.createElement('a');
                  aEl78.setAttribute('title', '');
                  aEl78.setAttribute('id', 'footer_nav_payments_pay_loan_emi');
                  aEl78.setAttribute('href', '/pay-loan-emi');
                  aEl78.textContent = 'Pay Loan EMI';
                h5El24.append(aEl78);
              divEl53.append(h5El24);
            divEl46.append(divEl53);

              const divEl54 = document.createElement('div');
              divEl54.setAttribute('_ngcontent-serverapp-c553831109', '');
              divEl54.setAttribute('class', 'footer__doubleMenu');

                const h5El25 = document.createElement('h5');
                h5El25.setAttribute('_ngcontent-serverapp-c553831109', '');
                h5El25.setAttribute('class', 'app-link-flat footer__listHead no--subMenu');

                  const aEl79 = document.createElement('a');
                  aEl79.setAttribute('title', '');
                  aEl79.setAttribute('id', 'footer_nav_payments_fip_rd_installment_pay');
                  aEl79.setAttribute('href', '/fixed-investment-plan-pay-dues');
                  aEl79.textContent = 'FIP/RD Installment pay';
                h5El25.append(aEl79);
              divEl54.append(h5El25);
            divEl46.append(divEl54);

              const divEl55 = document.createElement('div');
              divEl55.setAttribute('_ngcontent-serverapp-c553831109', '');
              divEl55.setAttribute('class', 'footer__doubleMenu');

                const h5El26 = document.createElement('h5');
                h5El26.setAttribute('_ngcontent-serverapp-c553831109', '');
                h5El26.setAttribute('class', 'app-link-flat footer__listHead no--subMenu');

                  const aEl80 = document.createElement('a');
                  aEl80.setAttribute('title', '');
                  aEl80.setAttribute('id', 'footer_nav_payments_upi');
                  aEl80.setAttribute('href', '/upi');
                  aEl80.textContent = 'UPI';
                h5El26.append(aEl80);
              divEl55.append(h5El26);
            divEl46.append(divEl55);
          divEl44.append(divEl46);
        divEl2.append(divEl44);

          const divEl56 = document.createElement('div');
          divEl56.setAttribute('_ngcontent-serverapp-c553831109', '');
          divEl56.setAttribute('class', 'footer__group');

            const divEl57 = document.createElement('div');
            divEl57.setAttribute('_ngcontent-serverapp-c553831109', '');
            divEl57.setAttribute('class', 'footer__head js-footer');

              const h5El27 = document.createElement('h5');
              h5El27.setAttribute('_ngcontent-serverapp-c553831109', '');
              h5El27.setAttribute('class', 'footer__heading app-link-flat');

                const aEl81 = document.createElement('a');
                aEl81.setAttribute('title', 'Calculators');
                aEl81.setAttribute('id', 'footer_nav_calculators');
                aEl81.setAttribute('href', '/calculator');
                aEl81.textContent = 'Calculators';
              h5El27.append(aEl81);

                const spanEl15 = document.createElement('span');
                spanEl15.setAttribute('_ngcontent-serverapp-c553831109', '');
                spanEl15.setAttribute('class', 'footer__arrow');
              h5El27.append(spanEl15);
            divEl57.append(h5El27);
          divEl56.append(divEl57);

            const divEl58 = document.createElement('div');
            divEl58.setAttribute('_ngcontent-serverapp-c553831109', '');
            divEl58.setAttribute('class', 'footer__content');

              const divEl59 = document.createElement('div');
              divEl59.setAttribute('_ngcontent-serverapp-c553831109', '');
              divEl59.setAttribute('class', 'footer__doubleMenu');

                const divEl60 = document.createElement('div');
                divEl60.setAttribute('_ngcontent-serverapp-c553831109', '');
                divEl60.setAttribute('class', 'row');

                  const divEl61 = document.createElement('div');
                  divEl61.setAttribute('_ngcontent-serverapp-c553831109', '');
                  divEl61.setAttribute('class', 'col-lg-12');

                    const ulEl19 = document.createElement('ul');
                    ulEl19.setAttribute('_ngcontent-serverapp-c553831109', '');
                    ulEl19.setAttribute('class', 'footer__list footer__list--calculatorSection');

                      const liEl69 = document.createElement('li');
                      liEl69.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl69.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl82 = document.createElement('a');
                        aEl82.setAttribute('title', 'Interest Calculator');
                        aEl82.setAttribute('id', 'footer_nav_calculators_interest_calculator');
                        aEl82.setAttribute('href', '/interest-calculator');
                        aEl82.textContent = 'Interest Calculator';
                      liEl69.append(aEl82);
                    ulEl19.append(liEl69);

                      const liEl70 = document.createElement('li');
                      liEl70.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl70.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl83 = document.createElement('a');
                        aEl83.setAttribute('title', 'SIP Calculator	');
                        aEl83.setAttribute('id', 'footer_nav_calculators_sip_calculator');
                        aEl83.setAttribute('href', '/sip-calculator');
                        aEl83.textContent = 'SIP Calculator';
                      liEl70.append(aEl83);
                    ulEl19.append(liEl70);

                      const liEl71 = document.createElement('li');
                      liEl71.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl71.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl84 = document.createElement('a');
                        aEl84.setAttribute('title', 'Home loan calculator');
                        aEl84.setAttribute('id', 'footer_nav_calculators_home_loan_calculator');
                        aEl84.setAttribute('href', '/home-loan-calculator');
                        aEl84.textContent = 'Home loan calculator';
                      liEl71.append(aEl84);
                    ulEl19.append(liEl71);

                      const liEl72 = document.createElement('li');
                      liEl72.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl72.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl85 = document.createElement('a');
                        aEl85.setAttribute('title', 'Compound Interest Calculator	');
                        aEl85.setAttribute('id', 'footer_nav_calculators_compound_interest_calculator');
                        aEl85.setAttribute('href', '/compound-interest-calculator');
                        aEl85.textContent = 'Compound Interest Calculator';
                      liEl72.append(aEl85);
                    ulEl19.append(liEl72);

                      const liEl73 = document.createElement('li');
                      liEl73.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl73.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl86 = document.createElement('a');
                        aEl86.setAttribute('title', 'Gratuity Calculator	');
                        aEl86.setAttribute('id', 'footer_nav_calculators_gratuity_calculator');
                        aEl86.setAttribute('href', '/gratuity-calculator');
                        aEl86.textContent = 'Gratuity Calculator';
                      liEl73.append(aEl86);
                    ulEl19.append(liEl73);

                      const liEl74 = document.createElement('li');
                      liEl74.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl74.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl87 = document.createElement('a');
                        aEl87.setAttribute('title', 'Sukanya Samriddhi Yojana Calculator	');
                        aEl87.setAttribute('id', 'footer_nav_calculators_sukanya_samriddhi_yojana_calculator');
                        aEl87.setAttribute('href', '/sukanya-samriddhi-yojana-calculator');
                        aEl87.textContent = 'Sukanya Samriddhi Yojana Calculator';
                      liEl74.append(aEl87);
                    ulEl19.append(liEl74);

                      const liEl75 = document.createElement('li');
                      liEl75.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl75.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl88 = document.createElement('a');
                        aEl88.setAttribute('title', 'NPS Calculator');
                        aEl88.setAttribute('id', 'footer_nav_calculators_nps_calculator');
                        aEl88.setAttribute('href', '/nps-calculator');
                        aEl88.textContent = 'NPS Calculator';
                      liEl75.append(aEl88);
                    ulEl19.append(liEl75);

                      const liEl76 = document.createElement('li');
                      liEl76.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl76.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl89 = document.createElement('a');
                        aEl89.setAttribute('title', 'GST Calculator	');
                        aEl89.setAttribute('id', 'footer_nav_calculators_gst_calculator');
                        aEl89.setAttribute('href', '/gst-calculator');
                        aEl89.textContent = 'GST Calculator';
                      liEl76.append(aEl89);
                    ulEl19.append(liEl76);

                      const liEl77 = document.createElement('li');
                      liEl77.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl77.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl90 = document.createElement('a');
                        aEl90.setAttribute('title', 'Pension Calculator	');
                        aEl90.setAttribute('id', 'footer_nav_calculators_pension_calculator');
                        aEl90.setAttribute('href', '/pension-calculator');
                        aEl90.textContent = 'Pension Calculator';
                      liEl77.append(aEl90);
                    ulEl19.append(liEl77);

                      const liEl78 = document.createElement('li');
                      liEl78.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl78.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl91 = document.createElement('a');
                        aEl91.setAttribute('title', 'HRA Calculator	');
                        aEl91.setAttribute('id', 'footer_nav_calculators_hra_calculator');
                        aEl91.setAttribute('href', '/hra-calculator');
                        aEl91.textContent = 'HRA Calculator';
                      liEl78.append(aEl91);
                    ulEl19.append(liEl78);

                      const liEl79 = document.createElement('li');
                      liEl79.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl79.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl92 = document.createElement('a');
                        aEl92.setAttribute('title', 'CAGR Calculator');
                        aEl92.setAttribute('id', 'footer_nav_calculators_cagr_calculator');
                        aEl92.setAttribute('href', '/cagr-calculator');
                        aEl92.textContent = 'CAGR Calculator';
                      liEl79.append(aEl92);
                    ulEl19.append(liEl79);

                      const liEl80 = document.createElement('li');
                      liEl80.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl80.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl93 = document.createElement('a');
                        aEl93.setAttribute('title', 'Investment Calculator');
                        aEl93.setAttribute('id', 'footer_nav_calculators_investment_calculator');
                        aEl93.setAttribute('href', '/investment-calculator');
                        aEl93.textContent = 'Investment Calculator';
                      liEl80.append(aEl93);
                    ulEl19.append(liEl80);

                      const liEl81 = document.createElement('li');
                      liEl81.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl81.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl94 = document.createElement('a');
                        aEl94.setAttribute('title', 'Lumpsum Calculator');
                        aEl94.setAttribute('id', 'footer_nav_calculators_lumpsum_calculator');
                        aEl94.setAttribute('href', '/lumpsum-calculator');
                        aEl94.textContent = 'Lumpsum Calculator';
                      liEl81.append(aEl94);
                    ulEl19.append(liEl81);

                      const liEl82 = document.createElement('li');
                      liEl82.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl82.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl95 = document.createElement('a');
                        aEl95.setAttribute('title', 'Retirement Calculator	');
                        aEl95.setAttribute('id', 'footer_nav_calculators_retirement_calculator');
                        aEl95.setAttribute('href', '/retirement-calculator');
                        aEl95.textContent = 'Retirement Calculator';
                      liEl82.append(aEl95);
                    ulEl19.append(liEl82);

                      const liEl83 = document.createElement('li');
                      liEl83.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl83.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl96 = document.createElement('a');
                        aEl96.setAttribute('title', 'Discount Calculator	');
                        aEl96.setAttribute('id', 'footer_nav_calculators_discount_calculator');
                        aEl96.setAttribute('href', '/discount-calculator');
                        aEl96.textContent = 'Discount Calculator';
                      liEl83.append(aEl96);
                    ulEl19.append(liEl83);

                      const liEl84 = document.createElement('li');
                      liEl84.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl84.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl97 = document.createElement('a');
                        aEl97.setAttribute('title', 'Inflation Calculator');
                        aEl97.setAttribute('id', 'footer_nav_calculators_inflation_calculator');
                        aEl97.setAttribute('href', '/inflation-calculator');
                        aEl97.textContent = 'Inflation Calculator';
                      liEl84.append(aEl97);
                    ulEl19.append(liEl84);

                      const liEl85 = document.createElement('li');
                      liEl85.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl85.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl98 = document.createElement('a');
                        aEl98.setAttribute('title', 'Home Loan Eligibility Calculator');
                        aEl98.setAttribute('id', 'footer_nav_calculators_home_loan_eligibility_calculator');
                        aEl98.setAttribute('href', '/home-loan-eligibility-calculator');
                        aEl98.textContent = 'Home Loan Eligibility Calculator';
                      liEl85.append(aEl98);
                    ulEl19.append(liEl85);

                      const liEl86 = document.createElement('li');
                      liEl86.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl86.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl99 = document.createElement('a');
                        aEl99.setAttribute('title', 'Credit Card Calculator	');
                        aEl99.setAttribute('id', 'footer_nav_calculators_credit_card_calculator');
                        aEl99.setAttribute('href', '/credit-card-calculator');
                        aEl99.textContent = 'Credit Card Calculator';
                      liEl86.append(aEl99);
                    ulEl19.append(liEl86);

                      const liEl87 = document.createElement('li');
                      liEl87.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl87.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl100 = document.createElement('a');
                        aEl100.setAttribute('title', 'Savings Calculator	');
                        aEl100.setAttribute('id', 'footer_nav_calculators_savings_calculator');
                        aEl100.setAttribute('href', '/savings-calculator');
                        aEl100.textContent = 'Savings Calculator';
                      liEl87.append(aEl100);
                    ulEl19.append(liEl87);

                      const liEl88 = document.createElement('li');
                      liEl88.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl88.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl101 = document.createElement('a');
                        aEl101.setAttribute('title', 'Annuity Calculator	');
                        aEl101.setAttribute('id', 'footer_nav_calculators_annuity_calculator');
                        aEl101.setAttribute('href', '/annuity-calculator');
                        aEl101.textContent = 'Annuity Calculator';
                      liEl88.append(aEl101);
                    ulEl19.append(liEl88);

                      const liEl89 = document.createElement('li');
                      liEl89.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl89.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl102 = document.createElement('a');
                        aEl102.setAttribute('title', 'SWP Calculator	');
                        aEl102.setAttribute('id', 'footer_nav_calculators_swp_calculator');
                        aEl102.setAttribute('href', '/swp-calculator');
                        aEl102.textContent = 'SWP Calculator';
                      liEl89.append(aEl102);
                    ulEl19.append(liEl89);

                      const liEl90 = document.createElement('li');
                      liEl90.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl90.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl103 = document.createElement('a');
                        aEl103.setAttribute('title', 'Post Office FD Calculator	');
                        aEl103.setAttribute('id', 'footer_nav_calculators_post_office_fd_calculator');
                        aEl103.setAttribute('href', '/post-office-fd-calculator');
                        aEl103.textContent = 'Post Office FD Calculator';
                      liEl90.append(aEl103);
                    ulEl19.append(liEl90);

                      const liEl91 = document.createElement('li');
                      liEl91.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl91.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl104 = document.createElement('a');
                        aEl104.setAttribute('title', 'Home Loan Part Pre Payment Calculator');
                        aEl104.setAttribute('id', 'footer_nav_calculators_home_loan_part_pre_payment_calculator');
                        aEl104.setAttribute('href', '/home-loan-part-pre-payment-calculator');
                        aEl104.textContent = 'Home Loan Part Pre Payment Calculator';
                      liEl91.append(aEl104);
                    ulEl19.append(liEl91);

                      const liEl92 = document.createElement('li');
                      liEl92.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl92.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl105 = document.createElement('a');
                        aEl105.setAttribute('title', 'Mutual Fund Returns Calculator');
                        aEl105.setAttribute('id', 'footer_nav_calculators_mutual_fund_returns_calculator');
                        aEl105.setAttribute('href', '/mutual-fund-returns-calculator');
                        aEl105.textContent = 'Mutual Fund Returns Calculator';
                      liEl92.append(aEl105);
                    ulEl19.append(liEl92);

                      const liEl93 = document.createElement('li');
                      liEl93.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl93.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl106 = document.createElement('a');
                        aEl106.setAttribute('title', 'ROI Calculator	');
                        aEl106.setAttribute('id', 'footer_nav_calculators_roi_calculator');
                        aEl106.setAttribute('href', '/roi-calculator');
                        aEl106.textContent = 'ROI Calculator';
                      liEl93.append(aEl106);
                    ulEl19.append(liEl93);

                      const liEl94 = document.createElement('li');
                      liEl94.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl94.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl107 = document.createElement('a');
                        aEl107.setAttribute('title', 'Future Value Calculator');
                        aEl107.setAttribute('id', 'footer_nav_calculators_future_value_calculator');
                        aEl107.setAttribute('href', '/future-value-calculator');
                        aEl107.textContent = 'Future Value Calculator';
                      liEl94.append(aEl107);
                    ulEl19.append(liEl94);

                      const liEl95 = document.createElement('li');
                      liEl95.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl95.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl108 = document.createElement('a');
                        aEl108.setAttribute('title', 'Personal Loan Eligibility Calculator	');
                        aEl108.setAttribute('id', 'footer_nav_calculators_personal_loan_eligibility_calculator');
                        aEl108.setAttribute('href', '/personal-loan-eligibility-calculator');
                        aEl108.textContent = 'Personal Loan Eligibility Calculator';
                      liEl95.append(aEl108);
                    ulEl19.append(liEl95);

                      const liEl96 = document.createElement('li');
                      liEl96.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl96.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl109 = document.createElement('a');
                        aEl109.setAttribute('title', 'Atal Pension Yojana Calculator	');
                        aEl109.setAttribute('id', 'footer_nav_calculators_atal_pension_yojana_calculator');
                        aEl109.setAttribute('href', '/atal-pension-yojana-calculator');
                        aEl109.textContent = 'Atal Pension Yojana Calculator';
                      liEl96.append(aEl109);
                    ulEl19.append(liEl96);

                      const liEl97 = document.createElement('li');
                      liEl97.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl97.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl110 = document.createElement('a');
                        aEl110.setAttribute('title', 'ELSS Calculator	');
                        aEl110.setAttribute('id', 'footer_nav_calculators_elss_calculator');
                        aEl110.setAttribute('href', '/elss-calculator');
                        aEl110.textContent = 'ELSS Calculator';
                      liEl97.append(aEl110);
                    ulEl19.append(liEl97);

                      const liEl98 = document.createElement('li');
                      liEl98.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl98.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl111 = document.createElement('a');
                        aEl111.setAttribute('title', 'Mudra Loan EMI Calculator	');
                        aEl111.setAttribute('id', 'footer_nav_calculators_mudra_loan_emi_calculator');
                        aEl111.setAttribute('href', '/mudra-loan-emi-calculator');
                        aEl111.textContent = 'Mudra Loan EMI Calculator';
                      liEl98.append(aEl111);
                    ulEl19.append(liEl98);

                      const liEl99 = document.createElement('li');
                      liEl99.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl99.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl112 = document.createElement('a');
                        aEl112.setAttribute('title', 'Down Payment Calculator	');
                        aEl112.setAttribute('id', 'footer_nav_calculators_down_payment_calculator');
                        aEl112.setAttribute('href', '/down-payment-calculator');
                        aEl112.textContent = 'Down Payment Calculator';
                      liEl99.append(aEl112);
                    ulEl19.append(liEl99);

                      const liEl100 = document.createElement('li');
                      liEl100.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl100.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl113 = document.createElement('a');
                        aEl113.setAttribute('title', 'Student Loan Calculator	');
                        aEl113.setAttribute('id', 'footer_nav_calculators_student_loan_calculator');
                        aEl113.setAttribute('href', '/student-loan-calculator');
                        aEl113.textContent = 'Student Loan Calculator';
                      liEl100.append(aEl113);
                    ulEl19.append(liEl100);

                      const liEl101 = document.createElement('li');
                      liEl101.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl101.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl114 = document.createElement('a');
                        aEl114.setAttribute('title', 'Agri Loan EMI Calculator	');
                        aEl114.setAttribute('id', 'footer_nav_calculators_agri_loan_emi_calculator');
                        aEl114.setAttribute('href', '/agri-emi-calculator');
                        aEl114.textContent = 'Agri Loan EMI Calculator';
                      liEl101.append(aEl114);
                    ulEl19.append(liEl101);

                      const liEl102 = document.createElement('li');
                      liEl102.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl102.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl115 = document.createElement('a');
                        aEl115.setAttribute('title', 'Home Loan Tax Benefit Calculator	');
                        aEl115.setAttribute('id', 'footer_nav_calculators_home_loan_tax_benefit_calculator');
                        aEl115.setAttribute('href', '/home-loan-tax-benefit-calculator');
                        aEl115.textContent = 'Home Loan Tax Benefit Calculator';
                      liEl102.append(aEl115);
                    ulEl19.append(liEl102);

                      const liEl103 = document.createElement('li');
                      liEl103.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl103.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl116 = document.createElement('a');
                        aEl116.setAttribute('title', 'Term Loan Calculator	');
                        aEl116.setAttribute('id', 'footer_nav_calculators_term_loan_calculator');
                        aEl116.setAttribute('href', '/term-loan-calculator');
                        aEl116.textContent = 'Term Loan Calculator';
                      liEl103.append(aEl116);
                    ulEl19.append(liEl103);

                      const liEl104 = document.createElement('li');
                      liEl104.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl104.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl117 = document.createElement('a');
                        aEl117.setAttribute('title', 'Loan Against Property EMI Calculator	');
                        aEl117.setAttribute('id', 'footer_nav_calculators_loan_against_property_emi_calculator');
                        aEl117.setAttribute('href', '/loan-against-property-emi-calculator');
                        aEl117.textContent = 'Loan Against Property EMI Calculator';
                      liEl104.append(aEl117);
                    ulEl19.append(liEl104);

                      const liEl105 = document.createElement('li');
                      liEl105.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl105.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl118 = document.createElement('a');
                        aEl118.setAttribute('title', 'National Saving Calculator	');
                        aEl118.setAttribute('id', 'footer_nav_calculators_national_saving_calculator');
                        aEl118.setAttribute('href', '/national-saving-calculator');
                        aEl118.textContent = 'National Saving Calculator';
                      liEl105.append(aEl118);
                    ulEl19.append(liEl105);

                      const liEl106 = document.createElement('li');
                      liEl106.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl106.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl119 = document.createElement('a');
                        aEl119.setAttribute('title', 'Equipment Machinery Loan Emi Calculator	');
                        aEl119.setAttribute('id', 'footer_nav_calculators_equipment_machinery_loan_emi_calculator');
                        aEl119.setAttribute('href', '/equipment-machinery-loan-emi-calculator');
                        aEl119.textContent = 'Equipment Machinery Loan Emi Calculator';
                      liEl106.append(aEl119);
                    ulEl19.append(liEl106);

                      const liEl107 = document.createElement('li');
                      liEl107.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl107.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl120 = document.createElement('a');
                        aEl120.setAttribute('title', 'Home Loan Balance Transfer Calculator	');
                        aEl120.setAttribute('id', 'footer_nav_calculators_home_loan_balance_transfer_calculator');
                        aEl120.setAttribute('href', '/home-loan-balance-transfer-calculator');
                        aEl120.textContent = 'Home Loan Balance Transfer Calculator';
                      liEl107.append(aEl120);
                    ulEl19.append(liEl107);

                      const liEl108 = document.createElement('li');
                      liEl108.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl108.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl121 = document.createElement('a');
                        aEl121.setAttribute('title', 'Home Renovation Loan Calculator	');
                        aEl121.setAttribute('id', 'footer_nav_calculators_home_renovation_loan_calculator');
                        aEl121.setAttribute('href', '/home-renovation-loan-calculator');
                        aEl121.textContent = 'Home Renovation Loan Calculator';
                      liEl108.append(aEl121);
                    ulEl19.append(liEl108);

                      const liEl109 = document.createElement('li');
                      liEl109.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl109.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl122 = document.createElement('a');
                        aEl122.setAttribute('title', 'Marriage Loan Calculator	');
                        aEl122.setAttribute('id', 'footer_nav_calculators_marriage_loan_calculator');
                        aEl122.setAttribute('href', '/marriage-loan-calculator');
                        aEl122.textContent = 'Marriage Loan Calculator';
                      liEl109.append(aEl122);
                    ulEl19.append(liEl109);

                      const liEl110 = document.createElement('li');
                      liEl110.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl110.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl123 = document.createElement('a');
                        aEl123.setAttribute('title', 'Home Construction Loan Calculator');
                        aEl123.setAttribute('id', 'footer_nav_calculators_home_construction_loan_calculator');
                        aEl123.setAttribute('href', '/home-construction-loan-calculator');
                        aEl123.textContent = 'Home Construction Loan Calculator';
                      liEl110.append(aEl123);
                    ulEl19.append(liEl110);

                      const liEl111 = document.createElement('li');
                      liEl111.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl111.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl124 = document.createElement('a');
                        aEl124.setAttribute('title', 'Home Extension Loan Calculator	');
                        aEl124.setAttribute('id', 'footer_nav_calculators_home_extension_loan_calculator');
                        aEl124.setAttribute('href', '/home-extension-loan-calculator');
                        aEl124.textContent = 'Home Extension Loan Calculator';
                      liEl111.append(aEl124);
                    ulEl19.append(liEl111);

                      const liEl112 = document.createElement('li');
                      liEl112.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl112.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl125 = document.createElement('a');
                        aEl125.setAttribute('title', 'Doctor Loan EMI Calculator');
                        aEl125.setAttribute('id', 'footer_nav_calculators_doctor_loan_emi_calculator');
                        aEl125.setAttribute('href', '/doctor-loan-emi-calculator');
                        aEl125.textContent = 'Doctor Loan EMI Calculator';
                      liEl112.append(aEl125);
                    ulEl19.append(liEl112);

                      const liEl113 = document.createElement('li');
                      liEl113.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl113.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl126 = document.createElement('a');
                        aEl126.setAttribute('title', 'Secured Business Loan EMI Calculator');
                        aEl126.setAttribute('id', 'footer_nav_calculators_secured_business_loan_emi_calculator');
                        aEl126.setAttribute('href', '/secured-business-loan-emi-calculator');
                        aEl126.textContent = 'Secured Business Loan EMI Calculator';
                      liEl113.append(aEl126);
                    ulEl19.append(liEl113);

                      const liEl114 = document.createElement('li');
                      liEl114.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl114.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl127 = document.createElement('a');
                        aEl127.setAttribute('title', 'Home Affordability Calculator');
                        aEl127.setAttribute('id', 'footer_nav_calculators_home_affordability_calculator');
                        aEl127.setAttribute('href', '/home-loan-affordability-calculator');
                        aEl127.textContent = 'Home Affordability Calculator';
                      liEl114.append(aEl127);
                    ulEl19.append(liEl114);

                      const liEl115 = document.createElement('li');
                      liEl115.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl115.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl128 = document.createElement('a');
                        aEl128.setAttribute('title', 'Loan Against Property Eligibility Calculator');
                        aEl128.setAttribute('id', 'footer_nav_calculators_loan_against_property_eligibility_calculator');
                        aEl128.setAttribute('href', '/loan-against-property-eligibility-calculator');
                        aEl128.textContent = 'Loan Against Property Eligibility Calculator';
                      liEl115.append(aEl128);
                    ulEl19.append(liEl115);

                      const liEl116 = document.createElement('li');
                      liEl116.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl116.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl129 = document.createElement('a');
                        aEl129.setAttribute('title', 'Loan Foreclosure Calculator');
                        aEl129.setAttribute('id', 'footer_nav_calculators_loan_foreclosure_calculator');
                        aEl129.setAttribute('href', '/loan-foreclosure-calculator');
                        aEl129.textContent = 'Loan Foreclosure Calculator';
                      liEl116.append(aEl129);
                    ulEl19.append(liEl116);

                      const liEl117 = document.createElement('li');
                      liEl117.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl117.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl130 = document.createElement('a');
                        aEl130.setAttribute('title', 'Area Conversion Calculator');
                        aEl130.setAttribute('id', 'footer_nav_calculators_area_conversion_calculator');
                        aEl130.setAttribute('href', '/area-conversion-calculator');
                        aEl130.textContent = 'Area Conversion Calculator';
                      liEl117.append(aEl130);
                    ulEl19.append(liEl117);

                      const liEl118 = document.createElement('li');
                      liEl118.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl118.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl131 = document.createElement('a');
                        aEl131.setAttribute('title', 'Budget Calculator');
                        aEl131.setAttribute('id', 'footer_nav_calculators_budget_calculator');
                        aEl131.setAttribute('href', '/budget-calculator');
                        aEl131.textContent = 'Budget Calculator';
                      liEl118.append(aEl131);
                    ulEl19.append(liEl118);

                      const liEl119 = document.createElement('li');
                      liEl119.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl119.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl132 = document.createElement('a');
                        aEl132.setAttribute('title', 'ULIP Calculator');
                        aEl132.setAttribute('id', 'footer_nav_calculators_ulip_calculator');
                        aEl132.setAttribute('href', '/ulip-calculator');
                        aEl132.textContent = 'ULIP Calculator';
                      liEl119.append(aEl132);
                    ulEl19.append(liEl119);

                      const liEl120 = document.createElement('li');
                      liEl120.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl120.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl133 = document.createElement('a');
                        aEl133.setAttribute('title', 'APR Calculator');
                        aEl133.setAttribute('id', 'footer_nav_calculators_apr_calculator');
                        aEl133.setAttribute('href', '/apr-calculator');
                        aEl133.textContent = 'APR Calculator';
                      liEl120.append(aEl133);
                    ulEl19.append(liEl120);

                      const liEl121 = document.createElement('li');
                      liEl121.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl121.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl134 = document.createElement('a');
                        aEl134.setAttribute('title', 'Credit Cards Payoff Calculator');
                        aEl134.setAttribute('id', 'footer_nav_calculators_credit_cards_payoff_calculator');
                        aEl134.setAttribute('href', '/credit-cards-payoff-calculator');
                        aEl134.textContent = 'Credit Cards Payoff Calculator';
                      liEl121.append(aEl134);
                    ulEl19.append(liEl121);

                      const liEl122 = document.createElement('li');
                      liEl122.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl122.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl135 = document.createElement('a');
                        aEl135.setAttribute('title', 'Loan To Value Calculator');
                        aEl135.setAttribute('id', 'footer_nav_calculators_loan_to_value_calculator');
                        aEl135.setAttribute('href', '/loan-to-value-calculator');
                        aEl135.textContent = 'Loan To Value Calculator';
                      liEl122.append(aEl135);
                    ulEl19.append(liEl122);

                      const liEl123 = document.createElement('li');
                      liEl123.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl123.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl136 = document.createElement('a');
                        aEl136.setAttribute('title', 'EBITDA Margin Calculator');
                        aEl136.setAttribute('id', 'footer_nav_calculators_ebitda_margin_calculator');
                        aEl136.setAttribute('href', '/ebitda-calculator');
                        aEl136.textContent = 'EBITDA Margin Calculator';
                      liEl123.append(aEl136);
                    ulEl19.append(liEl123);

                      const liEl124 = document.createElement('li');
                      liEl124.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl124.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl137 = document.createElement('a');
                        aEl137.setAttribute('title', 'Simple Interest Calculator');
                        aEl137.setAttribute('id', 'footer_nav_calculators_simple_interest_calculator');
                        aEl137.setAttribute('href', '/simple-interest-calculator');
                        aEl137.textContent = 'Simple Interest Calculator';
                      liEl124.append(aEl137);
                    ulEl19.append(liEl124);
                  divEl61.append(ulEl19);
                divEl60.append(divEl61);
              divEl59.append(divEl60);
            divEl58.append(divEl59);
          divEl56.append(divEl58);
        divEl2.append(divEl56);

          const divEl62 = document.createElement('div');
          divEl62.setAttribute('_ngcontent-serverapp-c553831109', '');
          divEl62.setAttribute('class', 'footer__group');

            const divEl63 = document.createElement('div');
            divEl63.setAttribute('_ngcontent-serverapp-c553831109', '');
            divEl63.setAttribute('class', 'footer__head js-footer');

              const h5El28 = document.createElement('h5');
              h5El28.setAttribute('_ngcontent-serverapp-c553831109', '');
              h5El28.setAttribute('class', 'footer__heading app-link-flat');

                const spanEl16 = document.createElement('span');
                spanEl16.textContent = 'Discover Shriram';
              h5El28.append(spanEl16);

                const spanEl17 = document.createElement('span');
                spanEl17.setAttribute('_ngcontent-serverapp-c553831109', '');
                spanEl17.setAttribute('class', 'footer__arrow');
              h5El28.append(spanEl17);
            divEl63.append(h5El28);
          divEl62.append(divEl63);

            const divEl64 = document.createElement('div');
            divEl64.setAttribute('_ngcontent-serverapp-c553831109', '');
            divEl64.setAttribute('class', 'footer__content');

              const ulEl20 = document.createElement('ul');
              ulEl20.setAttribute('_ngcontent-serverapp-c553831109', '');
              ulEl20.setAttribute('class', 'footer__list');

                const liEl125 = document.createElement('li');
                liEl125.setAttribute('_ngcontent-serverapp-c553831109', '');
                liEl125.setAttribute('class', 'app-link-flat no--subMenu');

                  const aEl138 = document.createElement('a');
                  aEl138.setAttribute('title', 'About Us');
                  aEl138.setAttribute('id', 'footer_nav_discover_shriram_about_us');
                  aEl138.setAttribute('href', '/about-us');
                  aEl138.textContent = 'About Us';
                liEl125.append(aEl138);
              ulEl20.append(liEl125);

                const liEl126 = document.createElement('li');
                liEl126.setAttribute('_ngcontent-serverapp-c553831109', '');
                liEl126.setAttribute('class', 'app-link-flat no--subMenu');

                  const aEl139 = document.createElement('a');
                  aEl139.setAttribute('title', 'CSR');
                  aEl139.setAttribute('id', 'footer_nav_discover_shriram_csr');
                  aEl139.setAttribute('href', '/corporate-social-responsibility');
                  aEl139.textContent = 'CSR';
                liEl126.append(aEl139);
              ulEl20.append(liEl126);

                const liEl127 = document.createElement('li');
                liEl127.setAttribute('_ngcontent-serverapp-c553831109', '');
                liEl127.setAttribute('class', 'app-link-flat no--subMenu');

                  const aEl140 = document.createElement('a');
                  aEl140.setAttribute('title', 'Media');
                  aEl140.setAttribute('id', 'footer_nav_discover_shriram_media');
                  aEl140.setAttribute('href', '/press-release');
                  aEl140.textContent = 'Media';
                liEl127.append(aEl140);
              ulEl20.append(liEl127);

                const liEl128 = document.createElement('li');
                liEl128.setAttribute('_ngcontent-serverapp-c553831109', '');
                liEl128.setAttribute('class', 'app-link-flat no--subMenu');

                  const aEl141 = document.createElement('a');
                  aEl141.setAttribute('title', 'Careers');
                  aEl141.setAttribute('id', 'footer_nav_discover_shriram_careers');
                  aEl141.setAttribute('href', '/careers');
                  aEl141.textContent = 'Careers';
                liEl128.append(aEl141);
              ulEl20.append(liEl128);

                const liEl129 = document.createElement('li');
                liEl129.setAttribute('_ngcontent-serverapp-c553831109', '');
                liEl129.setAttribute('class', 'app-link-flat no--subMenu');

                  const aEl142 = document.createElement('a');
                  aEl142.setAttribute('title', 'Testimonials');
                  aEl142.setAttribute('id', 'footer_nav_discover_shriram_testimonials');
                  aEl142.setAttribute('href', '/testimonials');
                  aEl142.textContent = 'Testimonials';
                liEl129.append(aEl142);
              ulEl20.append(liEl129);

                const liEl130 = document.createElement('li');
                liEl130.setAttribute('_ngcontent-serverapp-c553831109', '');
                liEl130.setAttribute('class', 'app-link-flat no--subMenu');

                  const aEl143 = document.createElement('a');
                  aEl143.setAttribute('title', 'Downloads');
                  aEl143.setAttribute('id', 'footer_nav_discover_shriram_downloads');
                  aEl143.setAttribute('href', '/downloads');
                  aEl143.textContent = 'Downloads';
                liEl130.append(aEl143);
              ulEl20.append(liEl130);

                const liEl131 = document.createElement('li');
                liEl131.setAttribute('_ngcontent-serverapp-c553831109', '');
                liEl131.setAttribute('class', 'app-link-flat no--subMenu');

                  const aEl144 = document.createElement('a');
                  aEl144.setAttribute('title', 'Articles');
                  aEl144.setAttribute('id', 'footer_nav_discover_shriram_articles');
                  aEl144.setAttribute('href', '/articles');
                  aEl144.textContent = 'Articles';
                liEl131.append(aEl144);
              ulEl20.append(liEl131);

                const liEl132 = document.createElement('li');
                liEl132.setAttribute('_ngcontent-serverapp-c553831109', '');
                liEl132.setAttribute('class', 'app-link-flat no--subMenu');

                  const aEl145 = document.createElement('a');
                  aEl145.setAttribute('title', 'Credit Score');
                  aEl145.setAttribute('id', 'footer_nav_discover_shriram_credit_score');
                  aEl145.setAttribute('href', '/credit-score');
                  aEl145.textContent = 'Credit Score';
                liEl132.append(aEl145);
              ulEl20.append(liEl132);

                const liEl133 = document.createElement('li');
                liEl133.setAttribute('_ngcontent-serverapp-c553831109', '');
                liEl133.setAttribute('class', 'app-link-flat no--subMenu');

                  const aEl146 = document.createElement('a');
                  aEl146.setAttribute('title', 'Financial FAQs');
                  aEl146.setAttribute('id', 'footer_nav_discover_shriram_financial_faqs');
                  aEl146.setAttribute('href', '/financial-faq');
                  aEl146.textContent = 'Financial FAQs';
                liEl133.append(aEl146);
              ulEl20.append(liEl133);
            divEl64.append(ulEl20);
          divEl62.append(divEl64);
        divEl2.append(divEl62);

          const divEl65 = document.createElement('div');
          divEl65.setAttribute('_ngcontent-serverapp-c553831109', '');
          divEl65.setAttribute('class', 'footer__group');

            const divEl66 = document.createElement('div');
            divEl66.setAttribute('_ngcontent-serverapp-c553831109', '');
            divEl66.setAttribute('class', 'footer__head js-footer');

              const h5El29 = document.createElement('h5');
              h5El29.setAttribute('_ngcontent-serverapp-c553831109', '');
              h5El29.setAttribute('class', 'footer__heading');

                const applinkEl41 = document.createElement('app-link');
                applinkEl41.setAttribute('_ngcontent-serverapp-c553831109', '');

                  const aEl147 = document.createElement('a');
                  aEl147.setAttribute('title', 'Investors');
                  aEl147.setAttribute('id', 'footer_nav_investors');
                  aEl147.setAttribute('class', 'no--subMenu');
                  aEl147.setAttribute('href', '/investors/financials');
                  aEl147.textContent = 'Investors';
                applinkEl41.append(aEl147);
              h5El29.append(applinkEl41);
            divEl66.append(h5El29);
          divEl65.append(divEl66);
        divEl2.append(divEl65);

          const divEl67 = document.createElement('div');
          divEl67.setAttribute('_ngcontent-serverapp-c553831109', '');
          divEl67.setAttribute('class', 'footer__group');

            const divEl68 = document.createElement('div');
            divEl68.setAttribute('_ngcontent-serverapp-c553831109', '');
            divEl68.setAttribute('class', 'footer__head js-footer');

              const h5El30 = document.createElement('h5');
              h5El30.setAttribute('_ngcontent-serverapp-c553831109', '');
              h5El30.setAttribute('class', 'footer__heading');

                const applinkEl42 = document.createElement('app-link');
                applinkEl42.setAttribute('_ngcontent-serverapp-c553831109', '');

                  const aEl148 = document.createElement('a');
                  aEl148.setAttribute('title', 'Rewards');
                  aEl148.setAttribute('id', 'footer_nav_rewards');
                  aEl148.setAttribute('class', 'no--subMenu');
                  aEl148.setAttribute('href', '/rewards');
                  aEl148.textContent = 'Rewards';
                applinkEl42.append(aEl148);
              h5El30.append(applinkEl42);
            divEl68.append(h5El30);
          divEl67.append(divEl68);
        divEl2.append(divEl67);

          const divEl69 = document.createElement('div');
          divEl69.setAttribute('_ngcontent-serverapp-c553831109', '');
          divEl69.setAttribute('class', 'footer__group');

            const divEl70 = document.createElement('div');
            divEl70.setAttribute('_ngcontent-serverapp-c553831109', '');
            divEl70.setAttribute('class', 'footer__head js-footer');

              const h5El31 = document.createElement('h5');
              h5El31.setAttribute('_ngcontent-serverapp-c553831109', '');
              h5El31.setAttribute('class', 'footer__heading app-link-flat');

                const aEl149 = document.createElement('a');
                aEl149.setAttribute('title', 'Credit Score');
                aEl149.setAttribute('id', 'footer_nav_credit_score');
                aEl149.setAttribute('href', '/credit-score');
                aEl149.textContent = 'Credit Score';
              h5El31.append(aEl149);

                const spanEl18 = document.createElement('span');
                spanEl18.setAttribute('_ngcontent-serverapp-c553831109', '');
                spanEl18.setAttribute('class', 'footer__arrow');
              h5El31.append(spanEl18);
            divEl70.append(h5El31);
          divEl69.append(divEl70);

            const divEl71 = document.createElement('div');
            divEl71.setAttribute('_ngcontent-serverapp-c553831109', '');
            divEl71.setAttribute('class', 'footer__content');

              const divEl72 = document.createElement('div');
              divEl72.setAttribute('_ngcontent-serverapp-c553831109', '');
              divEl72.setAttribute('class', 'footer__doubleMenu');

                const divEl73 = document.createElement('div');
                divEl73.setAttribute('_ngcontent-serverapp-c553831109', '');
                divEl73.setAttribute('class', 'row');

                  const divEl74 = document.createElement('div');
                  divEl74.setAttribute('_ngcontent-serverapp-c553831109', '');
                  divEl74.setAttribute('class', 'col-lg-12');

                    const ulEl21 = document.createElement('ul');
                    ulEl21.setAttribute('_ngcontent-serverapp-c553831109', '');
                    ulEl21.setAttribute('class', 'footer__list footer__list--creditScoreSection');

                      const liEl134 = document.createElement('li');
                      liEl134.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl134.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl150 = document.createElement('a');
                        aEl150.setAttribute('title', 'Credit Score for Personal Loan');
                        aEl150.setAttribute('id', 'footer_nav_credit_score_credit_score_for_personal_loan');
                        aEl150.setAttribute('href', '/credit-score-for-personal-loan');
                        aEl150.textContent = 'Credit Score for Personal Loan';
                      liEl134.append(aEl150);
                    ulEl21.append(liEl134);

                      const liEl135 = document.createElement('li');
                      liEl135.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl135.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl151 = document.createElement('a');
                        aEl151.setAttribute('title', 'Credit Score for Tractor and Farm Equipment Finance');
                        aEl151.setAttribute('id', 'footer_nav_credit_score_credit_score_for_tractor_and_farm_equipment_finance');
                        aEl151.setAttribute('href', '/credit-score-for-tractor-and-farm-equipment-finance');
                        aEl151.textContent = 'Credit Score for Tractor and Farm Equipment Finance';
                      liEl135.append(aEl151);
                    ulEl21.append(liEl135);

                      const liEl136 = document.createElement('li');
                      liEl136.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl136.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl152 = document.createElement('a');
                        aEl152.setAttribute('title', 'Credit Score for Toll Finance	');
                        aEl152.setAttribute('id', 'footer_nav_credit_score_credit_score_for_toll_finance');
                        aEl152.setAttribute('href', '/credit-score-for-toll-finance');
                        aEl152.textContent = 'Credit Score for Toll Finance';
                      liEl136.append(aEl152);
                    ulEl21.append(liEl136);

                      const liEl137 = document.createElement('li');
                      liEl137.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl137.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl153 = document.createElement('a');
                        aEl153.setAttribute('title', 'Credit Score for Two-Wheeler Loan');
                        aEl153.setAttribute('id', 'footer_nav_credit_score_credit_score_for_two_wheeler_loan');
                        aEl153.setAttribute('href', '/credit-score-for-two-wheeler-loan');
                        aEl153.textContent = 'Credit Score for Two-Wheeler Loan';
                      liEl137.append(aEl153);
                    ulEl21.append(liEl137);

                      const liEl138 = document.createElement('li');
                      liEl138.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl138.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl154 = document.createElement('a');
                        aEl154.setAttribute('title', 'Credit Score for Construction Equipment Finance	');
                        aEl154.setAttribute('id', 'footer_nav_credit_score_credit_score_for_construction_equipment_finance');
                        aEl154.setAttribute('href', '/credit-score-for-construction-equipment-finance');
                        aEl154.textContent = 'Credit Score for Construction Equipment Finance';
                      liEl138.append(aEl154);
                    ulEl21.append(liEl138);

                      const liEl139 = document.createElement('li');
                      liEl139.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl139.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl155 = document.createElement('a');
                        aEl155.setAttribute('title', 'Credit Score for Repair/Top-up Loan	');
                        aEl155.setAttribute('id', 'footer_nav_credit_score_credit_score_for_repair_top_up_loan');
                        aEl155.setAttribute('href', '/credit-score-for-repair-top-up-loan');
                        aEl155.textContent = 'Credit Score for Repair/Top-up Loan';
                      liEl139.append(aEl155);
                    ulEl21.append(liEl139);

                      const liEl140 = document.createElement('li');
                      liEl140.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl140.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl156 = document.createElement('a');
                        aEl156.setAttribute('title', 'Credit Score For Gold Loan	');
                        aEl156.setAttribute('id', 'footer_nav_credit_score_credit_score_for_gold_loan');
                        aEl156.setAttribute('href', '/credit-score-for-gold-loan');
                        aEl156.textContent = 'Credit Score For Gold Loan';
                      liEl140.append(aEl156);
                    ulEl21.append(liEl140);

                      const liEl141 = document.createElement('li');
                      liEl141.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl141.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl157 = document.createElement('a');
                        aEl157.setAttribute('title', 'Credit Score for Working Capital Loan	');
                        aEl157.setAttribute('id', 'footer_nav_credit_score_credit_score_for_working_capital_loan');
                        aEl157.setAttribute('href', '/credit-score-for-working-capital-loan');
                        aEl157.textContent = 'Credit Score for Working Capital Loan';
                      liEl141.append(aEl157);
                    ulEl21.append(liEl141);

                      const liEl142 = document.createElement('li');
                      liEl142.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl142.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl158 = document.createElement('a');
                        aEl158.setAttribute('title', 'Credit Score For Fuel Finance	');
                        aEl158.setAttribute('id', 'footer_nav_credit_score_credit_score_for_fuel_finance');
                        aEl158.setAttribute('href', '/credit-score-for-fuel-finance');
                        aEl158.textContent = 'Credit Score For Fuel Finance';
                      liEl142.append(aEl158);
                    ulEl21.append(liEl142);

                      const liEl143 = document.createElement('li');
                      liEl143.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl143.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl159 = document.createElement('a');
                        aEl159.setAttribute('title', 'Credit Score for Commercial Vehicle Loans	');
                        aEl159.setAttribute('id', 'footer_nav_credit_score_credit_score_for_commercial_vehicle_loans');
                        aEl159.setAttribute('href', '/credit-score-for-commercial-vehicle-loan');
                        aEl159.textContent = 'Credit Score for Commercial Vehicle Loans';
                      liEl143.append(aEl159);
                    ulEl21.append(liEl143);

                      const liEl144 = document.createElement('li');
                      liEl144.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl144.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl160 = document.createElement('a');
                        aEl160.setAttribute('title', 'Credit Score for Vehicle Insurance Finance	');
                        aEl160.setAttribute('id', 'footer_nav_credit_score_credit_score_for_vehicle_insurance_finance');
                        aEl160.setAttribute('href', '/credit-score-for-vehicle-insurance-finance');
                        aEl160.textContent = 'Credit Score for Vehicle Insurance Finance';
                      liEl144.append(aEl160);
                    ulEl21.append(liEl144);

                      const liEl145 = document.createElement('li');
                      liEl145.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl145.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl161 = document.createElement('a');
                        aEl161.setAttribute('title', 'Credit Score for Challan Discounting	');
                        aEl161.setAttribute('id', 'footer_nav_credit_score_credit_score_for_challan_discounting');
                        aEl161.setAttribute('href', '/credit-score-for-challan-discounting');
                        aEl161.textContent = 'Credit Score for Challan Discounting';
                      liEl145.append(aEl161);
                    ulEl21.append(liEl145);

                      const liEl146 = document.createElement('li');
                      liEl146.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl146.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl162 = document.createElement('a');
                        aEl162.setAttribute('title', 'Credit Score for Commercial Goods Vehicle Finance	');
                        aEl162.setAttribute('id', 'footer_nav_credit_score_credit_score_for_commercial_goods_vehicle_finance');
                        aEl162.setAttribute('href', '/credit-score-for-commercial-goods-vehicle-finance');
                        aEl162.textContent = 'Credit Score for Commercial Goods Vehicle Finance';
                      liEl146.append(aEl162);
                    ulEl21.append(liEl146);

                      const liEl147 = document.createElement('li');
                      liEl147.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl147.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl163 = document.createElement('a');
                        aEl163.setAttribute('title', 'Credit Score for Tyre Finance');
                        aEl163.setAttribute('id', 'footer_nav_credit_score_credit_score_for_tyre_finance');
                        aEl163.setAttribute('href', '/credit-score-for-tyre-finance');
                        aEl163.textContent = 'Credit Score for Tyre Finance';
                      liEl147.append(aEl163);
                    ulEl21.append(liEl147);

                      const liEl148 = document.createElement('li');
                      liEl148.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl148.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl164 = document.createElement('a');
                        aEl164.setAttribute('title', 'Credit Score for Business Loans	');
                        aEl164.setAttribute('id', 'footer_nav_credit_score_credit_score_for_business_loans');
                        aEl164.setAttribute('href', '/credit-score-for-business-loan');
                        aEl164.textContent = 'Credit Score for Business Loans';
                      liEl148.append(aEl164);
                    ulEl21.append(liEl148);

                      const liEl149 = document.createElement('li');
                      liEl149.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl149.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl165 = document.createElement('a');
                        aEl165.setAttribute('title', 'Credit Score for Passenger Commercial Vehicle Finance	');
                        aEl165.setAttribute('id', 'footer_nav_credit_score_credit_score_for_passenger_commercial_vehicle_finance');
                        aEl165.setAttribute('href', '/credit-score-for-passenger-commercial-vehicle-finance');
                        aEl165.textContent = 'Credit Score for Passenger Commercial Vehicle Finance';
                      liEl149.append(aEl165);
                    ulEl21.append(liEl149);

                      const liEl150 = document.createElement('li');
                      liEl150.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl150.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl166 = document.createElement('a');
                        aEl166.setAttribute('title', 'Credit Score for Tax Finance	');
                        aEl166.setAttribute('id', 'footer_nav_credit_score_credit_score_for_tax_finance');
                        aEl166.setAttribute('href', '/credit-score-for-tax-finance');
                        aEl166.textContent = 'Credit Score for Tax Finance';
                      liEl150.append(aEl166);
                    ulEl21.append(liEl150);

                      const liEl151 = document.createElement('li');
                      liEl151.setAttribute('_ngcontent-serverapp-c553831109', '');
                      liEl151.setAttribute('class', 'app-link-flat no--subMenu');

                        const aEl167 = document.createElement('a');
                        aEl167.setAttribute('title', 'Free Credit Score');
                        aEl167.setAttribute('id', 'footer_nav_credit_score_free_credit_score');
                        aEl167.setAttribute('href', '/free-credit-score');
                        aEl167.textContent = 'Free Credit Score';
                      liEl151.append(aEl167);
                    ulEl21.append(liEl151);
                  divEl74.append(ulEl21);
                divEl73.append(divEl74);
              divEl72.append(divEl73);
            divEl71.append(divEl72);
          divEl69.append(divEl71);
        divEl2.append(divEl69);

          const divEl75 = document.createElement('div');
          divEl75.setAttribute('_ngcontent-serverapp-c553831109', '');
          divEl75.setAttribute('class', 'footer__group');

            const divEl76 = document.createElement('div');
            divEl76.setAttribute('_ngcontent-serverapp-c553831109', '');
            divEl76.setAttribute('class', 'footer__head js-footer');

              const h5El32 = document.createElement('h5');
              h5El32.setAttribute('_ngcontent-serverapp-c553831109', '');
              h5El32.setAttribute('class', 'footer__heading');

                const applinkEl43 = document.createElement('app-link');
                applinkEl43.setAttribute('_ngcontent-serverapp-c553831109', '');

                  const aEl168 = document.createElement('a');
                  aEl168.setAttribute('title', ' RBI Digital Awareness');
                  aEl168.setAttribute('id', 'footer_nav_rbi_digital_awareness');
                  aEl168.setAttribute('class', 'no--subMenu');
                  aEl168.setAttribute('href', '/rbi-digital-awareness');
                  aEl168.textContent = 'RBI Digital Awareness';
                applinkEl43.append(aEl168);
              h5El32.append(applinkEl43);
            divEl76.append(h5El32);
          divEl75.append(divEl76);
        divEl2.append(divEl75);
      divEl.append(divEl2);

        const divEl77 = document.createElement('div');
        divEl77.setAttribute('_ngcontent-serverapp-c553831109', '');
        divEl77.setAttribute('class', 'footer__group footer__group--margin');

          const ulEl22 = document.createElement('ul');
          ulEl22.setAttribute('_ngcontent-serverapp-c553831109', '');
          ulEl22.setAttribute('class', 'footer__links footer__linksTwo');

            const liEl152 = document.createElement('li');
            liEl152.setAttribute('_ngcontent-serverapp-c553831109', '');
            liEl152.setAttribute('class', 'app-link-flat');

              const aEl169 = document.createElement('a');
              aEl169.setAttribute('title', 'Lending Service Provider');
              aEl169.setAttribute('id', 'footer_nav_lending_service_provider');
              aEl169.setAttribute('href', '/lending-service-provider');
              aEl169.textContent = 'Lending Service Provider';
            liEl152.append(aEl169);
          ulEl22.append(liEl152);

            const liEl153 = document.createElement('li');
            liEl153.setAttribute('_ngcontent-serverapp-c553831109', '');
            liEl153.setAttribute('class', 'app-link-flat');

              const aEl170 = document.createElement('a');
              aEl170.setAttribute('title', 'Auction');
              aEl170.setAttribute('id', 'footer_nav_auction');
              aEl170.setAttribute('href', '/auction');
              aEl170.textContent = 'Auction';
            liEl153.append(aEl170);
          ulEl22.append(liEl153);

            const liEl154 = document.createElement('li');
            liEl154.setAttribute('_ngcontent-serverapp-c553831109', '');
            liEl154.setAttribute('class', 'app-link-flat');

              const aEl171 = document.createElement('a');
              aEl171.setAttribute('title', 'Secured assets possessed under the SARFAESI ACT');
              aEl171.setAttribute('id', 'footer_nav_secured_assets_possessed_under_the_sarfaesi_act');
              aEl171.setAttribute('href', '/repossessed-assets-details');
              aEl171.textContent = 'Secured assets possessed under the SARFAESI ACT';
            liEl154.append(aEl171);
          ulEl22.append(liEl154);

            const liEl155 = document.createElement('li');
            liEl155.setAttribute('_ngcontent-serverapp-c553831109', '');
            liEl155.setAttribute('class', 'app-link-flat');

              const aEl172 = document.createElement('a');
              aEl172.setAttribute('title', 'GST Number');
              aEl172.setAttribute('id', 'footer_nav_gst_number');
              aEl172.setAttribute('href', '/gst-number');
              aEl172.textContent = 'GST Number';
            liEl155.append(aEl172);
          ulEl22.append(liEl155);

            const liEl156 = document.createElement('li');
            liEl156.setAttribute('_ngcontent-serverapp-c553831109', '');
            liEl156.setAttribute('class', 'app-link-flat');

              const aEl173 = document.createElement('a');
              aEl173.setAttribute('title', 'Agent Login');
              aEl173.setAttribute('href', 'https://ibms.shriramfinance.me/IBMSSUITE_SFL/#/login');
              aEl173.setAttribute('target', '_blank');
              aEl173.setAttribute('id', 'footer_nav_agent_login');
              aEl173.textContent = 'Agent Login';
            liEl156.append(aEl173);
          ulEl22.append(liEl156);

            const liEl157 = document.createElement('li');
            liEl157.setAttribute('_ngcontent-serverapp-c553831109', '');
            liEl157.setAttribute('class', 'app-link-flat');

              const aEl174 = document.createElement('a');
              aEl174.setAttribute('title', 'Redressal of Customer Complaints');
              aEl174.setAttribute('href', 'https://cdn.shriramfinance.in/sfl-kalam/files/2025-05/Grievances-Redressal-Mechanism_April2025.pdf');
              aEl174.setAttribute('target', '_blank');
              aEl174.setAttribute('id', 'footer_nav_redressal_of_customer_complaints');
              aEl174.textContent = 'Redressal of Customer Complaints';
            liEl157.append(aEl174);
          ulEl22.append(liEl157);
        divEl77.append(ulEl22);
      divEl.append(divEl77);
    sectionEl.append(divEl);
  footerEl.append(sectionEl);

    const sectionEl2 = document.createElement('section');
    sectionEl2.setAttribute('_ngcontent-serverapp-c553831109', '');
    sectionEl2.setAttribute('class', 'footer__bottom');

      const divEl78 = document.createElement('div');
      divEl78.setAttribute('_ngcontent-serverapp-c553831109', '');
      divEl78.setAttribute('class', 'container');

        const divEl79 = document.createElement('div');
        divEl79.setAttribute('_ngcontent-serverapp-c553831109', '');
        divEl79.setAttribute('class', 'footer__bottomSec footer__bottomSec--first');

          const ulEl23 = document.createElement('ul');
          ulEl23.setAttribute('_ngcontent-serverapp-c553831109', '');
          ulEl23.setAttribute('class', 'footerList');

            const liEl158 = document.createElement('li');
            liEl158.setAttribute('_ngcontent-serverapp-c553831109', '');
            liEl158.setAttribute('class', 'd-none d-xl-block');

              const divEl80 = document.createElement('div');
              divEl80.setAttribute('_ngcontent-serverapp-c553831109', '');
              divEl80.setAttribute('class', 'footerList__inner');

                const pictureEl = document.createElement('picture');
                pictureEl.setAttribute('_ngcontent-serverapp-c553831109', '');
                pictureEl.setAttribute('class', 'mr-2');

                  const imgEl = document.createElement('img');
                  imgEl.setAttribute('_ngcontent-serverapp-c553831109', '');
                  imgEl.setAttribute('width', '72');
                  imgEl.setAttribute('height', '72');
                  imgEl.setAttribute('class', 'footerList__image');
                  imgEl.setAttribute('alt', 'Download App');
                  imgEl.setAttribute('title', 'Download App');
                  imgEl.setAttribute('id', 'footer_nav_download_app');
                  imgEl.setAttribute('loading', 'lazy');
                  imgEl.setAttribute('fetchpriority', 'auto');
                  imgEl.setAttribute('ng-img', 'true');
                  imgEl.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-03/qrcode-footer.svg');
                pictureEl.append(imgEl);
              divEl80.append(pictureEl);

                const h6El = document.createElement('h6');
                h6El.setAttribute('_ngcontent-serverapp-c553831109', '');
                h6El.setAttribute('class', 'footerList__heading');

                  const brEl = document.createElement('br');
                h6El.append(brEl);

                  const brEl2 = document.createElement('br');
                h6El.append(brEl2);
              divEl80.append(h6El);
            liEl158.append(divEl80);
          ulEl23.append(liEl158);

            const liEl159 = document.createElement('li');
            liEl159.setAttribute('_ngcontent-serverapp-c553831109', '');

              const divEl81 = document.createElement('div');
              divEl81.setAttribute('_ngcontent-serverapp-c553831109', '');
              divEl81.setAttribute('class', 'footerList__inner');

                const aEl175 = document.createElement('a');
                aEl175.setAttribute('_ngcontent-serverapp-c553831109', '');
                aEl175.setAttribute('target', '_blank');
                aEl175.setAttribute('href', 'https://play.google.com/store/apps/details?id=com.shriram.one');
                aEl175.setAttribute('title', 'Play Store');
                aEl175.setAttribute('id', 'footer_nav_play_store');

                  const pictureEl2 = document.createElement('picture');
                  pictureEl2.setAttribute('_ngcontent-serverapp-c553831109', '');
                  pictureEl2.setAttribute('class', 'footerList__image footerList__image--appStore');

                    const imgEl2 = document.createElement('img');
                    imgEl2.setAttribute('_ngcontent-serverapp-c553831109', '');
                    imgEl2.setAttribute('width', '135');
                    imgEl2.setAttribute('height', '40');
                    imgEl2.setAttribute('alt', 'google-play');
                    imgEl2.setAttribute('loading', 'lazy');
                    imgEl2.setAttribute('fetchpriority', 'auto');
                    imgEl2.setAttribute('ng-img', 'true');
                    imgEl2.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-03/googleplay.svg');
                  pictureEl2.append(imgEl2);
                aEl175.append(pictureEl2);
              divEl81.append(aEl175);

                const aEl176 = document.createElement('a');
                aEl176.setAttribute('_ngcontent-serverapp-c553831109', '');
                aEl176.setAttribute('target', '_blank');
                aEl176.setAttribute('href', 'https://apps.apple.com/in/app/shriram-one-loans-fd-upi/id6446923754');
                aEl176.setAttribute('title', 'App Store');
                aEl176.setAttribute('id', 'footer_nav_app_store');

                  const pictureEl3 = document.createElement('picture');
                  pictureEl3.setAttribute('_ngcontent-serverapp-c553831109', '');
                  pictureEl3.setAttribute('class', 'footerList__image footerList__image--appStore');

                    const imgEl3 = document.createElement('img');
                    imgEl3.setAttribute('_ngcontent-serverapp-c553831109', '');
                    imgEl3.setAttribute('width', '135');
                    imgEl3.setAttribute('height', '40');
                    imgEl3.setAttribute('alt', 'App Store');
                    imgEl3.setAttribute('loading', 'lazy');
                    imgEl3.setAttribute('fetchpriority', 'auto');
                    imgEl3.setAttribute('ng-img', 'true');
                    imgEl3.setAttribute('src', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-03/app-store-footer.svg');
                  pictureEl3.append(imgEl3);
                aEl176.append(pictureEl3);
              divEl81.append(aEl176);
            liEl159.append(divEl81);
          ulEl23.append(liEl159);

            const liEl160 = document.createElement('li');
            liEl160.setAttribute('_ngcontent-serverapp-c553831109', '');

              const divEl82 = document.createElement('div');
              divEl82.setAttribute('_ngcontent-serverapp-c553831109', '');
              divEl82.setAttribute('class', 'footerList__inner');

                const ulEl24 = document.createElement('ul');
                ulEl24.setAttribute('_ngcontent-serverapp-c553831109', '');
                ulEl24.setAttribute('class', 'footerList__content');

                  const liEl161 = document.createElement('li');
                  liEl161.setAttribute('_ngcontent-serverapp-c553831109', '');

                    const h6El2 = document.createElement('h6');
                    h6El2.setAttribute('_ngcontent-serverapp-c553831109', '');
                    h6El2.setAttribute('class', 'footer__text');
                    h6El2.textContent = 'Toll Free Number:';
                  liEl161.append(h6El2);

                    const ulEl25 = document.createElement('ul');
                    ulEl25.setAttribute('_ngcontent-serverapp-c553831109', '');
                    ulEl25.setAttribute('class', 'footer__tollFree demo');

                      const liEl162 = document.createElement('li');
                      liEl162.setAttribute('_ngcontent-serverapp-c553831109', '');

                        const aEl177 = document.createElement('a');
                        aEl177.setAttribute('_ngcontent-serverapp-c553831109', '');
                        aEl177.setAttribute('href', 'tel:18001034959');
                        aEl177.setAttribute('title', '18001034959');
                        aEl177.setAttribute('id', 'toll_free_number0_0');
                        aEl177.textContent = '18001034959';
                      liEl162.append(aEl177);
                    ulEl25.append(liEl162);

                      const liEl163 = document.createElement('li');
                      liEl163.setAttribute('_ngcontent-serverapp-c553831109', '');

                        const aEl178 = document.createElement('a');
                        aEl178.setAttribute('_ngcontent-serverapp-c553831109', '');
                        aEl178.setAttribute('href', 'tel:18001036369');
                        aEl178.setAttribute('title', '18001036369');
                        aEl178.setAttribute('id', 'toll_free_number0_1');
                        aEl178.textContent = '18001036369';
                      liEl163.append(aEl178);
                    ulEl25.append(liEl163);
                  liEl161.append(ulEl25);
                ulEl24.append(liEl161);

                  const liEl164 = document.createElement('li');
                  liEl164.setAttribute('_ngcontent-serverapp-c553831109', '');

                    const h6El3 = document.createElement('h6');
                    h6El3.setAttribute('_ngcontent-serverapp-c553831109', '');
                    h6El3.setAttribute('class', 'footer__text');
                    h6El3.textContent = 'Deposit Customer Care:';
                  liEl164.append(h6El3);

                    const ulEl26 = document.createElement('ul');
                    ulEl26.setAttribute('_ngcontent-serverapp-c553831109', '');
                    ulEl26.setAttribute('class', 'footer__tollFree demo');

                      const liEl165 = document.createElement('li');
                      liEl165.setAttribute('_ngcontent-serverapp-c553831109', '');

                        const aEl179 = document.createElement('a');
                        aEl179.setAttribute('_ngcontent-serverapp-c553831109', '');
                        aEl179.setAttribute('href', 'tel:18001034959');
                        aEl179.setAttribute('title', '18001034959');
                        aEl179.setAttribute('id', 'toll_free_number1_0');
                        aEl179.textContent = '18001034959';
                      liEl165.append(aEl179);
                    ulEl26.append(liEl165);

                      const liEl166 = document.createElement('li');
                      liEl166.setAttribute('_ngcontent-serverapp-c553831109', '');

                        const aEl180 = document.createElement('a');
                        aEl180.setAttribute('_ngcontent-serverapp-c553831109', '');
                        aEl180.setAttribute('href', 'tel:18001036369');
                        aEl180.setAttribute('title', '18001036369');
                        aEl180.setAttribute('id', 'toll_free_number1_1');
                        aEl180.textContent = '18001036369';
                      liEl166.append(aEl180);
                    ulEl26.append(liEl166);

                      const liEl167 = document.createElement('li');
                      liEl167.setAttribute('_ngcontent-serverapp-c553831109', '');

                        const aEl181 = document.createElement('a');
                        aEl181.setAttribute('_ngcontent-serverapp-c553831109', '');
                        aEl181.setAttribute('href', 'tel:02241574545');
                        aEl181.setAttribute('title', '02241574545');
                        aEl181.setAttribute('id', 'toll_free_number1_2');
                        aEl181.textContent = '02241574545';
                      liEl167.append(aEl181);
                    ulEl26.append(liEl167);
                  liEl164.append(ulEl26);
                ulEl24.append(liEl164);
              divEl82.append(ulEl24);
            liEl160.append(divEl82);
          ulEl23.append(liEl160);

            const liEl168 = document.createElement('li');
            liEl168.setAttribute('_ngcontent-serverapp-c553831109', '');

              const divEl83 = document.createElement('div');
              divEl83.setAttribute('_ngcontent-serverapp-c553831109', '');
              divEl83.setAttribute('class', 'footerList__inner footerList__inner--space');

                const divEl84 = document.createElement('div');
                divEl84.setAttribute('_ngcontent-serverapp-c553831109', '');
                divEl84.setAttribute('class', 'footerList__social');

                  const h6El4 = document.createElement('h6');
                  h6El4.setAttribute('_ngcontent-serverapp-c553831109', '');
                  h6El4.setAttribute('class', 'footer__text');
                  h6El4.textContent = 'Follow us on:';
                divEl84.append(h6El4);

                  const ulEl27 = document.createElement('ul');
                  ulEl27.setAttribute('_ngcontent-serverapp-c553831109', '');
                  ulEl27.setAttribute('class', 'social-share');

                    const liEl169 = document.createElement('li');
                    liEl169.setAttribute('_ngcontent-serverapp-c553831109', '');

                      const aEl182 = document.createElement('a');
                      aEl182.setAttribute('_ngcontent-serverapp-c553831109', '');
                      aEl182.setAttribute('target', '_blank');
                      aEl182.setAttribute('class', 'social-share--youtube');
                      aEl182.setAttribute('href', 'https://www.youtube.com/@shriramfinance');
                      aEl182.setAttribute('title', 'Youtube');
                      aEl182.setAttribute('id', 'footer_nav_youtube');

                        const spanEl19 = document.createElement('span');
                        spanEl19.setAttribute('_ngcontent-serverapp-c553831109', '');
                        spanEl19.setAttribute('class', 'sr-only');
                        spanEl19.textContent = 'Youtube';
                      aEl182.append(spanEl19);
                    liEl169.append(aEl182);
                  ulEl27.append(liEl169);

                    const liEl170 = document.createElement('li');
                    liEl170.setAttribute('_ngcontent-serverapp-c553831109', '');

                      const aEl183 = document.createElement('a');
                      aEl183.setAttribute('_ngcontent-serverapp-c553831109', '');
                      aEl183.setAttribute('target', '_blank');
                      aEl183.setAttribute('class', 'social-share--facebook');
                      aEl183.setAttribute('href', 'https://www.facebook.com/ShriramFinance');
                      aEl183.setAttribute('title', 'Facebook');
                      aEl183.setAttribute('id', 'footer_nav_facebook');

                        const spanEl20 = document.createElement('span');
                        spanEl20.setAttribute('_ngcontent-serverapp-c553831109', '');
                        spanEl20.setAttribute('class', 'sr-only');
                        spanEl20.textContent = 'Facebook';
                      aEl183.append(spanEl20);
                    liEl170.append(aEl183);
                  ulEl27.append(liEl170);

                    const liEl171 = document.createElement('li');
                    liEl171.setAttribute('_ngcontent-serverapp-c553831109', '');

                      const aEl184 = document.createElement('a');
                      aEl184.setAttribute('_ngcontent-serverapp-c553831109', '');
                      aEl184.setAttribute('target', '_blank');
                      aEl184.setAttribute('class', 'social-share--instagram');
                      aEl184.setAttribute('href', 'https://www.instagram.com/shriramfinance');
                      aEl184.setAttribute('title', 'Instagram');
                      aEl184.setAttribute('id', 'footer_nav_instagram');

                        const spanEl21 = document.createElement('span');
                        spanEl21.setAttribute('_ngcontent-serverapp-c553831109', '');
                        spanEl21.setAttribute('class', 'sr-only');
                        spanEl21.textContent = 'Instagram';
                      aEl184.append(spanEl21);
                    liEl171.append(aEl184);
                  ulEl27.append(liEl171);

                    const liEl172 = document.createElement('li');
                    liEl172.setAttribute('_ngcontent-serverapp-c553831109', '');

                      const aEl185 = document.createElement('a');
                      aEl185.setAttribute('_ngcontent-serverapp-c553831109', '');
                      aEl185.setAttribute('target', '_blank');
                      aEl185.setAttribute('class', 'social-share--linkedin');
                      aEl185.setAttribute('href', 'https://www.linkedin.com/company/shriramfinance');
                      aEl185.setAttribute('title', 'LinkedIn');
                      aEl185.setAttribute('id', 'footer_nav_linkedin');

                        const spanEl22 = document.createElement('span');
                        spanEl22.setAttribute('_ngcontent-serverapp-c553831109', '');
                        spanEl22.setAttribute('class', 'sr-only');
                        spanEl22.textContent = 'LinkedIn';
                      aEl185.append(spanEl22);
                    liEl172.append(aEl185);
                  ulEl27.append(liEl172);
                divEl84.append(ulEl27);
              divEl83.append(divEl84);
            liEl168.append(divEl83);
          ulEl23.append(liEl168);
        divEl79.append(ulEl23);
      divEl78.append(divEl79);

        const divEl85 = document.createElement('div');
        divEl85.setAttribute('_ngcontent-serverapp-c553831109', '');
        divEl85.setAttribute('class', 'footer__bottomSec');

          const divEl86 = document.createElement('div');
          divEl86.setAttribute('_ngcontent-serverapp-c553831109', '');
          divEl86.setAttribute('class', 'row');

            const divEl87 = document.createElement('div');
            divEl87.setAttribute('_ngcontent-serverapp-c553831109', '');
            divEl87.setAttribute('class', 'col-md-6');

              const divEl88 = document.createElement('div');
              divEl88.setAttribute('_ngcontent-serverapp-c553831109', '');
              divEl88.setAttribute('class', 'footerAddress__content');

                const h6El5 = document.createElement('h6');
                h6El5.setAttribute('_ngcontent-serverapp-c553831109', '');
                h6El5.setAttribute('class', 'footer__text');
                h6El5.textContent = 'Registered Office';
              divEl88.append(h6El5);

                const addressEl = document.createElement('address');
                addressEl.setAttribute('_ngcontent-serverapp-c553831109', '');
                addressEl.setAttribute('class', 'footer__text');

                  const h6El6 = document.createElement('h6');
                  h6El6.textContent = 'Shriram Finance Limited,14A, Sri towers,South Phase, Industrial Estate,Guindy, Chennai – 600 032, Tamil Nadu. Tel. No: 044 485 24 666 | Fax: 044 485 25 666';
                addressEl.append(h6El6);
              divEl88.append(addressEl);
            divEl87.append(divEl88);
          divEl86.append(divEl87);

            const divEl89 = document.createElement('div');
            divEl89.setAttribute('_ngcontent-serverapp-c553831109', '');
            divEl89.setAttribute('class', 'col-md-6');

              const ulEl28 = document.createElement('ul');
              ulEl28.setAttribute('_ngcontent-serverapp-c553831109', '');
              ulEl28.setAttribute('class', 'footer__links footer__links--two');

                const liEl173 = document.createElement('li');
                liEl173.setAttribute('_ngcontent-serverapp-c553831109', '');

                  const applinkEl44 = document.createElement('app-link');
                  applinkEl44.setAttribute('_ngcontent-serverapp-c553831109', '');

                    const aEl186 = document.createElement('a');
                    aEl186.setAttribute('title', 'Terms and Conditions');
                    aEl186.setAttribute('id', 'footer_nav_terms_and_conditions');
                    aEl186.setAttribute('href', '/terms-and-conditions');
                    aEl186.textContent = 'Terms and Conditions';
                  applinkEl44.append(aEl186);
                liEl173.append(applinkEl44);
              ulEl28.append(liEl173);

                const liEl174 = document.createElement('li');
                liEl174.setAttribute('_ngcontent-serverapp-c553831109', '');

                  const applinkEl45 = document.createElement('app-link');
                  applinkEl45.setAttribute('_ngcontent-serverapp-c553831109', '');

                    const aEl187 = document.createElement('a');
                    aEl187.setAttribute('title', ' Privacy Policy');
                    aEl187.setAttribute('id', 'footer_nav_privacy_policy');
                    aEl187.setAttribute('href', '/privacy-policy');
                    aEl187.setAttribute('target', '_blank');
                    aEl187.textContent = 'Privacy Policy';
                  applinkEl45.append(aEl187);
                liEl174.append(applinkEl45);
              ulEl28.append(liEl174);

                const liEl175 = document.createElement('li');
                liEl175.setAttribute('_ngcontent-serverapp-c553831109', '');

                  const applinkEl46 = document.createElement('app-link');
                  applinkEl46.setAttribute('_ngcontent-serverapp-c553831109', '');

                    const aEl188 = document.createElement('a');
                    aEl188.setAttribute('title', 'Site Map');
                    aEl188.setAttribute('id', 'footer_nav_site_map');
                    aEl188.setAttribute('href', '/sitemap');
                    aEl188.textContent = 'Site Map';
                  applinkEl46.append(aEl188);
                liEl175.append(applinkEl46);
              ulEl28.append(liEl175);

                const liEl176 = document.createElement('li');
                liEl176.setAttribute('_ngcontent-serverapp-c553831109', '');

                  const applinkEl47 = document.createElement('app-link');
                  applinkEl47.setAttribute('_ngcontent-serverapp-c553831109', '');

                    const aEl189 = document.createElement('a');
                    aEl189.setAttribute('title', 'Interest Rate Policy');
                    aEl189.setAttribute('href', 'https://cdn.shriramfinance.in/sfl-kalam/files/2025-05/Interest-Rate-Policy_Apr-25.pdf');
                    aEl189.setAttribute('target', '_blank');
                    aEl189.setAttribute('id', 'footer_nav_interest_rate_policy');
                    aEl189.textContent = 'Interest Rate Policy';
                  applinkEl47.append(aEl189);
                liEl176.append(applinkEl47);
              ulEl28.append(liEl176);

                const liEl177 = document.createElement('li');
                liEl177.setAttribute('_ngcontent-serverapp-c553831109', '');

                  const applinkEl48 = document.createElement('app-link');
                  applinkEl48.setAttribute('_ngcontent-serverapp-c553831109', '');

                    const aEl190 = document.createElement('a');
                    aEl190.setAttribute('title', 'Loan Recovery Policy');
                    aEl190.setAttribute('href', 'https://cdn.shriramfinance.in/sfl-kalam/files/2025-04/Loan-Recovery-Policy_Mar2025.pdf');
                    aEl190.setAttribute('target', '_blank');
                    aEl190.setAttribute('id', 'footer_nav_loan_recovery_policy');
                    aEl190.textContent = 'Loan Recovery Policy';
                  applinkEl48.append(aEl190);
                liEl177.append(applinkEl48);
              ulEl28.append(liEl177);

                const liEl178 = document.createElement('li');
                liEl178.setAttribute('_ngcontent-serverapp-c553831109', '');

                  const applinkEl49 = document.createElement('app-link');
                  applinkEl49.setAttribute('_ngcontent-serverapp-c553831109', '');

                    const aEl191 = document.createElement('a');
                    aEl191.setAttribute('title', 'Policy on Penal Charge');
                    aEl191.setAttribute('href', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-03/Website_App_Communication-New.pdf');
                    aEl191.setAttribute('target', '_blank');
                    aEl191.setAttribute('id', 'footer_nav_policy_on_penal_charge');
                    aEl191.textContent = 'Policy on Penal Charge';
                  applinkEl49.append(aEl191);
                liEl178.append(applinkEl49);
              ulEl28.append(liEl178);

                const liEl179 = document.createElement('li');
                liEl179.setAttribute('_ngcontent-serverapp-c553831109', '');

                  const applinkEl50 = document.createElement('app-link');
                  applinkEl50.setAttribute('_ngcontent-serverapp-c553831109', '');

                    const aEl192 = document.createElement('a');
                    aEl192.setAttribute('title', 'Consumer Education Literature');
                    aEl192.setAttribute('href', 'https://cdn.shriramfinance.in/sfl-kalam/files/2024-04/SFL-Consumer-Education-Literature-March2024.pdf');
                    aEl192.setAttribute('target', '_blank');
                    aEl192.setAttribute('id', 'footer_nav_consumer_education_literature');
                    aEl192.textContent = 'Consumer Education Literature';
                  applinkEl50.append(aEl192);
                liEl179.append(applinkEl50);
              ulEl28.append(liEl179);

                const liEl180 = document.createElement('li');
                liEl180.setAttribute('_ngcontent-serverapp-c553831109', '');

                  const applinkEl51 = document.createElement('app-link');
                  applinkEl51.setAttribute('_ngcontent-serverapp-c553831109', '');

                    const aEl193 = document.createElement('a');
                    aEl193.setAttribute('title', 'Inactive/Terminated DSAs');
                    aEl193.setAttribute('href', 'https://cdn.shriramfinance.in/sfl-kalam/files/2025-06/Inactive-or-Terminated-DSAs.xlsx');
                    aEl193.setAttribute('target', '_blank');
                    aEl193.setAttribute('id', 'footer_nav_inactive_terminated_dsas');
                    aEl193.textContent = 'Inactive/Terminated DSAs';
                  applinkEl51.append(aEl193);
                liEl180.append(applinkEl51);
              ulEl28.append(liEl180);

                const liEl181 = document.createElement('li');
                liEl181.setAttribute('_ngcontent-serverapp-c553831109', '');

                  const applinkEl52 = document.createElement('app-link');
                  applinkEl52.setAttribute('_ngcontent-serverapp-c553831109', '');

                    const aEl194 = document.createElement('a');
                    aEl194.setAttribute('title', 'Reach Us');
                    aEl194.setAttribute('id', 'footer_nav_reach_us');
                    aEl194.setAttribute('href', '/reach-us');
                    aEl194.textContent = 'Reach Us';
                  applinkEl52.append(aEl194);
                liEl181.append(applinkEl52);
              ulEl28.append(liEl181);
            divEl89.append(ulEl28);

              const divEl90 = document.createElement('div');
              divEl90.setAttribute('_ngcontent-serverapp-c553831109', '');
              divEl90.setAttribute('class', 'footer__bottomSec footer__bottomSec--last');

                const h6El7 = document.createElement('h6');
                h6El7.setAttribute('_ngcontent-serverapp-c553831109', '');
                h6El7.setAttribute('class', 'copy-right');
                h6El7.textContent = '© 2025 Shriram Finance Limited. All rights reserved';
              divEl90.append(h6El7);
            divEl89.append(divEl90);
          divEl86.append(divEl89);
        divEl85.append(divEl86);
      divEl78.append(divEl85);

        const divEl91 = document.createElement('div');
        divEl91.setAttribute('_ngcontent-serverapp-c553831109', '');
        divEl91.setAttribute('class', 'footer__text mb-0');

          const pEl = document.createElement('p');
          pEl.setAttribute('class', 'd-md-none mb-0');
        divEl91.append(pEl);

          const pEl2 = document.createElement('p');
          pEl2.textContent = 'Corporate Identity Number (CIN) – L65191TN1979PLC007874';
        divEl91.append(pEl2);

          const pEl3 = document.createElement('p');
          pEl3.textContent = 'IRDAI Corporate Agent (Composite) - CA0197 (Validity - 01-Apr-2025 to 31-Mar-2028)';
        divEl91.append(pEl3);
      divEl78.append(divEl91);
    sectionEl2.append(divEl78);
  footerEl.append(sectionEl2);
  container.append(footerEl);


  block.textContent = '';
  block.append(container);
}