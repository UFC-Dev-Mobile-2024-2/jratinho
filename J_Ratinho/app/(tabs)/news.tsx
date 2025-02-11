import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import NewsCard from '../../components/NewsCard';
import CardList from '../../components/CardList'
import { PaperProvider } from "react-native-paper";

const News = () => {
    return (
        <PaperProvider>
            <SafeAreaProvider>
                <SafeAreaView style={{flex:1}}>
                    <h1>Noticias</h1>
                    <CardList />
                </SafeAreaView>
            </SafeAreaProvider>
        </PaperProvider>
    );
};

export default News;