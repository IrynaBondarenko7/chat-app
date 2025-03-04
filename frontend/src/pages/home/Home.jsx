import { useMediaQuery } from "react-responsive";

import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import Burger from "../../components/sidebar/Burger";

const Home = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  return (
    <>
      <div className="flex w-full xl:w-[900px] h-full md:h-[550px] md:rounded-lg overflow-hidden bg-gray-400/0 bg-clip-padding backdrop-blur-lg">
        {isMobile && <Burger />}
        {isTablet && <Sidebar />}
        <MessageContainer />
      </div>
    </>
  );
};

export default Home;
