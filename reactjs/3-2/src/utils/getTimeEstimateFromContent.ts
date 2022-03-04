import PrismicDOM from 'prismic-dom';

interface IContent {
  heading: string;
  body: {
    text: string;
  }[];
}

export function getTimeEstimateFromContent(content: IContent[]): number {
  const wordCount = content.reduce((acc, { body }) => {
    const text = PrismicDOM.RichText.asText(body);

    return acc + text.split(' ').length;
  }, 0);

  return Math.ceil(wordCount / 200);
}
