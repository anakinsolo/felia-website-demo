export { };

declare global {
  interface Window {
    env: {
      STORYBLOK_PREVIEW_TOKEN: string;
    };
  }
}
