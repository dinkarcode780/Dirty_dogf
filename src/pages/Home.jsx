import Info from "../components/common/Info";
import AutoSlider from "../components/common/AutoSlider";
import CommitmentCard from "../components/common/CommitmentCard";
import ServicesTestimonials from "../components/common/ServicesTestimonials";

const Home = () => {
    return (
        <div>
            <AutoSlider />
             <CommitmentCard />
            <Info />
            <ServicesTestimonials />
        </div>
    );
};

export default Home;
