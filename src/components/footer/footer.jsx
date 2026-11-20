import gif from '../../assets/image/twitter_2107349146688504013.gif'

export default function footer() {
    return <div className="footerClass">
        <div id='footerFormatDiv'>
            <div id='stackList'>
                <h4>Tech Stack:</h4>
                <p>Framework: Vite with React</p>
                <p>Font: <a href={"https://lilex.myrt.co/"}>Lilex Nerd Font</a></p>
                <p>Hosting: Github Pages</p>
            </div>
            <div id='imgDiv'>
                <img
                    src={gif}
                    id="easter"
                    alt='<><'></img>
            </div>
        </div>
        <p style={{ margin: 0, color: "skyblue" }}>Updated on {import.meta.env.VITE_UPDATED_AT}</p>
    </div >
}