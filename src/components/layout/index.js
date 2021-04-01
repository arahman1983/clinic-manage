import Header from './header/header'
import Footer from './footer/footer'
import styles from "./layout.module.css"

function Layout ({children}){
  return(
    <>
      <Header />
        <div className={styles.bodyContainer}>
          {children}
        </div>
      <Footer />
    </>
  )
}

export default Layout