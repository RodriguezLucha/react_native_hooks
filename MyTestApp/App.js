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

import {Header, Colors} from 'react-native/Libraries/NewAppScreen';

import {PanGestureHandler, State} from 'react-native-gesture-handler';

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

let handleStateChange = ({nativeEvent}) => {
  if (nativeEvent.state === State.ACTIVE) {
    console.log('Active');
  }
  if (nativeEvent.state === State.END) {
    translateX.setValue(0);
    translateY.setValue(0);
  }
  return;
};

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
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <AnimatedView style={circleProps} onPress={onPress} />
            <View style={[styles.container]}>
              <PanGestureHandler
                onGestureEvent={handleGesture}
                onHandlerStateChange={handleStateChange}>
                <Animated.View style={[styles.circle, circleTransformStyle]} />
              </PanGestureHandler>
            </View>
          </View>
        </View>
      </ScrollView>
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
