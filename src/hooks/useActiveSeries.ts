import { useQuery } from '@apollo/react-hooks';
import {
  ActiveSeriesQuery,
  GetActiveSeriesQuery,
} from '../models/series/queries';

export const useActiveSeries = () => {
  return useQuery<GetActiveSeriesQuery>(ActiveSeriesQuery);
};
