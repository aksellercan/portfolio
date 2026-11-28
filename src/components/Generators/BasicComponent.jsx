import { ParagraphTypeEnum } from "../../enums/ParagraphTypeEnum.jsx"
import ParagraphBlock from "./specializedBlocks/ParagraphBlock.jsx"
import ListBlock from "./specializedBlocks/ListBlock.jsx"
import ImageBlock from "./specializedBlocks/ImageBlock.jsx"
import { ReturnStackEnum } from "../../enums/StackEnum.jsx"

export default function BasicComponent({ formattedParagraphTextsList }) {
    return <div
        className="BasicComponentUpperDiv"
        style={
            {
                ...formattedParagraphTextsList.page_styles,
                ...ReturnStackEnum(formattedParagraphTextsList.style)
            }
        }
    >
        {
            formattedParagraphTextsList.structure.map((paragraph, key) => (
                <div className="WholeBlockDiv" key={key} >
                    <div className="HeadLineDiv">
                        <h1>{paragraph.title.content}</h1>
                    </div>
                    {
                        paragraph.type == ParagraphTypeEnum.NONE
                            ?
                            ""
                            :
                            (
                                paragraph.type == ParagraphTypeEnum.PARAGRAPH
                                    ?
                                    <ParagraphBlock paragraph={paragraph} />
                                    :
                                    <ListBlock listProp={paragraph.list} />
                            )
                    }
                    {
                        !paragraph.image
                            ?
                            ""
                            :
                            <ImageBlock imageTop={paragraph.image} />
                    }
                </div>
            ))
        }
    </ div >
}