import { name as appName } from './app.json';
import React, { useState, useEffect, useRef } from 'react';
import { Component } from "react";
import { ActivityIndicator, AppRegistry, Button, Text, View, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { getStatusBarHeight } from 'react-native-status-bar-height';

const headerHeight = getStatusBarHeight();
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

//test commit

const NavigationDrawerStructure = (props) => {
    //Structure for the navigatin Drawer
    const toggleDrawer = () => {
        //Props to open/close the drawer
        props.navigationProps.toggleDrawer();
    };

    return (
        <View style={{ flexDirection: 'row'}}>
            <TouchableOpacity onPress={toggleDrawer} >
                <Image
                    source={{
                        uri:
                            'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png',
                    }}
                    style={{ width: 25, height: 25, marginLeft: 5 }}
                />
                
            </TouchableOpacity>
            
        </View>
    );
};
function ScreenDynamic({ navigation, ...props }) {
    console.log('propppssss', props);
    console.log('navipropppssss', navigation);
    const refreshWebViewBut = useRef(null);
    const webv = useRef(null);
    function clickWV(){
      console.log('WV');
      webv.current.reload();
    }

    //React.useLayoutEffect(() => {
    useEffect(() => {
      console.log('routeeeeeeeeeeeeeeeeeeeeeee');
      //navigation.setOptions({ headerTitle: getHeaderTitle(route) });
      navigation.setOptions({ headerRight: () => (
      
      <TouchableOpacity ref={refreshWebViewBut} onPress={clickWV}>
                <Image
                    source=
                      {{
                        uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAIRlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAABIAAAAAQAAAEgAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAADKgAwAEAAAAAQAAADIAAAAAhvHCqAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAVlpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDYuMC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KGV7hBwAAB+NJREFUaAW9ms2rndUVh3NjErURrVXQiR+BghRLgwaJJJiB0iKUOpCC4CARLNUKamv+ACdS0JHGkRG0s9KO7ExaPyC0AUGxES2JqCFNFAc6aBVjzJfPs8/+nezznnvOee/JuVnwu2t/rL0+9l577/d9z11as4p09uzZpVb90tLS2bbep6yOPuNGDPVRPE0GoxfRv7bKnMGB0638rP6OrHrWouNUHWdAp1qZhZWdLY1UQ3PpzXh1RUGrb1J7ZMOHg9PQl2NgA7InmaWSLtX4z2jbCjaDTeBqcCnQznHwBTgMDoC35Iwvq1YdXkdbWUnq11N+GtwKPgNPIrtPOxlD2/yEorVgfTRQ3gyeAQfBSskxjjXwIVG/EnwMuuQkraHRgOcnFLQBbKX+t46lM9S/qzgJN79PV1i2Lf3KtvQKle16B/9N7fgG7ni59NfaP18gKHAvmEoa2Qj2gpa+paKTXecis1y7bY5xbEtPUXm2NhiEFP5G9UF/VrYtHADKDMC3gaMgdIKCM92Sddt10NnX2ayEbdPG0F1Ix9vgY+O1GojpPRLI1CWqwjkCH0DJyyqCvgOOLatkA+TR6MY3/TyGZ9FJBHRGPcqLM0Adk8bHeWVGaGIgNQhPCGfjMUY9V0fqQBtA7oro+j/974D3wBHwPyBdAW4Ebuwt4DIgZbzO5w4qHQv5g/PZEw9QlpLTg9qgbuqE/kVhJ7hmlgPIXAceBu+CUJtKaQtPar2ubhr77REEy+kEd0+EzPOQORzlhyj/qus8bV6U6zowt7NyZQj1u8DbQOrujUHrOVsTAxlRWqN1T+j0Rup/qQ6aTjl6zWNz1TTYC36HvLNp3fQojxHLXVrIJFV/iNwu4IV5DPwT3AwuAdFP8TwIY1mNvZQlT5lQO2NPxAydF6c8iSNT8h9uWn0CutQntXJqTU8tNGdfeNlJKo8BedKpBEG9pM4k59t2Za3D/wyk48CVd6Jig+KyFLuzA2H4MErKubHb1Uj5heqQQfQ6ZdRdx2jjEJBc3VDfQCZeiK0j7g0Vezzeo2Eo57lHpKv1IXgEFHJvpDyNV73uD8//z6rsCbjj3VNybXRhn23eW9J/B2zNuqqrVhtGAMVpuA9xUvvokKUtpxN9M/dEo7oUGZPU2qHyOehrxtykMngmeGimLHlqVeAD6g5wNjQevp9Z2I6MK9drJRg7QupnrCnlU+xu4KmlrhE/qIdcQbPmKPgjY03LoiMCI9xOG+C3AMmcTd7m0ttZZXIMj+joW0Hv2GwuYmxZbhQZtblYnvfhroIO2yb3sePvQLJvbqorErvqdzXGnp06BpQfe3VuZaIwbSMvODRqyBl8Bwc+j9D5cnSVyWB1+gSxBnkv5KmUQJLzm6p0cjYz5QNg2WTO6FSNK+hEV/T3GlUDN7Cxcd4FtA+dc/NJCSTH85FB87C9Vi8Mq/tKR8uEU3cBTrcBxdF45IcCyUCMOgHlUdy+C0oG4UQbBGXf5b1DThkEFP9W4fl/gWFWpz2ufwxeQ/VH4GPKj4+ZoXEYFeU8TucCzNH7BwfSnz01pmfRDdjKlbCe8n9Alx6sPpXrII8lOdv97lT6K88hcEOtj22y2r4aLBP8S5T/BOSRRi49NGCD6yB7JPxw7YzDUeaHN08LlzltVXTVWHzYUS1oVz9zIf/A9uyVBGCbdGDAhn+zUlsI4Nph6yoXnKw6adq/u5rLBCZLPrUd2fIwmkDS+VYd5F5wRlTkZXQ5+AWQLsQ+yQTehT3TKk8Y2o+v+6xAkR3U/Gt04CCQ8o4evr/KJPhzAxdcwnaZLPirOgLl0Mnzn20l3eGjgaQBPu0xvrynILPix/i+sUY3/G4guS9Debl7s05q0u2ceiRLZHA/SodyDIeXx+iqZOEphtGshF9b8iaZjHA1Ur53og8Irdqr7rnpmlzC/vBTEeUXgZQVaMvZx26F5dOcDl9nFZj18cGXIuV6f3xQfhKhp3wDs5/ybiA5+9kT8qTYz6tc8XWSThWVcxo+63NQCaYqnXvPYGc4lvLvgdQ6bj0r86dqb3ZaM6gsF9yfD44CKaeGZWcmM/UC5ewtU8PHiWGKLjdb6YePrCb1PUDqBhHbR+grlyB8+ZTqGkQwq7KNcigbzbrBtAdAOc1aPfSXdIEXhyu3beSkoX4nOAAkdSaFrCcIy7fV1Si+tbamlhmY/bJLLZAz1QZjPUtu/36wC8x8AkDmR+DX4B8gpNNZadvaIO6rQUzcFyOz00aGIvu8/p2lRynvqf3td2Cb8saYi+kr2vxZwcedIyDvMj4dXAd+CraAq4DkTS3avG9t/BYfXsSH9fCZr7wqHCODAdkDuyiHXIk2BWx3tdpZtG0aLSffXeX7dQolbZBjfvZqQInB5KLaRjkHAMWSWtkr1iXrBuoHPgPT4Thtm7DekpPimKTWMcq31yBWtiemRYVSg8memefHUIYvSwZkYC29RKX8mgXfACam/zSfp/ahdDg7lL00/Um5JWfUVchK5BTKKZeVsb+bmq/SdkccoDy0lbaFcgyU+yJKqZ/PPwwcZvzzIB8G87TQ756IE/C5lw3jplrff+HQ5HHwJfAkex/4zPRvTqLy6oo+ffFkypd3qv1p7kA0UY2X2cOBHMP9rQ90eCrqh59E89K0Ih0Kn1cgXWsEplNJi7Fvtd1+ZJXJu3lX3YrqCw2ka7mu2LB5UU4PFTaF7wGO6M4WQBvPzgAAAABJRU5ErkJggg=='
                    }}
                    style={{ width: 15, height: 15, marginRight: 7 }}
                />
                
            </TouchableOpacity>
      
      ) });
    }, [navigation]);

    //props.refreshWebViewBut.onclick=()=>clickWV();
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
            <WebView 
            source={{ uri: props.route.params.url || null}} 
            renderLoading={IndicatorLoadingView}
            startInLoadingState={true} ref={webv}/>
        </View>
    );
}


function ScreenStackDynamic({ navigation, ...propa }) {
    console.log('--propa--', propa);
    //console.log('navigation', navigation);
    //ref={(ref) => refreshWebViewBut = ref}
    const refreshWebViewBut = useRef(null);
    function clickWV(){
      console.log('WV');
    }
    useEffect(() => {
      //refreshWebViewBut.current.onPress=()=>clickWV();
      console.log('R--------------------------------------');
    }, [])
    //
    return (
        <Stack.Navigator initialRouteName="FirstPage">
            <Stack.Screen
                name="FirstPage"
                //component={ScreenDynamic}
                //initialParams={{ url: propa.route.params.url }}
                initialParams={propa.route.params}
                //initialParams={{refreshWebViewBut: refreshWebViewBut.current, ...propa.route.params}}
                options={{
                    title: propa.route.params.title || propa.route.params.name,//'' + JSON.stringify(propa) , //Set Header Title //Cosmopolitan / Lioton
                    headerLeft: () => (
                        <NavigationDrawerStructure navigationProps={navigation} />
                    ),
                    //headerRight: () => (
                      
                      //<Button ref={refreshWebViewBut} onPress={clickWV} title="R" color="#841584" accessibilityLabel="r"/>
                  //),
                    headerStyle: {
                        backgroundColor: propa.route.params.color || "#000000", //Set Header color
                    },
                    headerTintColor: '#fff', //Set Header text color
                    headerTitleStyle: {
                        fontWeight: 'bold', //Set Header text style
                    },
                }}
            >{props => <ScreenDynamic {...props} extraData={'someData'} />}</Stack.Screen>
        </Stack.Navigator>
    );
}

function IndicatorLoadingView() {
    return (
      <ActivityIndicator
        color="#48B7F5"
        size="large"
        style={styles.IndicatorStyle}
      />
    );
  }

//  const App: () => Node = () => { 
const App = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    console.log(data);

    useEffect(() => {
        //fetch('https://dev.nahab.info/aerovadim/expo/test.json')
        fetch('https://dev.nahab.info/sp/api/vars/list/all.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            //.then((json) => setData(json.projects.slice(0, 3)))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));

        return () => {
        };
    }, []);

    return (
        
      <NavigationContainer>
      {data.projects ? (
          <Drawer.Navigator screenOptions={{
              headerShown: false
          }}>
              {data.projects?.map((item, index) => (
                  <Drawer.Screen key={index} name={Math.random() + (item.title || item.name)} component={ScreenStackDynamic} initialParams={item} />
              ))}
          </Drawer.Navigator>
      ) : <IndicatorLoadingView/> }
  </NavigationContainer>
    )
}

/*

//simple test
<View style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#BFEFFF"
        }}>
          <Text style={{
            fontSize: 26,
            color: "#204080"
          }}>Hello Reactttt Native Appppp Clip</Text>
        </View>

<Text ref={refreshWebViewBut} style={{
                        fontSize: 22,
                        color: "#666"
                      }}>R</Text>


<Button ref={refreshWebViewBut} onPress={clickWV} title="R" color="#841584" accessibilityLabel="r"/>


*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: headerHeight,//Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    logo: {
        width: '50%',
        alignSelf: 'stretch',
    },
    IndicatorStyle: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
});



//AppRegistry.registerComponent(appName, () => App);
export default App;