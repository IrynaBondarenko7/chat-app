import MessageContainer from "../../components/sidebar/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400/0 bg-clip-padding backdrop-blur-lg">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
