import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

export const Link: React.FC<{ to: string }> = ({ children, to }) => {
  return (
    <RouterLink
      to={location => {
        const params = new URLSearchParams(location.search);
        const newParams = new URLSearchParams();
        newParams.append('screen', params.get('screen') ?? '');

        return {
          ...location,
          pathname: to,
          search: newParams.toString(),
        };
      }}
    >
      {children}
    </RouterLink>
  );
};
