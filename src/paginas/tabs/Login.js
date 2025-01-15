// src/paginas/tabs/Login.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
import { auth } from "../firebase"; 
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigation.navigate("Tab");
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/ic_logo 1.png")} style={styles.logo} />
      <Text style={styles.title}>VEDRUNA EDUCACIÓN</Text>

      <TextInput
        placeholder="Correo electrónico"
        style={styles.input}
        placeholderTextColor="#868686"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        placeholderTextColor="#868686"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>¿Olvidaste la contraseña?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.footer} onPress={() => navigation.navigate("Registrar")}>
        <Text style={styles.footerText}>¿No tienes cuenta? Crear cuenta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 48,
    fontFamily: "Asap Condensed",
    fontWeight: "700",
    color: "#DFDFDF",
    textAlign: "center",
    marginVertical: 20,
  },
  input: {
    backgroundColor: "#323639",
    borderRadius: 9,
    padding: 10,
    marginVertical: 12,
    color: "#DFDFDF",
  },
  forgotPassword: {
    color: "#8DC73F",
    textAlign: "right",
    marginTop: -5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#8DC73F",
    borderRadius: 9,
    paddingVertical: 15,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#121212",
    fontWeight: "bold",
    fontSize: 16,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
  },
  footerText: {
    color: "#8DC73F",
    textAlign: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 5,
    marginTop: 5,
    alignSelf: "center",
  },
});
