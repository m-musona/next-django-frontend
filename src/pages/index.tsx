// import BreadCrumb from "@/components/breadCrumb";
// import MainContent from "@/components/mainContent";
// import MyNavbar from "@/components/navbar";
// import PageTop from "@/components/pageTop";
// import SideBar from "@/components/sidebar";
// import TopNav from "@/components/top_nav";
// import Head from "next/head";
// import { Stack } from "react-bootstrap";

// export default function Home() {
//   return (
//     <>
//       <Head>
//         <title>Create Next App</title>
//       </Head>
//       <main className="bg-light">
//         <TopNav />
//         <MyNavbar />
//         <BreadCrumb />
//         <PageTop />
//         <div className="main-container">
//           <Stack direction="horizontal">
//             <SideBar />
//             <MainContent />
//           </Stack>
//         </div>
//       </main>
//     </>
//   );
// }

import Layout from "../layouts/Main";
import PageIntro from "../components/page-intro";
import ProductsFeatured from "../components/products-featured";
import Footer from "../components/footer";
import Subscribe from "../components/subscribe";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article
            style={{ backgroundImage: "url(/images/featured-1.jpg)" }}
            className="featured-item featured-item-large"
          >
            <div className="featured-item__content">
              <h3>New arrivals are now in!</h3>
              <Link href="#" className="btn btn--rounded">
                Show Collection
              </Link>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/featured-2.jpg)" }}
            className="featured-item featured-item-small-first"
          >
            <div className="featured-item__content">
              <h3>Basic t-shirts $29,99</h3>
              <Link href="#" className="btn btn--rounded">
                More details
              </Link>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/featured-3.jpg)" }}
            className="featured-item featured-item-small"
          >
            <div className="featured-item__content">
              <h3>Sale this summer</h3>
              <Link href="#" className="btn btn--rounded">
                VIEW ALL
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Why should you choose us?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Free Shipping</h4>
                <p>
                  All purchases over $199 are eligible for free shipping via
                  USPS First Class Mail.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Easy Payments</h4>
                <p>
                  All payments are processed instantly over a secure payment
                  protocol.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Money-Back Guarantee</h4>
                <p>
                  If an item arrived damaged or you've changed your mind, you
                  can send it back for a full refund.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Finest Quality</h4>
                <p>
                  Designed to last, each of our products has been crafted with
                  the finest materials.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  );
}

// export default IndexPage;
