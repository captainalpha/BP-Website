import { useState } from "react";

interface ICallbacks {
  onOpen?: () => void;
  onClose?: () => void;
}

export const useDisclosure = (
  initialState: boolean,
  callBacks?: ICallbacks
): [
  boolean,
  {
    open: () => void;
    close: () => void;
    toggle: () => void;
  }
] => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const open = () => {
    setIsOpen(true);
    if (callBacks?.onOpen) callBacks.onOpen();
  };

  const close = () => {
    setIsOpen(false);
    if (callBacks?.onClose) callBacks.onClose();
  };

  const toggle = () => setIsOpen((prev) => !prev);

  return [isOpen, { open, close, toggle }];
};
