import type { GetStaticProps, NextPage } from "next";

import { Layout } from "@/components/layouts/Layout";
import { Back } from "@/components/pages/project/Back";
import { RoomSelection } from "@/components/pages/project/exhibition";
import { Hero } from "@/components/pages/project/Hero";
import { Project } from "@/models";
import { findProject } from "@/utils/getProjects";

type Props = {
  project: Project;
};

const PROJECT_NAME = "exhibition";

export const getStaticProps: GetStaticProps<Props> = async () => {
  const project = await findProject((project) => project.name === PROJECT_NAME);

  return {
    props: {
      project,
    },
  };
};

const Exhibition: NextPage<Props> = ({ project }) => {
  return (
    <Layout>
      <Hero project={project} />
      <RoomSelection />
      <Back />
    </Layout>
  );
};

export default Exhibition;