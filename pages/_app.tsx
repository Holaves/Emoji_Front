// import { CssBaseline } from '@mui/material';
import '../styles/global/global.css'
import '../styles/global/stylesheet.css'
import { wrapper } from '../store';
import { Provider } from 'react-redux';

//@ts-ignore
const MyApp: FC<AppProps> = ({Component, ...rest}) => {
  const {store, props} = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
};

export default MyApp;