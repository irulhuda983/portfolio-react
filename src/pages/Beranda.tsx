import { useIsMobile } from "@/hooks/use-mobile";
import { usePortfolioData } from "@/i18n/usePortfolioData";

import DekstopHome from "./DekstopHome";
import MobileHome from "./MobileHome";

const Home = () => {
  const isMobile = useIsMobile();
  const data = usePortfolioData();

  return (
    <>
      {isMobile ? (
        <MobileHome data={data} />
      ) : (
        <DekstopHome data={data} />
      )}
    </>
  );
};

export default Home;
