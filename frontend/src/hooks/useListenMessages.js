import { useEffect } from "react";
import { useSocketContext } from "../context/SocketContext.jsx";
import useConversation from "../zustand-store/useConversation.js";
import { playNotificationSound } from "../utils/playNotificationSound.js";

const useListenMessages = () => {
  const { socket } = useSocketContext();
  const {
    messages,
    setMessages,
    setNewMessagesCount,
    newMessagesCount,
    selectedConversation,
  } = useConversation();

  useEffect(() => {
    if (!socket) return;

    socket?.on("newMessage", (newMessage) => {
      newMessage.shouldShake = true;

      if (document.visibilityState === "visible") {
        playNotificationSound();
      }

      if (selectedConversation) {
        const updateMessagesForCurrentUsers =
          selectedConversation._id === newMessage.senderId;

        if (updateMessagesForCurrentUsers) {
          setMessages([...messages, newMessage]);
        }
      }

      setNewMessagesCount(newMessage.senderId);
    });

    return () => socket?.off("newMessage");
  }, [
    socket,
    messages,
    setMessages,
    setNewMessagesCount,
    newMessagesCount,
    selectedConversation,
  ]);
};

export default useListenMessages;
