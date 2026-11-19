import Education from './../../components/me/education'
import Myself from './../../components/me/myself'
import ProjectLinks from './../../components/projects/ProjectLinks'
import Languages from './../../components/skills/languages'

export default function home() {
    return <>
        <Myself />
        <br></br>
        <Education />
        <br></br>
        <ProjectLinks />
        <br></br>
        <Languages />
    </>
}