import { getVehicles } from "../utilities/utils";
import { useEffect, useState } from "react";

export interface VehicleLists {
    chassis_number: string,
    emission_value: string,
    engine_type: string,
    id: string,
    vehicle_model: string,
    year: string,
};

function UsegetVehicles() {
    const [vehicles, setVehicles] = useState<VehicleLists[]>([]);

    useEffect(() => {
        const fetchVehicles = (async () => {
            const vehicles = await getVehicles();
            setVehicles(vehicles);
        })
        fetchVehicles();

    }, [])
    return vehicles
}
export default UsegetVehicles