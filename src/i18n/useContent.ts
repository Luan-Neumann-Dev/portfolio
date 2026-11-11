import { useMemo } from "react";
import { useLanguage } from "./LanguageContext";
import {
  getCertifications,
  getEducation,
  getExperiences,
  getProfile,
  getPublications,
  getStack,
} from "@/data/profile";
import { getProjects } from "@/data/projects";

/** Returns every data slice resolved to the active language. */
export function useContent() {
  const { lang } = useLanguage();
  return useMemo(
    () => ({
      profile: getProfile(lang),
      stack: getStack(lang),
      experiences: getExperiences(lang),
      education: getEducation(lang),
      certifications: getCertifications(lang),
      publications: getPublications(lang),
      projects: getProjects(lang),
    }),
    [lang]
  );
}
