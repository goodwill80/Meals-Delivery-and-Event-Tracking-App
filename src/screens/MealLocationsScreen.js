import { View, FlatList, StyleSheet, Text, Pressable } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useGlobalEventsContext } from '../../Store/context/events-context';

function MealLocationsScreen() {
  const { getVolunteerById } = useGlobalEventsContext();
  const route = useRoute();
  const volunteerId = route.params.volunteerId;
  const event = route.params;
  const addresses = route.params.addresses;

  return (
    <View style={styles.rootContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={addresses}
        renderItem={(itemData) => {
          return (
            <Pressable
              //   onPress={() => console.log('pressed')}
              style={({ pressed }) => [pressed && styles.pressed]}
            >
              <View style={styles.itemContainer}>
                <View style={styles.firstRow}>
                  <Text style={styles.headerText}>{itemData.item.bene}</Text>
                  <Text style={styles.headerText}>
                    {itemData.item.meal} lunch
                  </Text>
                </View>
                <Text style={styles.headerText}>Deliver to:</Text>
                <View>
                  <Text>{itemData.item.address}</Text>
                </View>
              </View>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default MealLocationsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#034694',
  },
  itemContainer: {
    width: 350,
    height: 120,
    borderWidth: 1,
    borderColor: '#00BFFF',
    marginTop: 10,
    padding: 20,
    borderRadius: 10,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  pressed: {
    opacity: 0.7,
  },
});
