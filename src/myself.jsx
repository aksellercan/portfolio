export default function myself() {
    const tldr = "TLDR: Aksel Ercan, Located in Regensburg Germany, Studying Master's at University of Regensburg"
    const aboutMe = "Hi, my name is Aksel Ercan. I'm from Istanbul and I'm currently studying Computer Science at University of Regensburg. I did my bachelor's in Poznan, Poland on Computer Science. After, getting my degree I applied to Masters and that's where I'm at currently :)";
    const extraNotes = "This is my website and it is still work in progress";
    return <div className="eduList">
        <div id="eduPos">
                <div id="about">
                    <h2>About Me</h2>
                    <p>{tldr}</p>
                    <p>{aboutMe}</p>
                    <br></br>
                    <p>{extraNotes}</p>
                </div>
        </div>
    </div>
}