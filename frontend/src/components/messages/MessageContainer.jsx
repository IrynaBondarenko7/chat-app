import { useEffect } from "react";
import MessageInput from "./MessageInput.jsx";
import Messages from "./Messages.jsx";
import NoChatSelected from "./NoChatSelected.jsx";
import useConversation from "../../zustand-store/useConversation.js";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="w-full flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-600 px-4 py-2 mb-2">
            <span className="label-text mr-1 text-gray-300">To: </span>
            <span className="text-gray-400 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;
