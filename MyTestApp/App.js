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

const App: () => React$Node = () => {
  const [state, toggle] = useState(true);
  const [state2, toggle2] = useState(true);

  const [{xy}, set] = useSpring(() => ({xy: [50, 50]}));
  const [number, setNumber] = useState(50);

  const props = useSpring({number: state ? 0 : 100});

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
  let circleProps2 = useSpring({
    width: state2 ? 200 : 100,
    height: state2 ? 200 : 100,
    backgroundColor: state2 ? 'green' : 'blue',
    borderRadius: state2 ? 70 : 100,
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

  // let secondCircleProps = useSpring({
  //   width: 100,
  //   height: 100,
  //   backgroundColor: 'red',
  //   borderRadius: 50,
  //   transform: [{translateY: state ? 50 : 200}],
  // });

  function activateLasers() {
    setNumber(100);
    return;
  }

  const onPress = () => {
    toggle(!state);
  };
  const onPress2 = () => {
    toggle2(!state2);
  };

  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <AnimatedView style={circleProps} onPress={onPress} />
            <View style={[styles.container]} />
            <AnimatedView style={circleProps2} onPress={onPress2} />
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
});

export default App;
