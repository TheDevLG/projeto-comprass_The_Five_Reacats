import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  FlatList,
} from 'react-native';
import { useState, useEffect } from 'react';

import { HeaderBar } from '../components/Home/HeaderBar';
import { Section } from '../components/Home/Sections';
import { fetchCategories } from '../service/FetchProductsAux';
import { Category } from '../types/interfaces/Product';

export function HomeScreen({navigation}:{navigation:any}) {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    async function getCategories() {
      const dados = await fetchCategories();
      setCategories(dados);
    }
    getCategories();
  }, []);

  function listHeader() {
    return (
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.backgroundImage}
      >
        <Image
          source={require('../assets/images/app-logo.png')}
          style={styles.logoApp}
        />
        <View style={styles.paragraphContainer}>
          <Text style={styles.paragraph}>Aqui você sempre ganha!</Text>
          <Image
            source={require('../assets/images/cart-icon.png')}
            style={styles.cartIcon}
          />
        </View>
      </ImageBackground>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={listHeader}
        data={categories}
        renderItem={({ item }) => <Section id={item.id} title={item.name} navigation={navigation}/>}
      />
      <HeaderBar isAuthenticated={true} username="Juliane Golçalves Freitas" navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingBottom: 16,
  },
  backgroundImage: {
    height: 374,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logoApp: {
    marginTop: 160,
    width: 263,
    height: 56,
  },

  paragraphContainer: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    marginLeft: 12,
    paddingBottom: 16,
    gap: 12,
    alignItems: 'center',
  },

  paragraph: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

  cartIcon: {
    width: 46,
    height: 46,
  },
});