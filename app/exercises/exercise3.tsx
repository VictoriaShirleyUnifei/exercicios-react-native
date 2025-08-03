import ListContainer from '@/components/List/ListContainer'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function exercise3() {
  return (
    <View style={styles.container}>
      <ListContainer />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,      
    }
})