import { links } from '../links';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="section">
      <div className="container">
        <header className="main-header">
          <h1 className="title">
            Exploring <span>C</span>
            <span>S</span>
            <span>S</span>
          </h1>
        </header>
        <section className="card-container">
          {links.map((link, index) => {
            const { path, name, img } = link;
            if (path !== '/') {
              return (
                <article className="card" key={index}>
                  <div className="link-container">
                    <Link to={path} className="link">
                      <h4>{name}</h4>
                      <img src={img} alt={name} className="img" />
                    </Link>
                  </div>
                </article>
              );
            }
          })}
        </section>
      </div>
    </div>
  );
};

export default Home;
