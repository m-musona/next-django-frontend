import BreadCrumb from "@/components/breadCrumb";
import MainContent from "@/components/mainContent";
import MyNavbar from "@/components/navbar";
import PageTop from "@/components/pageTop";
import SideBar from "@/components/sidebar";
import TopNav from "@/components/top_nav";
import Head from "next/head";
import { Stack } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className="bg-light">
        <TopNav />
        <MyNavbar />
        <BreadCrumb />
        <PageTop />
        <div className="main-container">
          <Stack direction="horizontal">
            <SideBar />
            <MainContent />
          </Stack>
        </div>
      </main>
    </>
  );
}
