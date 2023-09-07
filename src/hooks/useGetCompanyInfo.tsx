import { useQuery, gql } from "@apollo/client";

const COMPANY_DETAILS = gql`
  query {
    company {
      ceo
      cto
      name
    }
  }
`;

export const useGetCompanyInfo = () => {
  const { error, loading, data } = useQuery(COMPANY_DETAILS);
  return {
    error,
    loading,
    data,
  };
};
