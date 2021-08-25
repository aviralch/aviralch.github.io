import logo from './logo.svg';
import './App.css';
import NavBarItems from './components/ NavBarItems';

function App() {
  return (
    <div className="container-fluid homepage-bgimage">
      <div className="container-fluid book-cover">
     
        <div className="navbar-custom">
          <NavBarItems pageTitle={'Experience'} marginLeft={30} />
          <NavBarItems pageTitle={'Project'} marginLeft={20} />
          <NavBarItems pageTitle={'About'} marginLeft={10}/>
        </div> 

      </div>
    </div>
  );
}




export default App;
