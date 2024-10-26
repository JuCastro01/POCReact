import Image from "next/image";
import styles from "./page.module.css";

import FruitList from '/src/app/components/FruitList';
import Button from '/src/app/components/button';


const Home = () => {
  const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];

  return (
    <div>
      <h1>Fruit List</h1>
      <FruitList fruits={fruits} />
      <Button />
    </div>
  );
};

export default Home;

