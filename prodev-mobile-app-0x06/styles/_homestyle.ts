import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  iconsection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 22,
  },
  titleTextGroup: {
    marginTop: 20,
  },
  titleText: {
    fontWeight: 700,
    fontSize: 39,
  },
  subText: {
    fontWeight: 400,
    fontSize: 12,
    color: "#7E7B7B",
  },
  formGroup: {
    marginTop: 44,
    rowGap: 10,
  },
  formLabel: {
    fontSize: 18,
    fontWeight: 400,
    color: "#7B7B7B",
    marginBottom: 7,
  },
  formControl: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: "#E9E9E9",
    paddingHorizontal: 10,
  },
  formPasswordControl: {
    borderWidth: 2,
    height: 50,
    borderRadius: 10,
    borderColor: "#E9E9E9",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  passwordControl: {
    flex: 1,
  },
  primaryButton: {
    backgroundColor: "#34967C",
    height: 53,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  primaryButtonText: {
    fontSize: 17,
    color: "white",
  },
  secondaryButton: {
    borderWidth: 1,
    height: 53,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  secondaryButtonText: {
    fontSize: 17,
    color: "#0D0D0D",
  },
  searchGroup: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    marginTop: 25,
  },
  searchFormGroup: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    borderColor: "#7E7B7B",
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  searchControlGroup: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    flex: 1,
  },
  searchFormText: {
    fontSize: 17,
    color: "#7E7B7B",
  },
  searchControl: {
    fontSize: 17,
    color: "#0D0D0D",
    fontWeight: 500,
  },
  searchButton: {
    backgroundColor: "#2B876E",
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  filterGroup: {
    borderWidth: 1,
    borderRadius: 10,
    height: 50,
    width: 50,
    borderColor: "#7E7B7B",
    justifyContent: "center",
    alignItems: "center",
  },
  filterContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  listingContainer: {
    marginTop: 30,
    flex: 1,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    columnGap: 20,
    marginBottom: 20,
  },
  showMoreButton: {
    backgroundColor: "#34967C",
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  showMoreButtonText: {
    fontSize: 16,
    color: "white",
  },
});

export { styles };
