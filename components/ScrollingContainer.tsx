import React from 'react';

interface ScrollingContainerProps {
  heading: string;
  list: any[];
}

export const ScrollingContainer: React.FC<ScrollingContainerProps> = (
  props: ScrollingContainerProps
) => {
  const containerClasses = {
    border: '1px solid black',
  };

  const scrollSectionClasses = {};
  return (
    <div style={containerClasses}>
      {props.heading}
      <hr />
      <div style={scrollSectionClasses}></div>
    </div>
  );
};
