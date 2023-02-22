import React, { useState } from 'react';

import { PaymentPopup } from '../containers';

const HomePage = () => {
  const [dateFirst, setDateFirst] = useState(false);
  const [dateSecond, setDateSecond] = useState(false);
  const [dateThird, setDateThird] = useState(false);

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
        title="«Love evening»"
        hours="3"
        price="45"
      />
      <PaymentPopup
        open={dateThird}
        onClose={() => setDateThird(false)}
        title="«Date in the stars»"
        hours="4"
        price="90"
      />
      <div className="sections_group">
        <div
          className="section mcb-section full-screen   bg-cover"
          style={{
            paddingTop: '0px',
            paddingBottom: '0px',
            backgroundColor: '',
            backgroundImage: 'url(style/img/svbg.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center top',
            backgroundAttachment: '',
            backgroundSize: '',
            WebkitBackgroundSize: '',
          }}
        >
          <div className="section_wrapper mcb-section-inner">
            <div className="wrap mcb-wrap divider  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner" />
            </div>
            <div className="wrap mcb-wrap divider  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner" />
            </div>
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one column_column  column-margin-">
                  <div className="column_attr clearfix align_center" style={{}}>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h1 style={{ marginTop: '15px' }}>Date</h1>
                    <p>Pick an unusual date in a private cafe with sofas and a big screen</p>

                    <br />
                    <strong>
                      Book a room with sofas for two people - prepare the room for a private hour
                    </strong>
                    <br />
                    <br />
                    <button className="button main_button fourth_button" onClick={() => setDateFirst(true)}>
                      Book room
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="section mcb-section   "
          style={{
            paddingTop: '80px',
            paddingBottom: '80px',
            backgroundColor: '',
            backgroundImage: 'url(style/img/svromantik.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: '',
            backgroundSize: '',
            WebkitBackgroundSize: '',
          }}
        >
          <div className="section_wrapper mcb-section-inner">
            <div className="wrap mcb-wrap one-second  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one column_column  column-margin-">
                  <div className="column_attr clearfix" style={{}} />
                </div>
              </div>
            </div>
            <div className="wrap mcb-wrap one-second  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one column_column  column-margin-">
                  <div className="column_attr clearfix" style={{}}>
                    <p className="main-form_header" style={{ textAlign: 'left' }}>
                      Spend the evening with your loved one in a pleasant and comfortable atmosphere
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="section mcb-section    bg-cover"
          id="action"
          style={{
            paddingTop: '80px',
            paddingBottom: '120px',
            backgroundColor: '#2d183a',
            backgroundImage: 'url(style/img/svbg7.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundAttachment: '',
            backgroundSize: '',
            WebkitBackgroundSize: '',
          }}
        >
          <div className="section_wrapper mcb-section-inner">
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one column_column  column-margin-">
                  <div className="column_attr clearfix align_center" style={{}}>
                    <h2>Private cafe for couples: solutions for a perfect date</h2>
                    <hr
                      style={{
                        width: '100px',
                        marginBottom: '10px',
                        marginTop: 0,
                        border: 0,
                        borderTop: '2px solid #e5097f',
                      }}
                    />
                    <p>We have 3 perfect solutions for you:</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one-third column_pricing_item price-vip">
                  <div className="pricing-box  cp-right pricing-box-box">
                    <div className="plan-header">
                      <div className="image">
                        <img src="style/img/svvip5.jpg" alt="vip-5-new" width={600} height={370} />
                      </div>
                      <h2></h2>
                      <h3>Surprise</h3>
                      <div className="price">
                        <span>25</span>
                        <sup className="currency">$</sup>
                        <sup className="period" />
                      </div>
                      <hr className="hr_color" />
                      <p className="subtitle">
                        <big></big>
                      </p>
                      <p style={{ color: '#ffffff' }}>
                        <big>
                          At the order
                          <br />
                          "Surprise" you will receive:
                        </big>
                      </p>
                      <big></big>
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
                        Dinner for couple (Italian, Japanese, Chinese cuisine, to choose from);
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
                      <button className="button main_button fourth_button" onClick={() => setDateFirst(true)}>
                        Book room
                      </button>
                    </div>
                  </div>
                </div>
                <div className="column mcb-column one-third column_pricing_item price-vip-top">
                  <div className="pricing-box  cp-right pricing-box-box">
                    <div className="plan-header">
                      <div className="image">
                        <img src="style/img/svvip7.jpg" alt="vip-7-new" width={600} height={370} />
                      </div>
                      <h2></h2>
                      <h3>Love evening</h3>
                      <div className="price">
                        <span>80</span>
                        <sup className="currency">$</sup>
                        <sup className="period" />
                      </div>
                      <hr className="hr_color" />
                      <p className="subtitle">
                        <big></big>
                      </p>
                      <p style={{ color: '#ffffff' }}>
                        <big>
                          At the order
                          <br />
                          "Love evening" you receive:
                        </big>
                      </p>
                      <big></big>
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
                        Dinner for couple (Italian, Japanese, Chinese cuisine, to choose from);
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
                        <img src="style/img/svvip15.jpg" alt="vip-15-new" width={600} height={370} />
                      </div>
                      <h2></h2>
                      <h3>Date in the Stars</h3>
                      <div className="price">
                        <span>90</span>
                        <sup className="currency">$</sup>
                        <sup className="period" />
                      </div>
                      <hr className="hr_color" />
                      <p className="subtitle">
                        <big></big>
                      </p>
                      <p style={{ color: '#ffffff' }}>
                        <big>
                          At the order
                          <br />
                          "Date in the stars" you will receive:
                        </big>
                      </p>
                      <big></big>
                      <p />
                    </div>
                    <div className="plan-inside">
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Megaromantic decoration of the great hall with rose petals, candles, balls (20 pcs.)
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Dinner for couple (Italian, Japanese, Chinese cuisine, to choose from);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px' }}>Fotoshooting am Ende des Datums;</p>
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
                        Surprise from "Private Cafe": a bottle of "Mondoro" champagne or wine (to choose
                        from);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Duration: 4 hours;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Preselection of your favorite film or music;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        A gift from "Private Cafe" - "River Cruise on the River"
                      </p>
                      <button className="button main_button fourth_button" onClick={() => setDateThird(true)}>
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
          className="section mcb-section   "
          id="contacts"
          style={{ paddingTop: '80px', paddingBottom: '0px', backgroundColor: '#2d183a' }}
        >
          <div className="section_wrapper mcb-section-inner">
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one column_column  column-margin-">
                  <div className="column_attr clearfix" style={{}}>
                    <h2>How do we get there?</h2>
                    <div className="footer-impressum" style={{ marginTop: '40px' }}>
                      Contact <br />
                      <br />
                      You can get support for using Private Cafe via this link and via the "Chat" button at
                      the bottom right.
                      <br />
                      <br /> We take legal and regulatory inquiries by post, by fax on +44 30 228688059
                      <br /> by phone at +44 30 228688059. Our general e-mail address is
                      privates-cafe@outlook.com, we are also about the o. a. Call number reachable. For If you
                      have any questions about support for the use of Privates Cafe, please use the above.
                      Left or the button "Chat".
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
                              <span>Fr - Su</span> 12:00-06:00
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
        <div
          className="section mcb-section   "
          id="contacts"
          style={{ paddingTop: '80px', paddingBottom: '0px', backgroundColor: '#361841' }}
        >
          <div className="section_wrapper mcb-section-inner">
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one column_column  column-margin-">
                  <div className="column_attr clearfix" style={{}}>
                    <p>Want to go on a date with a great girl? Then you are right here! </p>
                    <p>
                      Here you can have an interesting, unforgettable date alone with your Have soul mate. We
                      guarantee you full confidentiality, because in our There are no cameras at home -
                      everything is done for your convenience and comfort
                    </p>
                    <p>
                      If you are thinking of dating a girl, think of our place as preferred. We have 11
                      comfortable rooms with different interiors. A Subdued light creates a special atmosphere
                      that is great fun.{' '}
                    </p>
                    <p>
                      You no longer have to think about where and how to host a date. we help you organize
                      this at the highest level. We have many scenarios prepared that every girl likes. We
                      take care of all the details ourselves, and you can take off the shackles of
                      responsibility for this evening, relax and just enjoy!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section the_content no_content">
          <div className="section_wrapper">
            <div className="the_content_wrapper" />
          </div>
        </div>
        <div className="section section-page-footer">
          <div className="section_wrapper clearfix">
            <div className="column one page-pager"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
