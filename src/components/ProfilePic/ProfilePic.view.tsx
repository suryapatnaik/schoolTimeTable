import React from 'react';
import {Text, View} from 'react-native';
import styles from './ProfilePic.styles';

interface ProfilePicProps {}

/**  */
const ProfilePic: React.FC<ProfilePicProps> = props => {
  const {} = props;

  return (
    <View style={styles.container}>
      <Text>ProfilePic</Text>
    </View>
  );
};

export default ProfilePic;
