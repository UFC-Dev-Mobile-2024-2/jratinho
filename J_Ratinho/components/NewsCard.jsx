import React from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import { Card } from "react-native-paper";

export default function NewsCard({ title, subtitle, coverImage, onPress }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <Card style={{ margin: 20, backgroundColor: '#5087ca' }} onPress={onPress}>
                    <Card.Cover
                        style={{ borderRadius: 15 }}
                        source={{ uri: coverImage }}
                    />
                    <Card.Title
                        title={title}
                        subtitle={subtitle}
                        titleStyle={{ fontSize: 18, fontWeight: 'bold' }}
                        subtitleStyle={{ fontSize: 14 }}
                    />
                </Card>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});