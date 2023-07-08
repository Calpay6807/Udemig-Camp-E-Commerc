import "./App.css";
import BestSeller from "./components/BestSeller";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SafePayment from "./components/SafePayment";
import Search from "./components/Search";
import MainPage from "./pages/main-pages";

function App() {
  return (
    <div>
      <Header />
      <MainPage />

      <BestSeller />
      <Search />
      <SafePayment />
      <Footer />
    </div>
  );
}

export default App;
// https://ecommerce.udemig.dev/en_US/
