import { create } from "zustand";

const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
  newMessagesCount: {},
  setNewMessagesCount: (conversationId, reset = false) =>
    set((state) => ({
      newMessagesCount: {
        ...state.newMessagesCount,
        [conversationId]: reset
          ? 0
          : (state.newMessagesCount[conversationId] || 0) + 1,
      },
    })),
}));

export default useConversation;
