declare namespace JSX {
  interface IntrinsicElements {
    'cm-assessment': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      name?: string;
      slug?: string;
      questions?: any;
      intro?: any;
      resultsIntro?: any;
    };
  }
}
