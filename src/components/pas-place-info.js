// src/components/pas-place-info.js
import React from 'react';
import styles from './pas-place-info.module.css';
import { FaBed, FaSwimmingPool, FaGolfBall } from 'react-icons/fa';

const PasPlaceInfo = () => {
  return (
    <div className={styles.background}>
      <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Welcome to Pa's Place!
        </h2>

        <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-gradient-to-r from-yellow-200 to-yellow-300">
            <h3 className="text-2xl font-semibold mb-2 flex items-center">
              <FaBed className="mr-2" /> Accommodation Details
            </h3>
            <p>
              Pa’s Place can accommodate up to 22 children on bunk beds, with
              space for their carers. We provide bedding, but please bring your
              own towels. Daily responsibilities include making beds, fostering
              independence.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-gradient-to-r from-green-200 to-green-300">
            <h3 className="text-2xl font-semibold mb-2 flex items-center">
              <FaGolfBall className="mr-2" /> Activities and Treats
            </h3>
            <p>
              Activities and treats are tailored to the group’s preferences and
              are provided after consulting with group leaders. We offer a
              trampoline, miniature putt-putt course, swimming pool, and nearby
              beach access.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold mb-2 flex items-center">
            <FaSwimmingPool className="mr-2" /> Indemnity Form
          </h3>
          <p>
            Before arrival, please ensure the indemnity form is signed and
            emailed to us. This form ensures the safety and well-being of all
            guests during their stay. It includes acknowledgment of risks,
            release of liability, assumption of responsibility, indemnification,
            and full understanding of terms.
          </p>
        </div>

        <div className="text-sm text-gray-600 text-center">
          <p>
            For more information or to make special requests, please contact us.
            We look forward to providing a transformative and joyful experience
            for the children at Pa’s Place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PasPlaceInfo;
