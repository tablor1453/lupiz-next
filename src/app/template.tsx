"use client";

import { ReactNode, useState } from "react";

export default function Template({ children }: { children: ReactNode }) {
  const [state, setState] = useState(0);
  return (
    <div>
      {/* <div>Tempalte {state}</div> */}
      {/* <button onClick={() => setState(state + 1)}>Klik</button> */}
      <div>{children}</div>
    </div>
  );
}
