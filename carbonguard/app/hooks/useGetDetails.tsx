import { useEffect, useState } from "react";
import { getDetails } from "../utilities/utils";

export interface UserData {
  id: number;
  description: string;
  home_image: string;
  image: string;
  username: string;
  email: string;
  phone_number: string;
  password: string;
  location: string;
}

export const useGetDetails = (id: number ) => {
  const [details, setDetails] = useState<UserData>();
  useEffect(() => {
    (async () => {
        const detail = await getDetails(id);
        setDetails(detail);

    })();
  }, [id]);
  return { details };
};

export default useGetDetails;