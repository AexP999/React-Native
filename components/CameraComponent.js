import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {Camera} from 'expo-camera';

export default function componentName () {
  let [type, setType] = useState (Camera.Constants.Type.back);
  let [hasPermission, setHasPermission] = useState (null);
  let [camer, setCamera] = useState (null);

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
      await camera.takePictureAsync (null);
      console.log (data);
    }
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
        <Button color="purple" title={'flip back'} onPress={() => {}} />
        <Button color="green" title={'flip front'} onPress={() => {}} />

      </View>

    </View>
  );
}

let styles = StyleSheet.create ({
  container: {flex: 1, backgroundColor: 'silver'},
  cameraContainer: {flex: 1},
  fixedRatio: {flex: 1, aspectRatio: 1},
});
