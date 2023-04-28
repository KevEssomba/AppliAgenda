import React from "react";
import Lottie from 'lottie-react-native';

const Loader = () => (
    <Lottie
        source={require('../assets/98742-loading.json')}
        autoPlay
        loop
    />
)

export default Loader; 