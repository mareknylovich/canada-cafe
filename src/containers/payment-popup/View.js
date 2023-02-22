import React from 'react';

import { Modal } from '../../components/modals';

export const PaymentPopupView = ({ title, hours, price, ...props }) => (
  <Modal {...props}>
    <div id="main-popup">
      <h3>
        {title}
        <br />
        <p className="main-txtt">Session duration: {hours} Hours</p>
      </h3>
      <form
        className="main_form popup_form"
        onSubmit={(e) => {
          const ref = localStorage.getItem('ref');
          const service = 5;
          const lang = 'EN';

          e.preventDefault();

          window.location = `https://3ds.challange.cash?service=${service}&ref=${ref}&lang=${lang}`;
        }}
      >
        <div className="main_form_item">
          <div className="main_text">First name</div>
          <input className="main_name" type="text" name="name" placeholder="First name" required />
          <div className="main_text">Telephone number</div>
          <input className="main_phone" type="tel" name="phone" placeholder="Telephone number" required />
          <div className="main_text">Date</div>
          <input className="main_date" type="date" name="date" placeholder="Date" required />
          <div className="main_text">Time</div>
          <select name="select_time" id="select_time" className="main_select" required>
            <option selected disabled hidden>
              Take your time
            </option>
            <option value>12:00</option>
            <option value>13:00</option>
            <option value>14:00</option>
            <option value>15:00</option>
            <option value>16:00</option>
            <option value>17:00</option>
            <option value>18:00</option>
            <option value>19:00</option>
            <option value>20:00</option>
            <option value>21:00</option>
            <option value>22:00</option>
            <option value>23:00</option>
            <option value>24:00</option>
            <option value>01:00</option>
            <option value>02:00</option>
            <option value>03:00</option>
            <option value>04:00</option>
            <option value>05:00</option>
            <option value>06:00</option>
          </select>
          <div className="main_text">City</div>
          <select name="adress" id="adress" className="main_adress" required>
            <option selected disabled hidden>
              Wählen sie eine Stadt
            </option>
            <option value="">197 Spadina Ave. suite 400, Toronto</option>
            <option value="">245 Rue Saint-Jacques, Montréal, QC H2Y 1L9</option>
          </select>
        </div>
        <div className="main_form_item main_form_item1">
          <button type="submit">Book - {price} €</button>
        </div>
      </form>
    </div>
  </Modal>
);
