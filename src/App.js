import './App.css';
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AuthProvider } from "./context/AuthContext";
import { AllRoutes } from "./routes/AllRoutes";


function App() {
  return (
    <AuthProvider>
      <Header />
      <AllRoutes />
      <Footer />
    </AuthProvider>
  );
}

export default App;
