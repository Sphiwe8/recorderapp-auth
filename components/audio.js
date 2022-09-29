import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';
import { Audio } from 'expo-av';

export default function AudioRec() {
  const [recording, setRecording] = React.useState();
  const [recordings, setRecordings] = React.useState([]);
  const [message, setMessage] = React.useState('');

  

  async function startRecording() {
    try {
      const permission = await Audio.requestPermissionsAsync();

      if (permission.status === 'granted') {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: true,
          playsInSilentModeIOS: true,
        });

        const { recording } = await Audio.Recording.createAsync(
          Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
        );

        setRecording(recording);
      } else {
        setMessage('Please grant permission to app to access microphone');
      }
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    await recording.stopAndUnloadAsync();

    let updatedRecordings = [...recordings];
    const { sound, status } = await recording.createNewLoadedSoundAsync();
    updatedRecordings.push({
      sound: sound,
      duration: getDurationFormatted(status.durationMillis),
      file: recording.getURI(),
    });

    setRecordings(updatedRecordings);
  }

  function getDurationFormatted(millis) {
    const minutes = millis / 1000 / 60;
    const minutesDisplay = Math.floor(minutes);
    const seconds = Math.round((minutes - minutesDisplay) * 60);
    const secondsDisplay = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutesDisplay}:${secondsDisplay}`;


  }

  function getRecordingLines() {
    return recordings.map((recordingLine, index) => {
      return (
        <View key={index} style={styles.row}>
          <Text style={styles.fill}>
            Recording {index + 1} - {recordingLine.duration}{' '}
          </Text>

          <Button
            style={styles.button}
            onPress={() => recordingLine.sound.replayAsync()}
            title="Play"></Button>
        </View>
      );
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Start Recording...</Text>
      <Text>{message}</Text>
      <View style={styles.btn}>
        <Button
          color="#CC3636"
          title={recording ? 'Stop Recording' : 'Start Recording'}
          onPress={recording ? stopRecording : startRecording}></Button>
      </View>
      {getRecordingLines()}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#205375',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    fontSize: 20,
    color: '#fff',
    flexDirection: 'flex-start',
    width: '95%',
    height:60,
    backgroundColor:'#A2B5BB',
    justifyContent:'center',
    textAlign:'center',
    alignSelf:'center',
    borderRadius: 10,
    paddingTop:'5%',
  },

  btn: {
    alignSelf: 'center',
    flexDirection: 'flex-start',
    width: '50%',
    height: '20%',
    paddingTop: '40%',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fill: {
    flex: 1,
    margin: 16,
  },

  button: {
    margin: 16,
  },
});