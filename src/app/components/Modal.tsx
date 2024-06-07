"use client";

import { MouseEventHandler, PropsWithChildren } from "react";

interface ModalPros extends PropsWithChildren {
  iconText: any;
}

export const Modal = ({ children, iconText }: ModalPros) => {
  return (
    <div
      className="my-5 transition-all box-border fixed bg-stone-700/50 top-0 left-0 bottom-0 right-0
    flex flex-wrap justify-center content-center z-10"
    >
      <div className="modal-box">{children}</div>
    </div>
  );
};
