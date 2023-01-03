import React from "react";
import { useRecoilValue } from "recoil";

import { userAtom } from "src/stores/user";

export function Home(): JSX.Element {
  const user = useRecoilValue(userAtom);
  return (
    <section>
      <h1>Hello, React-TS!</h1>
      <h2>UserId: {user.userId}</h2>
    </section>
  );
}
