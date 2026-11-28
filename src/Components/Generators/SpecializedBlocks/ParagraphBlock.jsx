export default function ParagraphBlock({ paragraph }) {
    return <div>
        <div className="ParagraphDiv">
            <p>
                {paragraph.content}
            </p>
        </div>
    </div>
}