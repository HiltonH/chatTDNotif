import PushNotification from 'react-native-push-notification'

PushNotification.configure({
    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
      console.log('LOCAL NOTIFICATION ==>', notification)
    },
  popInitialNotification: true,
    requestPermissions: true
  })

  export const LocalNotification = () => {
    PushNotification.localNotification({
      autoCancel: true,
      bigText:
        'Hailo Guys, Welcome to My Youtube Channel!',
      subText: 'Local Notification Demo',
      title: 'Chat 999+',
      message: 'Click to Show Details',
      vibrate: true,
      vibration: 300,
      playSound: true,
      soundName: 'default',
      actions: '["Yes", "No"]'
    })
  }