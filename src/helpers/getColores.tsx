import ImageColors from 'react-native-image-colors';

export const getImageColors = async (uri: string) => {
  const colors = await ImageColors.getColors(uri, {});

  let Primary;
  let Secondary;

  if (colors.platform === 'android') {
    Primary = colors.dominant;
    Secondary = colors.average;
  }

  return [Primary, Secondary];
};
