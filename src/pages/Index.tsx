
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { Navigate } from 'react-router-dom';

const Index = () => {
  const [user] = useLocalStorage('veetracker-user', null);
  
  if (user) {
    return <Navigate to="/dashboard" />;
  }
  
  return <Navigate to="/" />;
};

export default Index;
