import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {Camera} from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';

export default function componentName () {
  let [type, setType] = useState (Camera.Constants.Type.front);
  let [hasPermission, setHasPermission] = useState (null);
  let [camera, setCamera] = useState (null);

  useEffect (() => {
    (async () => {
      let {status} = await Camera.requestPermissionsAsync ();
      setHasPermission (status === 'granted');
    }) ();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === 'false') {
    return <Text>no acces to camera</Text>;
  }

  async function takePicture () {
    if (hasPermission) {
      let data = await camera.takePictureAsync (null);
      // await MediaLibrary.saveToLibraryAsync (data.uri);
      console.log (data.uri);
    }
  }

  function flipBack () {
    setType (Camera.Constants.Type.back);
  }
  function flipFront () {
    setType (Camera.Constants.Type.front);
  }

  return (
    <View style={styles.container}>
      <Text>Camera Component Page</Text>

      <View style={styles.cameraContainer}>

        <Camera
          style={styles.fixedRatio}
          type={type}
          ref={r => setCamera (r)}
        />
        <Button title={'take picture'} onPress={takePicture} />
        <Button
          color="purple"
          title={'flip back'}
          onPress={() => {
            flipBack;
          }}
        />
        <Button
          color="green"
          title={'flip front'}
          onPress={() => {
            flipFront;
          }}
        />

      </View>

    </View>
  );
}

let styles = StyleSheet.create ({
  container: {flex: 1, backgroundColor: 'silver'},
  cameraContainer: {flex: 1},
  fixedRatio: {flex: 1, aspectRatio: 1},
});
