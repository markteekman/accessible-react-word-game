import Game from '../Game';
import Header from '../Header';
import Footer from '../Footer';

import A11yModal from '../A11yModal/A11yModal';
import HelpModal from '../HelpModal/HelpModal';

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <main className="game-wrapper">
          <Game />
        </main>
        <Footer />
      </div>
      <HelpModal />
      <A11yModal />
    </>
  );
}

export default App;
