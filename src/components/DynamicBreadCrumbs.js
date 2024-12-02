import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { useLocation, Link as RouterLink } from 'react-router-dom';

const DynamicBreadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {/* Home Link */}
      <Link component={RouterLink} to="/" underline="hover" color="inherit">
        Home
      </Link>

      {/* Dynamic Links */}
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <Typography key={to} color="textPrimary">
            {value}
          </Typography>
        ) : (
          <Link key={to} component={RouterLink} to={to} underline="hover" color="inherit">
            {value}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};

export default DynamicBreadcrumbs;
