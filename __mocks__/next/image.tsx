import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function MockedImage(props: any) {
  return React.createElement("mocked-image", {
    ...props,
  });
}
