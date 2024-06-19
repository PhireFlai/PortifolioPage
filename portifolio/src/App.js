import {
  About,
  Contact,
  Header,
  Skills,
  Testimonial,
  Work
} from './containers'

import Navbar from './components/Navbar';


function App() {
  return (
    <div className="bg-gray-800 text-white">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      {/* <Testimonial /> */}
      <Contact />
    </div>
  );
}

export default App;
