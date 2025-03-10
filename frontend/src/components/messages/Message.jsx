import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand-store/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const formattedTime = extractTime(message.createdAt);
  const messageFromMe = message.senderId === authUser._id;
  const chatClassName = messageFromMe ? "chat-end" : "chat-start";
  const profilePic = messageFromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = messageFromMe ? "bg-green-900" : "bg-green-700";
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="user avatar" />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2 break-words`}
      >
        {message.message}
      </div>
      <div className="chat-footer opacity-70 text-xs flex gap-1 items-center text-white mt-1">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
