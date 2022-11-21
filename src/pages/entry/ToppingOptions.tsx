interface data {
  name: string;
  imagePath: string;
}
const ToppingOptions = ({ name, imagePath }: data) => {
  return (
    <div>
      <img src={`http://localhost:3030/${imagePath}`} alt={`${name} topping`} />
    </div>
  );
};
export default ToppingOptions;
