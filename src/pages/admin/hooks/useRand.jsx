import { useState, useCallback } from "react";
import { getRand } from "../../../services/admin.service";

export const useRand = () => {
  const [rand, setRand] = useState(false);
  const [loadingRand, setLoadingRand] = useState(false);
  const [errorRand, setErrorRand] = useState(null);

  const fetchRand = useCallback(async () => {
    try {
      setLoadingRand(true);
      setErrorRand(null);
      const data = await getRand();
      setRand(data);
    } catch (error) {
      setErrorRand(error);
    } finally {
      setLoadingRand(false);
    }
  }, []);

  return { rand, loadingRand, errorRand, fetchRand };
};
export default useRand;
