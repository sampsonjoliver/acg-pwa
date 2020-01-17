import { GetToken } from './makeGetToken';
import { DecodeToken } from './makeDecodeToken';
import get from 'lodash.get';

type GetActiveUserProps = { getToken: GetToken; decodeToken: DecodeToken };
export type MembershipStatus = 'Active' | 'None' | 'Organization';

export const getMembershipStatus = ({
  isMember,
  isOrganisationMember,
}: {
  isMember: boolean;
  isOrganisationMember: boolean;
}): MembershipStatus => {
  if (isOrganisationMember) {
    return 'Organization';
  }

  if (isMember) {
    return 'Active';
  }
  return 'None';
};

type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T;

export type GetActiveUser = Unpacked<
  Unpacked<ReturnType<typeof makeGetActiveUser>>
>;

export const makeGetActiveUser = ({
  getToken,
  decodeToken,
}: GetActiveUserProps) => async () => {
  const token = await getToken();
  const decodedToken = decodeToken({ token });
  if (decodedToken) {
    const isMember = get(decodedToken, 'https://ns.acloud.guru/roles', {
      member: false,
    }).member;
    const organisationId: string | undefined =
      decodedToken['https://ns.acloud.guru/organisationId'];

    return {
      userId: decodedToken.sub,
      isMember,
      organisationId,
      membershipStatus: getMembershipStatus({
        isMember,
        isOrganisationMember: !!organisationId,
      }),
    };
  }

  return null;
};
