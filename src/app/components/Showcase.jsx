import styled from "styled-components";

const Showcase = () => {
  return (
    <ShowcaseCont>
      <h1 data-aos="zoom-in">
        Let&lsquo;s <span className="waivy">Accelerate</span> Your Success{" "}
        <br />
        on <span className="waivy">Cardano</span>
      </h1>
      <p data-aos="fade-up">
        For inquiries, partnership opportunities, or to submit your project for
        consideration
        <br />
        please contact us at{" "}
        <a className="waivy" href="mailto:info@aducubator.com">
          info@adacubator.com
        </a>
      </p>
      <div className="circle"></div>
    </ShowcaseCont>
  );
};

export default Showcase;

const ShowcaseCont = styled.div`
  position: relative;
  text-align: center;
  min-height: 150px;
  margin: 4rem 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 2rem 0;
    z-index: 2;
  }
  p {
    z-index: 2;
  }
  a {
    font-weight: bolder;
  }
  .circle {
    left: 90%;
    filter: blur(400px);
    width: 600px;
  }
`;
