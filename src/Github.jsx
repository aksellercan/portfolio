import { useState, useEffect } from "react";
import { LanguageColors } from "./languageColors";
import { Projects } from "./Projects";

function renderRepo(repo) {
    const langColor = LanguageColors[repo.language];
    return (
        <li key={repo.id}
            className={langColor ? "repo-item lang" : "repo-item"}
            style={langColor ? { "--lang-color": langColor } : undefined}>
            <a href={repo.html_url}>
                <h1>{repo.name}</h1>
                <p>{repo.description}</p>
                {repo.language && (
                    <p className="repo-lang">
                        <span className="lang-dot"
                            style={langColor ? { backgroundColor: langColor } : undefined}></span>
                        Language: {repo.language}
                    </p>
                )}
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
    const bestRepos = sorted.filter(repo => Projects.includes(repo.name));

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
        <div className="repo-columns">
            <div className="repo-container" id="projects">
                <h1>Projects</h1>
                <ul className="repo-list">{bestRepos.map(renderRepo)}</ul>
            </div>
            <div className="repo-container">
                <h1>All Repositories</h1>
                <ul className="repo-list">{sorted.map(renderRepo)}</ul>
            </div>
        </div>
    );
}
