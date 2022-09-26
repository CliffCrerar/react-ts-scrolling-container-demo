import React from 'react';

interface ScrollingContainerProps {
  heading: string;
  list: any[];
}

export const ScrollingContainer: React.FC<ScrollingContainerProps> = (
  props: ScrollingContainerProps
) => {
  // styles
  console.log(props.list);
  const containerClasses = {
    border: '1px solid black',
  };

  const scrollSectionClasses = {
    background: 'red',
    height: '10vh',
    overflow: 'scroll',
  };

  // inherent children components
  const ListComponent: React.FC = () => {
    return props.list.map((listItem: any, idx: number) => {
      return <li key={'list-item-' + idx}>{listItem.color}</li>;
    });
  };

  return (
    <div style={containerClasses}>
      {props.heading}
      <hr />
      <ul style={scrollSectionClasses}>
        <ListComponent />
      </ul>
    </div>
  );
};
