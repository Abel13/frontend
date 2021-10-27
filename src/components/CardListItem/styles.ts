import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";

import { Colors, Spacing } from "../../styles";

export const Card = styled.View`
  background-color: ${Colors.cardColor};
  margin: 0 ${Spacing.padding}px;
`;

export const Details = styled.View`
  padding: ${Spacing.padding}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: ${Spacing.extraMargin}px 0px;
`;

export const Model = styled.Text`
  color: ${Colors.textColor};
  font-size: 30px;
  font-family: "Arial";
`;

export const Line = styled.View`
  height: 1px;
  background-color: ${Colors.divisorColor};
  margin: ${Spacing.extraMargin}px 0px;
`;

export const MakeYear = styled.Text`
  padding: ${Spacing.extraMargin}px 0px;
`;

export const StarIcon = styled(AntDesign).attrs((props) => ({
  name: props.star ? "star" : "staro",
  color: props.star ? Colors.starColor : Colors.textColor,
  size: 24,
}))``;
