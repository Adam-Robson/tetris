import Controls from './components/Controls';
import GridBoard from './components/GridBoard';
import NextBlock from './components/NextBlock';
import ScoreBoard from './components/ScoreBoard';
import MessagePopup from './components/MessagePopup';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Tetris Redux</h1>
      </header>
      <GridBoard />
      <NextBlock />
      <ScoreBoard />
      <Controls />
      <MessagePopup />
    </div>
  );
}

