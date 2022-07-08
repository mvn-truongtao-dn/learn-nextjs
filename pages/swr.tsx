import StudentDetail from '@/components/swr/StudentDetail';
import * as React from 'react';

export interface SWRPageProps {}

export default function SWRPage(props: SWRPageProps) {
  const [detailList, setDetailList] = React.useState([1, 1, 1]);
  const handleAddClick = () => {
    setDetailList((prevList) => [...prevList, 1]);
  };
  return (
    <div>
      <h1>SWR playground</h1>
      <button onClick={handleAddClick}>Add detail</button>
      <ul>
        {detailList.map((x, index) => (
          <li key={index}>
            <StudentDetail studentId='sktwi1cgkkuif36f3'></StudentDetail>
          </li>
        ))}
      </ul>
    </div>
  );
}
