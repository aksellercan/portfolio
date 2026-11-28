export default function ListBlock({ listProp }) {
    return <div className="ListDiv">
        <ul>
            {
                listProp.map((listItem, listKey) => (
                    <li key={listKey}>{listItem}</li>
                ))
            }
        </ul>
    </div>
}
