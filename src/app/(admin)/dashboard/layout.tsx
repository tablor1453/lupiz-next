export default function Layout({
  children,
  product,
  payment,
}: {
  children: React.ReactNode;
  product: React.ReactNode;
  payment: React.ReactNode;
}) {
  return (
    <div className="grid gap-2 p-5">
      <div>{children}</div>
      <div>{product}</div>
      <div>{payment}</div>
    </div>
  );
}
