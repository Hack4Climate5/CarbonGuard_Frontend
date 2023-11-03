import { useEffect, useState } from "react";
import { getEmissionChart } from "../utilities/utils";

interface CarbonEmission {
    emission_value : string
}

const useGetEmissionChart = () => {
    const [chart, setChart] = useState<CarbonEmission[]>([]);
  
    useEffect(() => {
      (async () => {
      
          const limitcharts = await getEmissionChart(); 
          setChart(limitcharts); 
      
       
      })();
    }, []);
  
    return { chart };
  };
  
export default useGetEmissionChart;




