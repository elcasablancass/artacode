import "./Hero.scss";

const Hero = () => {
  return (
    <section className="arta-hero">
      <div className="arta-container">
        <div className="arta-hero__content">
          <div className="arta-hero__content--image">
            <img
              src={require("../../assets/gifs/hero.gif")}
              alt="Arta code connection"
            />
          </div>
          <div className="arta-hero__content--detail">
            <h1 className="arta-hero__title">
              <span className="arta-hero__typing">Welcome to <span class="divide-text">Artacode</span></span>
            </h1>
            <p className="arta-hero__subtitle">
              Your go-to platform for building and managing amazing websites
              effortlessly.
            </p>
            <button className="arta-green-button">About Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
