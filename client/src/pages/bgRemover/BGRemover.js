import React, { useState } from "react";
import loadImage from "blueimp-load-image";
import Styles from "./RemoveBackground.module.css"

export default function BGRemover() {
   let blob = null;

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const imgUpload = (e) => {
    const img = e.target.files[0];
    var input = document.getElementById("upload");
    var infoArea = document.getElementById("upload-label");
    var fileName = input.files[0].name;
    infoArea.textContent = "File name: " + fileName;

    setImage(img);
  };

  const uploadImage = async () => {
    // dispatch(setActionStatus(false));
    setLoading(false)
    const resizedImage = await loadImage(image, {
      // resize before sending to Remove.bg for performance
      maxWidth: 1500,
      maxHeight: 1500,
      canvas: true,
    });

    resizedImage.image.toBlob(async function (inputBlob) {
      const formData = new FormData();
      formData.append("image_file", inputBlob);

      const response = await fetch("https://api.remove.bg/v1.0/removebg", {
        method: "POST",
        headers: {
          "X-Api-Key": "rx9Fu2SrdKxCdsRmrRoSFDJw",
        },
        body: formData,
      });

      if (response.status === 200) {
        setLoading(true)
      } else {
        setLoading(false)
      }

      const outputBlob = await response.blob();

      blob = URL.createObjectURL(outputBlob);
      const image = document.getElementById("imageResult");
      const down = document.getElementById("down");
      image.src = blob;
      down.href = blob;
      down.download = "save.png";
    });
  };

  return (
    <div className={Styles.container}>
      <div className="col-lg-6 mx-auto text-center">
        <div className={Styles.imgInput}>
          <input

            id="upload"
            type="file"
            onChange={imgUpload}
            className={Styles.opacityZero}
          />
          <label
            id="upload-label"
            for="upload"
            className={Styles.updloadLabel}
          >
            {/* Choose file */}
          </label>

          <div className="input-group-append">
            <label for="upload" className="btn btn-light m-0 rounded-pill px-4">
              {" "}
              <i className="fa fa-cloud-upload mr-2 text-muted"></i>
              <small className="text-uppercase font-weight-bold text-muted">
              {!image ? "Choose File" : " "}  
              </small>
            </label>
          </div>
        </div>
        <button
          className={Styles.Button}
          onClick={uploadImage}
        >
          Remove Background
        </button>
        <div>
          <div className="row py-4">
            <div className="col-lg-6 mx-auto text-center">
              <p className={Styles.text}>
                The result will be rendered inside the box below.
              </p>
              <div className={Styles.outputImgContainer}>
                {loading === false ? (
                  <div class="lds-roller mb-3">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                ) : (
                  <img
                    id="imageResult"
                    src="#"
                    alt=""
                    className={Styles.outputImg}
                  />
                )}{" "}
              </div>
              {loading ? (
                <a id="down">
                  <button className={Styles.Button}>
                    {" "}
                    <i className="fas fa-download" /> Download
                  </button>
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
