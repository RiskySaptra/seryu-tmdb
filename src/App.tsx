import { useLoaderData, useNavigation } from "react-router-dom";

function App() {
  const data: any = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  if (isLoading) return <p>loading ... </p>;

  console.log(data);
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
