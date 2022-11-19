interface data {
  name: string;
  imagePath: string;
}

const ScoopOptions = ({ name, imagePath }: data) => {
  return (
    <div className="flex justify-center items-center">
      <img src={`http://localhost:3030/${imagePath}`} alt={`${name} scoop}`} />
    </div>
  );
};
export default ScoopOptions;
