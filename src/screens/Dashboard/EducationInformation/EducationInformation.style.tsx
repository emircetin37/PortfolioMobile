import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: 'row',
  },
  image: {
    height: 100,
    width: 100,
  },
  title: {
    marginTop: 50,
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  educationInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  textContainer: {
    marginLeft: 10,
  },
  grayText: {
    color: 'gray',
  },
  schoolText: {
    marginTop: 4,
  },
  graduationYearText: {
    marginTop: 4,
  },
});

export default styles;
