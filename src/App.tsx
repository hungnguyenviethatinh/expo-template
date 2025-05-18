import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { I18nextProvider } from './providers/I18nextProvider';
import { ToastProvider } from './providers/ToastProvider';
import { ThemeProvider } from './providers/ThemeProvider';
import { persistor, store } from './store';
import { SplashScreen } from './SplashScreen';
import { RootNavigator } from './routes';

const App = () => {
  return <RootNavigator />;
};

export default () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <I18nextProvider>
          <ThemeProvider>
            <ToastProvider>
              <SafeAreaProvider>
                <SplashScreen>
                  <App />
                </SplashScreen>
              </SafeAreaProvider>
            </ToastProvider>
          </ThemeProvider>
        </I18nextProvider>
      </PersistGate>
    </Provider>
  );
};
