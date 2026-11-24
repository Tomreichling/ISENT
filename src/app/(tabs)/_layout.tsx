import { Image } from "expo-image";
import { Tabs } from "expo-router";
import theme from "../../theme";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.inactive,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title:"Home",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/tabsIcon/home.svg")}
              style={{ width: 24, height: 24 }}
              tintColor={color as string}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="agenda"
        options={{
          title:"Agenda",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/tabsIcon/agenda.svg")}
              style={{ width: 24, height: 24 }}
              tintColor={color as string}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="grades"
        options={{
          title:"Grades",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/tabsIcon/grades.svg")}
              style={{ width: 24, height: 24 }}
              tintColor={color as string}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="life"
        options={{
          title:"Life",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/tabsIcon/life.svg")}
              style={{ width: 24, height: 24 }}
              tintColor={color as string}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title:"Profile",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../../../assets/tabsIcon/profile.svg")}
              style={{ width: 24, height: 24 }}
              tintColor={color as string}
            />
          ),
        }}
      />
    </Tabs>
  );
}
