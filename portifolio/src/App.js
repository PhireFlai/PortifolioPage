import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work
} from './containers'

import Navbar from './components/navbar';


function App() {
  return (
    <div className="bg-gray-700 text-white">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  );
}

export default App;
