import React, { Component } from 'react';
import './DclIndex.scss';
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.css';

class DclIndex extends Component {
  componentDidMount () {
      new Swiper (this.refs.swiperContainer, {
        loop: true,
        autoplay: true,
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        }
      })    
  }
  render() {
    return (
      <div className="dclindex">
        <div className="swiper-container" ref="swiperContainer">
          <div className="swiper-wrapper">
              <div className="swiper-slide">Slide 1</div>
              <div className="swiper-slide">Slide 2</div>
              <div className="swiper-slide">Slide 3</div>
          </div>
          {/* 如果需要分页器 */}
          <div className="swiper-pagination">
          </div>
        </div>
        <section className="dclindex-section">
          <div className="dclindex-content">
            <ul>
              <li>
                <h3>
                  <img src={require('../../assets/image/icon-btc.png')} alt=""/>
                  BTC/USDT
                </h3>
                <p>100.0</p>
                <p>1500/24h</p>
              </li>
              <li>
                <h3>
                  <img src={require('../../assets/image/icon-btc.png')} alt=""/>
                  BTC/USDT
                </h3>
                <p>100.0</p>
                <p>1500/24h</p>
              </li>
              <li>
                <h3>
                  <img src={require('../../assets/image/icon-btc.png')} alt=""/>
                  BTC/USDT
                </h3>
                <p>100.0</p>
                <p>1500/24h</p>
              </li>
            </ul>
          </div>
        </section>
        <div className="dclindex-readmore">
          <div className="readmore-left">
            <h1>Breaking News</h1>
            <p>CAN is great creative Blockchain project to push the new PDN move on.</p>
          </div>
          <div className="readmore-btn">
            <button>Read more</button>
          </div>
        </div>
      </div>
    )
  }
}

export default DclIndex