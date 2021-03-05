import { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import AuthContext from "../context/AuthContext";
import styles from "../styles/Header.module.css";

const Header = () => {
  const router = useRouter();
  const isHome = router.pathname === "/";
  //this is navigating us back to the last page of the stack
  const goBack = (event) => {
    event.preventDefault();
    router.back();
  };

  const { user } = useContext(AuthContext);

  return (
    <div className={styles.nav}>
      {/* this is determing if we are Home and to show back if not  */}
      {!isHome && (
        <div className={styles.back}>
          <a href="#" onClick={goBack}>
            {"<"}Back
          </a>
        </div>
      )}
      <div className={styles.title}>
        <Link href="/">
          <a>
            <h1>Crowes Memorbilia</h1>
          </a>
        </Link>
      </div>

      <div className={styles.auth}>
        {user ? (
          <Link href="/account">
            <a><img src="/User_Avatar.png" alt={user.email} /></a>
          </Link>
        ) : (
          <Link href="/login">
            <a>Log In</a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
