
//Components
import Header from "./components/Header/header"; 
import Portfolio from "./components/Portfolio/portfolio";
import MediaGallery from "./components/MediaCard/media";


function App() {
  return (
    <main className='DeveloperContent'> 
      <Header/> 
      <Portfolio/>
      <MediaGallery/>
    </main>
  );
}

export default App;
