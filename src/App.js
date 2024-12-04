import './App.css';
import './App.scss';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

function App() {
  return (
    <main className="App">
      <Header />
        <Home />
      <Footer />
    </main>
  );
}

export default App;