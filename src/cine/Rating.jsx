import Star from "../../public/assets/star.svg";

export default function Rating({ value }) {
  const ratings = Array(value).fill(Star);
  return (
    <>
      {ratings.map((rating, index) => (
        <img key={index} src={Star} height="14" width="14" alt="Star" />
      ))}
    </>
  );
}
