import { useLayoutEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
// import { volunteers } from '../../Data/Dummy_data';
import { useGlobalEventsContext } from "../../Store/context/events-context";

function ProfileScreen() {
  const { getVolunteerById } = useGlobalEventsContext();
  const [volunteer, setVolunteer] = useState();

  useLayoutEffect(() => {
    if (getVolunteerById(1)) {
      const person = getVolunteerById(1);
      setVolunteer(person);
    }
  }, []);

  return (
    <View style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>{volunteer?.name}'s profile</Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageDetails}
            source={{ uri: `${volunteer?.imageUrl}` }}
          />
        </View>
      </View>
      <View style={styles.completedContainer}>
        <View style={styles.eventContainer}>
          <View style={styles.eventTextContainer}>
            <Text style={styles.eventNumberStyle}>143</Text>
            <Text style={styles.eventTextStyle}>Hours volunteered</Text>
          </View>
        </View>
        <View style={styles.eventContainer}>
          <View style={styles.eventTextContainer}>
            <Text style={styles.eventNumberStyle}>36</Text>
            <Text style={styles.eventTextStyle}>Events completed</Text>
          </View>
        </View>
      </View>
      <View style={styles.recentlyCompletedContainer}>
        <View style={styles.recentlyCompletedTextContainer}>
          <Text style={styles.recentlyCompletedHeader}>
            Recently completed:
          </Text>
          <Text style={styles.recentlyCompletedSubheader}>
          {`\u2022`} Elderly Home Cleaning
          </Text>
          <Text style={styles.recentlyCompletedSubheader}>
          {`\u2022`} Meal Delivery
          </Text>
          <Button style={styles.viewAll}>
          View all {`\u00BB`} 
          </Button>
        </View>
      </View>
      <View style={styles.profileContainer}>
        <Text style={styles.profileText}>Personal details</Text>
        <Text style={styles.profileArrow}>{`\u00BB`}</Text>
      </View>
      <View style={styles.profileContainer}>
        <Text style={styles.profileText}>Edit your profile</Text>
        <Text style={styles.profileArrow}>{`\u00BB`}</Text>
      </View>
      {/* <View style={styles.volunteerContainer}>
        <View>
          <View style={styles.textContainer}>
            <Text style={styles.subheader}>ID: </Text>
            <Text style={styles.volunteerInfo}>{volunteer?.id}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.subheader}>Name: </Text>
            <Text style={styles.volunteerInfo}>{volunteer?.name}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.subheader}>Email: </Text>
            <Text style={styles.volunteerInfo}>{volunteer?.email}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.subheader}>Contact: </Text>
            <Text style={styles.volunteerInfo}>{volunteer?.phone}</Text>
          </View>
        </View>
      </View> */}
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    gap: 90,
    marginTop: 30,
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    paddingTop: 40,
    fontSize: 16,
    fontWeight: "bold",
    fontSize: 25,
  },
  volunteerContainer: {
    alignItems: "center",
    paddingTop: 45,
    paddingBottom: 50,
  },
  imageContainer: {
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    paddingBottom: 20,
  },
  imageDetails: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
  },
  completedContainer: {
    flexDirection: "row",
    gap: 30,
    marginTop: 20,
  },
  eventContainer: {
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "gray",
    shadowOpacity: 0.5,
    height: 130,
    marginBottom: 16,
    width: 130,
    backgroundColor: "#1F75FE",
  },
  eventTextContainer: {
    flexDirection: "column"
  },
  eventNumberStyle:{
    fontSize: 40,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 25,
    color: "white",
  },
  eventTextStyle: {
    fontSize: 18,
    marginLeft: 25,
    color: "white",
  },
  recentlyCompletedContainer: {
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: "#1F75FE",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "gray",
    shadowOpacity: 0.5,
    height: 130,
    marginBottom: 25,
    width: 300,
    backgroundColor: "FFF",
    marginTop: 10,
  },
  recentlyCompletedTextContainer: {
    flexDirection: "column"
  },
  recentlyCompletedHeader: {
    marginTop: 15,
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#00308F",
  },
  recentlyCompletedSubheader: {
    marginTop: 5,
    marginLeft: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "#6699CC",
  },
  viewAll: {
    marginTop: 5,
    marginRight: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "#00308F",
    textAlign: "right",
  },
  profileContainer: {
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: "gray",
    shadowOpacity: 0.5,
    height: 50,
    marginBottom: 16,
    width: 300,
    backgroundColor: "FFF",
    marginTop: 0,
    flexDirection: "row",
    gap: 125,
    backgroundColor: "#6699CC",
  },
  profileText: {
    marginTop: 13.5,
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  profileArrow: {
    marginTop: 13,
    marginLeft: 20,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  // textContainer: {
  //   flexDirection: "row",
  // },
  // subheader: {
  //   fontSize: 20,
  //   fontWeight: "bold",
  // },
  // volunteerInfo: {
  //   fontSize: 20,
  //   color: "black",
  // },
});
