import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Animated,
} from 'react-native';

import {
  Header,
  Colors,
  ReloadInstructions,
  State,
} from 'react-native/Libraries/NewAppScreen';

import {PanGestureHandler} from 'react-native-gesture-handler';

import {useSpring, animated} from 'react-spring';

const AnimatedView = animated(TouchableOpacity);

let translateX = new Animated.Value(0);
let translateY = new Animated.Value(0);
let handleGesture = Animated.event(
  [
    {
      nativeEvent: {
        translationX: translateX,
        translationY: translateY,
      },
    },
  ],
  {useNativeDriver: true},
);

const App: () => React$Node = () => {
  const [state, toggle] = useState(true);

  let circleProps = useSpring({
    width: state ? 200 : 100,
    height: state ? 200 : 100,
    backgroundColor: state ? 'green' : 'blue',
    borderRadius: state ? 70 : 100,
    config: {
      mass: 3,
    },
    from: {
      backgroundColor: 'green',
      width: 100,
      height: 100,
      mass: 250,
    },
  });

  const onPress = () => toggle(!state);

  let circleTransformStyle = {
    transform: [
      {
        translateY: translateY,
      },
      {
        translateX: translateX,
      },
    ],
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Demo app</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>

              <AnimatedView style={circleProps} onPress={onPress} />
              <View style={[styles.container]}>
                <PanGestureHandler onGestureEvent={handleGesture}>
                  <Animated.View
                    style={[styles.circle, circleTransformStyle]}
                  />
                </PanGestureHandler>
              </View>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  circle: {
    width: 150,
    height: 150,
    backgroundColor: '#c00000',
    borderRadius: 100,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  box: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    backgroundColor: 'plum',
    margin: 10,
    zIndex: 200,
  },
});

export default App;
