import Image from "next/image"
import styled from "styled-components"
import { device } from "../lib/breakpoint"
import rocket from '../../../public/rocket.png'
import Button from "./Button"

const Banner = () => {
  return (
    <BannerCont>
      <div>
        <h2>Pitch to <span className="waivy">Us</span></h2>
        <p>If you're building a project on Cardano and believe in making a difference, AdaCubator is your ideal partner. Together, we can push the boundaries of what's possible and shape the future of blockchain technology.</p>
        <Button text='Join Us' />
        <div className="banner-img-cont">
          <Image className="banner-img" src={rocket} alt='rocket' layout="responsive" />
        </div>
      </div>
    </BannerCont>
  )
}

export default Banner

const BannerCont = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  & > div {
    margin: 0 5%;
    border-radius: 2rem;
    border: 2px solid #0098DA;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
    min-height: 400px;
    p {
      max-width: 50%;
      margin: 1rem 0;
    }
    button {
      align-self: self-start;
    }
  }
  .banner-img-cont {
    position: absolute;
    bottom: 0;
    right: 0;
  }
    
`