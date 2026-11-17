export default function editors() {
    const editors = [
        "Visual Studio Code",
        "Intellij",
        "Rider",
        "Neovim"
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
        </div>
    </div>
}