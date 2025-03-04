import useGetConversations from "../../hooks/useGetConversations";
import { getRandomEmoji } from "../../utils/emojies";
import Conversation from "./Conversation";

const Conversations = ({ closeBurger }) => {
  const { loading, conversations } = useGetConversations();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, idx) => {
        return (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastIdx={idx === conversations.length - 1}
            closeBurger={closeBurger}
          />
        );
      })}

      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;
