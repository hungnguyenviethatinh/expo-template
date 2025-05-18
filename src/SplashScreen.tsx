import React, { ReactNode, useEffect, useState } from 'react';
import * as ExpoFont from 'expo-font';
import * as ExpoSplashScreen from 'expo-splash-screen';

interface SplashScreenProps {
  children: ReactNode;
}

// Keep the splash screen visible while we fetch resources.
ExpoSplashScreen.preventAutoHideAsync();

const SplashScreen = ({ children }: SplashScreenProps) => {
  const [isAppReady, setIsAppReady] = useState(false);

  const [isFontLoaded] = ExpoFont.useFonts({
    'SpaceMono-Regular': require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    const initAppAsync = async () => {
      try {
        // Initialize app asynchronously.
        await new Promise(resolve => setTimeout(resolve, 3000));
      } catch (error: unknown) {
        if (error instanceof Error) {
          return console.log(error.message);
        }

        return console.log('An unknown error occurred.');
      } finally {
        setIsAppReady(true);
      }
    };

    initAppAsync();
  }, []);

  useEffect(() => {
    if (isAppReady && isFontLoaded) {
      ExpoSplashScreen.hideAsync();
    }
  }, [isAppReady, isFontLoaded]);

  return <React.Fragment>{isAppReady && isFontLoaded && children}</React.Fragment>;
};

export { SplashScreen };
export default SplashScreen;
