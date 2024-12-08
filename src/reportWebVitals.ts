import { getCLS, getFCP, getFID, getLCP, getTTFB } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: (entry: any) => void) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    getCLS(onPerfEntry);
    getFCP(onPerfEntry);
    getFID(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
};

export default reportWebVitals;