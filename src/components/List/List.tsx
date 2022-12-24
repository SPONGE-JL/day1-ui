import React from "react";

interface ListProps<T> {
  iterableItems: T[];
}

export function List({ iterableItems }: ListProps<string>): JSX.Element {
  return (
    <ul>
      {iterableItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
