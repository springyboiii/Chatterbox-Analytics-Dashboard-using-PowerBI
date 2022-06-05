import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter,
  
  Routes,
  Route,
  
} from "react-router-dom";
import Layout from './Layouts/Layout';
function App() {
  return (
    <BrowserRouter>
    <link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

      <Routes>
        <Route path="*" element={<Layout />}>
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
