import React from 'React'
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Text
} from 'react-native'
import Colors from '../constants/Colors'

const Button = ({title, style, onPress, status}) => (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={status && status === 'loading' ? null : onPress}>
      <Text style={styles.text}>{title}</Text>
      {
        (status === 'loading')
        ? (<View style={styles.loadingIndicatorContainer}>
            <ActivityIndicator size='small' color='white' />
          </View>)
        : null
      }
    </TouchableOpacity>
)

export default Button

const styles = StyleSheet.create({
  button: {
    padding: 16,
    alignSelf: 'center',
    width: 225,
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    backgroundColor: 'transparent',
    borderRadius: 8,
    alignItems: 'center',
    margin: 16
  },
  loadingIndicatorContainer: {
    position: 'absolute',
    right: 20,
    paddingTop: 2,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15
  }
})
