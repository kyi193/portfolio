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
  { id: 'blog', name: 'Blog', icon: 'fa-pencil' },
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
                  <h2><a href="https://github.com/kyi193/Poker-Bank">Poker bank</a></h2>
                  <h5>A poker session app that lets you save your session results and view data and graph analytics</h5>
                </header>
              </article>
              <article className="item">
                <header>
                  <h3>Project 5</h3>
                </header>
              </article>
            </div>
            <div className="col-3 col-8-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={chipUp} alt="" width="10" height="325" />
                </a>
                <header>
                  <h2><a href="https://github.com/kyi193/Chip-Up">Chip Up</a></h2>
                  <h5>Generates shoving and reshoving hand ranges for poker tournaments.</h5>
                  <a href="https://kyi193.github.io/Chip-Up/" target="_blank">Try it out!</a>
                  <p>(Click the orange rocket ship icon)</p>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={magicEightBall} alt="" />
                </a>
                <header>
                  <h2><a href="https://github.com/kyi193/Chip-Up">Kevin's Thought Machine</a></h2>
                  <h5>Ask me any yes or no question.</h5>
                  <a href="https://kyi193.github.io/Chip-Up/" target="_blank">Try it out!</a>
                  <p>(Click the magic eight ball icon)</p>
                </header>
              </article>
            </div>
            <div className="col-4 col-12-mobile">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={equitool} alt="" />
                </a>
                <header>
                  <h2><a href="https://github.com/kyi193/Chip-Up">Equitool</a></h2>
                  <h5>Calculate the odds of your hand in any given situation.</h5>
                  <a href="https://kyi193.github.io/Chip-Up/" target="_blank">Try it out!</a>
                  <p>(Click the blue poker cards icon)</p>
                </header>
              </article>
              <article className="item">
                <a href="/#" className="image fit">
                </a>
                <header>
                  <h3>Project 6</h3>
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

          <p>

          </p>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>
          <ul>
            <p>Email: kevin.yi93@gmail.com</p>
            <p>Phone: 301-250-6091</p>
            <p>Github: <a href="https://github.com/kyi193">https://github.com/kyi193</a></p>
          </ul>
        </div>
      </section>
      <section id="blog" className="five">
        <div className="container">
          <header>
            <h2>Personal blog</h2>
          </header>

          <p><a href="https://kyi193.github.io/">Click here</a> to take a look into how I developed my apps</p>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
