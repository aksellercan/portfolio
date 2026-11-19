import { useState, useEffect } from "react";
import { standouts } from "./standouts";

function renderRepo(repo) {
    return (
        <li id="list_project" key={repo.id}>
            <a href={repo.html_url}>
                <h4>{repo.name}</h4>
                <p>{repo.description}</p>
                <p>{repo.language}</p>
            </a>
        </li>
    );
}

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

    const sorted = [...repos].sort((a, b) => a.pushed_at < b.pushed_at);
    const bestRepos = sorted.filter(repo => standouts.includes(repo.name));

    let fetchCount = 0;
    useEffect(() => {
        async function wrapper() {
            await fetchGithubProjects(import.meta.env.VITE_USERNAME);
        }
        if (fetchCount > 0) {
            return;
        }
        fetchCount++;
        wrapper();
    }, [fetchCount]);

    return (
        <div className="globalUpperDiv">
            <div className="globalPositionDiv">
                <div id="projectIndex">
                    <h2>Projects</h2>
                    <ul>{bestRepos.map(renderRepo)}</ul>
                    <br></br>
                </div>
                <div id="projectIndex">
                    <h2>All Repositories (Updates on each push)</h2>
                    <ul>{sorted.map(renderRepo)}</ul>
                    <br></br>
                </div>
            </div>
        </div>
    );
}
