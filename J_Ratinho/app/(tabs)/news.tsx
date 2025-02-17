import React from "react";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import CardList from "../../components/CardList";
import NewsInfo from "../../components/NewsInfo";
import { Title } from "react-native-paper";

const Stack = createStackNavigator();

const News = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>
                <Stack.Navigator initialRouteName="CardList">
                    <Stack.Screen name="CardList" component={CardList} options={{
                        title: "Notícias",
                        headerStyle: {
                            backgroundColor: "#5087ca", // Cor de fundo do cabeçalho
                        },
                        headerTintColor: "#fff", // Cor do texto do cabeçalho
                        headerTitleStyle: {
                            fontWeight: "bold", // Estilo do título
                        },
                        headerTitleAlign: "center",
                    }}
                    />
                    <Stack.Screen name="NewsInfo" component={NewsInfo} options={{
                        title: "Notícias",
                        headerStyle: {
                            backgroundColor: "#5087ca", // Cor de fundo do cabeçalho
                        },
                        headerTintColor: "#fff", // Cor do texto do cabeçalho
                        headerTitleStyle: {
                            fontWeight: "bold", // Estilo do título
                        },
                        headerTitleAlign: "center",
                    }}
                        
                    />
                </Stack.Navigator>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

export default News;