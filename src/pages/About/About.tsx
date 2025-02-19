//UTILITIES
import { imageArray, aboutImage } from "./imageHelper";
import { useEffect, useState } from "react";

//COMPONENTS
import Image from 'react-bootstrap/Image';

//CSS
import './About.css';



const About = () => {

    const [selectedImage, setSelectedImage] = useState<aboutImage>(imageArray[0]);
    const [images, setImages] = useState<React.ReactElement[]>([]);

    useEffect(() => {
       const temp: React.ReactElement[] = imageArray.map((image, key) => {
            return (<Image 
                        className="grid-image" 
                        src={image.thumbNailURL} 
                        alt={image.imagePath} 
                        key={key}
                        onClick={() => {
                            handleImageClick({thumbNailURL: image.thumbNailURL, imagePath: image.imagePath});
                        }} 
                        rounded
                    />)
        })

        setImages(temp);

    },[]);

    const handleImageClick = (image: aboutImage) => {
        setSelectedImage(image);
    }    

    const handleClick = (src: string) => {
        window.open(src, "image");
    }

    return (
        <div className="about-container">
            <div className="image-section">
                <div className="selected-image-container">
                    <Image className="selected-image" src={selectedImage.imagePath} onClick={() => handleClick(selectedImage.imagePath)}rounded/>
                </div>
                <div className="image-grid">
                    {images}
                </div>
            </div>

            <div className="text-section">
                <div className="about">
                     <h3 className="text-header">About Me</h3>
                     <p>
                        Filler text about me but different from whats on the home page.
                     </p>
                </div>
                <div className="currentJob">
                    <h3 className="text-header">Current Job</h3>
                    <p>
                        Filler text about my current job but different from whats on the home page. 
                    </p>
                </div>
            </div>

        </div>
    )
}

export default About;