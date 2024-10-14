"use client";
import React, { useState } from "react";
import styles from "./video.module.scss";
import { Modal } from "react-bootstrap";
import Image from "next/image";
import VideoPoster from "../../assets/image/png/video-banner.png";
import SYContainer from "../../shared/SYContainer";
import SYButton from "../../shared/SYButton";
import { CloseIcon, PlayIcon } from "../../shared/icon";

const Video = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className={styles.videoMain}>
      <SYContainer>
        <div className={styles.videoPosterWrapper}>
          <Image
            src={VideoPoster}
            height="auto"
            width="100%"
            alt="video Poster"
          />
          <SYButton
            variant="white"
            hideArrow
            onClick={handleShow}
            className={styles.playBtn}
          >
            <PlayIcon />
          </SYButton>
        </div>
      </SYContainer>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <SYButton
            hideArrow
            variant="white"
            className="modal-close-btn"
            onClick={handleClose}
          >
            <CloseIcon />
          </SYButton>
        </Modal.Header>
        <video
          autoPlay
          loop
          width="100%"
          height="100%"
          className={styles.video}
        >
          <source src="assets/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Modal>
    </div>
  );
};

export default Video;
