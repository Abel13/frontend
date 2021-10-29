import React, { useState, useEffect } from "react";
import { getList } from "../../services/api";
import CardListItem from "../../components/CardListItem";
import { Space, Title, List } from "./styles";
import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/app.routes";

type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Details"
>;

const Garage: React.FC = () => {
  const [data, setData] = useState([]);
  const [nextPage, setNextPage] = useState(1);

  const navigation = useNavigation<DetailsScreenNavigationProp>();

  useEffect(() => {
    const updateData = async () => {
      const res = await getList({ page: nextPage });
      setData(res);
    };
    updateData();
  }, [nextPage]);

  const itemPressed = (item: any) => {
    navigation.navigate("Details", { car: item });
  };

  const itemRender = ({ item }: any) => {
    return (
      <>
        <CardListItem
          key={item.id}
          onPress={itemPressed}
          car={{
            coverURL: item?.image?.url,
            id: item.id,
            model: item.model,
            make: item.make,
            year: item.year,
            starred: item.starred,
          }}
        />
        <Space />
      </>
    );
  };

  return (
    <List
      onEndReached={() => setNextPage(nextPage + 1)}
      onEndReachedThreshold={0.1}
      data={data}
      keyExtractor={(item: any) => {
        return item.id;
      }}
      ListHeaderComponent={<Title>Garage</Title>}
      renderItem={itemRender}
    />
  );
};

export default Garage;
