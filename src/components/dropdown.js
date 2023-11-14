import React, { useState } from 'react';
import styles from '../styles/Dropdown.module.css';

const Dropdown = () => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  const options1 = ['Gender dysphoria', 'Sexually transmitted infections (STIs)', 'Contraception counseling', 'Unplanned pregnancies', 'HIV/AIDS', 'Menstrual irregularities', 'Polycystic ovary syndrome (PCOS)', 'Endometriosis', 'Pelvic inflammatory disease (PID)', 'Fibroids', 'Urinary incontinence', 'Menopause management', 'Breast health concerns', 'Cervical cancer screening (Pap smears)', 'Ovarian cysts', 'Erectile dysfunction (ED)', 'Premature ejaculation', 'Low libido', 'Sexual pain disorders', 'Orgasmic disorders'];
  const options2 = ['Sexologist', 'Gynecologist', 'General Physician'];

  const handleSelect1 = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleSelect2 = (event) => {
    setSelectedOption2(event.target.value);
  };

  const handleFindNow = () => {
    console.log('Finding now with options:', selectedOption1, selectedOption2);
  };

  return (
    <div className={styles.container}>
      <div className={styles['dropdown-row']}>
        {/* First dropdown */}
        <select
          value={selectedOption1}
          onChange={handleSelect1}
          className={styles['select-dropdown']}
        >
          <option value="">Select Health Condition</option>
          {options1.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {/* Second dropdown */}
        <select
          value={selectedOption2}
          onChange={handleSelect2}
          className={styles['select-dropdown']}
        >
          <option value="">Select Specialist</option>
          {options2.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* "Find Now" button */}
      <button className={styles['find-now-button']} onClick={handleFindNow}>
        Find Now
      </button>
    </div>
  );
};

export default Dropdown;
