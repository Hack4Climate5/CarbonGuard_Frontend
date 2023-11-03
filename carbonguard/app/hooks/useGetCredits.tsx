import { useEffect, useState } from "react";
import { getCreditChart } from "../utilities/utils";

interface CarbonCredits {
    credit_earned : string
}

const useGetCarbonCreditsChart = () => {
    const [creditchart, setChart] = useState<CarbonCredits[]>([]);
  
    useEffect(() => {
      (async () => {
       
          const creditchart = await getCreditChart(); 
          setChart(creditchart); 
        
      })();
    }, []);
  
    return { creditchart };
  };
  
export default useGetCarbonCreditsChart;




