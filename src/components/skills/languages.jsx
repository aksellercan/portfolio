export default function languages() {
    const languages = [
        "Java",
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

    return <div className="programmingSkillsDiv">
        {
            languages.map((lang, index) => (
                <div key={index}>
                    <p>{lang}</p>
                </div>
            ))
        }
        {
            frameworks.map((frame, index) => (
                <div key={index}>
                    <p>{frame}</p>
                </div>
            ))
        }
    </div>
}