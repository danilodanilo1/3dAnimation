import { useRef } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import WebgiViewer from "./components/WebgiViewer";

function App() {
  const webgiViewerRef = useRef()
  const contentRef = useRef()
  const handlePreview = () => {
    webgiViewerRef.current.triggerPreview()
  }
  return (
    <div className="App">
      <div ref={contentRef} id="content">
        <Nav />
        <Jumbotron />
        <SecondSection />
        <ThirdSection triggerPreview={handlePreview} />
      </div>
      <WebgiViewer ref={webgiViewerRef}  contentRef={contentRef}/>
    </div>
  );
}

export default App;
