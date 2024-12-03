export const getData = async (url: string) => {
  const response = await fetch(url, {
    cache: "no-store",
  });
  // const response = await fetch("http://localhost:3000/api/product", {
  //   cache: "no-store",
  //   // next: {
  //   //   revalidate: 30, //second
  //   // },
  // });

  if (!response.ok) {
    throw new Error("Faild to fecth data");
  }

  return response.json();
};
