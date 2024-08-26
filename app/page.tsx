// app/page.tsx
import { getSession } from 'next-auth/react';
import { GetServerSideProps } from 'next';

const DashboardPage = async ({ session }) => {
  if (!session) {
    return <div>You need to be authenticated to view this page.</div>;
  }

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      {/* Rest of your dashboard content */}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
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

export default DashboardPage;
