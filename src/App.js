import { Footer } from "./component/footer/Footer";
import { Navbar } from "./component/global/navbar/Navbar";
import { AllRoutes } from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
