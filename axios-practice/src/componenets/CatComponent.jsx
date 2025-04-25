import { useEffect } from "react";
import { getCatImages } from "../service/apiTest";
import { useState } from "react";
import Image from "./Image";

function CatComponent() {
    const [images, setImages] = useState([]);

    // useEffect(() => {
    //     const data = getCatImages();
    //     console.log(data);
    // }, []);

    const showImage = async () => {
        const data = await getCatImages();
        console.log(data);
        // setImage(data[0].url);
        // image = "" 또는 image = "http:// ~~"
        const imgUrl = data[0].url;
        setImages([...images, imgUrl]);
    }

    return (
        <>
            <p>Cat Component</p>
            <hr />
            <Image images={images} showImage={showImage} />
        </>
    );
}
export default CatComponent;