import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Button } from "react-native";


export default function Main() {
    const [aposta, setAposta] = useState('')
   const [ numeroCerto, setNumeroCerto] = useState(' ')
    
   function gerarNumero () {
        const numero = Math.ceil(Math.random() * 50)
        setNumeroCerto(numero)
        console.log(numero);
        
    }

    function verificarNumero() {
        if(aposta == numeroCerto){
            alert('Parabens voce acertou!')
        }else{
            alert('Errou')
        }
    }

    return (
        <View style={style.container}>
            <Text style={style.txtNumber}>Adivinhe o Número!</Text>
            <Text>DICA: De 1 a 50!</Text>
            <TextInput
                style={style.inputNumber}
                keyboardType="numeric"
                placeholder="Digite o Número aqui"
                value={aposta}
                onChangeText={setAposta}
            />
            <TouchableOpacity
             style={style.botao}
            title="Gerar Numero"
            onPress={gerarNumero}
            >
                <Text style={style.txtBotao}>Gerar Número</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={style.botaoApostar}
                onPress={verificarNumero}
                >
                <Text style={style.txtBotao}>Apostar Número</Text>
            </TouchableOpacity>
        </View>

    )
}


const style = StyleSheet.create({
    container: {
        height: "80%",
        justifyContent: "center",
        alignItems: 'center',
    },
    inputNumber: {
        width: "70%",
        height: 50,
        borderWidth: 2,
        borderRadius: 5,
        backgroundColor: "#DCDCDC",
        paddingLeft: 15,
    },
    txtNumber: {
        fontSize: 30,
        fontWeight: "bold",
    },
    botao: {
        width: "70%",
        height: 50,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#008080",
        justifyContent: "center"
    },
    botaoApostar:{
    width: "70%",
        height: 50,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#FFD700",
        justifyContent: "center"
    },
    txtBotao: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
    },
});
