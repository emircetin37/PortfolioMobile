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
  projectContainer: {
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
  projectDetailsContainer: {
    flexDirection: 'column',
  },
});

export default styles;
