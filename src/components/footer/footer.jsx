import gif from '../../assets/image/twitter_2107349146688504013.gif'

export default function footer() {
    const easterEggSource = gif

    return <div className="footerClass">
        <div id='footerFormatDiv'>
            <div id='stackList'>
                <h4>Tech Stack:</h4>
                <p>Framework: Vite with React</p>
                <p>Font: Lilex Nerd Font</p>
                <p>Hosting: Github Pages</p>
            </div>
            <div id='imgDiv'>
                <img
                    src={easterEggSource}
                    id="easter"
                    alt='<><'></img>
            </div>
        </div>
        <p style={{ margin: 0, color: "skyblue" }}>Updated on 17.11.2026</p>
    </div >
}