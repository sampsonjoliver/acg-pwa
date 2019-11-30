import isBefore from 'date-fns/isBefore';

import { DecodeToken, JwtDecodedData } from './makeDecodeToken';
import { DEFAULT_DOMAIN } from './makeAuthService';
import get from 'lodash.get';

type TokenUtilsProps = {
  AUTH0_PRIMARY_DOMAIN: string;
  AUTH0_SECONDARY_DOMAIN: string;
  DEFAULT_DOMAIN: DEFAULT_DOMAIN;
  decodeToken: DecodeToken;
};

export type TokenUtils = ReturnType<typeof makeTokenUtils>;
export type RequestedRoles = 'MEMBER' | 'ADMIN';

export const isAdmin = (decoded: JwtDecodedData) =>
  get(decoded, 'https://ns.acloud.guru/roles', { admin: false }).admin;
export const isMember = (decoded: JwtDecodedData) =>
  get(decoded, 'https://ns.acloud.guru/roles', { member: false }).member;

export const makeTokenUtils = ({
  decodeToken,
  DEFAULT_DOMAIN,
  AUTH0_PRIMARY_DOMAIN,
  AUTH0_SECONDARY_DOMAIN,
}: TokenUtilsProps) => {
  return {
    isTokenExpired: (token: string | null) => {
      const decoded = decodeToken({ token });

      if (decoded) {
        const expiry = decoded.exp || 0;
        return isBefore(expiry * 1000, Date.now());
      } else {
        return true;
      }
    },
    getTokenIssuer: (token: string | null) => {
      if (!token) {
        return DEFAULT_DOMAIN;
      }

      const decoded = decodeToken({ token });

      if (decoded) {
        if (decoded.iss.indexOf(AUTH0_PRIMARY_DOMAIN) !== -1) {
          return 'primary';
        } else if (decoded.iss.indexOf(AUTH0_SECONDARY_DOMAIN) !== -1) {
          return 'secondary';
        }
      }

      return DEFAULT_DOMAIN;
    },
    hasPermission: ({
      decoded,
      requestedRoles,
    }: {
      decoded: JwtDecodedData;
      requestedRoles: RequestedRoles[];
    }) => {
      const hasAdminPermission =
        isAdmin(decoded) || !requestedRoles.includes('ADMIN');
      const hasMemberPermission =
        isMember(decoded) || !requestedRoles.includes('MEMBER');

      return hasAdminPermission && hasMemberPermission;
    },
  };
};
