import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const SimpleCountdown = ({ onTimeUp, initialSeconds, resetTrigger }) => {
  const [seconds, setSeconds] = useState(initialSeconds);


  useEffect(() => {
    setSeconds(initialSeconds);
  }, [resetTrigger]);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onTimeUp();
    }
  }, [seconds]);

  return (
    <View style={styles.container}>
      <View style={styles.timerBox}>
        <Text style={styles.timerText}>{seconds}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  timerBox: {
    width: 60,
    height: 60,
    borderRadius: 30, 
    borderWidth: 2,
    borderColor: '#e69830',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3, 
  },
  timerText: {
    fontSize: 36,
    color: '#e69830',
    fontWeight: 'bold',
  },
});

