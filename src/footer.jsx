import gif from './assets/image/twitter_2107349146688504013.gif'

export default function footer() {
    const easterEggSource = gif

    return <div className="footerClass">
        <img src={easterEggSource} id="easter"></img>
    </div>
}