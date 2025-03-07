import { BsMenuUp } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { Button, Dialog, DialogPanel } from "@headlessui/react";
import { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import useConversation from "../../zustand-store/useConversation";

const Burger = () => {
  let [isOpen, setIsOpen] = useState(false);
  const { newMessagesCount } = useConversation();

  const [totalAmountOfNewMessages, setTotalAmountOfNewMessages] = useState(0);

  useEffect(() => {
    let total = 0;
    for (let key in newMessagesCount) {
      if (key) total += newMessagesCount[key];
    }

    setTotalAmountOfNewMessages(total);
  }, [newMessagesCount]);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  return (
    <div className="text-white p-2 border-r border-slate-500">
      <button onClick={open} className="relative">
        <BsMenuUp className="text-3xl md:text-6xl text-center" />
        {totalAmountOfNewMessages > 0 && (
          <div className="badge badge-sm badge-success absolute top-0 left-5">
            {totalAmountOfNewMessages}
          </div>
        )}
      </button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex h-full  justify-items-start">
            <DialogPanel
              transition
              className="h-full md:h-[550px] w-[80%] max-w-md rounded-xl bg-white/5 p-3 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 overflow-y-scroll"
            >
              <div className="flex justify-between">
                <SearchInput />
                <Button
                  className="inline-flex items-center gap-2 rounded-md  py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={close}
                >
                  <IoMdClose />
                </Button>
              </div>
              <div className="divider px-3"></div>
              <Conversations closeBurger={close} />
              <LogoutButton />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Burger;
