import jwtDecode from 'jwt-decode';

export type JwtDecodedData = {
  'https://ns.acloud.guru/roles'?: {
    member: boolean;
    enhancedSyllabus?: boolean;
    forumWriteAccess?: boolean;
    organisationAdmin?: boolean;
    admin?: boolean;
  };
  'https://ns.acloud.guru/organisationId'?: string;
  iss: string;
  sub: string;
  aud: string[];
  iat: number;
  exp: number;
  azp: string;
  scope: string;
};

export type DecodeToken = ReturnType<typeof makeDecodeToken>;
export const makeDecodeToken = () => ({ token }: { token: string | null }) => {
  if (!token) {
    return null;
  }

  try {
    return jwtDecode<JwtDecodedData>(token);
  } catch (err) {
    return null;
  }
};
