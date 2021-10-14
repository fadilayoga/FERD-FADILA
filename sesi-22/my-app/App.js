import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext, createContext } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Button, Switch } from 'react-native';

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
}

const UserContext = createContext()
const ThemeContext = createContext()

function List() {
  const users = useContext(UserContext)
  const theme = useContext(ThemeContext)
  return (
    <ScrollView style={[styles.scroll, { backgroundColor: theme.background }]}>
      {
        users.map((user, idx) => (
          <TouchableOpacity>
            <View style={styles.box} key={idx}>
              <Image
                style={styles.img}
                source={{
                  uri: `${user.picture.thumbnail}`
                }} />
              <View style={styles.desc}>
                <Text style={styles.title}>{`${user.name.first} ${user.name.last}`}</Text>
                <Text style={styles.text}>{`${user.location.street.number} ${user.location.street.name}, ${user.location.city}, ${user.location.state}`}</Text>
                <Text style={[styles.email, styles.text]}>{user.email}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
      }
    </ScrollView>
  )
}

export default function App() {
  const [users, setUsers] = useState([])
  const [theme, setTheme] = useState(themes.dark)
  const [filter, setFilter] = useState([])
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState)
    setTheme(theme === themes.light ? themes.dark : themes.light)
  };

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results)
        setFilter(data.results)
      })
  }, [])

  const setfilter = (gender) => {
    let filter = []
    if (gender === "male") {
      users.map(user => {
        if (user.gender === gender) {
          filter.push(user)
        }
      })
    } else if (gender === "female") {
      users.map(user => {
        if (user.gender === gender) {
          filter.push(user)
        }
      })
    } else {
      users.map(user => {
        filter.push(user)
      })
    }
    setFilter(filter)
  }

  return (
    <UserContext.Provider value={filter}>
      <ThemeContext.Provider value={theme}>
        <View style={styles.container}>
          <View style={[styles.header, { backgroundColor: theme.background }]}>
            <Text style={[styles.users, { color: theme.foreground }]}>Users</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <View style={[styles.listbutton, { backgroundColor: theme.background }]}>
            <View style={styles.button}>
              <Button
                onPress={() => setfilter("male")}
                title="male"
                color="#236893"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
            <View style={styles.button}>
              <Button
                onPress={() => setfilter("female")}
                title="female"
                color="#236893"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
            <View style={styles.button}>
              <Button
                onPress={() => setfilter("all")}
                title="all"
                color="#236893"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View>
          <List />
          <StatusBar style="auto" />
        </View >
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  desc: {
    marginStart: 10,
    height: 90,
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 15
  },
  email: {
    color: 'coral'
  },
  container: {
    flex: 1,
    marginTop: 25
  },
  scroll: {
    backgroundColor: 'white',
    padding: 10,
    paddingTop: 0

  },
  box: {
    backgroundColor: '#D9DAD6',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 5
  },
  users: {
    padding: 10,
    fontSize: 25,
    fontWeight: "bold"
  },
  listbutton: {
    flexDirection: "row",
    paddingBottom: 5,
    paddingTop: 5
  },
  button: {
    flex: 4,
    padding: 5,
  }
});
