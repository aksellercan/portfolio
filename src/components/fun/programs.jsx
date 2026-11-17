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

    return <div className="editorsList">
        <div id="editorsPos">
            <h2>Editors and IDE's</h2>
            {
                editors.map((editor, index) => (
                    <div key={index} id="editorsIndex">
                        <p>{editor}</p>
                    </div>
                ))
            }

            <h2>Browsers</h2>
            {
                browser.map((editor, index) => (
                    <div key={index} id="editorsIndex">
                        <p>{editor}</p>
                    </div>
                ))
            }
        </div>
    </div>
}