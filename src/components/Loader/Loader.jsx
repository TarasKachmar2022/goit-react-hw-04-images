import { Component } from 'react';
import { createPortal } from 'react-dom';
import { Vortex } from 'react-loader-spinner';
import { LoaderWrap } from 'components/Loader/Loader.styled';

const rootloader = document.querySelector('#rootLoader');

export default class Loader extends Component {
  render() {
    return createPortal(
      <LoaderWrap>
        <Vortex
          type="watch"
          visible={true}
          height="100"
          width="100"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
        />
      </LoaderWrap>,
      rootloader
    );
  }
}
