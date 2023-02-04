import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Profile } from './components/Profile';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Profile />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
