import "./hero.css";
import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          We bring solutions to make life easier for our customers.
        </h1>
        <p>
          We have considered our solutions to support every stage of your growth.
        </p>
        <div className="hero-btns">
          <button className="primary">Explore Now</button>
          <button className="secondary">Free Trial</button>
        </div>
      </div>

      <div className="hero-img">
        <img src={heroImg} alt="" />
      </div>
    </section>
  );
}
