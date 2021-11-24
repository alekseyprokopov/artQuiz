
import './home.scss';

let Home = {
  render: async () => {
    let view = /*html*/ `
    <section class="home">
      <div class="container home-container">
        <a href="#/settings" class="button-settings"></a>
        <div class="logo main-logo">
          <img src="../../assets/svg/logo.svg" alt="art-quiz-logo" />
        </div>
        <div class="button-container">
          <a href="#/artist"><button class="button custom-button">Artist quiz</button></a>
          <a href="#/picture"><button class="button custom-button">Pictures quiz</button></a>
        </div>
      </div>
    </section>
    `;
    return view
  },
  after_render: async () => {},
};

export default Home;
