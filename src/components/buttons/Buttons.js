import BackToHome from '../BackToHome';
import { buttons } from './buttonList';

const Buttons = () => {
  return (
    <div className="category">
      <header className="header-container">
        <BackToHome />
        <h1 className="category-title">Buttons</h1>
      </header>
      <section className="category-section">
        {buttons.map((button) => {
          return (
            <article className="items" key={button.id}>
              {button.component}
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Buttons;
