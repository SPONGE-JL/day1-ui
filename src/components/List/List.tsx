import React from "react";

interface ListProps<T> {
  testId: string;
  iterableItems: T[];
}

export function List({
  testId,
  iterableItems,
}: ListProps<string>): JSX.Element {
  return (
    <ul data-testid={testId}>
      {iterableItems.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
