import { useMemo } from "react";
import { useLanguage } from "./LanguageContext";
import {
  getCertifications,
  getEducation,
  getExperiences,
  getProfile,
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
      projects: getProjects(lang),
    }),
    [lang]
  );
}
