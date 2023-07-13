import React, { useState, useRef } from "react";
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import uploadPic from "./upload.svg";
import Footer from "../footer";

import { IKContext, IKImage, IKUpload } from "imagekitio-react";

const UploadImagePage = () => {
    const [formState, setFormState] = useState({
        post_title: "",
        description: "",
        new_post_img_input: "",
    });

    const [addPost] = useMutation(ADD_POST);

    const handleCreatePost = async (fileInfo) => {
        console.log("IN HANDLE");
        console.log(fileInfo);

        const mutationResponse = await addPost({
            variables: {
                title: formState.title,
                description: formState.description,
                imageID: fileInfo.fileId,
            },
        });
        console.log(mutationResponse);
    };

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormState({
            ...formState,
            [id]: value,
        });
    };

    const onSuccess = async (fileInfo) => {
        // create a new post and redirect to landing
        console.log("File uploaded");
        handleCreatePost(fileInfo);
        
    }
    const onError = async (error) => {
        console.error(error);
    }
    
    const ik_public_key = "public_qpCQuM9Hn4TLcJQohauHIRBD+B8=";
    const ik_endpoint = "https://ik.imagekit.io/lscjf1cpc";
    // const ik_auth_end_point = window.location.origin.replace(':3000/', ':3001/') + '/imagekit-auth';
    const ik_auth_end_point = "http://localhost:3001/imagekit-auth";

    const inputRef = useRef(null);
    const ikUploadRef = useRef(null);

    const titleRef = useRef({});
    const descRef = useRef({});
    // const fileRef = useRef({});

    // const ikUploadRef = useRef(null);
    return (
            <div className="container py-5 h-100 ">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
                        <div className="card bg-white" style={{ borderRadius: "1rem" }}>
                            <div className="card-body p-5 text-center ">
                                <div className="container py-8 h-100 ">
                                    <h2 className="card-title text-black ">
                                        Share with your Dead-Feed Community!
                                    </h2>
                                    <form>
                                        <div className="form">
                                            <input
                                                placeholder="Post Title"
                                                type="text"
                                                id="post_title"
                                                onChange={handleChange}
                                                required
                                                ref={titleRef}
                                            />
                                            <label className="form-label" htmlFor="post_title">
                                                Post Title
                                            </label>
                                        </div>
                                        <div className="form">
                                            <input
                                                placeholder="Description"
                                                type="text"
                                                id="description"
                                                onChange={handleChange}
                                                required
                                                ref={descRef}
                                            />
                                            <label className="form-label" htmlFor="description">
                                                Description
                                            </label>
                                        </div>

                                        {/* <div className="image-upload">
                                        <input
                                            class="form-control form-control-sm"
                                            id="new_post_img_input"
                                            type="file"
                                            onChange={handleChange}
                                            required
                                            ref={fileRef}
                                        />
                                        <label for="new_post_img_input">
                                            <img id="upload-img" src={uploadPic} />
                                        </label>
                                    </div> */}

                                        <IKContext publicKey={ik_public_key} urlEndpoint={ik_endpoint} authenticationEndpoint={ik_auth_end_point}>
                                            <IKUpload
                                                inputRef={inputRef}
                                                ref={ikUploadRef}
                                                useUniqueFileName={true}
                                                folder={"dead-feed/"}
                                                onSuccess={onSuccess}
                                                onError={onError}
                                                style={{ display: "none" }}
                                            />
                                        </IKContext>
                                        {ikUploadRef && titleRef.current.value && descRef.current.value && (
                                                <button className="PostBtn"  onClick={(event) => {event.preventDefault(); inputRef.current.click()}}>
                                                    Upload Photo & Post
                                                </button>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="footer-profile"><Footer />
                </div> */}
            </div>
    );
};

export default UploadImagePage;
