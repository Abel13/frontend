import React from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import { TouchableOpacity } from "react-native";

import { toggleStar } from "../../store/actions";

import Cover from "../Cover";

import {
  Card,
  Header,
  Details,
  Line,
  Model,
  MakeYear,
  StarIcon,
} from "./styles";
import { CarProps } from "../../models/car";
import { SharedElement } from "react-navigation-shared-element";

export interface CarListItemProps {
  car: CarProps;
  onPress: (item: CarProps) => void;
}

const CardListItem: React.FC<CarListItemProps> = ({ car, onPress }) => {
  const star = useSelector<RootStateOrAny>((state) => {
    return state.star.starred[car.id];
  });
  const dispatch = useDispatch();

  const _toggleStar = () => {
    dispatch(toggleStar(car.id));
  };

  return (
    <Card
      style={{
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 20,

        elevation: 20,
      }}
    >
      <TouchableOpacity onPress={() => onPress(car)}>
        <SharedElement id={`item.${car.id}.photo`}>
          <Cover source={car.coverURL} />
        </SharedElement>
        <Details>
          <Header>
            <SharedElement id={`item.${car.id}.model`}>
              <Model>{car.model}</Model>
            </SharedElement>
            <TouchableOpacity onPress={() => _toggleStar()}>
              <StarIcon star={star} />
            </TouchableOpacity>
          </Header>
          <Line />
          <SharedElement id={`item.${car.id}.make`}>
            <MakeYear>
              {car.make} | {car.year}
            </MakeYear>
          </SharedElement>
        </Details>
      </TouchableOpacity>
    </Card>
  );
};

export default CardListItem;
