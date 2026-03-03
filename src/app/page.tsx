import Home from "@/containers";
import { IBaseParams, IGetParams } from "@/interfaces/IBaseParams";

type HomePageProps = IGetParams<IBaseParams>;
const HomePage = ({ searchParams }: HomePageProps) => {
  return <Home />;
};
export default HomePage;
