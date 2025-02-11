import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import NewsCard from '../../components/NewsCard';
import CardList from '../../components/CardList'
import { PaperProvider } from "react-native-paper";
import  TopBarNews from "../../components/TopBarNews";

const News = () => {
    return (
        <PaperProvider>
            <SafeAreaProvider>
                <SafeAreaView style={{flex:1}}>
                    <TopBarNews />
                    <CardList />
                </SafeAreaView>
            </SafeAreaProvider>
        </PaperProvider>
    );
};

export default News;