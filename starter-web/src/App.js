import './App.css';


function App() {
  const title = 'Welcome to my first React Website';
  const link = "https://www.google.com";

  return (
    <div className="App">
      
      <div className="content">
        
      </div>
      <h1>{title}</h1>
      <p>Made by watching NetNinjas React Tutorial</p>

      <a href={link}>Link to Google</a>
    </div>
  );
}

export default App;
