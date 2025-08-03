import ListContainerObject from '@/components/List/ListContainerObject'
import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function exercise3() {
  return (
    <View style={styles.container}>
      <ListContainerObject />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,      
    }
})