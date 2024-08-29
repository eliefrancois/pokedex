import { StyleSheet, Text, View, Image } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { getPokemonDetail } from '../utils/api/pokeapi';
import { Pokemon } from '../utils/types';

const PokemonDetail = () => {
  const { id } = useLocalSearchParams<{ id: string }>()
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchPokemonName = async () => {
      try {
        setLoading(true);
        const response = await getPokemonDetail(id);
        setPokemon(response);
        navigation.setOptions({ title: response.name.charAt(0).toUpperCase() + response.name.slice(1) });
      } catch (error) {
        console.error('Error fetching Pokemon name:', error);
        setError('Failed to fetch Pokemon details');
      } finally {
        setLoading(false);
      }
    };

    fetchPokemonName();
  }, [id, navigation]);

  return (
    <View style={{padding:10}}>
      {loading && <Text>Loading...</Text>}
      {error && <Text style={styles.errorText}>{error}</Text>}
      {pokemon && (
        <>
        <View style={styles.card}>
          {pokemon.sprites ? (
            <Image source={{uri: pokemon.sprites.front_default}} style={styles.image} />
          ) : (
            <Text>No image available</Text>
          )}
          <Text style={styles.text}>{pokemon.name || 'Unknown'}</Text>
        </View>
        <View style={styles.card}></View>
        </>
      )}
    </View>
  )
}

export default PokemonDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textTransform: 'capitalize',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    margin: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
  }
})