import  { useEffect, useState } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { setUsername } from '../reducers/doctorsReducers';
import { useNavigate } from 'react-router-dom';

// Kullanıcıları çekmek için kullanılacak async bir fonksiyon tanımlayın
export async function fetchRandomUsers(count: number) {
  try {
    const response = await fetch(`https://randomuser.me/api/?results=${count}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
}
const Cv = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

const Doctors: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const RandevuAl = (userName:string)=>{
    dispatch(setUsername(userName));
    navigate("/randevu");

  }






  useEffect(() => {
    
    fetchRandomUsers(8) 
      .then((result) => setUsers(result))
      .catch((error) => console.error('Kullanıcılar getirilirken hata oluştu:', error));
  }, []);

  return (
    <div className='grid md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-3 xl:grid-cols-4 mx-5 my-5'>
      {users.map((user, index) => (
        <Card className='my-3' sx={{ maxWidth: 345 }} key={index}>
          <CardMedia
            sx={{ height: 140 }}
            image={user.picture.large}
            title={`${user.name.first} ${user.name.last}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {`${user.name.first} ${user.name.last}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Cv} {/* Sabit CV metnini burada kullanabilirsiniz */}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => RandevuAl(user.name.first)} size="small">Randevu Al</Button>
            
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Doctors;