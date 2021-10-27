import React, { useEffect } from "react";
import { ImageProps, View } from "react-native";
// import { Spacing } from '../../styles'
import { useScreenDimensions } from "../../hooks/useScreenDimensions";
import BASE_URL from "../../services/api";

import { Container, Image } from "./styles";

export interface CoverProps {
  source: string;
}

export interface ContainerProps {
  customHeight: number;
}

// Cover has to fill the whole card area.
const Cover = ({ source }: CoverProps) => {
  const [calculatedSize, setCalculatedSize] = React.useState<number>(100);
  const size = useScreenDimensions();

  useEffect(() => {
    setCalculatedSize(size.width * 0.67);
  }, [size]);

  return (
    <Container customHeight={calculatedSize}>
      <Image
        resizeMode="cover"
        resizeMethod="auto"
        source={{ uri: BASE_URL + source }}
      />
    </Container>
  );
};

export default Cover;
