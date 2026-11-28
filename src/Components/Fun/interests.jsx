import BasicComponent from "../generators/BasicComponent"
import content from "../../assets/json/interests.json"

export default function Interests() {
    return <BasicComponent formattedParagraphTextsList={content} />
}