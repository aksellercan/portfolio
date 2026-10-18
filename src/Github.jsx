import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { LanguageColors } from "./languageColors";

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

    const listItems = repos.sort((a, b) => a.updated_at < b.updated_at).map(repo => {
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
    });

    let fetchCount = 0;
    useEffect(() => {
        async function wrapper() {
            await fetchGithubProjects(import.meta.env.VITE_GITHUB_USERNAME);
        }
        if (fetchCount > 0) {
            return;
        }
        fetchCount++;
        wrapper();
    }, [fetchCount]);

    return <Container className="repo-container">
        <ul className="repo-list">{listItems}</ul>
    </Container>
}