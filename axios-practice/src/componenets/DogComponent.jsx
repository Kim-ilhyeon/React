import { getDogImages } from "../service/apiTest";
import { useState } from "react";
import Image from "./Image";

function DogComponent() {
    const [images, setImages] = useState([]);

    const showImage = async () => {
        const data = await getDogImages();
        console.log(data);
        // setImage(data[0].url);
        // image = "" 또는 image = "http:// ~~"
        const imgUrl = data[0].url;
        setImages([...images, imgUrl]);
    }

    return (
        <>
            <p>Dog Component</p>
            <hr />
            <Image images={images} showImage={showImage} />
        </>
    );
}
export default DogComponent;