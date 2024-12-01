
//Components
import Header from "./components/Header/header"; 
import Portfolio from "./components/Portfolio/portfolio";
import MediaGallery from "./components/MediaCard/media";
import LastProject from "./components/LastProject/lastproject";
import MusicCard from "./components/MusicCard/music";


function App() {
  return (
    <main className='DeveloperContent'> 
      <Header/> 
      <Portfolio/>
      <div className="MiddleContent layout2x2">
        <MediaGallery/>
        <LastProject/>
      </div>
      <MusicCard/>
    </main>
  );
}

export default App;
