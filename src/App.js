import Header from "./components/Header/Header";
import Hogwarts from "./components/Hogwarts/Hogwarts";
import Loading from "./components/Loading/Loading";
import { data } from "./helper/data";
import { useState,useEffect,useRef } from "react";
import "./App.css"

function App() {
  const audioRef = useRef(null) // ses dosyasına referans için kullanılır.
  const [isPlaying, setIsPlaying] = useState(false);


  const togglePlay = () => {
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

const [loading, setLoading] = useState(true)

useEffect(() => {
  const time = setTimeout(() => 
  setLoading(false), 8000)
  return () => clearTimeout(time)
}, [])

return (
  <div className="App">
    <button className="p-2" onClick={togglePlay} style={{ position: 'fixed', top: '60%', left: '10px', zIndex: 1000 , backgroundColor:'#591313', color:'white'}} >
      {isPlaying ? '||' : 'Play'}
    </button>

    <audio ref={audioRef} src="/mp3/harry-potter-film-muzigi.mp3" loop preload="auto"></audio>

    {loading ? (
      <Loading />
    ) : (
      <>
        <Header />
        <Hogwarts data={data} />
      </>
    )}
  </div>
);
}

export default App;
