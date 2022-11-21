import { useEffect, useState } from "react";
import ScoopOptions from "./ScoopOptions";
import ToppingOptions from "./ToppingOptions";
import axios from "axios";
interface dataOptions {
  optionType: "scoops" | "toppings";
}
interface itemIndex {
  name: string;
  imagePath: string;
}

const Options = ({ optionType }: dataOptions) => {
  const [items, setItems] = useState<itemIndex[]>([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response: any) => setItems(response.data))
      .catch((error: any) => {
        console.log(error);
      });
  }, [optionType]);

  //null will be topping option
  //const ItemComponent = optionType === "scoops" ? ScoopOptions : null;
  const ItemComponent = optionType === "scoops" ? ScoopOptions : ToppingOptions;
  const optionItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));
  return <div>{optionItems}</div>;
};
export default Options;
