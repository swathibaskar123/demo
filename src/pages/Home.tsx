import NavigationBar from "../components/NavigationBar";
import NotificationPanel from "../components/NotificationPanel";

import "../styles/layout.css";
import Banner from "../components/Banner";
import FetchAllProduct from "../components/FetchAllProduct";
import { IAllProductProps } from "../interface/IProductProps";

type Props = {
  product: IAllProductProps;
};

const Home: React.FC = () => (
  <div>
    <div>
      <NavigationBar />
    </div>
    <div>
      <NotificationPanel />
    </div>
    <div>
      <Banner />
    </div>
    <div
      className="d-flex align-content-center flex-wrap"
      style={{ marginLeft: "80px" }}
    >
      <FetchAllProduct />
    </div>
  </div>
);

export default Home;
