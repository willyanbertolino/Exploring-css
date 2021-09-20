import BackToHome from '../BackToHome';
import { loaders } from './loaderList';

const Loaders = () => {
  return (
    <div className="category">
      <header className="header-container">
        <BackToHome />
        <h1 className="category-title">Loaders</h1>
      </header>
      <section className="category-section">
        {loaders.map((loader) => {
          console.log(loader);
          return (
            <article className="items" key={loader.id}>
              {loader.component}
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Loaders;
