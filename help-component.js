import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import {AppRegistry, Text, View, Button, FlatList, ScrollView, Image} from 'react-native';
import styles from './styles';

export class helpcomponent extends Component {
    constructor(props) {
		super(props);
		this.onPress = this.onPress.bind(this);
	}
	static navigationOptions = {
		title: 'Pomoć',
     };
     onPress(stranica) {
         console.log(stranica);
		this.props.navigation.navigate(stranica);
	} 
}

export class korisnik extends React.Component {
    static navigationOptions = {
		title: 'Način korištenja aplikacije za korisnike',
 	};
	render() {
    	return(
			<ScrollView contentContainerStyle = { styles.container }>
				<View style={styles.zasebniView}>
					<Text style={styles.text}>
						Aplikaciju je moguće koristiti bez posjedovanja (i unošenja) korisničkih podataka.
					</Text>
				</View>
				<View style={styles.header}>
					<Text style = { styles.textH }>
                	    Prikaz informacija o Imagefilter aplikaciji
                	</Text>
				</View>
				<View style={styles.zasebniView}>
					<Text style = { styles.text }>
                	   Na početnom ekranu korisnik može izabrati sliku koju želi urediti.
						{"\n"}{"\n"}
						 Na sliku može primjeniti različite filtere.
						{"\n"}{"\n"}
                		Korisnik sliku može objaviti na društvenim mrežama.
					</Text>
				</View>
				<View style={styles.zasebniView}>
					<Text style = { styles.text }>
                	    Kada korisnik izvrđi editovanje slike istu može spasiti na memoriju svog mobilnog uređaja.
					</Text>
				</View>
				<View style={styles.header}>
					<Text style = { styles.textH }>
						Ostale mogućnosti
                	</Text>
				</View>
				<View style={styles.zasebniView}>
					<Text style = { styles.text }>
                	    Korisniku je u svakom trenutku omogućeno share-ovanje slike na društvene mreže.
					</Text>
				</View>
            </ScrollView>
    	);
 	}
}

export default Project = StackNavigator({
	MainHelpPage: {screen: helpcomponent},
    HelpPage: {screen: korisnik}
});
AppRegistry.registerComponent('helpcomponent', () => helpcomponent);
AppRegistry.registerComponent('korisnik', () => korisnik)
