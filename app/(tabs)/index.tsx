import { SafeAreaView, StyleSheet, Image, ScrollView, StatusBar, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { useEffect, useState } from 'react';
import { Link } from 'expo-router';
import { getPokemon } from '../utils/api/pokeapi';
import { Pokemon } from '../utils/types';

export default function TabOneScreen() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {

    const fetchPokemon = async () => {
      const pokemon = await getPokemon();
      setPokemon(pokemon);
    };

    fetchPokemon();

  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {pokemon.map((pokemon) => (
          <Link href={`/pokemon/${pokemon.id}`} asChild key={pokemon.id}>
            <TouchableOpacity>
              <View style={styles.pokemonCard}>
                <Text style={styles.pokemonName}> {pokemon.id} - {pokemon.name}</Text>
                <Image source={{ uri: pokemon.image }} style={styles.imagePreview}/>
              </View>
            </TouchableOpacity>
          </Link>
        ))}
      {/* <Text style={styles.title}>Tab One</Text> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      </ScrollView>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  pokemonCard: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10, // Change margin to marginVertical
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // Add width to take full screen width
    width: '100%',
  },
  scrollView: {
    // Remove the horizontal margin
  },
  imagePreview: {
    width: 100,
    height: 100,
    marginTop: 10,
  },
  pokemonName: {
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize', 
  }
});
