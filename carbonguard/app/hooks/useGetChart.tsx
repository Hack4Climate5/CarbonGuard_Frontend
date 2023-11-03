import { useEffect, useState } from "react";
import { getChart } from "../utilities/utils";

interface CarbonLimit {
    emission_limit : number
    duration : number
       
}

const useGetChart = () => {
    const [chartLimit, setChart] = useState<CarbonLimit[]>([]);
  
    useEffect(() => {
      (async () => {
   
          const limitcharts = await getChart(); 
          setChart(limitcharts); 
       
      })();
    }, []);
  
    return { chartLimit };
  };
  
export default useGetChart;




