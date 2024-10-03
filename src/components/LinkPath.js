
/*
import { Button } from "@mui/material";
import { useRouter } from 'next/router';

const LinkPath = ({ class_id, class_name, subject_id, subject_name, board_id, board_name, year, No_Of_Links }) => {
  const router = useRouter();

  
  const renderButton = (label, path) => (
    <Button 
    sx={{
        padding: '10px 40%',
    height: 50,
    width: '300px', // Allows button to grow with text
    
    backgroundColor: '#192d54',
    fontSize: 20,
    clipPath: 'polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%, 10% 50%)', // Inward arrow shape
    whiteSpace: 'nowrap', // Prevents text from wrapping
    textAlign: 'center', // Ensures text remains centered within the button
    color: '#fff',
    fontWeight: 'bold'

      }}
    onClick={() => router.push(path)}>
      {label}
    </Button>
  );

  
  const links = [
    { label: class_name, path: `/subjects/${class_id}?class_name=${class_name}` },
    No_Of_Links > 1 && { label: subject_name, path: `/boards/${class_id}?class_name=${class_name}&subject_id=${subject_id}&subject_name=${subject_name}` },
    No_Of_Links > 2 && { label: board_name, path: `/years/${class_id}?class_name=${class_name}&subject_id=${subject_id}&subject_name=${subject_name}&board_id=${board_id}&board_name=${board_name}` },
    No_Of_Links > 3 && { label: year, path: `/years/${class_id}?class_name=${class_name}&subject_id=${subject_id}&subject_name=${subject_name}&board_id=${board_id}&board_name=${board_name}&year=${year}` }
  ].filter(Boolean); 

  return (
    <div style={{ display: 'flex' }}>
      {links.map((link, index) => (
        <div key={index} style={{ marginRight: '10px' }}>
          {renderButton(link.label, link.path)}
        </div>
      ))}
    </div>
  );
};

export default LinkPath;


*/


import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useRouter } from 'next/router';

const LinkPath = ({ class_id, class_name, subject_id, subject_name, board_id, board_name, year, No_Of_Links, textColor, }) => {
  const router = useRouter();

  // Helper function to render each breadcrumb as a link or a label (if it's the last one)
  const renderBreadcrumb = (label, path, isLast) => {
    if (isLast) {
      return (
        <Typography
          color={textColor}
          sx={{ fontWeight: 'bold', fontSize: 16 }}
        >
          {label}
        </Typography>
      );
    }
    return (
      <Link
        underline="hover"
        color={textColor}
        sx={{ cursor: 'pointer', fontSize: 16 }}
        onClick={() => router.push(path)}
      >
        {label}
      </Link>
    );
  };

  // Define the breadcrumb paths based on the props passed
  const links = [
    { label: "Home", path: "/" },
    { label: class_name, path: `/subjects/${class_id}?class_name=${class_name}` },
    No_Of_Links > 1 && { label: subject_name, path: `/boards/${class_id}?class_name=${class_name}&subject_id=${subject_id}&subject_name=${subject_name}` },
    No_Of_Links > 2 && { label: board_name, path: `/years/${class_id}?class_name=${class_name}&subject_id=${subject_id}&subject_name=${subject_name}&board_id=${board_id}&board_name=${board_name}` },
    No_Of_Links > 3 && { label: year, path: `/years/${class_id}?class_name=${class_name}&subject_id=${subject_id}&subject_name=${subject_name}&board_id=${board_id}&board_name=${board_name}&year=${year}` }
  ].filter(Boolean);

  return (
    <Breadcrumbs aria-label="breadcrumb" separator="›" sx={{ padding: '10px', fontSize: 16, color: '#01411C' }}>
      {links.map((link, index) => {
        const isLast = index === links.length - 1;
        return (
          <div key={index}>
            {renderBreadcrumb(link.label, link.path, isLast)}
          </div>
        );
      })}
    </Breadcrumbs>
  );
};

export default LinkPath;
