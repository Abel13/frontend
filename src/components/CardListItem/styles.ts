import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

import { Colors, Spacing } from "../../styles";

export const Card = styled.View`
  background-color: ${Colors.cardColor};
  /* marginhorizontal: ${Spacing.padding}px;
  shadowoffset: {
    width: 0;
    height: 5;
  }
  shadowopacity: 0.25;
  shadowradius: 20px;
  elevation: 2; */
`;

export const Details = styled.View`
  padding: ${Spacing.padding}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  /* paddingvertical: ${Spacing.extraMargin}px; */
`;

export const Model = styled.Text`
  color: ${Colors.textColor};
  font-size: 30px;
  /* fontFamily: Arial; */
`;

export const Line = styled.View`
  height: 1px;
  background-color: ${Colors.divisorColor};
  /* marginvertical: ${Spacing.extraMargin}px; */
`;

export const MakeYear = styled.Text`
  /* paddingvertical: ${Spacing.extraMargin}px; */
`;

export const StarIcon = styled(AntDesign).attrs((props) => ({
  name: props.star ? "star" : "staro",
  color: props.star ? Colors.starColor : Colors.textColor,
  size: 24,
}))``;
