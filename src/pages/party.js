import React, { useState } from 'react';

import { PaymentPopup } from '../containers';

export const PartyPage = () => {
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
        open={partyFirst}
        onClose={() => setPartyFirst(false)}
        title="With all friends"
        hours="3"
        price="40"
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
            className="section mcb-section full-screen  "
            style={{
              paddingTop: '0px',
              paddingBottom: '0px',
              backgroundColor: '',
              backgroundImage: 'url(style/img/pbg.jpg)',
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
                        Rental of a cinema for groups of people
                      </h1>
                      <p style={{ fontWeight: 700 }}>Movies, karaoke, games just for you and your friends</p>
                      <p style={{ fontWeight: 700 }}>
                        They think about where to celebrate your birthday, throw a company party or Having fun
                        with friends? Rent a cinema! Stand available 12 halls for groups of up to 10 people
                        and large groups of up to 50 guests.
                        <br />
                        There are no restrictions in the cinema house: watch films at full volume without Sing
                        embarrassment, dance or play with light music. Good sound insulation allows you to
                        scream from your heart and the air conditioner provides one comfortable temperature
                        for the active party.
                      </p>
                      <br />
                      <br />
                      <button
                        className="button main_button fourth_button"
                        style={{ float: 'center' }}
                        onClick={() => setPartyFirst(true)}
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix align_left" style={{}}>
                      <h4 style={{ marginBottom: '15px' }}>
                        What would you like to have,
                        <br />
                        when you visit our Private Cafe?
                      </h4>
                      <ul style={{ color: '#ffffff', fontSize: '18px', lineHeight: '18px', fontWeight: 700 }}>
                        <li>The hall is only for your group</li>
                        <li>Restaurant cuisine and designer drinks</li>
                        <li>Ability to sing karaoke without being shy</li>
                        <li>A wide range of films to suit all tastes</li>
                        <li>And finally, an atmosphere of fun and celebration</li>
                      </ul>
                    </div>
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix align_right" style={{}}>
                      <h3 style={{ marginBottom: '15px' }}>
                        Celebrate the most unusual
                        <br />
                        <span style={{ color: '#e5097f' }}>Party</span>
                      </h3>
                      <div className="main_fourth-button-wrap">
                        <p>
                          We guarantee
                          <br />
                          Your privacy
                        </p>
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
              paddingBottom: '40px',
              backgroundColor: '',
              backgroundImage: 'url(style/img/pabg.jpg)',
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
                      <h2>
                        Rental of a cinema hall:
                        <br />
                        Holiday according to your own script
                      </h2>
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
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-fifth column_icon_box ">
                    <div className="icon_box icon_position_top no_border">
                      <div className="image_wrapper">
                        <img
                          src="style/img/paicon.png"
                          className="scale-with-grid"
                          alt="icon6"
                          width={101}
                          height={101}
                        />
                      </div>
                      <div className="desc_wrapper">
                        <h6 className="title">
                          In the cinema house, it is convenient to plan a meeting of a large company.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-fifth column_icon_box ">
                    <div className="icon_box icon_position_top no_border">
                      <div className="image_wrapper">
                        <img
                          src="style/img/paicon2.png"
                          className="scale-with-grid"
                          alt="icon2"
                          width={101}
                          height={101}
                        />
                      </div>
                      <div className="desc_wrapper">
                        <h6 className="title">
                          Each room is decorated according to a unique style. You can do it yourself decorate
                          with balloons, signs or with our help.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-fifth column_icon_box ">
                    <div className="icon_box icon_position_top no_border">
                      <div className="image_wrapper">
                        <img
                          src="style/img/icon3.png"
                          className="scale-with-grid"
                          alt="icon3"
                          width={101}
                          height={101}
                        />
                      </div>
                      <div className="desc_wrapper">
                        <h6 className="title">
                          There is karaoke and a few microphones in all the large halls. There are thousands
                          of Songs in the files. You can also bring your playlist with you.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-fifth column_icon_box ">
                    <div className="icon_box icon_position_top no_border">
                      <div className="image_wrapper">
                        <img
                          src="style/img/paicon4.png"
                          className="scale-with-grid"
                          alt="icon4"
                          width={101}
                          height={101}
                        />
                      </div>
                      <div className="desc_wrapper">
                        <h6 className="title">
                          It is not illegal to bring your own food or drinks. On their We can request delivery
                          from nearby restaurants and cafes arrange.
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="column mcb-column one-fifth column_icon_box ">
                    <div className="icon_box icon_position_top no_border">
                      <div className="image_wrapper">
                        <img
                          src="style/img/paicon5.png"
                          className="scale-with-grid"
                          alt="icon5"
                          width={101}
                          height={101}
                        />
                      </div>
                      <div className="desc_wrapper">
                        <h6 className="title">
                          If you celebrate your birthday in a cinema, you will receive a rental discount in
                          Amount of your age. 30 year old birthday boy, for example 30% discount.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="section mcb-section full-width  "
            style={{ paddingTop: '0px', paddingBottom: '0px', backgroundColor: '' }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{ backgroundColor: '#2c0144' }}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix align_center" style={{}}>
                      <h2 style={{ marginTop: '50px' }}>
                        Complete entertainment package is available,
                        <br />
                        when you rent a cinema
                      </h2>
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
                className="wrap mcb-wrap one  valign-top bg-cover clearfix"
                style={{
                  backgroundImage: 'url(style/img/pa1.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-sixth column_placeholder">
                    <div className="placeholder">&nbsp;</div>
                  </div>
                  <div className="column mcb-column one-third column_column  column-margin-">
                    <div className="column_attr clearfix align_left" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Watching a movie</h2>
                      <p style={{ marginTop: '10px' }}>
                        {' '}
                        How do I choose the cinema and the cinema room? Nobody makes a noise in the private
                        cafe nobody bothers and chews. Pick a movie from a multi-billion file and enjoy the
                        one on the sofa!{' '}
                      </p>
                    </div>
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix" style={{}} />
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix"
                style={{
                  backgroundImage: 'url(style/img/pa2.jpg)',
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
                  <div className="column mcb-column one-third column_column  column-margin-">
                    <div className="column_attr clearfix align_right" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}> Sing karaoke</h2>
                      <p style={{ marginTop: '10px' }}>
                        {' '}
                        Now you can have your own karaoke room! No queues, thousands of Songs on professional
                        equipment. Private Cafe is a cheap karaoke. Counting You for the number of people, not
                        the songs, and sing for as long as you do want!{' '}
                      </p>
                    </div>
                  </div>
                  <div className="column mcb-column one-sixth column_placeholder">
                    <div className="placeholder">&nbsp;</div>
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix"
                style={{
                  backgroundImage: 'url(style/img/pa3.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-sixth column_placeholder">
                    <div className="placeholder">&nbsp;</div>
                  </div>
                  <div className="column mcb-column one-third column_column  column-margin-">
                    <div className="column_attr clearfix align_left" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Essen</h2>
                      <p style={{ marginTop: '10px' }}>
                        {' '}
                        A special feature of renting a hall in the Private Cafe - It is possible Bring food
                        and drinks for free. Also you can always have drinks and Order water pipes in our bar
                        and food from our partners. The waiter brings everything to you directly in the hall
                        in 15-20 minutes.
                      </p>
                    </div>
                  </div>
                  <div className="column mcb-column one-second column_column  column-margin-">
                    <div className="column_attr clearfix" style={{}} />
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix"
                style={{
                  backgroundImage: 'url(style/img/pa4.jpg)',
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
                  <div className="column mcb-column one-third column_column  column-margin-">
                    <div className="column_attr clearfix align_right" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>Playing video games</h2>
                      <p style={{ marginTop: '10px' }}>
                        {' '}
                        Play bestsellers with Sony Playstation. Become a FIFA Champion. Now you have to no
                        longer worry about your guests getting bored. You ask yourself, "How it's cool to have
                        a birthday party so your friends won't bored? "You know the answer =)
                      </p>
                    </div>
                  </div>
                  <div className="column mcb-column one-sixth column_placeholder">
                    <div className="placeholder">&nbsp;</div>
                  </div>
                </div>
              </div>
              <div
                className="wrap mcb-wrap one  valign-top bg-cover clearfix"
                style={{
                  backgroundImage: 'url(style/img/pa5.jpg)',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center top',
                  backgroundAttachment: '',
                  backgroundSize: '',
                  WebkitBackgroundSize: '',
                }}
              >
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one-sixth column_placeholder">
                    <div className="placeholder">&nbsp;</div>
                  </div>
                  <div className="column mcb-column one-third column_column  column-margin-">
                    <div className="column_attr clearfix align_left" style={{}}>
                      <h2 style={{ color: '#e60280', marginTop: '50px' }}>To play board game</h2>
                      <p style={{ marginTop: '10px' }}>
                        {' '}
                        Singing, dancing, playing video games, but not everyone had enough variety? then it's
                        time for some board games! We have the Mafia, Alias and many others for every taste
                        and for large groups of friends.{' '}
                      </p>
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
            className="section mcb-section   "
            id="action"
            style={{ paddingTop: '80px', paddingBottom: '40px', backgroundColor: '#210131' }}
          >
            <div className="section_wrapper mcb-section-inner">
              <div className="wrap mcb-wrap one  valign-top clearfix" style={{}}>
                <div className="mcb-wrap-inner">
                  <div className="column mcb-column one column_column  column-margin-">
                    <div className="column_attr clearfix align_center" style={{}}>
                      <center>
                        <h2>The birthday in the cafe</h2>
                      </center>
                      <hr
                        style={{
                          width: '100px',
                          marginBottom: '10px',
                          marginTop: 0,
                          border: 0,
                          borderTop: '2px solid #e5097f',
                        }}
                      />
                      <center>
                        <p>3 options for turnkey celebrations</p>
                      </center>
                      <br />
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
                          <img src="style/img/vsesloyi.jpeg" alt="vsesloyi" width={600} height={370} />
                        </div>
                        <h2>All friends</h2>
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
                            Designed for a company with up to 10 people.
                            <br />
                            During - 3 hours
                            <br />
                            (Big hall).
                          </big>
                        </p>
                        <big></big>
                        <p />
                      </div>
                      <div className="plan-inside">
                        That would also:
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
                          <img src="style/img/vsechtonado.jpeg" alt="vsechtonado" width={600} height={370} />
                        </div>
                        <h2>Everything that needs</h2>
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
                            Designed for a company with up to 15 people.
                            <br />
                            During - 3 hours
                            <br />
                            (Big hall).
                          </big>
                        </p>
                        <big></big>
                        <p />
                      </div>
                      <div className="plan-inside">
                        That would also:
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
                            During - 3 hours
                            <br />
                            (KC ground floor - 2 rooms and living area).
                          </big>
                        </p>
                        <big></big>
                        <p />
                      </div>
                      <div className="plan-inside">
                        That would also:
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
                          Snacks (chips / popcorn in assortment) and unlimited cola;
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>
                          Decoration balls (15 pcs.);
                        </p>
                        <p style={{ fontSize: '12px', lineHeight: '20px', margin: '2px' }}>birthday cake;</p>
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
            className="section mcb-section    bg-cover"
            id="contacts"
            style={{
              paddingTop: '80px',
              paddingBottom: '40px',
              backgroundColor: '',
              backgroundImage: 'url(style/img/bg7.jpg)',
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
          <div className="section the_content no_content" />
          <div className="section section-page-footer">
            <div className="section_wrapper clearfix">
              <div className="column one page-pager"></div>
            </div>
          </div>
        </div>
      </div>
      {/* .four-columns - sidebar */}
    </div>
  );
};

export default PartyPage;
