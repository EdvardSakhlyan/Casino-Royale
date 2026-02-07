import React from "react";

type Enhancer = (
  component: React.ComponentType<any>,
) => React.ComponentType<any>;

export default function compose(...enhancers: Enhancer[]) {
  return (BaseComponent: React.ComponentType<any>) =>
    enhancers.reduceRight((acc, enhancer) => enhancer(acc), BaseComponent);
}
