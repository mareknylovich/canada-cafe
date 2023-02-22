import React, { useState } from 'react';

import { PaymentPopup } from '../containers';

export const AdvantagesPage = () => {
  const [dateFirst, setDateFirst] = useState(false);

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
      <div className="sections_group">
        <div className="entry-content" itemProp="mainContentOfPage">
          <div
            className="section mcb-section full-screen  "
            style={{
              paddingTop: '0px',
              paddingBottom: '0px',
              backgroundColor: '',
              backgroundImage: 'url(style/img/bg-party.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top',
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
                      <h1 className="main_header" style={{ paddingTop: '180px', minHeight: '50px' }}>
                        How is our Private Cafe different from other cafe?
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix align_center" style={{}}>
                      <div className="main_fourth-button-wrap">
                        <button
                          className="button main_button fourth_button"
                          onClick={() => setDateFirst(true)}
                        >
                          Book room
                        </button>
                      </div>
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section mcb-section full-width  "
            id="about-us"
            style={{ paddingTop: '0px', paddingBottom: '0px', backgroundColor: '' }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{ backgroundColor: '#29033c' }}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix align_center" style={{}}>
                      <h2 style={{ marginTop: '50px' }}>Our advantages</h2>
                      <hr
                        style={{
                          width: '100px',
                          marginBottom: '10px',
                          marginTop: 0,
                          border: 0,
                          borderTop: '2px solid #e5097f',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix advantages-big-block"
                style={{
                  padding: '100px',
                  backgroundImage: 'url(style/img/party-2.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix" style={{}} />
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix align_right" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Experience</h2>
                      <p style={{ marginTop: '10px' }}></p>
                      <ul className="difference" style={{ listStyleType: 'none' }}>
                        <li>In our 7 years of work we have learned what is important for our guests</li>
                        <li>
                          Since 2012 we have been visited by over 50.000 people,
                          <br />
                          3.000 of them permanent visitors
                        </li>
                        <li>
                          We interview every guest and 87% are ready,
                          <br />
                          to come back, the remaining 13% indicate our mistakes, we correct them for you.
                        </li>
                        <p />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix advantages-big-block"
                style={{
                  padding: '100px',
                  backgroundImage: 'url(style/img/party-3.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix align_left" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Purity</h2>
                      <p style={{ marginTop: '10px' }}></p>
                      <ul className="difference" style={{ listStyleType: 'none' }}>
                        <li>A general cleaning takes place after each guest.</li>
                        <li>The blankets are always clean, fresh and in new packaging.</li>
                        <li>We use UV lamps to destroy bacteria.</li>
                        <li>Each room has air conditioning for comfort and convenience.</li>
                      </ul>
                      <p />
                    </div>
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix" style={{}} />
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix advantages-big-block"
                style={{
                  padding: '150px',
                  backgroundImage: 'url(style/img/party-4.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix" style={{}} />
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix align_right" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Privacy</h2>
                      <p style={{ marginTop: '10px' }}></p>
                      <ul className="difference" style={{ listStyleType: 'none' }}>
                        <li>
                          We know how important privacy is when you are resting.
                          <br />
                          That's why we don't have hidden cameras
                        </li>
                        <li>Our employees won't bother you either, you call them yourself</li>
                      </ul>
                      <p />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix advantages-big-block"
                style={{
                  padding: '100px',
                  // backgroundImage: 'url(style/img/party-5.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix align_left" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Advantage</h2>
                      <p style={{ marginTop: '10px' }}></p>
                      <ul className="difference" style={{ listStyleType: 'none' }}>
                        <li>We do not use cork, so you can bring all your food and drinks with you.</li>
                        <li>
                          Regular guests receive 10% to 25% discount cards.
                          <br />
                          These cards also include free tea and fondue.
                        </li>
                      </ul>
                      <p />
                    </div>
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix" style={{}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section mcb-section    bg-cover"
            style={{
              paddingTop: '50px',
              paddingBottom: '50px',
              backgroundColor: '',
              backgroundImage: 'url(style/img/party-7.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top',
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
                      <h2 style={{ marginTop: '50px' }}>Our team</h2>
                      <hr
                        style={{
                          width: '100px',
                          marginBottom: '10px',
                          marginTop: 0,
                          border: 0,
                          borderTop: '2px solid #e5097f',
                        }}
                      />
                      <p>These people create your comfort</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-third column_pricing_item price-vip">
                    <div className="pricing-box  pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img src="style/img/party8.jpg" alt="SAMSUNG CSC" width={300} height={450} />
                        </div>
                        <h2></h2>
                        <h2 style={{ margin: '0 0 5px', fontSize: '30px', lineHeight: '30px' }}>Margarete</h2>
                        <p className="subtitle">
                          <big></big>
                        </p>
                        <p className="pricing-box-team plan-header-team subtitle-team">
                          <big>Manager</big>
                        </p>
                        <big></big>
                        <p />
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-third column_pricing_item price-vip pricing-box-team plan-header-team subtitle-team">
                    <div className="pricing-box  pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img src="style/img/p9.jpg" alt="SAMSUNG CSC" width={300} height={450} />
                        </div>
                        <h2></h2>
                        <h2 style={{ margin: '0 0 5px', fontSize: '30px', lineHeight: '30px' }}>Luisa</h2>
                        <p className="subtitle">
                          <big></big>
                        </p>
                        <p className="pricing-box-team plan-header-team subtitle-team">
                          <big>Manager</big>
                        </p>
                        <big></big>
                        <p />
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-third column_pricing_item price-vip">
                    <div className="pricing-box  pricing-box-box">
                      <div className="plan-header">
                        <div className="image">
                          <img src="style/img/p10.jpg" alt="SAMSUNG CSC" width={300} height={450} />
                        </div>
                        <h2></h2>
                        <h2 style={{ margin: '0 0 5px', fontSize: '30px', lineHeight: '30px' }}>Helene</h2>
                        <p className="subtitle">
                          <big></big>
                        </p>
                        <p className="pricing-box-team plan-header-team subtitle-team">
                          <big>Administrator</big>
                        </p>
                        <big></big>
                        <p />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section mcb-section    bg-cover"
            id="contacts"
            style={{
              paddingTop: '80px',
              paddingBottom: '40px',
              backgroundColor: '',
              backgroundImage: 'url(style/img/p11.jpg)',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top',
              backgroundAttachment: '',
              backgroundSize: '',
              WebkitBackgroundSize: '',
            }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix" style={{}}>
                      <h2>How do we get there?</h2>
                      <div className="footer-impressum" style={{ marginTop: '40px' }}>
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

export default AdvantagesPage;
