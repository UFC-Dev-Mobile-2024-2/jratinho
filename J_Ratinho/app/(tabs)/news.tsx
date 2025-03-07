import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CardList from "../../components/CardList";
import NewsInfo from "../../components/NewsInfo";
import api from "../../services/api";

const Stack = createStackNavigator();

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Chamada à API para buscar notícias
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await api.get("/noticias?populate=*");
        console.log("Dados das notícias recebidos:", response.data);
        setNewsData(response.data.data);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack.Navigator initialRouteName="CardList">
          <Stack.Screen
            name="CardList"
            options={{
              title: "Notícias",
              headerStyle: {
                backgroundColor: "#5087ca",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
              headerTitleAlign: "center",
            }}
          >
            {(props) => (
              <CardList {...props} newsData={newsData} loading={loading} />
            )}
          </Stack.Screen>
          <Stack.Screen
            name="NewsInfo"
            component={NewsInfo}
            options={{
              title: "Notícias",
              headerStyle: {
                backgroundColor: "#5087ca",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
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
