export default function editors() {
    const editors = [
        "Visual Studio Code",
        "Intellij",
        "Rider",
        "Neovim"
    ]

    const programs = [
        "kitty",
        "Affinity",
        "Davinci Resolve",
    ]

    const browser = [
        "Firefox",
        "Helium"
    ]

    return <div className="globalUpperDiv">
        <div className="globalPositionDiv">
            <h2>Editors and IDE's</h2>
            {
                editors.map((editor, index) => (
                    <div key={index} id="globalIndexDiv">
                        <p>{editor}</p>
                    </div>
                ))
            }
            <br></br>
            <h2>Browsers</h2>
            {
                browser.map((editor, index) => (
                    <div key={index} id="globalIndexDiv">
                        <p>{editor}</p>
                    </div>
                ))
            }
            <br></br>
            <h2>Programs</h2>
            {
                programs.map((editor, index) => (
                    <div key={index} id="globalIndexDiv">
                        <p>{editor}</p>
                    </div>
                ))
            }
        </div>
    </div>
}