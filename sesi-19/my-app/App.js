import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10')
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
  }, [])

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
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
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
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
    padding: 10
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
  }
});
