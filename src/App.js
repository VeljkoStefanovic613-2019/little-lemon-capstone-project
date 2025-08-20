import './App.css';
import FloatingBasket from "./components/FloatingBasket";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AllRoutes } from "./routes/AllRoutes";


function App() {
  return (
    <>
      <Header />
      <AllRoutes />
      <Footer />
      <FloatingBasket />
    </>
  );
}

export default App;
