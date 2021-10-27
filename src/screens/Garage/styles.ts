import styled from "styled-components/native";

import { Colors, Spacing } from "../../styles";

export const Title = styled.Text`
  color: ${Colors.textColor};
  font-size: 36px;
  font-family: "Arial";
  font-weight: bold;
  padding: ${3 * Spacing.padding}px ${Spacing.padding}px;
`;

export const Space = styled.View`
  height: ${Spacing.padding + Spacing.extraMargin}px;
`;

export const List = styled.FlatList``;
