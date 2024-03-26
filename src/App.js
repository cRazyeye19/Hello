import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Main from './components/Main/Main';
import Landing from './pages/Landing Page/Landing';


function App() {
  return (
    <>
      <Header />
      <Sidebar />
      <Main />
      {/* <Landing /> */}
    </>
  );
}

export default App;
