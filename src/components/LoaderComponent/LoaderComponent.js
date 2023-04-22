import Loader from 'react-loader-spinner';
//import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import {Overlay} from './LoaderComponent.styled';

function LoaderComponent() {
  return (
    <Overlay>
      <Loader type="ThreeDots" color="#00BFFF" height="32" />
    </Overlay>
  );
}

export default LoaderComponent;