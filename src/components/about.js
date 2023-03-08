import "./about.css";

export default function About() {
  return (
    <section className="about">
      <div className="about__inner">
        <p>Show data provided by <a href="https://www.tvmaze.com/api">TV Maze</a></p>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/bradleyjohnson212/" target="_blank" >LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/bradleyjohnson112" target="_blank" >GitHub</a>
          </li>
          <li>
            <a href="mailto:bradleyjohnson1898@gmail.com">bradleyjohnson1898@gmail.com</a>
          </li>
          <li>
            Logo provided by
            <a href="https://www.freepnglogos.com/images/w-logo-33543.html" target="_blank" > freepnglogos.com</a>
          </li>
        </ul>
      </div>
    </section>
  )
}