import { useMediaQuery } from "react-responsive";
import { useSocketContext } from "../../context/SocketContext.jsx";
import useConversation from "../../zustand-store/useConversation.js";

const Conversation = ({ conversation, emoji, lastIdx, closeBurger }) => {
  const { selectedConversation, setSelectedConversation, newMessagesCount } =
    useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const shouldShowBadge =
    selectedConversation?._id !== conversation._id &&
    newMessagesCount[conversation._id] > 0;

  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-green-800 rounded p-2 py-1 cursor-pointer
				${isSelected ? "bg-green-800" : ""}
			`}
        onClick={() => {
          if (isMobile) {
            closeBurger();
          }
          setSelectedConversation(conversation);
        }}
      >
        <div className={`avatar ${isOnline ? "avatar-online" : ""}`}>
          <div className="w-12 rounded-full">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>

            {shouldShowBadge ? (
              <div className="badge badge-sm badge-success">
                {newMessagesCount[conversation._id]}
              </div>
            ) : (
              <span className="text-xl">{emoji}</span>
            )}
          </div>
        </div>
      </div>

      {!lastIdx && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
