import React from "react";

interface ListProps<T> {
  testId: string;
  iterableItems?: T[];
  iterateCallback: (item: T) => JSX.Element;
}

export default function List<T>({
  testId,
  iterableItems,
  iterateCallback,
}: ListProps<T>): JSX.Element {
  if (iterableItems === undefined || iterableItems.length === 0) {
    return (
      <input
        data-testid={testId}
        type="hidden"
        value="iterableItems-is-empty"
      />
    );
  }
  return (
    <ul data-testid={testId}>
      {iterableItems.map((item: T, index: number) => (
        <li key={index}>{iterateCallback(item)}</li>
      ))}
    </ul>
  );
}
