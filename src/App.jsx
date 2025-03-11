import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <HomePage />
    </Router>
  );
}

export default App;
