import React, { useState, useEffect } from "react";
import { getList } from "../../services/api";
import CardListItem from "../../components/CardListItem";
import { Space, Title, List } from "./styles";

const Garage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const updateData = async () => {
      const res = await getList("/");
      setData(res.items);
    };
    updateData();
  }, []);

  const itemRender = ({ item }: any) => {
    return (
      <>
        <CardListItem
          key={item.id}
          id={item.model}
          model={item.model}
          make={item.make}
          year={item.year}
          coverURL={item?.image?.url}
        />
        <Space />
      </>
    );
  };

  return (
    <List
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
