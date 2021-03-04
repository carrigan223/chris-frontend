import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Account = () => {
  const { user, logoutUser } = useContext(AuthContext);

  if (!user) {
    return (
      <div>
        <p>Please Login or Register</p>
        <Link href="/">
          <a>Go Back</a>
        </Link>
      </div>
    );
  }
  return (
    <div>
      <Head>
        <title>Acount Page</title>
        <meta
          name="description"
          content="The Acount page, view your order and logout"
        />
      </Head>
      <h2>Account Page</h2>
      <a href="#" onClick={logoutUser}>
        Logout
      </a>
    </div>
  );
};

export default Account;