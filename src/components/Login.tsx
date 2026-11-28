import { useState } from "react";
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import theme from "../theme";
import { API_ENDPOINT } from "../types/api";
import { Credentials } from "../types/user";

interface LoginElement {
  callback: (data: Credentials) => void;
}

export default function Login({ callback }: LoginElement) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = async () => {
    const trimmedUser = username.trim();
    if (!trimmedUser || !password) {
      setError("Please fill your username and password");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_ENDPOINT}/token`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        redirect: "manual",
      });

      let token = await response.text();

      if (!token) {
        setError("Error getting session TOKEN");
        return;
      }

      callback({ token, username: trimmedUser });
    } catch (err) {
      setError("Network Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>

        {error && <Text style={styles.errorText}>{error}</Text>}

        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          placeholder="firstname.lastname"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="username"
          editable={!loading}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="••••••••"
          secureTextEntry
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="password"
          editable={!loading}
          onSubmitEditing={handleLogin}
          returnKeyType="done"
        />

        <Pressable
          style={({ pressed }) => [
            styles.button,
            (loading || pressed) && styles.buttonDisabled,
          ]}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Login</Text>
          )}
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: theme.white,
  },
  card: {
    backgroundColor: theme.white,
    borderRadius: 12,
    padding: 24,
    shadowColor: theme.black,
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 6,
    color: "#333",
  },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 16,
    backgroundColor: "#fafafa",
  },
  button: {
    backgroundColor: theme.primary,
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 4,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: theme.white,
    fontSize: 16,
    fontWeight: "600",
  },
  errorText: {
    color: theme.primary,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.primary,
    marginBottom: 16,
    fontSize: 14,
    textAlign: "center",
  },
});
