import { useEffect } from "react";
import { getCatImages } from "../service/apiTest";

function CatComponent() {

    useEffect(() => {
        getCatImages();
    }, []);

    return (
        <>
            <p>Cat Component</p>
        </>
    );
}
export default CatComponent;