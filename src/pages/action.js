import React, { useState } from 'react';

import { PaymentPopup } from '../containers';

const HomePage = () => {
  const [dateFirst, setDateFirst] = useState(false);
  const [dateSecond, setDateSecond] = useState(false);
  const [dateThird, setDateThird] = useState(false);
  const [partyFirst, setPartyFirst] = useState(false);
  const [partySecond, setPartySecond] = useState(false);
  const [partyThird, setPartyThird] = useState(false);

  return (
    <div className="content_wrapper clearfix">
      <style>
        {`body {
              color: #fff !important;
            }`}
      </style>
      <PaymentPopup
        open={dateFirst}
        onClose={() => setDateFirst(false)}
        title="Surprise"
        hours="3"
        price="25"
      />
      <PaymentPopup
        open={dateSecond}
        onClose={() => setDateSecond(false)}
        title="Love evening"
        hours="3"
        price="45"
      />
      <PaymentPopup
        open={dateThird}
        onClose={() => setDateThird(false)}
        title="Date in the Stars"
        hours="4"
        price="90"
      />
      <PaymentPopup
        open={partyFirst}
        onClose={() => setPartyFirst(false)}
        title="All friends"
        hours="3"
        price="250"
      />
      <PaymentPopup
        open={partySecond}
        onClose={() => setPartySecond(false)}
        title="All you need"
        hours="3"
        price="340"
      />
      <PaymentPopup
        open={partyThird}
        onClose={() => setPartyThird(false)}
        title="Everything and immediately"
        hours="3"
        price="430"
      />
      <div className="sections_group">
        <div className="entry-content" itemProp="mainContentOfPage">
          <div
            className="section mcb-section action-main-page bg-cover"
            style={{
              paddingTop: '220px',
              paddingBottom: '0px',
              backgroundImage: 'url(https://msk.kinohouse.me/wp-content/uploads/2018/04/main_first_bg.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top',
            }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix">
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix align_center">
                      <h2>Our rooms</h2>
                      <hr
                        style={{
                          width: '100px',
                          marginBottom: '10px',
                          marginTop: 0,
                          border: 0,
                          borderTop: '2px solid #e5097f',
                        }}
                      />
                      <p>We have 3 perfect variants for you:</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap mcb-wrap one  valign-top clearfix">
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-third column_pricing_item price-vip">
                    <div className="pricing-box  cp-right pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img
                            src="https://msk.kinohouse.me/wp-content/uploads/2018/05/vip-5-new.jpg"
                            alt="vip-5-new"
                            width={600}
                            height={370}
                          />
                        </div>
                        <h2></h2>
                        <h3>Surprise</h3>
                        <div className="price">
                          <span>25</span>
                          <sup className="currency">$</sup>
                          <sup className="period" />
                        </div>
                        <hr className="hr_color" />
                        <p className="subtitle"></p>
                        <p style={{ color: '#ffffff' }}>
                          At the order
                          <br />
                          Surprise you will receive:
                        </p>
                        <p />
                      </div>
                      <div className="plan-inside">
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Romantic decoration of the hall with rose petals and candles;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Preselection of favorite film or music;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Dinner for two (Italian, Japanese, Chinese cuisine, to choose from);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Delicious desserts: chocolate fondue with fruits;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Tea or coffee (to choose from);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Duration: 3 hours.
                        </p>
                        <button
                          className="button main_button fourth_button"
                          style={{ float: 'center' }}
                          onClick={() => setDateFirst(true)}
                        >
                          Book room
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-third column_pricing_item price-vip-top">
                    <div className="pricing-box  cp-right pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img src="style/img/vip-7-new.jpeg" alt="vip-7-new" width={600} height={370} />
                        </div>
                        <h2></h2>
                        <h3>Love evening</h3>
                        <div className="price">
                          <span>45</span>
                          <sup className="currency">$</sup>
                          <sup className="period" />
                        </div>
                        <hr className="hr_color" />
                        <p className="subtitle"></p>
                        <p style={{ color: '#ffffff' }}>
                          At the order
                          <br />
                          "Love evening" you receive:
                        </p>
                        <p />
                      </div>
                      <div className="plan-inside">
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Romantic decoration of the hall with rose petals and candles;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Preselection of favorite film or music;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Dinner for two (Italian, Japanese, Chinese cuisine, to choose from);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Delicious desserts: chocolate fondue with fruits;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Tea or coffee (to choose from);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Surprise from "Private Cafe": a bottle of champagne
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Duration: 3 hours.
                        </p>
                        <button
                          className="button main_button fourth_button"
                          style={{ float: 'center' }}
                          onClick={() => setDateSecond(true)}
                        >
                          Book room
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-third column_pricing_item price-vip">
                    <div className="pricing-box  cp-right pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img src="style/img/vip-15-new.jpeg" alt="vip-15-new" width={600} height={370} />
                        </div>
                        <h2></h2>
                        <h3>Date in the Stars</h3>
                        <div className="price">
                          <span>90</span>
                          <sup className="currency">$</sup>
                          <sup className="period" />
                        </div>
                        <hr className="hr_color" />
                        <p className="subtitle"></p>
                        <p style={{ color: '#ffffff' }}>
                          At the order
                          <br />
                          You will receive a «Date in the Stars»:
                        </p>
                        <p />
                      </div>
                      <div className="plan-inside">
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Megaromantic decoration of the great hall with rose petals, candles, balls (20th
                          Pc.);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Dinner for two (Italian, Japanese, Chinese cuisine, to choose from);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px' }}>
                          Photo shoot at the end of the date;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Bouquet of flowers for the woman / favorite dish for the man;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Delicious desserts: chocolate fondue with fruits;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Tea or coffee (to choose from);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Surprise from "Private Cafe": a bottle of "Mondoro" champagne or wine (for
                          Selection);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Duration: 4 hours;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Preselection of favorite film or music;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Ein Geschenk von "Private Cafe" - "River Cruise on the River"
                        </p>
                        <button
                          className="button main_button fourth_button"
                          onClick={() => setDateThird(true)}
                        >
                          Book room
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section mcb-section    bg-cover"
            style={{
              paddingTop: '80px',
              paddingBottom: '80px',
              backgroundImage: 'url(style/img/bg6.jpeg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top',
            }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix">
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix align_center">
                      <h2>Rest solutions with the company</h2>
                      <hr
                        style={{
                          width: '100px',
                          marginBottom: '10px',
                          marginTop: 0,
                          border: 0,
                          borderTop: '2px solid #e5097f',
                        }}
                      />
                      <p>3 options for turnkey celebrations</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap mcb-wrap one  valign-top clearfix">
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-third column_pricing_item price-vip">
                    <div className="pricing-box  cp-right pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img src="style/img/vsesloyi.jpeg" alt="vsesloyi" width={600} height={370} />
                        </div>
                        <h2>With all friends</h2>
                        <div className="price">
                          <span>250</span>
                          <sup className="currency">$</sup>
                          <sup className="period" />
                        </div>
                        <hr className="hr_color" />
                        <p className="subtitle"></p>
                        <p style={{ color: '#ffffff' }}>
                          Passt für eine Veranstaltung maximal für 10 Personen.
                          <br />
                          Time - 3 hours
                          <br />
                          (Big hall).
                        </p>
                        <p />
                      </div>
                      <div className="plan-inside">
                        This is also available:
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Karaoke;</p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Watch music videos and films;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>PlayStation;</p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Board games (large selection);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          1 good for all tastes; Tea / coffee for guests
                        </p>
                        <br />
                        <button
                          className="button main_button fourth_button"
                          style={{ float: 'center' }}
                          onClick={() => setPartyFirst(true)}
                        >
                          Book room
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-third column_pricing_item price-vip-top">
                    <div className="pricing-box  cp-right pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img src="style/img/vsechtonado.jpeg" alt="vsechtonado" width={600} height={370} />
                        </div>
                        <h2>All you need</h2>
                        <div className="price">
                          <span>340</span>
                          <sup className="currency">$</sup>
                          <sup className="period" />
                        </div>
                        <hr className="hr_color" />
                        <p className="subtitle"></p>
                        <p style={{ color: '#ffffff' }}>
                          Fits for one event for a maximum of 15 people.
                          <br />
                          Time - 3 hours
                          <br />
                          (Big hall).
                        </p>
                        <p />
                      </div>
                      <div className="plan-inside">
                        This is also available:
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Karaoke;</p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Watch music videos and films;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>PlayStation;</p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Board games (large selection);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          2 good ones for all tastes; Tea / coffee for guests
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Snacks (chips / popcorn in assortment) and unlimited cola;
                        </p>
                        <br />
                        <button
                          className="button main_button fourth_button"
                          style={{ float: 'center' }}
                          onClick={() => setPartySecond(true)}
                        >
                          Book room
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-third column_pricing_item price-vip">
                    <div className="pricing-box  cp-right pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img src="style/img/vseisrazu.jpeg" alt="vseisrazu" width={600} height={370} />
                        </div>
                        <h2>Everything and immediately</h2>
                        <div className="price">
                          <span>430</span>
                          <sup className="currency">$</sup>
                          <sup className="period" />
                        </div>
                        <hr className="hr_color" />
                        <p className="subtitle"></p>
                        <p style={{ color: '#ffffff' }}>
                          Number of guests - up to 50 people.
                          <br />
                          Time - 3 hours
                          <br />
                          (KC ground floor - 2 rooms and a hall).
                        </p>
                        <p />
                      </div>
                      <div className="plan-inside">
                        This is also available:
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Karaoke;</p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Watch music videos and films;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>PlayStation;</p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Board games (large selection);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Tea / coffee for guests;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Snacks (chips / popcorn in assortment) and unlimited cola;Decoration balls (15
                          pcs.);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Decoration balls (15 pcs.);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Birthday cake;</p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Photo shooting;</p>
                        <br />
                        <button
                          className="button main_button fourth_button"
                          style={{ float: 'center' }}
                          onClick={() => setPartyThird(true)}
                        >
                          Book room
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section mcb-section  main_seven "
            id="contacts"
            style={{ paddingTop: '80px', paddingBottom: '0px', backgroundColor: '#2d183a' }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix">
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix">
                      <h2>How to find us?</h2>
                      <div className="footer-impressum">
                        <p>
                          Contact <br />
                          <br />
                          You can get support for using Private Cafe via this link and via the "Chat" button
                          at the bottom right.
                          <br />
                          <br /> We take legal and regulatory inquiries by post, by fax on +44 30 228688059
                          <br /> by phone at +44 30 228688059. Our general e-mail address is
                          privates-cafe@outlook.com, we are also about the o. a. Call number reachable. For If
                          you have any questions about support for the use of Privates Cafe, please use the
                          above. Left or the button "Chat".
                        </p>
                      </div>
                      <div className="main_seven-flex">
                        <div className="main_seven-item adress_item">
                          <div className="adress-wrap">
                            <p className="main_seven-phone">
                              <a className="roistat-phone" href="tel:74996497094">
                                +7 (499) 649-70-94
                              </a>
                              <br />
                            </p>
                            <ul>
                              <li>
                                <span>Mo-Th</span> 12:00-00:00
                              </li>
                              <li>
                                <span>Fr-Su</span> 12:00-06:00
                              </li>
                              <li>
                                <span>Adress: </span>
                                <ul className="contacts-list-inner">
                                  <li>
                                    <span>197 Spadina Ave. suite 400, Toronto</span>
                                  </li>
                                  <li>
                                    <span>245 Rue Saint-Jacques, Montréal, QC H2Y 1L9</span>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section the_content no_content" />
          <div className="section section-page-footer">
            <div className="section_wrapper clearfix">
              <div className="column one page-pager"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
