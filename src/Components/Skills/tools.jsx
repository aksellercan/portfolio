export default function tools() {
    const other_tools = [
        "Docker",
        "MariaDB",
        "SQLite"
    ]

    return <div className="globalUpperDiv">
        <div className="globalPositionDiv">
            <h2>Other Tools</h2>
            {
                other_tools.map((tool, index) => (
                    <div key={index} id="globalIndexDiv">
                        <p>{tool}</p>
                    </div>
                ))
            }
        </div>
    </div >
}