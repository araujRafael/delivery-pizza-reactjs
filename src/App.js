import { BrowserRouter as Router, Route, } from 'react-router-dom'
// Styled
import GlobalStyled from './Styles/GlobalStyled'
import Hero from "./Components/Hero/Hero";
import Products from './Components/Products/Products';
import Feature from './Components/Feature/Feature';
import { productsData, productsData2 } from './Components/Products/Data'
import Footer from './Components/Footer/Footer';
import { dataSocialMedia } from './Components/Footer/Data'

function App() {
  return (
    <Router>
      <GlobalStyled />
      <Hero />

      <Products id={'pizzas'} heading='Choose your Favorite' data={productsData} />

      <Feature id={'oftheday'}/>

      <Products id={'desserts'} heading='Sweets Treats for You' data={productsData2} />

      <Footer medias={dataSocialMedia} />
    </Router>
  );
}

export default App;
