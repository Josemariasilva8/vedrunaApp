import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView, Image } from "react-native";
import { auth } from "../firebase";  // Asegúrate de importar desde tu archivo de configuración
import { createUserWithEmailAndPassword } from "firebase/auth";  // Usa @react-native-firebase/auth

export default function Registrar({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nick, setNick] = useState(""); 
  const [nombre, setNombre] = useState(""); 
  const [primerApellido, setPrimerApellido] = useState(""); 
  const [segundoApellido, setSegundoApellido] = useState(""); 

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Éxito", "Cuenta creada correctamente.");
      navigation.navigate("Login"); 
    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../../../assets/formulario 1.png")} style={styles.image} />
      <Text style={styles.title}>Completar los siguientes campos:</Text>

      <TextInput
        placeholder="Introduzca su correo"
        style={styles.input}
        placeholderTextColor="#868686"
        value={email}
        onChangeText={setEmail} // Actualiza el estado
      />
      <TextInput
        placeholder="Introduzca contraseña"
        style={styles.input}
        placeholderTextColor="#868686"
        secureTextEntry
        value={password}
        onChangeText={setPassword} // Actualiza el estado
      />
      <TextInput
        placeholder="Repita contraseña"
        style={styles.input}
        placeholderTextColor="#868686"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword} // Actualiza el estado
      />
      <TextInput
        placeholder="Introduzca su nick"
        style={styles.input}
        placeholderTextColor="#868686"
        value={nick}
        onChangeText={setNick} // Actualiza el estado
      />
      <TextInput
        placeholder="Introduzca su nombre"
        style={styles.input}
        placeholderTextColor="#868686"
        value={nombre}
        onChangeText={setNombre} // Actualiza el estado
      />
      <TextInput
        placeholder="Introduzca su primer apellido"
        style={styles.input}
        placeholderTextColor="#868686"
        value={primerApellido}
        onChangeText={setPrimerApellido} // Actualiza el estado
      />
      <TextInput
        placeholder="Introduzca su segundo apellido"
        style={styles.input}
        placeholderTextColor="#868686"
        value={segundoApellido}
        onChangeText={setSegundoApellido} // Actualiza el estado
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>FINALIZAR</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 352,
    height: 352,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Asap Condensed",
    color: "#8DC73F",
    marginBottom: 10,
    textAlign: "center",
  },
  input: {
    width: 334,
    backgroundColor: "#121212",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    color: "#DFDFDF",
    borderBottomWidth: 1.5,
    borderBottomColor: "#FFFFFF",
  },
  button: {
    marginTop: 20,
    borderWidth: 2,
    borderColor: "#8DC73F",
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: "center",
  },
  buttonText: {
    color: "#DFDFDF",
    fontSize: 16, 
  },
});
