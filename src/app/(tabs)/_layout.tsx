import { Image } from "expo-image";
import { Tabs } from "expo-router";


export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: "#B82D3E",
      tabBarInactiveTintColor: "#8E8E93",
    }}>
      <Tabs.Screen name="index" options={{ title: "Accueil" , tabBarIcon: ({ focused }) => (
            <Image
              source={focused
                ? require("../../../assets/tabsIcon/home2.svg")
                : require("../../../assets/tabsIcon/home1.svg")}
              style={{ width: 24, height: 24 }}
            />
        ),}}/>
        <Tabs.Screen name="agenda" options={{ title: "Agenda",  tabBarIcon: ({ focused }) => (
            <Image
              source={focused
                ? require("../../../assets/tabsIcon/agenda2.svg")
                : require("../../../assets/tabsIcon/agenda1.svg")}
              style={{ width: 24, height: 24 }}
            />
        ),}}/>
        <Tabs.Screen name="notes" options={{ title: "Notes", tabBarIcon: ({ focused }) => (
            <Image
              source={focused
                ? require("../../../assets/tabsIcon/notes2.svg")
                : require("../../../assets/tabsIcon/notes1.svg")}
              style={{ width: 24, height: 24 }}
            />
        ),}}/>
        <Tabs.Screen name="vie" options={{ title: "La vie",  tabBarIcon: ({ focused }) => (
            <Image
              source={focused
                ? require("../../../assets/tabsIcon/vie2.svg")
                : require("../../../assets/tabsIcon/vie1.svg")}
              style={{ width: 24, height: 24 }}
            />
        ),}}/>
        <Tabs.Screen name="profil" options={{ title: "Profil",  tabBarIcon: ({ focused }) => (
            <Image
              source={focused
                ? require("../../../assets/tabsIcon/profil2.svg")
                : require("../../../assets/tabsIcon/profil1.svg")}
              style={{ width: 24, height: 24 }}
            />
        ),}}/>
    </Tabs>
  );
}