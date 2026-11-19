import { Link } from 'react-router-dom';

export default function ProjectLinks() {
    return <div className="globalUpperDiv">
        <div className="globalPositionDiv">
            <h2>Projects</h2>
            <a href={import.meta.env.VITE_NCD_GITHUB_LINK}><h3>Network Cloud Drive</h3></a>
            <p>Java, Springboot | Local Network File hosting service</p>
            <Link as={Link} to='/projects/NetworkCloudDrive'><p>Documentation</p></Link>
            <br></br>
            <a href={import.meta.env.VITE_SPOTIFY_GITHUB_LINK}><h3>Spotify Web API CLI</h3></a>
            <p>Java, Maven | CLI program to communicate with Spotify Web API</p>
            <br></br>
            <a href={import.meta.env.VITE_FIREFOX_EXTENSION_MARKET_LINK}><h3>My small Firefox Extension <span>MediaTab</span></h3></a>
        </div>
    </div>
}