<script lang="ts">
  import {
    configuration as globalConfiguration,
    ICSSProperties,
    IElementProps,
  } from '../../contexts/configuration';
  import { makeStylesFromConfiguration } from '../../utils/css-utils';

  export let configuration: IElementProps;
  export let isSelfie = false;

  const styleProps = configuration.style as ICSSProperties;

  const style = makeStylesFromConfiguration($globalConfiguration.videoContainer, styleProps);
</script>

<div class="container" class:mirror={isSelfie} {style}>
  <slot />
</div>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mirror :global(video) {
    transform: rotateY(180deg);
  }
  .container :global(video) {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    right: 0;
    bottom: 0;
    object-fit: cover;
    z-index: 1;
  }
</style>
