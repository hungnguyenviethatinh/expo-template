import { createContext, ReactNode, useContext } from 'react';
import Toast from 'react-native-toast-message';

type ToastProviderProps = {
  children: ReactNode;
};

const toastConfig = {};

const ToastContext = createContext({});

const ToastProvider = ({ children }: ToastProviderProps) => {
  return (
    <ToastContext.Provider value={{}}>
      {children}
      <Toast config={toastConfig} />
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  return useContext(ToastContext);
};

export default ToastProvider;
