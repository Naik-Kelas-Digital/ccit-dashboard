import { getSession, signIn } from 'next-auth/react';
import { GetServerSideProps, GetServerSideProps } from 'next';
import Dashboard from '../components/dashboard'; 

const Home = ({ session }) => {
  if (!session) {
    return (
      <div>
        <h1>Access Denied</h1>
        <p>You need to be signed in to view the dashboard.</p>
      </div>
    );
  }
  
  return <Dashboard/>;
};

export const GetServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/api/auth/signin',
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
};


export default Home;
