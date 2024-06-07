import { useCallback } from "react";
import { useState } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);

  const sendRequest = useCallback(async (request, applayData = () => {}) => {
    try {
      setLoading(true);
      const response = await fetch(request.url, {
        method: request.method ? request.method : "GET",
        body:
          request.body && request.body instanceof FormData
            ? request.body
            : JSON.stringify(request.body),
        headers: request.headers ? request.headers : null,
      });

      const data = await response.json();
      await applayData(data);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  }, []);
  return {
    loading,
    sendRequest,
  };
};