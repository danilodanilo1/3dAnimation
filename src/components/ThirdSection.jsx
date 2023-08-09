import useScroll from "../shared/useScroll";

function ThirdSection({triggerPreview}) {
    return ( 
        <div className="display-section wrapper">
            <h2 className="title">New</h2>
            <p className="text">Brilliant</p>
            <span className="description">
                A display thats bla bla bla
            </span>
            <button className="button" onClick={triggerPreview}>Try me!</button>
            <button className="back-button" onClick={() => useScroll(".jumbotron-section")}>Top</button>
        </div>
     );
}

export default ThirdSection;