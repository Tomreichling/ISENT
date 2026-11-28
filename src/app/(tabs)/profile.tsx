import { useState, useEffect } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Title from "../../components/Title";
import Card from "../../components/Card";
import { Credentials } from "../../types/user";
import theme from "../../theme";
import Login from "../../components/Login";
import { API_ENDPOINT, ProfileInformations } from "../../types/api";

export default function Profile() {
  const [infos, setInfos] = useState<ProfileInformations | null>(null);
  const [credentials, setCredentials] = useState<Credentials | null>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);

  async function load_credentials() {
    const credentials = await AsyncStorage.getItem("credentials");
    if (credentials !== null) {
      setCredentials(JSON.parse(credentials));
    }
    setCheckingAuth(false);
  }
  useEffect(() => {
    load_credentials();
  }, []);

  async function load_info() {
    if (!credentials) {
      return;
    }
    const response = await fetch(`${API_ENDPOINT}/personal-informations`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Token: credentials.token,
      },
    });
    if (!response.ok) {
      setCredentials(null);
      await AsyncStorage.removeItem("credentials");
      return;
    }
    const data = await response.json();
    setInfos(data);
  }
  useEffect(() => {
    load_info();
  }, [credentials]);

  async function save_credentials(data: Credentials) {
    setCredentials(data);
    await AsyncStorage.setItem("credentials", JSON.stringify(data));
  }

  if (checkingAuth) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  if (!credentials) {
    return <Login callback={(data) => save_credentials(data)} />;
  }

  if (infos == null) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  return (
    <View style={styles.container}>
      <Title label={`Hello, ${infos.firstName}`} />
      <Card
        topLeft={`Your informations`}
        topRight={`ISEN`}
        label={`${infos.name} ${infos.firstName}`}
        bottomLeft={`Sex : ${infos.sex}`}
        bottomRight={`Birth : ${infos.birthDate} at ${infos.birthPlace}`}
      />
      <View style={styles.buttons}>
        <Pressable
          style={styles.secondaryButton}
          onPress={async () => {
            setCredentials(null);
            await AsyncStorage.removeItem("credentials");
          }}
        >
          <Text style={styles.secondaryButtonText}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  buttons: {
    flex: 1,
    justifyContent: "flex-end",
  },
  secondaryButton: {
    borderRadius: 8,
    borderColor: theme.primary,
    borderWidth: 1,
    paddingVertical: 14,
    alignItems: "center",
    marginTop: 4,
  },
  secondaryButtonText: {
    color: theme.primary,
  },
});
