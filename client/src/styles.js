import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgb(33, 47, 61)',
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down('xs')]: {
    mainContainer: {
      flexDirection: "column-reverse"
    }
  }
}));