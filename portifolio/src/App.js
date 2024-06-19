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
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="work">
        <Work />
      </section>
      {/* <Testimonial /> */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
