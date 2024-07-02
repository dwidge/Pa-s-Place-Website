import styles from './Testimonials.module.css';
import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    title: 'CEO, Company X',
    text: 'Lorem ipsum dolor sit <b>amet</b>, consectetur adipiscing <i>elit</i>, sed do eiusmod tempor incididunt ut <span class="highlight">labore et dolore magna aliqua</span>.',
  },
  {
    name: 'John Doe',
    title: 'CEO, Company X',
    text: 'Lorem ipsum dolor sit <b>amet</b>, consectetur adipiscing <i>elit</i>, sed do eiusmod tempor incididunt ut <span class="highlight">labore et dolore magna aliqua</span>.',
  },
  {
    name: 'John Doe',
    title: 'CEO, Company X',
    text: 'Lorem ipsum dolor sit <b>amet</b>, consectetur adipiscing <i>elit</i>, sed do eiusmod tempor incididunt ut <span class="highlight">labore et dolore magna aliqua</span>.',
  },
  {
    name: 'John Doe',
    title: 'CEO, Company X',
    text: 'Lorem ipsum dolor sit <b>amet</b>, consectetur adipiscing <i>elit</i>, sed do eiusmod tempor incididunt ut <span class="highlight">labore et dolore magna aliqua</span>.',
  },
  {
    name: 'John Doe',
    title: 'CEO, Company X',
    text: 'Lorem ipsum dolor sit <b>amet</b>, consectetur adipiscing <i>elit</i>, sed do eiusmod tempor incididunt ut <span class="highlight">labore et dolore magna aliqua</span>.',
  },
  {
    name: 'John Doe',
    title: 'CEO, Company X',
    text: 'Lorem ipsum dolor sit <b>amet</b>, consectetur adipiscing <i>elit</i>, sed do eiusmod tempor incididunt ut <span class="highlight">labore et dolore magna aliqua</span>.',
  },
];

const wrapKeywords = (text, keywords) => {
  let wrappedText = text;
  keywords.forEach((keyword) => {
    const regex = new RegExp(`(${keyword})`, 'gi');
    wrappedText = wrappedText.replace(
      regex,
      `<span class="${styles.highlight}">$1</span>`,
    );
  });
  return wrappedText;
};

const Testimonials = () => {
  const keywords = ['amet', 'elit', 'labore et dolore magna aliqua'];

  return (
    <div className={`${styles.testimonials} bg-cover bg-center relative`}>
      <div className={`${styles.overlay} absolute inset-0`}></div>
      <div className="container mx-auto px-4 py-8 relative z-10 overflow-hidden">
        <h2 className={styles.header}>Testimonials</h2>
        <div className={`${styles.testimonialsWrapper}`}>
          <div className={`${styles.testimonialsContainer}`}>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`${styles.card} bg-white p-6 m-4 rounded-lg shadow-lg flex-none`}
              >
                <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                <h4 className="text-sm text-gray-600">{testimonial.title}</h4>
                <p
                  className="text-gray-800 mt-4"
                  dangerouslySetInnerHTML={{
                    __html: wrapKeywords(testimonial.text, keywords),
                  }}
                ></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
