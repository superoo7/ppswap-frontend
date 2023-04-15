import dynamic from 'next/dynamic';
import { PropsWithChildren, Fragment } from 'react';

const NoSSRComponent = (props) => (
  <Fragment>{props.children}</Fragment>
);

export const NoSSR = dynamic(() => Promise.resolve(NoSSRComponent), {
  ssr: false,
});