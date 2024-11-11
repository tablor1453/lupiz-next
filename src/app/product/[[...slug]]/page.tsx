type DetailProductPageProps = { params: { slug: string[] } };

export default function DetailProductPage(props: DetailProductPageProps) {
  const { params } = props;
  // console.log(params);
  return (
    <>
      <h1>Detail Product Page</h1>
      {params.slug && (
        <>
          <div>Categori: {params.slug[0]}</div>
          <div>Nama: {params.slug[1]}</div>
          <div>Id: {params.slug[2]}</div>
        </>
      )}
      {/* <div>Categori: {params.slug[0]}</div>
      <div>Nama: {params.slug[1]}</div>
      <div>Id: {params.slug[2]}</div> */}
    </>
  );
}
