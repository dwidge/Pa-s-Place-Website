export const highlightKeywords = (text, keywords) => {
  let highlightedText = text;
  keywords.forEach((keyword) => {
    const regex = new RegExp(`(${keyword})`, 'gi');
    highlightedText = highlightedText.replace(
      regex,
      `<span class="highlight">$1</span>`,
    );
  });
  return highlightedText;
};
