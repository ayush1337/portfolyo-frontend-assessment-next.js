'use client';
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import { Skeleton } from './Skeleton';

export const PortfolioContext = createContext(undefined);

export const PortfolioWrapper = ({ children }) => {
  const [portfolioData, setPortfolioData] = useState({
    success: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const USER_ID = '65b3a22c01d900e96c4219ae';
  const BASE_URL = `https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${USER_ID}`;

  //fetch portfolio data & sets the state.
  const getPortfolioData = useCallback(async () => {
    try {
      setIsLoading(() => true);
      const res = await fetch(BASE_URL);
      if (!res.ok) {
        throw new Error(`Something went wrong`);
      }
      const data = await res.json();
      setPortfolioData(() => data);
    } catch (e) {
      setIsError(`Something went wrong`);
    } finally {
      setIsLoading(() => false);
    }
  }, [BASE_URL]);

  useEffect(() => {
    getPortfolioData();
  }, [getPortfolioData]);

  //renders the loading component while data fetching.
  if (isLoading) {
    return <Skeleton />;
  }

  //If any error while fetching the call.
  if (isError) {
    return (
      <div className="w-full text-center font-semibold p-4">{isError}</div>
    );
  }
  return (
    <PortfolioContext.Provider value={portfolioData}>
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioData = () => {
  return useContext(PortfolioContext);
};
