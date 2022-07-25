import './App.css';
import Footer from './Footer';
import QuestionCard from './QuestionCard';
import Heading from './Heading';
import ScoreComponent from './ScoreComponent';

function App() {
  return (
    <div className="container">
      <Heading />
      {/* <ScoreComponent /> */}
      <QuestionCard />
      <Footer />
    </div>
  );
}

export default App;
