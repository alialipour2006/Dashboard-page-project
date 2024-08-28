import React from 'react';

interface Props {
  timestamp: number;
}
// FIXME: it's not component you should replace in libs 
// Convert Persian numbers to English numbers
const convertPersianToEnglishNumbers = (text: string): string => {
  const persianToEnglishMap: { [key: string]: string } = {
    '۰': '0',
    '۱': '1',
    '۲': '2',
    '۳': '3',
    '۴': '4',
    '۵': '5',
    '۶': '6',
    '۷': '7',
    '۸': '8',
    '۹': '9',
  };

  return text.replace(/[۰-۹]/g, (char) => persianToEnglishMap[char] || char);
};

// Convert Unix timestamp to Persian date and then replace Persian numbers with English
const FormatDate: React.FC<Props> = ({ timestamp }) => {
  // Format timestamp to Persian date
  const formattedDate = new Intl.DateTimeFormat('fa-IR').format(timestamp);

  // Convert Persian numbers to English
  const englishDate = convertPersianToEnglishNumbers(formattedDate);

  return <span>{englishDate}</span>;
};

export default FormatDate;
