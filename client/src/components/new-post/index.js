import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
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
        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="card bg-white" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5 text-center">
                    <div className="container py-8 h-100">
                        <h2 className="card-title text-black">Share with your Dead-Feed community!</h2>
                        {/* <form>
                            <div className="form-group mt-2 mx-2 text-white">
                                <input type="file" className="form-control-file" id="new-post-img-input" />
                            </div>
                        </form> */}

                        {/* <label for="new-post-img-input" class="form-label">Medium file input example</label> */}
                        <input class="form-control form-control-sm" id="new-post-img-input" type="file" />


                    </div>
                </div>
            </div>
        </div>
    );
};

export default UploadImagePage;
