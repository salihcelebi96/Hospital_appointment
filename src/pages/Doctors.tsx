import  { useEffect, useState } from 'react';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch, SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import allUsersReducers, {setAllUsers} from "../reducers/allUsersReducers";
import { RootState } from '../redux/store';

interface DoctorsProps {
  
  setDoctorName:Dispatch<SetStateAction<string>>;
}


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

const Doctors: React.FC<DoctorsProps> = ({setDoctorName}) => {
  const [users, setUsers] = useState<any[]>([]); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const allUsers = useSelector((state:RootState)=>state.users.users);


  const RandevuAl = (userName:string)=>{
    setDoctorName(userName);
    navigate("/randevu");

  }






  useEffect(() => {
    fetchRandomUsers(8)
      .then((result) => {
        setUsers(result);
        dispatch(setAllUsers(result)); // Redux store'a verileri ekleyin
      })
      .catch((error) => console.error('Kullanıcılar getirilirken hata oluştu:', error));
  }, []);
  

  return (
    <div className='grid md:grid-cols-2 sm:grid-cols-1  lg:grid-cols-3 xl:grid-cols-4 mx-5 my-5'>
      {users.map((user, index) => (
        <Card className='my-3 ' sx={{ maxWidth: 345 }} key={index}>
          <CardMedia
            sx={{ height: 200 }}
            image={user.picture.large}
            title={`${user.name.first} ${user.name.last}`}
          />
          <CardContent>
            <Typography className='text-center' gutterBottom variant="h5" component="div">
              {`${user.name.first} ${user.name.last}`}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {Cv} 
            </Typography>
          </CardContent>
          <CardActions className=' flex justify-center '>
            <Button  onClick={() => RandevuAl(user.name.first)} size="small">Randevu Al</Button>
            
          </CardActions>
        </Card>
      ))}
    </div>
  );
};

export default Doctors;