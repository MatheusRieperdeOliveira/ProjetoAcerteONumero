import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native"

function BarraIncial() {
    return (
        <View style={styles.barraMain}>
            <Text style={styles.textTitulo}>Mathz | System</Text>
        </View>
    );
}

/* --------------------------- ESTILIZAÇÃO ---------------------------*/
const styles = StyleSheet.create({
    barraMain: {
        width: "100%",
        height: 70,
        backgroundColor: "#008080",
        alignItems: 'center',
        justifyContent: 'flex-end',
        borderBottomWidth: 1,
      
      
    },
    textTitulo: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#fff",
        marginLeft: 10,
    },

})












export default BarraIncial;