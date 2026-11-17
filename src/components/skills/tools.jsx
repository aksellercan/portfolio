export default function tools() {
    const other_tools = [
        "Docker",
        "MariaDB",
        "SQLite"
    ]

    return <div>
        {
            other_tools.map((tool, index) => (
                <div key={index}>
                    <p>{tool}</p>
                </div>
            ))
        }
    </div>
}