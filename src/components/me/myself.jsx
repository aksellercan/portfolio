export default function myself() {
    const aboutMe = "My name is Aksel Ercan, I am a Computer Science student at University of Regensburg."
    const extraNotes = "I'm a backend developer, working with Springboot. I have experience with React on frontend too. Additionally, I know C# ASP.NET framework. Currently learning Systems Programming with Rust on the side.";
    return <div className="eduList">
        <div id="eduPos">
            <div id="about">
                <h2>About Me</h2>
                <br></br>
                <p>{aboutMe}</p>
                <br></br>
                <p>{extraNotes}</p>
            </div>
        </div>
    </div>
}