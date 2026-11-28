import { Link } from 'react-router-dom'
import Github from '../../Components/Projects/github'

export default function Projects() {

    return <>
        <p> <Link as={Link} to={'/projects/portfolio_spec'}>This website's BTS</Link></p>
        <Github />
    </>
}