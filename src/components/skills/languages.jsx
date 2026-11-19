export default function languages() {
    const languages = [
        "Java (primary)",
        "C#",
        "C",
        "Javascript/TypeScript",
        "Rust (currently learning)"
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
                        // <div key={index}>
                        //     <p>{lang}</p>
                        // </div>
                        <li key={index}>{lang}</li>
                    ))
                }
            </ul>
            <br></br>
            <h2>Frameworks</h2>
            <ul>
                {
                    frameworks.map((frame, index) => (
                        // <div key={index}>
                        //     <p>{frame}</p>
                        // </div>
                        <li key={index}>{frame}</li>
                    ))
                }
            </ul>
        </div>
    </div>
}