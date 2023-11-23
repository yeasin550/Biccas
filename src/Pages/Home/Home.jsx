import Banner from "../../components/Banner/Banner";
import Benifit from "../../components/Benifit/Benifit";
import ChoosePlance from "../../components/ChoosePlane/ChoosePlance";
import Features from "../../components/Features/Features";
import Support from "../../components/Support/Support";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Support/>
            <Features />
            <Benifit/>
            <ChoosePlance />
        </div>
    );
};

export default Home;