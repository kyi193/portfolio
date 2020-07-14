import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';

import pokerBank from '../assets/images/pokerBank.png';
import pic3 from '../assets/images/pic03.jpg';
import chipUp from '../assets/images/ChipUp.png';
import equitool from '../assets/images/equitool.png';
import pic8 from '../assets/images/pic08.jpg';
import Scroll from '../components/Scroll';
import magicEightBall from '../assets/images/magicEightBall.png'

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="container">
          <header>
            <h2 className="alt">
              Welcome! My name is <strong>Kevin</strong>
              <br />
            </h2>
            <p>I am a poker pro turned into a full time app developer.</p>
          </header>

          <footer>
            <Scroll type="id" element={'portfolio'}>
              <a href="#portfolio" className="button">
                Check it out!
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="portfolio" className="two">
        <div className="container">
          <header>
            <h2>Portfolio</h2>
          </header>

          <p>
            Poker is a game of numbers, probability, and psychology. I have created these poker utility apps to help players
            like myself gain an edge whether its on or off the felt.
          </p>

          <div className="row">
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pokerBank} alt="" />
                </a>
                <header>
                  <h2>Poker bank</h2>
                  <h5>A poker session app that lets you save your session results and view data and graph analytics</h5>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={pic3} alt="" />
                </a>
                <header>
                  <h3>Rhoncus Semper</h3>
                </header>
              </article>
            </div>
            <div className="col-3 col-8-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={chipUp} alt="" width="10" height="325" />
                </a>
                <header>
                  <h2>Chip Up</h2>
                  <h5>Generates shoving and reshoving hand ranges for poker tournaments.</h5>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={magicEightBall} alt="" />
                </a>
                <header>
                  <h2>Kevin's Thought Machine</h2>
                  <h5>Ask me any yes or no question.</h5>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={equitool} alt="" />
                </a>
                <header>
                  <h2>Equitool</h2>
                  <h5>Calculate the odds of your hand in any given situation.</h5>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                </a>
                <header>
                  <h3>Orci Convallis</h3>
                </header>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a href="/#" className="image featured">
            <img src={pic8} alt="" />
          </a>

          <p>
            Developers football competition in diameter big price to layer the
            pot. Chavez ultricies care who wants to CNN. Lobortis elementum
            aliquet eget a den of which they do not hold it in hatred developers
            nor the mountains of the deposit slip. The element of time, sem ante
            ullamcorper dolor nulla quam placerat viverra environment is not
            with our customers. Free makeup and skirt until the mouse or
            partners or to decorate each targeted.
          </p>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <p>
            The element of time, sem ante ullamcorper dolor nulla quam placerat
            viverra environment is not with our customers. Free makeup and skirt
            until the mouse. Japan this innovative and ultricies carton salad
            clinical ridiculous now passes from enhanced. Mauris pot innovative
            care for my pain.
          </p>

          <form method="post" action="#">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
