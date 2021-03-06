import React, { Component } from 'react'
import Responsive from 'react-responsive'
import ImageGallery from 'react-image-gallery'
import './style.css'
import './image-gallery.css'
import GoogleMap from '../GoogleMap'

const Mobile = ({ children }) => <Responsive maxWidth={768} children={children} />

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      region: '',
      email: '',
      org: '',
      subject: '',
      content: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange (event) {
    const target = event.target
    const name = target.name

    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    })
  }

  handleSubmit (event) {
    alert(`submitted: ${this.state.value}`)
    event.preventDefault()
  }

  handleImageLoad (event) {
    console.log('Image loaded ', event.target)
  }

  render () {
    const images = [
      {
        original: require('../../assets/landing_1.png')
      },
      {
        original: require('../../assets/landing_2.png')
      },
      {
        original: require('../../assets/landing_3.png')
      }
    ]

    return (
      <section>
        <div className='ig'>
          <ImageGallery
            items={images}
            slideInterval={2000}
            showThumbnails={false}
            showBullets
            showFullscreenButton={false}
            showPlayButton={false}
            onImageLoad={this.handleImageLoad}
          />
        </div>
        <div className='contact'>
          <div className='contact-container'>
            <div className='contact-left'>
              <p className='contact-title'>Follow Us</p>
              <div className='socialmedia-container'>
                <a className='socialmedia' href='https://www.facebook.com/ybrain.inc/' target='_blank' rel='noopener noreferrer'>
                  <img alt={'facebook'} src={require('../../assets/facebook-solid.svg')} />
                </a>
                <a className='socialmedia' href='http://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                  <img alt={'twitter'} src={require('../../assets/twitter-solid.svg')} />
                </a>
                <a className='socialmedia' href='http://www.naver.com' target='_blank' rel='noopener noreferrer'>
                  <img alt={'naver-blog'} src={require('../../assets/naver-blog-solid.svg')} />
                </a>
                <a className='socialmedia' href='https://www.linkedin.com/company-beta/3571676/' target='_blank' rel='noopener noreferrer'>
                  <img alt={'linkedin'} src={require('../../assets/linkedin-solid.svg')} />
                </a>
              </div>
              <p className='contact-title'>General Inquiry</p>
              <p className='contact-content'>inquiries@ybrain.com  I   +82 0321234567</p>
              <p className='contact-title'>Location</p>
              <p className='contact-content'>#802 8th Fl., Pangyo Digital Center C-dong, 242, Pangyo-ro,<br />Bungdang-gu, Seongnam-si, Gyeonggi-do, 13487, Korea<br /><br />경기도 성남시 분당구 판교로 242 판교디지털센터 C동 802호</p>
              <div className='home-map'>
                <GoogleMap />
              </div>
            </div>
            <div className='contact-right'>
              <p className='contact-title'>Contact Us</p>
              <form onSubmit={this.handleSubmit}>
                <div className='half first'>
                  <input className='contact-input' placeholder='이름' name='name' type='text' value={this.state.name} onChange={this.handleInputChange} />
                </div>
                <div className='half'>
                  <input className='contact-input' placeholder='국가'name='region'type='text' value={this.state.region} onChange={this.handleInputChange} />
                </div>
                <div className='half first'>
                  <input className='contact-input' placeholder='ybrain@email.com' name='email'type='text' value={this.state.email} onChange={this.handleInputChange} />
                </div>
                <div className='half'>
                  <input className='contact-input' placeholder='소속기관' name='org'type='text' value={this.state.org} onChange={this.handleInputChange} />
                </div>
                <input className='contact-input' placeholder='제목' name='subject'type='text' value={this.state.subject} onChange={this.handleInputChange} />
                <textarea className='contact-input' placeholder='메세지를 남겨주세요' name='content'type='text' value={this.state.content} onChange={this.handleInputChange} />
                <input className='contact-submit'type='submit' value='Send' />
              </form>
            </div>
          </div>
        </div>
        <Mobile>
          <div className='map'>
            <GoogleMap />
          </div>
        </Mobile>
      </section>
    )
  }
}

export default Home
