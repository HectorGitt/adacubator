import styled from 'styled-components'

const Showcase = () => {
  return (
    <ShowcaseCont>
        <h2>
            Let&ldquo;s <span className='waivy'>Accelerate</span> Your Success <br/>on <span className='waivy'>Cardano</span>
        </h2>
        <p>For inquiries, partnership opportunities, or to submit your project for consideration<br/>please contact us at <a href='mailto:info@aducubator.com'>info@aducubator.com</a></p>
    </ShowcaseCont>
  )
}

export default Showcase

const ShowcaseCont = styled.div`
  text-align: center;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin: 2rem 0;
  }
  a {
    color: #0098DA;
  }

`