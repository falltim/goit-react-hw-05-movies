import { Title } from 'components/ResultList/ResultList.styled';
import { BackLink } from 'components/ResultItem/ResultItem.styled';
import { ErrorBox } from 'components/SharedLayout/SharedLayout.styled';
const Error = () => {
  return (
    <ErrorBox>
      <BackLink to="/">Go home</BackLink>

      <Title>⚠️ Invalid URL or something wrong ⚠️</Title>
    </ErrorBox>
  );
};

export default Error;
