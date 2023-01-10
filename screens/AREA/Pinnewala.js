import {  Text, View, ImageBackground } from "react-native";
import React from 'react'
import { Pinna } from '../../assets';

const Pinnewala = () => {
  return (
    <ImageBackground source={Pinna} className="flex-1 ">
      <View>
        <Text>
          Pinnawala Elephant Orphanage is a popular tourist attraction in
          Pinnawala, Sri Lanka. It is a sanctuary for orphaned and injured
          elephants. Established in 1975 by the Sri Lanka Wildlife Conservation
          Department, the orphanage has become home to over 90 elephants. It is
          a popular tourist destination as it allows visitors to closely observe
          and interact with elephants. The elephants at the orphanage are well
          cared for and given food, water and medical care. The orphanage also
          has a breeding program and many baby elephants have been born there.
          Visitors can watch elephants being fed and bathed and even bottle-fed
          babies.
        </Text>
      </View>
    </ImageBackground>
  );
}

export default Pinnewala

