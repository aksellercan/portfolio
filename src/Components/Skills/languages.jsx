export default function languages() {
    const languages = [
        "Java (primary)",
        "C#",
        "C",
        "Rust (currently learning)",
        "Python",
        "Bash",
        "Javascript/TypeScript"
    ]

    const frameworks = [
        "SpringBoot",
        ".NET",
        "Vite",
        "React"
    ]

    return <div className="globalUpperDiv">
        <div className="globalPositionDiv">
            <h2>Languages</h2>
            <ul>
                {
                    languages.map((lang, index) => (
                        <li key={index}>{lang}</li>
                    ))
                }
            </ul>
            <br></br>
            <h2>Frameworks</h2>
            <ul>
                {
                    frameworks.map((frame, index) => (
                        <li key={index}>{frame}</li>
                    ))
                }
            </ul>
        </div>
    </div>
}