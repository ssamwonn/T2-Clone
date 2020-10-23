import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="teaSocietyBanner">
          <video
            autoplay="true"
            muted
            playsinline
            loop
            type="video/webm"
            src="https://cdn.intelligencebank.com/au/share/NOrD/e3oNW/vvAy3/webm/FA+animated+logo_1583847446"
          ></video>
          <div className="textBox">
            <div className="textTitle">Tea Society</div>
            <div className="textDescription">
              The T2 Tea Society is home to our community of passionate
              like-minded sippers. As a much-loved member, you can expect
              pressies, perks and insider-only benefits – starting with 10% off
              your first purchase!
            </div>
          </div>
          <button>Sign up & take 10% off your first order</button>
        </div>
        <div className="bCorpBanner">
          <div className="textBox">
            <div className="text">
              Your favourite tea is now B Corp certified. We are now proudly
              part of a global community of over 3,000 companies doing business
              that puts people and place first.
            </div>
            <button>Our B Corp accreditation</button>
          </div>
        </div>
        <footer>
          <div className="leftFooter">
            <ul>
              {leftFooterData.list.map((el) => {
                return (
                  <li>
                    <a href="#">
                      <span>{el}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <dl>
              <dt>About Us</dt>
              {leftFooterData.Dd1.map((el) => {
                return <dd>{el}</dd>;
              })}
            </dl>
            <dl>
              <dt>Customer Care</dt>
              {leftFooterData.Dd2.map((el) => {
                return <dd>{el}</dd>;
              })}
            </dl>
            <dl>
              <dt>Wholesale</dt>
              {leftFooterData.Dd3.map((el) => {
                return <dd>{el}</dd>;
              })}
            </dl>
          </div>
          <div className="rightFooter">
            <div className="rightFooterBox">
              <div className="slogan">
                A cup for me.
                <br /> A cup for you. T2
              </div>
              <ul>
                {LIST_DATA.map((el) => {
                  return (
                    <li key={el.sns}>
                      <a href={el.href} target="_blank">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox={el.viewBox}
                        >
                          <title>{el.sns}</title>
                          <path d={el.d} fill="currentcolor"></path>
                        </svg>
                      </a>
                    </li>
                  );
                })}
              </ul>
              <div className="note">
                <p>
                  Tea Too acknowledges the Traditional Custodians of the land on
                  which we operate, live and gather as employees, and recognise
                  their continuing connection to land, water and community. We
                  pay respect to Elders past, present and emerging.
                </p>
                <div className="copyright">© 2020 Tea Too Pty Ltd.</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

const LIST_DATA = [
  {
    sns: "Facebook",
    href: "https://www.facebook.com/T2Tea/",
    viewBox: "0 0 97.8 97.8",
    d:
      "M48.9 0C21.9 0 0 21.9 0 48.9s21.9 48.9 48.9 48.9 48.9-21.9 48.9-48.9S75.9 0 48.9 0zM67.5 24.9l-6.8 0c-5.3 0-6.3 2.5-6.3 6.2v8.1h12.6l0 12.8H54.4v32.8H41.3V52h-11V39.3h11v-9.4c0-10.9 6.7-16.9 16.4-16.9l9.9 0L67.5 24.9 67.5 24.9z",
  },
  {
    sns: "Twitter",
    href: "https://twitter.com/t2teaofficial",
    viewBox: "0 0 97.8 97.8",
    d:
      "M48.9 0C21.9 0 0 21.9 0 48.9s21.9 48.9 48.9 48.9 48.9-21.9 48.9-48.9S75.9 0 48.9 0zM78.4 35.8c0 0.6 0 1.2 0 1.7 0 20.9-15.9 42.5-42.5 42.5 -8.1 0-16-2.3-22.9-6.7 -0.1-0.1-0.2-0.3-0.1-0.4 0.1-0.2 0.2-0.3 0.4-0.2 1.1 0.1 2.3 0.2 3.5 0.2 6.3 0 12.3-2 17.4-5.7 -6.1-0.5-11.3-4.6-13.2-10.5 0-0.1 0-0.3 0.1-0.4 0.1-0.1 0.2-0.1 0.3-0.1 1.7 0.3 3.4 0.3 5 0.1 -6.3-1.9-10.7-7.8-10.7-14.5l0-0.2c0-0.1 0.1-0.2 0.2-0.3 0.1-0.1 0.2-0.1 0.4 0 1.6 0.9 3.4 1.5 5.3 1.7 -3.6-2.9-5.7-7.2-5.7-11.9 0-2.7 0.7-5.3 2.1-7.6 0.1-0.1 0.2-0.2 0.3-0.2 0.1 0 0.2 0 0.3 0.1 7.4 9 18.2 14.6 29.8 15.3 -0.2-1-0.3-2-0.3-3 0-8.4 6.8-15.2 15.2-15.2 4.1 0 8.1 1.7 10.9 4.6 3.2-0.7 6.3-1.8 9.1-3.5 0.1-0.1 0.3-0.1 0.4 0 0.1 0.1 0.2 0.2 0.1 0.4 -1 3-2.8 5.6-5.3 7.5 2.4-0.4 4.7-1.1 6.8-2.1 0.1-0.1 0.3 0 0.4 0.1 0.1 0.1 0.1 0.3 0 0.4C83.8 31.2 81.3 33.7 78.4 35.8z",
  },
  {
    sns: "Instagram",
    href: "https://www.instagram.com/t2tea/?hl=en",
    viewBox: "0 0 511 511",
    d:
      "M510.5 150.2c-1.2-27.2-5.6-45.8-11.9-62 -6.5-17.2-16.5-32.5-29.5-45.3 -12.8-13-28.3-23.1-45.2-29.4 -16.3-6.3-34.8-10.7-62-11.9C334.5 0.3 325.8 0 256.4 0s-78.1 0.3-105.3 1.5c-27.2 1.2-45.8 5.6-62 11.9C72 19.9 56.6 29.8 43.8 42.9c-13 12.8-23.1 28.3-29.4 45.2 -6.3 16.3-10.7 34.8-11.9 62 -1.3 27.4-1.6 36-1.6 105.4s0.3 78.1 1.5 105.3c1.2 27.2 5.6 45.8 11.9 62 6.5 17.2 16.6 32.5 29.5 45.3 12.8 13 28.3 23.1 45.2 29.4 16.3 6.3 34.8 10.7 62 11.9 27.2 1.2 35.9 1.5 105.3 1.5s78.1-0.3 105.3-1.5c27.2-1.2 45.8-5.6 62-11.9 34.3-13.3 61.5-40.4 74.8-74.8 6.3-16.3 10.7-34.8 11.9-62 1.2-27.3 1.5-35.9 1.5-105.3S511.7 177.5 510.5 150.2zM464.5 358.9c-1.1 25-5.3 38.4-8.8 47.4 -8.6 22.3-26.3 39.9-48.5 48.5 -9 3.5-22.6 7.7-47.4 8.8 -27 1.2-35 1.5-103.2 1.5s-76.4-0.3-103.2-1.5c-25-1.1-38.4-5.3-47.4-8.8 -11.1-4.1-21.2-10.6-29.3-19.1 -8.5-8.3-15-18.3-19.1-29.3 -3.5-9-7.7-22.6-8.8-47.4 -1.2-27-1.5-35-1.5-103.2s0.3-76.4 1.5-103.2c1.1-25 5.3-38.4 8.8-47.4C61.6 94 68.1 84 76.7 75.8c8.3-8.5 18.3-15 29.3-19.1 9-3.5 22.6-7.7 47.4-8.8 27-1.2 35-1.5 103.2-1.5 68.3 0 76.4 0.3 103.2 1.5 25 1.1 38.4 5.3 47.4 8.8 11.1 4.1 21.2 10.6 29.3 19.1 8.5 8.3 15 18.3 19.1 29.4 3.5 9 7.7 22.6 8.8 47.4 1.2 27 1.5 35 1.5 103.2S465.7 331.9 464.5 358.9zM256.4 124.3c-72.5 0-131.3 58.8-131.3 131.3S184 386.8 256.4 386.8c72.5 0 131.3-58.8 131.3-131.3S328.9 124.3 256.4 124.3zM256.4 340.7c-47 0-85.2-38.1-85.2-85.2s38.1-85.2 85.2-85.2c47 0 85.2 38.1 85.2 85.2S303.5 340.7 256.4 340.7zM423.6 119.1c0 16.9-13.7 30.6-30.6 30.6 -16.9 0-30.6-13.7-30.6-30.6 0-16.9 13.7-30.6 30.6-30.6C409.8 88.4 423.6 102.2 423.6 119.1z",
  },
  {
    sns: "LinkedIn",
    href: "https://www.linkedin.com/company/t2-tea/",
    viewBox: "0 0 510 510",
    d:
      "M459 0H51C23 0 0 23 0 51v408c0 28 23 51 51 51h408c28 0 51-23 51-51V51C510 23 487 0 459 0zM153 433.5H76.5V204H153V433.5zM114.8 160.6c-25.5 0-45.9-20.4-45.9-45.9s20.4-45.9 45.9-45.9 45.9 20.4 45.9 45.9S140.2 160.6 114.8 160.6zM433.5 433.5H357V298.4c0-20.4-17.9-38.2-38.2-38.2s-38.2 17.9-38.2 38.2v135.1H204V204h76.5v30.6c12.8-20.4 40.8-35.7 63.8-35.7 48.5 0 89.2 40.8 89.2 89.3V433.5z",
  },
  {
    sns: "Youtube",
    href: "https://www.youtube.com/user/T2tea",
    viewBox: "0 0 682 682",
    d:
      "M647.2 181.2c-7.4-27.4-29-49-56.4-56.4 -50-13.7-250.2-13.7-250.2-13.7s-200.1 0-250.2 13.2c-26.9 7.4-49 29.5-56.4 56.9C21 231.2 21 335 21 335s0 104.3 13.2 153.8c7.4 27.4 29 49 56.4 56.4 50.6 13.7 250.2 13.7 250.2 13.7s200.1 0 250.2-13.2c27.4-7.4 49-29 56.4-56.4 13.2-50 13.2-153.8 13.2-153.8S660.9 231.2 647.2 181.2zM276.9 430.8V239.1L443.4 335 276.9 430.8z",
  },
  {
    sns: "Pinterest",
    href: "https://www.pinterest.com.au/t2tea/",
    viewBox: "0 0 579.1 579.1",
    d:
      "M434.9 38.8C390.6 13 342.1 0 289.6 0 237 0 188.6 13 144.2 38.8c-44.4 25.9-79.5 61-105.4 105.4C12.9 188.6 0 237 0 289.6c0 58.6 16 111.7 47.9 159.5 31.9 47.8 73.8 83.1 125.6 105.9 -1-26.9 0.6-49.1 4.9-66.7l37.3-157.6c-6.3-12.3-9.4-27.6-9.4-46 0-21.4 5.4-39.2 16.2-53.5 10.8-14.3 24-21.5 39.6-21.5 12.6 0 22.2 4.1 29 12.4 6.8 8.3 10.2 18.7 10.2 31.3 0 7.8-1.5 17.3-4.3 28.5 -2.9 11.2-6.7 24.1-11.3 38.8 -4.7 14.7-8 26.5-10 35.3 -3.5 15.3-0.6 28.5 8.7 39.4 9.3 10.9 21.6 16.4 37 16.4 26.9 0 49-15 66.2-44.9 17.2-29.9 25.8-66.2 25.8-109 0-32.9-10.6-59.7-31.9-80.3 -21.2-20.6-50.8-30.9-88.8-30.9 -42.5 0-76.9 13.6-103.1 40.9 -26.3 27.3-39.4 59.9-39.4 97.8 0 22.6 6.4 41.6 19.2 56.9 4.3 5 5.7 10.4 4.1 16.2 -0.5 1.5-1.5 5.3-3 11.3 -1.5 6-2.5 9.9-3 11.7 -2 8-6.8 10.6-14.3 7.5 -19.4-8-34.1-22-44.1-41.9 -10.1-19.9-15.1-42.9-15.1-69 0-16.8 2.7-33.7 8.1-50.5s13.8-33.1 25.3-48.8c11.4-15.7 25.1-29.6 41.1-41.7 16-12.1 35.4-21.7 58.3-29 22.9-7.3 47.5-10.9 73.9-10.9 35.7 0 67.7 7.9 96.1 23.8 28.4 15.8 50.1 36.3 65 61.5 15 25.1 22.4 52 22.4 80.7 0 37.7-6.5 71.6-19.6 101.8 -13.1 30.2-31.5 53.9-55.4 71.1 -23.9 17.2-51 25.8-81.4 25.8 -15.3 0-29.7-3.6-43-10.7 -13.3-7.2-22.5-15.6-27.5-25.5 -11.3 44.5-18.1 71-20.4 79.6 -4.8 17.9-14.6 38.5-29.4 61.8 26.9 8 54.3 12.1 82.2 12.1 52.5 0 101-12.9 145.4-38.8 44.4-25.9 79.5-61 105.4-105.4 25.9-44.4 38.8-92.8 38.8-145.4 0-52.5-13-101-38.8-145.4C514.4 99.9 479.3 64.7 434.9 38.8z",
  },
];

const leftFooterData = {
  list: [
    "Tea Society",
    "Store Finder",
    "Gift Cards",
    "UNiDAYS",
    "Careers",
    "Site Map",
  ],
  Dd1: [
    "T2 Purpose",
    "T2 Planet",
    "T2 People",
    "T2 Product",
    "B Corp",
    "Privacy Policy",
    "Terms of Use",
  ],
  Dd2: [
    "Contact Us",
    "FAQs",
    "Delivery",
    "Returns & refunds",
    "Payment methods",
    "Subscription",
    "Coronavirus COVID-19 Updates",
  ],
  Dd3: ["Partnerships", "Corporate Gifting", "Stockists", "Partner Login"],
};

// const leftFooterList = [
//   "Tea Society",
//   "Store Finder",
//   "Gift Cards",
//   "UNiDAYS",
//   "Careers",
//   "Site Map",
// ];

// const leftFooterDd = [
//   "T2 Purpose",
//   "T2 Planet",
//   "T2 People",
//   "T2 Product",
//   "B Corp",
//   "Privacy Policy",
//   "Terms of Use",
// ];

export default Footer;
