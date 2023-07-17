import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductPage from "./pages/ProductPage";

import { BrowserRouter , Route , Routes} from 'react-router-dom';
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProtectedRoute from "./routes/ProtectedRoute";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/products/:catId" element={<ProtectedRoute Component ={ProductPage}/>} />
      <Route path="/products/detail/:id" element={<ProtectedRoute Component ={ProductDetailPage}/>} />
      <Route path="/about" element={<ProtectedRoute Component ={AboutPage}/>} />
      <Route path="/contact" element={<ProtectedRoute Component ={ContactPage}/>} />
      <Route path="/register" element={<RegisterPage/>} />
      <Route path="/login" element={<LoginPage/>} />
       <Route path="*" element={<ErrorPage/>} /> 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
