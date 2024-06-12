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
    <div className="">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
