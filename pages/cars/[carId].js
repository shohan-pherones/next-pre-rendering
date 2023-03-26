const CarDetails = ({ car }) => {
  return (
    <div>
      <h1>Car Details for {car.title}</h1>
      <p>{car.speed}</p>
    </div>
  );
};

export default CarDetails;

export async function getServerSideProps(context) {
  const { params } = context;

  const res = await fetch(`http://localhost:4000/cars/${params.carId}`);
  const data = await res.json();

  return {
    props: {
      car: data,
    },
  };
}
