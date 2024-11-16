import type { ReactNode } from "react";
import { ModalCross } from "../svgs/ModalCross";

interface Props {
  children: ReactNode;
  show: boolean;
  setShow: (show: boolean) => void;
}
export const Modal = ({ children, show, setShow }: Props) => (
  <div
    className={`${
      show ? "flex" : "hidden"
    } z-999 fixed h-screen w-screen backdrop-blur bg-slate-800/20
    inset-0 flex items-center justify-center p-4`}
    onClick={() => {
      setShow(false);
    }}
  >
    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
      <div className="flex justify-between items-center flex-col gap-2 font-bold">
        {children}
      </div>
      <button
        type="button"
        onClick={() => {
          setShow(false);
        }}
        className={`absolute right-2 top-2 z-9 flex
              h-7 w-7 items-center justify-center overflow-x-hidden rounded-full bg-white
               text-primary hover:bg-stroke hover:text-primary dark:bg-form-input dark:hover:bg-strokedark`}
      >
        <ModalCross />
      </button>
    </div>
  </div>
);
