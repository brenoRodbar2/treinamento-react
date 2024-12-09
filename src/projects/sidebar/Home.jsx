import { useGlobalContext } from "./context";

const Home = () => {
  const { setIsSidebarOpen, setIsModalOpen, isModalOpen, isSidebarOpen } =
    useGlobalContext();
  
  return (
    <div>
      <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} type="button">Sidebar</button>
      <button onClick={() => setIsModalOpen(!isModalOpen)} type="button">Modal</button>
    </div>
  );
};

export default Home;
