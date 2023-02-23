import * as React from 'react';
import { View, StyleSheet,Image, Linking } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen'
//import * as WebBrowser from 'expo-web-browser';
import Button from './Button';





function ArtInstitute({ navigation }) {
  const handleButtonPress = () => {
    Linking.openURL('https://www.artic.edu/')}
  return (
    <View style={styles.pages}>
      <Image style = {styles.image} source={require('./assets/art.png')} />
      <Button info style={styles.button} onPress = {handleButtonPress}>
          More Information
          
        </Button>
    </View>
  );
}

function MagnificentMile({ navigation }) {
  const handleButtonPress = () => {
    Linking.openURL('https://www.themagnificentmile.com/')
}
  return (
    <View style={styles.pages}>
      <Image style = {styles.image} source={require('./assets/mile.png')} />
      <Button info style={styles.button} onPress = {handleButtonPress}>
          More Information  
        </Button>
    </View>
  );
}

function NavyPier({ navigation }) { 
  const handleButtonPress = () => {
    Linking.openURL('https://navypier.org/')
}
  return (
    <View style={styles.pages}>
      <Image style = {styles.image} source={require('./assets/pier.png')} />
      <Button info style={styles.button} onPress = {handleButtonPress}>
          More Information
        </Button>
    </View>
  );
}

function WaterTower({ navigation }) { 
  const handleButtonPress = () => {
    Linking.openURL('https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html')
}
  return (
    <View style={styles.pages}>
      <Image style = {styles.image} source={require('./assets/water.png')} />
      <Button info style={styles.button} onPress = {handleButtonPress}>
          More Information
        </Button>
    </View>
  );
}

function WillisTower({ navigation }) {
  const handleButtonPress = () => {
    Linking.openURL('https://www.willistower.com/')
}
  return (
    <View style={styles.pages}>
      <Image style = {styles.image} source={require('./assets/willis.png')} />
      <Button info style={styles.button} onPress = {handleButtonPress}>
          More Information
        </Button>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Art Institute of Chicago" component={ArtInstitute} />
        <Drawer.Screen name="Magnificent Mile" component={MagnificentMile} />
        <Drawer.Screen name="Navy Pier" component={NavyPier} />
        <Drawer.Screen name="Water Tower" component={WaterTower} />
        <Drawer.Screen name="Willis Tower" component={WillisTower} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 480,
  }
  ,pages:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
  ,button: {
    margin: 10,
  }
});