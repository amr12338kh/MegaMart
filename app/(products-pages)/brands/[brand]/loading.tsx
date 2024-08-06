import LoadingProducts from "@/components/skeletons/LoadingProducts";

const loading = () => {
  return <LoadingProducts container tagline arrLength={12} separator />;
};

export default loading;
