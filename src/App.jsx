import Layout from "./layout";
import LandingPage from "./pages/landing-page/LandingPage";
import "./App.css";

const App = () => {
  return (
    <Layout>
      {/* Render content Page */}
      <LandingPage />
    </Layout>
  );
};

export default App;
