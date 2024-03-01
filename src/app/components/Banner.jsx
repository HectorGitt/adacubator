import Image from "next/image"
import styled from "styled-components"
import { device } from "../lib/breakpoint"
import rocket from '../../../public/rocket.png'
import wavelines from '../../../public/wavelines.svg'
import Button from "./Button"
import borderBox from '../../../public/banner_border.svg'

const Banner = () => {
  return (
    <BannerCont>
      <div>
        <h2 data-aos='zoom-in'>Pitch to <span className="waivy">Us</span></h2>
        <p data-aos='fade-up'>If you&lsquo;re building a project on Cardano and believe in making a difference, AdaCubator is your ideal partner. Together, we can push the boundaries of what&lsquo;s possible and shape the future of blockchain technology.</p>
        <Button dataAos='fade-up' text='Join Us' />
        <div className="banner-img-cont">
        <Image data-aos='fade-up' data-aos-delay={500} className="banner-img" src={rocket} alt='rocket' layout="responsive" />
        </div>
      </div>
      <Image data-aos='fade-up' className="wavelines" src={wavelines} />
      <Image data-aos='fade-up' className="banner-border" src={borderBox} />
    </BannerCont>
  )
}

export default Banner

const BannerCont = styled.div`
  position: relative;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 3rem 5%;
  & > div {
    backdrop-filter: blur(3px);
    background: transparent;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    min-height: 400px;
    p {
      max-width: 50%;
      margin: 1rem 0;
      z-index: 1;
    }
    button {
      align-self: self-start;
      z-index: 1;
    }
  }
  h2 {
    font-size: 2.5rem;
  }
  .banner-img-cont {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  .wavelines {
    position: absolute;
    top: -50%;
    z-index: 1;
  }
  .banner-border {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 4;
  }
  @media screen and (${device.md}) {
      & > div p {
        max-width: 100%;
      }
  }
    
`