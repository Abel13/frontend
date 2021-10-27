import styled, { css } from "styled-components/native";
import { ContainerProps } from ".";

export const Container = styled.View<ContainerProps>`
  background-color: #f1f1f1;
  height: ${(props) => props.customHeight && props.customHeight}px;
`;

export const Image = styled.Image`
  flex: 1;
`;
