import { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import {
    AboutSection,
    ContactCard,
    Divider,
    Footer,
    Header,
    ModalContactForm,
    NavBar,
    Projects,
    SEO,
    SocialLinks
} from "./components";
import devProfile from './data/data.json';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const pageInfo = devProfile.pageInfo;
  const bg=pageInfo.bgImage;
  const projects = devProfile.projects;
  const user = devProfile.user;

  useEffect(() => {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    }, []);

  return (
    <div>
      <HelmetProvider>
        <SEO pageInfo={pageInfo} />
      </HelmetProvider>

      <NavBar pageInfo={pageInfo} />

      <div className="pt-20">
        <Header
            user={user}
            pageInfo={pageInfo}
            setIsModalOpen={setIsModalOpen}
         />
      </div>

      <Divider flip={false} />

      <AboutSection user={user} pageInfo={pageInfo} />

      <Divider flip={true} />

      <Projects pageInfo={pageInfo} projects={projects}/>

      <Divider flip={false} />

      <ContactCard
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        pageInfo={pageInfo}
        user={user}
      />

      <ModalContactForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        pageInfo={pageInfo}
        user={user}
      />

      <Divider flip={true} />

      <Footer name={user.name} pageInfo={pageInfo} />

    </div>
  );
}

export default App;
