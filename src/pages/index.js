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
        title="Date in the stars"
        hours="4"
        price="90"
      />
      <PaymentPopup
        open={partyFirst}
        onClose={() => setPartyFirst(false)}
        title="With all friends"
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
            className="section mcb-section full-screen   bg-cover"
            style={{
              paddingTop: '0px',
              paddingBottom: '0px',
              backgroundColor: '',
              backgroundImage: 'url(/style/img/main_first_bg.jpeg)',
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
                  <div className="column mcb-column one column_column show-on-mobile column-margin-">
                    <div className="column_attr clearfix align_center" style={{}}>
                      <h1 className="main_header" style={{ minHeight: '70px', paddingTop: '120px' }}>
                        Privates Cafe
                      </h1>
                      <div className="main_form_item" onClick={() => setDateFirst(true)}>
                        <button>Book now</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column mcb-column one column_column progress column-margin-">
                  <div className="column_attr clearfix align_center" style={{}}>
                    <h1 className="main_header">Privates Cafe</h1>
                    <br />
                    <br />
                    <button className="button main_button" onClick={() => setDateFirst(true)}>
                      Book now
                    </button>
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
            paddingBottom: '80px',
            backgroundColor: '',
            backgroundImage: 'url(/style/img/halls_ny.jpeg)',
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
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one-third column_pricing_item price-vip">
                  <div className="pricing-box  cp-right pricing-box-box">
                    <div className="plan-header">
                      <div className="image">
                        <img src="/style/img/vip-5-new.jpeg" alt="vip-5-new" width={600} height={370} />
                      </div>
                      <h3>Surprise</h3>
                      <div className="price">
                        <span>25</span>
                        <sup className="currency">€</sup>
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
                          You will receive a «surprise»:
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
                        Preselection of your favorite film or music;
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
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Duration: 3 hours</p>
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
                        <img src="/style/img/vip-7-new.jpeg" alt="vip-7-new" width={600} height={370} />
                      </div>
                      <h2></h2>
                      <h3>Love evening</h3>
                      <div className="price">
                        <span>45</span>
                        <sup className="currency">€</sup>
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
                        Preselection of your favorite film or music;
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
                        <img src="/style/img/vip-15-new.jpeg" alt="vip-15-new" width={600} height={370} />
                      </div>
                      <h2></h2>
                      <h3>Date in the Stars</h3>
                      <div className="price">
                        <span>90</span>
                        <sup className="currency">€</sup>
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
                          Get a "date in the stars":
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
                        Dinner for two (Italian, Japanese, Chinese cuisine, to choose from);
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
                        Duration: 3 hours;
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
          className="section mcb-section    bg-cover"
          style={{
            paddingTop: '80px',
            paddingBottom: '80px',
            backgroundColor: '',
            backgroundImage: 'url(/style/img/bg6.jpeg)',
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
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one-third column_pricing_item price-vip">
                  <div className="pricing-box  cp-right pricing-box-box">
                    <div className="plan-header">
                      <div className="image">
                        <img src="/style/img/vsesloyi.jpeg" alt="vsesloyi" width={600} height={370} />
                      </div>
                      <h2>With all friends</h2>
                      <div className="price">
                        <span>250</span>
                        <sup className="currency">€</sup>
                        <sup className="period" />
                      </div>
                      <hr className="hr_color" />
                      <p className="subtitle">
                        <big></big>
                      </p>
                      <p style={{ color: '#ffffff' }}>
                        <big>
                          Fits for one event for a maximum of 10 people.
                          <br />
                          Time - 3 hours
                          <br />
                          (Big hall).
                        </big>
                      </p>
                      <big></big>
                      <p />
                    </div>
                    <div className="plan-inside">
                      This is also available:
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Karaoke;</p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Watch music videos and movies;
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
                        <img src="/style/img/vsechtonado.jpeg" alt="vsechtonado" width={600} height={370} />
                      </div>
                      <h2>All you need</h2>
                      <div className="price">
                        <span>340</span>
                        <sup className="currency">€</sup>
                        <sup className="period" />
                      </div>
                      <hr className="hr_color" />
                      <p className="subtitle">
                        <big></big>
                      </p>
                      <p style={{ color: '#ffffff' }}>
                        <big>
                          Fits for one event for a maximum of 15 people.
                          <br />
                          Time - 3 hours
                          <br />
                          (Big hall).
                        </big>
                      </p>
                      <big></big>
                      <p />
                    </div>
                    <div className="plan-inside">
                      This is also available:
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Karaoke;</p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Watch music videos and movies;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>PlayStation;</p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Board games (large selection);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        2 good ones for all tastes; Tea / coffee for guests
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Snacks (chips / popcorn in the assortment) and unlimited cola;
                      </p>
                      <br />
                      <button
                        className="button main_button fourth_button"
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
                        <img src="/style/img/vseisrazu.jpeg" alt="vseisrazu" width={600} height={370} />
                      </div>
                      <h2>Everything and immediately</h2>
                      <div className="price">
                        <span>430</span>
                        <sup className="currency">€</sup>
                        <sup className="period" />
                      </div>
                      <hr className="hr_color" />
                      <p className="subtitle">
                        <big></big>
                      </p>
                      <p style={{ color: '#ffffff' }}>
                        <big>
                          Number of guests - up to 50 people.
                          <br />
                          Time - 3 hours
                          <br />
                          (KC ground floor - 2 rooms and a hall).
                        </big>
                      </p>
                      <big></big>
                      <p />
                    </div>
                    <div className="plan-inside">
                      That is also available:
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Karaoke;</p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Watch music videos and movies;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>PlayStation;</p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Board games (large selection);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Tea / coffee for guests;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Snacks (chips / popcorn in the assortment) and unlimited cola;
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                        Decoration balls (15 pcs.);
                      </p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Birthday cake;</p>
                      <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>Fotoshooting;</p>
                      <br />
                      <button
                        className="button main_button fourth_button"
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
          className="section mcb-section  main_six "
          style={{ paddingTop: '40px', paddingBottom: '0px', backgroundColor: '#361841' }}
        >
          <div className="section_wrapper mcb-section-inner">
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one column_column  column-margin-">
                  <div className="column_attr clearfix" style={{}}>
                    <center>
                      <h2>Feedback from our visitors</h2>
                    </center>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one-second column_icon_box ">
                  <div className="icon_box icon_position_left no_border">
                    <div className="image_wrapper">
                      <img
                        src="/style/img/1.png"
                        className="scale-with-grid"
                        alt={1}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="desc_wrapper">
                      <h4 className="title">Anna Bran</h4>
                      <div className="desc">
                        We met at the Private Cafe yesterday to see a movie that we were made it ourselves.We
                        are very happy with it! We were 11, gathered in the 9th The screen is bright, the
                        sound is good. Now I see no better place was to be found for this meeting. We'll be
                        back for sure! Today we visit that Private cafe with a big company :)
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column mcb-column one-second column_icon_box ">
                  <div className="icon_box icon_position_left no_border">
                    <div className="image_wrapper">
                      <img
                        src="/style/img/2.png"
                        className="scale-with-grid"
                        alt={2}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="desc_wrapper">
                      <h4 className="title">Ben Henderson</h4>
                      <div className="desc">
                        We visited here once with a girl. If you are looking for a cozy place looking to
                        quietly sit on comfortable chairs / sofas to watch your favorite films and yours
                        Favorite cocktail drink, you've come to the right place. We slept well too. The only
                        downside is that prepayment can be made from a card will. Refunds expire within 24
                        hours of a face-to-face visit.
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one-second column_icon_box ">
                  <div className="icon_box icon_position_left no_border">
                    <div className="image_wrapper">
                      <img
                        src="/style/img/3.png"
                        className="scale-with-grid"
                        alt={3}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="desc_wrapper">
                      <h4 className="title">Ella Almer</h4>
                      <div className="desc">
                        I celebrated my birthday and was very happy.!) The equipment worked smoothly, the hall
                        was clean and comfortable. The cost corresponds to the quality. Thank you Margaret for
                        everything! ) My only wish is to choose from Drinks at an affordable price to enlarge)
                        Happy New Years!
                        <br />
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column mcb-column one-second column_icon_box ">
                  <div className="icon_box icon_position_left no_border">
                    <div className="image_wrapper">
                      <img
                        src="/style/img/4.png"
                        className="scale-with-grid"
                        alt={4}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="desc_wrapper">
                      <h4 className="title">John Carmey</h4>
                      <div className="desc">
                        Hello, my name is John and we went to Private Cafe together with one Girl. We wanted
                        to leave a comment on this place! We became very nice received and brought to our
                        room. This is very cozy. Lots of pillows and a blanket, a very soft and comfortable
                        sofa, a nice carpet are available. The place is convenient for movie viewing. Nice
                        picture from the projector, the good sounding perfectly transmit the whole action.
                        Indeed there are many interesting ones pleasant moments that leave no one indifferent.
                        Thank you to all people who work in this place, you do a great job, we come more than
                        once back to you!
                        <br />
                        <br />
                      </div>
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
            <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
              <div className="mcb-wrap-inner">
                <div className="column mcb-column one column_column  column-margin-">
                  <div className="column_attr clearfix" style={{}}>
                    <h2>How do we get there?</h2>
                    <div className="footer-impressum" style={{ marginTop: '40px' }}>
                      <p>
                        Contact <br />
                        <br />
                        You can get support for using Private Cafe via this link and via the "Chat" button at
                        the bottom right.
                        <br />
                        <br /> We take legal and regulatory inquiries by post, by fax on +44 30 228688059
                        <br /> by phone at +44 30 228688059. Our general e-mail address is
                        kontakt@privatescafe.com, we are also about the o. a. Call number reachable. For If
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
                              <span>Mo-Th</span> 12:00 - 00:00
                            </li>
                            <li>
                              <span>Fr-Su</span> 12:00 - 06:00
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
  );
};

export default HomePage;
