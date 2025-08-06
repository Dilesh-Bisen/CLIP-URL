import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;