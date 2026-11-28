import BasicComponent from "../../../Components/generators/BasicComponent"
import portfolioStructure from "../../../assets/json/portfolio_spec.json"

export default function portfolioWebsite() {
    return <BasicComponent formattedParagraphTextsList={portfolioStructure} />
}