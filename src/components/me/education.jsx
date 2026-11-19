export default function education() {
    const educationList = [
        {
            instutation: "University of Regensburg",
            level: "Masters Degree",
            subject: "Computer Science",
            currentSemester: "1st Semester WiSe",
            startDate: "12.10.2026",
            endDate: "2028 (expected)",
            location: "Regensburg, Bavaria, Germany",
            completed: false
        },
        {
            instutation: "University WSB Merito",
            level: "Bachelor Degree",
            subject: "Computer Science",
            startDate: "24.10.2022",
            endDate: "06.02.2026",
            location: "Poznan, Wielkopolski, Poland",
            completed: true
        },
    ];

    return <div className="globalBoxDiv">
        <div className="globalPositionDiv">
            <h1>Education</h1>
            {
                educationList.map((edu, index) => (
                    <div key={index} id="globalIndexDiv">
                        <h2>{index == 0 ? "Current" : `${index + 1}#`}</h2>
                        <h3>{edu.instutation}</h3>
                        {
                            edu.completed
                                ?
                                ""
                                :
                                <p>Current Semester: {edu.currentSemester}</p>
                        }
                        <p>Degree: {edu.level}</p>
                        <p>Study Area: {edu.subject}</p>
                        <p>Start: {edu.startDate}</p>
                        <p>End: {edu.endDate}</p>
                        <p>Where: {edu.location}</p>
                        {index != educationList.length - 1 ? <br></br> : ""}
                    </div>
                ))
            }
        </div>
    </div>
}