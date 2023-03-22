import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

export default function VideoPlayer(props) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: props.url,
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
    </View>
  );
}

let styles = StyleSheet.create({
    container: {
      backgroundColor:'#063852',
      color: 'red',
        flex: 1,
        padding: 10,
        paddingTop: 70,
        flexDirection: 'column'
    },
    video: {
        

    }

});
