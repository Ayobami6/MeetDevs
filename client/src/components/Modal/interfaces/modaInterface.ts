/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch, SetStateAction } from "react";

export interface modalProps {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  info?: any;
}
