import gif from '../../assets/image/icon.gif'

export default function footer() {
    return <div className="footerContainer">
        <div id='pContainer'>
            <h4>Tech Stack:</h4>
            <p>Framework: Vite with React</p>
            <p>Font: <a href={import.meta.env.VITE_USED_FONT_HOMEPAGE}>Lilex Nerd Font</a></p>
            <p>Hosting: Github Pages</p>
            <p id="version">Updated on {import.meta.env.VITE_UPDATED_AT}</p>
        </div>
        <div id='imgContainer'>
            <img
                src={gif}
                id="easter"
                alt='hi'></img>
        </div>
    </div >
}