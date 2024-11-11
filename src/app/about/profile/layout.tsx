import React from "react";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-between py-10">
      <h1>Title</h1>
      <div>{children}</div>
    </div>
  );
}
