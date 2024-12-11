"use client";
import Image from "next/image";
import linkedin from "../../../public/linkedIn.avif";
import github from "../../../public/github.avif";
import myPhoto from "../../../public/myPhoto.avif";
import { Fragment, type ReactNode, useState } from "react";
import { Modal } from "../Modal";

export const PhotoBlock = () => {
  const [show, setShow] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalChildren, setModalChildren] = useState<ReactNode>(false);
  const phoneInfo = "+ 375 (29) 601 - 71 - 88";
  const mailInfo = (
    <a href="mailto:athamethedarkset@gmail.com">athamethedarkset@gmail.com</a>
  );
  const linkedinInfo = (
    <a
      href="https://www.linkedin.com/in/olga-k-aa9054220"
      className="text-sky-900 hover:text-sky-700"
    >
      My LinkedIn Link
    </a>
  );
  const githubInfo = (
    <a
      href="https://github.com/HelgaAthame"
      className="cursor-pointer underline text-sky-900 hover:text-sky-700"
    >
      My GitHub Link
    </a>
  );
  return (
    <Fragment>
      <div className="relative">
        <section
          onClick={() => {
            if (!show) setShow(true);
          }}
          className="info__wrapper w-40 h-40 rounded-full duration-500 p-2 border-solid
      border-4 border-sky-200 hover:margin-neg-3rem hover:shadow-glow
      hover:width-12rem hover:height-12rem group
      cursor-pointer"
        >
          <div
            className="info__photo max-w-full max-h-full bg-red-200 overflow-hidden 
        rounded-full grayscale-[50%] opacity-40 contrast-200 group-hover:filter-none duration-500
        hover:width-12rem hover:height-12rem hover:bg-size-12rem
        group-hover:opacity-80"
          >
            <Image
              src={myPhoto.src}
              alt={"my photo"}
              width={160}
              height={160}
            />
          </div>
        </section>
        {show && (
          <Fragment>
            <div
              data-tooltip="+375(29)601-71-88"
              className="text-4xl w-16 h-16 border-sky-200 flex items-center justify-center
            rounded-full border-4 border-solid with-tooltip phone-icon absolute 
            -top-6 -left-14 overflow-hidden hover:shadow-glow duration-500"
              onClick={() => {
                setModalChildren(phoneInfo);
                setShowModal((prev) => !prev);
              }}
            >
              📞
            </div>
            <div
              data-tooltip="athamethedarkset@gmail.com"
              className="text-4xl w-16 h-16 border-sky-200 flex items-center justify-center 
            rounded-full border-4 border-solid -top-6 -right-14 absolute with-tooltip
             main-icon overflow-hidden hover:shadow-glow text-gray-100 duration-500"
              onClick={() => {
                setModalChildren(mailInfo);
                setShowModal((prev) => !prev);
              }}
            >
              ✉
            </div>
            <div
              className="text-4xl w-16 h-16 border-sky-200 flex items-center justify-center 
            rounded-full border-4 border-solid -bottom-6 -right-14 absolute linkedin-icon
             overflow-hidden hover:shadow-glow duration-500"
              onClick={() => {
                setModalChildren(linkedinInfo);
                setShowModal((prev) => !prev);
              }}
            >
              <Image
                src={linkedin.src}
                alt={"linkedin icon"}
                width={50}
                height={50}
              />
            </div>
            <div
              className="text-4xl w-16 h-16 border-sky-200 flex items-center justify-center 
            rounded-full border-4 border-solid -bottom-6 -left-14 absolute github-icon
             overflow-hidden hover:shadow-glow duration-500"
              onClick={() => {
                setModalChildren(githubInfo);
                setShowModal((prev) => !prev);
              }}
            >
              <Image
                src={github.src}
                alt={"gihub icon"}
                width={50}
                height={50}
              />
            </div>
          </Fragment>
        )}
      </div>
      <Modal show={showModal} setShow={setShowModal}>
        {modalChildren}
      </Modal>
    </Fragment>
  );
};
