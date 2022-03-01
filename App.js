import { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, TextInput, Alert, Text, View, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import axios from 'axios';

import StylishAccordion from 'react-native-stylish-accordion';

import HeaderConversor from './src/Components/Header/HeaderConversor';

export default function App() {
  
  const [celsius, setCelsius] = useState(0);
	const [km, setKm] = useState(0);
	const [kmph, setKmph] = useState(0);
  const [dolar, setDolar] = useState(0);
	const [real, setReal] = useState(0);

  const [conversorTemperatura, setConversorTemperatura] = useState(false);
  const [conversorQuilometros, setConversorQuilometros] = useState(false);
  const [conversorQuilometrosPHora, setConversorQuilometrosPHora] = useState(false);
  const [conversorReal, setConversorReal] = useState(false);

  useEffect(() => {
		async function getInfo() {
				const {data} = await axios.get('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL');
				console.log(data);
				setDolar(data.USDBRL.bid);
		}
		getInfo();
	}, []);


	//Temperatura

  let fahrenheit;

  function calculateTemperature(){
    fahrenheit = (9 * celsius + 160)/5;
	  Alert.alert('Conversor',`${celsius}°c equivalem a ${fahrenheit}°f`);

    //Para o navegador
    //alert(`${celsius}°c equivalem a ${fahrenheit}°f`);
  }

	//Kilometros -> Metros

	let metros;

	function calculateKm(){ 
    metros = km*1000;

	  Alert.alert('Conversor',`${km} quilómetros equivalem a ${metros.toFixed(2)} metros`);

    //Para o navegador
    //alert(`${km} Quilómetros equivalem a ${metros} metros`);
  }

	//Quilómetros p/ hora -> Milhas p/ hora

	let milhas;

	function calculateKmph(){
	  milhas = kmph/1.609344;
	  Alert.alert('Conversor',`${kmph} Quilómetros por hora equivalem a ${milhas.toFixed(2)} milhas por hora`);

    //Para o navegador
    //alert(`${kmph} Quilómetros por hora equivalem a ${milhas} Milhas por hora`);
  }

	function calculateReal(){
    Alert.alert('Conversor',`R$${real} equivalem a $${(real/dolar).toFixed(2)}`);

    //Para o navegador
    //alert(`R$${real} equivalem a $${real/dolar}`);
  } 

			return (

          <SafeAreaView style={stylesScroll.container}>
            <ScrollView>
            <StatusBar backgroundColor="#1f8cf2" barStyle={'light-content'} translucent={true}/>
            <View style={styles.container}>
              <StylishAccordion
                open={conversorTemperatura}
                title="Conversor Temperatura"
                onPress={() => setConversorTemperatura(!conversorTemperatura)}
                titleStyle={{ fontSize: 18, fontWeight: "bold" }}
                headerStyle={[styles.accordionHeader]}
                subContainerStyle={[styles.accordionSubContainer]}
                timingTransition={150}
                iconSize={14}
              >
                <View>
                  <Text>Celsius °C para Fahrenheit °F</Text>
                  <TextInput
                    style={stylesAccordion.temperature}
                    placeholder='Informe a temperatura em Celsius'
                    keyboardType='numeric'
                    onChangeText={(celsius) => setCelsius(celsius)} />
                  <TouchableOpacity onPress={calculateTemperature}>
                    <Text style={stylesAccordion.buttonCalculate}>Calcular</Text>
                  </TouchableOpacity>

                </View>
              </StylishAccordion>
              <StylishAccordion
                open={conversorQuilometros}
                title="Conversor Quilometros/Metros"
                onPress={() => setConversorQuilometros(!conversorQuilometros)}
                titleStyle={{ fontSize: 18, fontWeight: "bold" }}
                headerStyle={[styles.accordionHeader]}
                subContainerStyle={[styles.accordionSubContainer]}
                timingTransition={150}
                iconSize={14}
              >
                <View>
                  <TextInput
                    style={stylesAccordion.temperature}
                    placeholder='Informe a quantidade em Quilómetros'
                    keyboardType='numeric'
                    onChangeText={(km) => setKm(km)} />
                  <TouchableOpacity onPress={calculateKm}>
                    <Text style={stylesAccordion.buttonCalculate}>Calcular</Text>
                  </TouchableOpacity>

                </View>
              </StylishAccordion>
              <StylishAccordion
                open={conversorQuilometrosPHora}
                title="Conversor Quilometros/Milhas"
                onPress={() => setConversorQuilometrosPHora(!conversorQuilometrosPHora)}
                titleStyle={{ fontSize: 18, fontWeight: "bold" }}
                headerStyle={[styles.accordionHeader]}
                subContainerStyle={[styles.accordionSubContainer]}
                timingTransition={150}
                iconSize={14}
              >
                <View>
                  <TextInput
                    style={stylesAccordion.temperature}
                    placeholder='Informe a quantidade em Quilómetros por hora'
                    keyboardType='numeric'
                    onChangeText={(kmph) => setKmph(kmph)} />
                  <TouchableOpacity onPress={calculateKmph}>
                    <Text style={stylesAccordion.buttonCalculate}>Calcular</Text>
                  </TouchableOpacity>

                </View>
              </StylishAccordion>
              <StylishAccordion
                open={conversorReal}
                title="Conversor Reais/Dolar"
                onPress={() => setConversorReal(!conversorReal)}
                titleStyle={{ fontSize: 18, fontWeight: "bold" }}
                headerStyle={[styles.accordionHeader]}
                subContainerStyle={[styles.accordionSubContainer]}
                timingTransition={150}
                iconSize={14}
              >
                <View>

                  <TextInput
                    disabled
                    style={stylesAccordion.temperature}
                    placeholder={dolar.toString()} />

                  <TextInput
                    style={stylesAccordion.temperature}
                    placeholder='Informe o valor em reais (R$)'
                    keyboardType='numeric'
                    onChangeText={(real) => setReal(real)} />
                  <TouchableOpacity onPress={calculateReal}>
                    <Text style={stylesAccordion.buttonCalculate}>Calcular</Text>
                  </TouchableOpacity>
                </View>
              </StylishAccordion>
              </View>
            </ScrollView>
          </SafeAreaView>
			);
		};



const stylesAccordion = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FAF0E6',
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		textAlign: 'center',
		marginTop: 40,
		marginBottom: 40,
		fontSize: 22,
		color: '#000'
	},
	temperature: {
		backgroundColor: '#FFF',
		color: '#000',
		borderRadius: 10,
		margin: 15,
		padding: 10,
		borderColor: '#000',
		borderWidth: 1 
	},
	buttonCalculate: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#1f8cf2',
    color: '#fff',
    textAlign: 'center',
    borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 30,
		fontWeight: 'bold',
		textTransform: 'uppercase'
	},
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: '5%'
  },
  accordionHeader: {
    backgroundColor: "#9090ff",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 8,
  },
  accordionSubContainer: {
    backgroundColor: "#fff",
    marginLeft: 5,
    marginRight: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 8,
    marginBottom: 13,
  },
  accordionBodyView: {
    height:100,
  },
});

const stylesScroll = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: (StatusBar.currentHeight) * 2,
  },
});





