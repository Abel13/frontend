import React from "react";
import { SharedElement } from "react-navigation-shared-element";
import Cover from "../../components/Cover";

import { Container, Header, Line, MakeYear, Model } from "./styles";

const Details: React.FC = ({ route }: any) => {
  const { params } = route;

  return (
    <>
      <SharedElement id={`item.${params.car.id}.photo`}>
        <Cover source={params.car.coverURL} />
      </SharedElement>
      <Container>
        <Header>
          <SharedElement id={`item.${params.car.id}.model`}>
            <Model>{params.car.model}</Model>
          </SharedElement>
        </Header>
        <Line />
        <SharedElement id={`item.${params.car.id}.make`}>
          <MakeYear>
            {params.car.make} | {params.car.year}
          </MakeYear>
        </SharedElement>
      </Container>
    </>
  );
};

export default Details;
