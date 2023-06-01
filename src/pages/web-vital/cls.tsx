import { useEffect, useState } from 'react';
import { slowApi } from '../../api';

const unsplashImg =
  'https://images.unsplash.com/photo-1684125224205-603f78e0fab8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2400&q=100';

const CLSComponent = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    slowApi()
      .then(({ data }) => {
        setData(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="body-center flex">
      <img width={isLoading ? 50 : 600} height="400" src={unsplashImg} alt="Large Image" />
      <div className="flex-row gap">
        <div className="flex-row gap">
          <div>
            Show Image after api call
            <ul>
              {data.map(d => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CLSComponent;
