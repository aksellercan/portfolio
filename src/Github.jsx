import { Container } from "react-bootstrap";
import { useState } from "react";

export default function Github() {
    const [repos, setRepos] = useState([]);

    async function fetchGithubProjects(username) {
        const response = await fetch(
            `https://api.github.com/users/${username}/repos`,
            {
                method: "GET",
            },
        );
        if (!response.ok) {
            console.error(`Github api returned ${response.status}`);
            setRepos([]);
        }
        const jsonBody = await response.json();
        console.log(`sent request ${jsonBody[1].name}`); 
        setRepos(jsonBody);
    }

    function loopOver() {
        for (let i = 0; i < repos.length; i++) {
            console.log(`Repo name: ${repos[i].name}`);
        }
    }

    const listItems = repos.sort((a,b) => a.updated_at < b.updated_at).map(repo => 
    <li id="repo_list_items">
        <h1>{repo.name}</h1>
        <p>{repo.description}</p>
        <p>Language = {repo.language}</p>
    </li>);

    return <Container>
        <h2>HELLO</h2>

        <button onClick={() => fetchGithubProjects("aksellercan")}>click me</button>

        <button onClick={loopOver}>loop</button>

        <ul>{listItems}</ul>
    </Container>
}