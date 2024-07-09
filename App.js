import * as SplashScreen from 'expo-splash-screen';
import React from "react";
import AppMain from "./app/app";

SplashScreen.preventAutoHideAsync().then();
export default function StickerApp() {
    return (<AppMain hideSplashScreen={SplashScreen.hideAsync}></AppMain>);
}
