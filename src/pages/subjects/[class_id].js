// pages/subject/[id].js
import { useRouter } from 'next/router';
import { Inter } from "next/font/google";
import { Stack, Typography, Grid2, Button } from "@mui/material";
//import Grid2 from '@mui/material/Unstable_Grid2'; // Importing Grid2 properly
import AppButton from '@/components/AppButton';
import LinkPath from '@/components/LinkPath';

const inter = Inter({ subsets: ["latin"] });
const API_URL = process.env.PUBLIC_API_URL;
// Server-side function to fetch data based on the ID
export async function getServerSideProps(context) {
  const { class_id } = context.params;
  const {class_name} = context.query;
  const No_Of_Links = 1;
  
  

  const subjects = [
    { subject_id: 1, subject_name: 'English', icon_name: 'english.webp' }, 
    { subject_id: 2, subject_name: 'Math', icon_name: 'english.webp' },
    { subject_id: 3, subject_name: 'Urdu', icon_name: 'english.webp' }
  ];
  try {
    const response = await fetch(`${API_URL}subjects/${class_id}`);
    
    if (!response.ok) {
      // Handle non-2xx responses
      throw new Error('Failed to fetch subject data');
    }
    
    const { success, subjects } = await response.json();

    if (success == 0) {
      // Handle case where the response indicates failure
      throw new Error('API did not return success');
    }
    

    return {
      props: {
        subjects, // Pass the fetched subject data as props
        //subjectArray, // Pass the subjectArray for initial rendering
        class_id, class_name, No_Of_Links
      },
    };
  } catch (error) {
    // Handle the error here, maybe log it or show an error message
    console.error('Error fetching subject data:', error);

    return {
      notFound: true, // This will return a 404 page
    };
  }
}


const SubjectsPage = ({ subjects, class_id, class_name, No_Of_Links}) => {
  const router = useRouter();
  //const { class_id } = router.query;
  //const {class_name} = router.query;
  


  const onClickSubjects =(subject_id, subject_name) => {
console.log(class_id);
//const id = class_id;
console.log(subject_id);
router.push(`/boards/${class_id}?class_name=${class_name}&subject_id=${subject_id}&subject_name=${subject_name}`);
  }

  return (
    <div
      className={`flex min-h-screen flex-col  ${inter.className}`}
    >
{/* <div style={{ display: 'flex', justifyContent: 'left', marginTop: 0 }}>
        
          <LinkPath class_id = {class_id} class_name = {class_name} No_Of_Links = {1} />      
      </div> */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
        <Grid2 container spacing={4}>
          <Grid2 item style={{ display: 'flex', justifyContent: 'center' }}
          xs={12}  // Full width on extra-small screens
          sm={6}   // Two columns on small screens
          md={4}   // Three columns on medium screens
          lg={3}   // Four columns on large screens
          xl={2} >
            <Stack variant='contained' sx={{ borderTopLeftRadius: 50, borderBottomRightRadius: 50,
               height: 90, width: 250, backgroundColor: '#01411C', alignItems: 'center', justifyContent: 'center' }}>
              <Typography fontSize={30} color='#fff' textAlign={'center'} justifyItems={'center'} fontWeight={'bold'}>
                SUBJECTS
              </Typography>
            </Stack>
          </Grid2>
        </Grid2>
      </div>
      

      <div style={{ display: 'flex', justifyContent: 'left' }}>
        <Grid2 container spacing={4} sx={{ marginTop: 5, marginLeft: 0 }}>
          {
            subjects.map((subject) => (
              <Grid2 item key={subject.subject_id}
              xs={12}  // Full width on extra-small screens
      sm={6}   // Two columns on small screens
      md={4}   // Three columns on medium screens
      lg={3}   // Four columns on large screens
      xl={2}   // More columns on extra-large screens
      >
                <div style={{ width: '100%', backgroundColor: '#fff' }}>
                  <AppButton text={subject.subject_name} iconName={subject.icon_name} onClick={() => onClickSubjects(subject.subject_id, subject.subject_name)} />
                </div>
              </Grid2>
            ))
          }
        </Grid2>
      </div>

      
      
    </div>
  );
};

export default SubjectsPage;

