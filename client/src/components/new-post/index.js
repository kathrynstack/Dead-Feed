import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import uploadPic from "./upload.svg";

// const imagekit = new ImageKit({
//     publicKey: 'public_lkSMFMncXOSQS59s2TlNPGgmorU=',
//     urlEndpoint: 'https://ik.imagekit.io/lscjf1cpc',
//     authenticationEndpoint: `${document.location.origin}/signature`
// });

// export async function upload_file(file, file_name) {
//     return imagekit.upload({
//         file : file,
//         fileName : file_name
//     }).then(response => {
//         return response;
//     }).catch(error => {
//         console.log(error);
//         alert("Failed to upload file!");
//     });
// };


const UploadImagePage = () => {
    const [selectedImage, setSelectedImage] = useState();

    const handleImageChange = (event) => {
        setSelectedImage(event.target.files[0]);
    };

    const handleUpload = () => {
        // Perform the image upload logic here
        // You can use selectedImage to access the uploaded image data
    };


    return (
        <div className="container py-5 h-100 " >
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5 " >
                    <div className="card bg-white"  style={{ borderRadius: "1rem"}}>
                        <div className="card-body p-5 text-center ">
                            <div className="container py-8 h-100 ">
                                <h2 className="card-title text-black ">Share with your Dead-Feed community!</h2>
                                <div className="image-upload">
                                    <input class="form-control form-control-sm" id="new-post-img-input" type="file" />
                                    <label for="new-post-img-input"><img id="upload-img" src={uploadPic}/></label>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadImagePage;
