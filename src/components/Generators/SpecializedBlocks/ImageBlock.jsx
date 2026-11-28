export default function ImageBlock({ imageTop }) {
    const imageList = imageTop.images;
    return <div className="imageDiv" style={imageTop.global_style}>
        {
            imageList.map((image, imageIndex) => (
                <img
                    key={imageIndex}
                    src={`/portfolio${image.source}`}
                    style={
                        image.image_styles
                    }></img>
            ))
        }
    </div>
}