import { useState } from "react";
import { createClients } from "../../../services/admin.service";

const useCreateClients = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const createClientsHandler = async (clients) => {
    setLoading(true);
    setError(null);

    try {
      const data = await createClients(clients);
      setResponse(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { createClientsHandler, response, error, loading };
};

export default useCreateClients;
