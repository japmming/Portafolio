import { profileData, skills, projects, experience, blogPosts } from "../data/data";
import { getLucideIcon, getBrandIcon, socialIconMap } from "../icons";

describe("datos del portfolio", () => {
  test("skills referencian iconos válidos", () => {
    skills.forEach((skill) => {
      expect(getBrandIcon(skill.iconLib, skill.icon)).toBeDefined();
    });
  });

  test("projects referencian iconos lucide válidos", () => {
    projects.forEach((project) => {
      expect(getLucideIcon(project.lucideIcon)).toBeDefined();
    });
  });

  test("redes sociales referencian iconos y URLs válidas", () => {
    profileData.socials.forEach((social) => {
      expect(socialIconMap[social.icon]).toBeDefined();
    });
    expect(
      profileData.socials.filter((social) => social.href)
        .every((social) => /^https?:\/\//.test(social.href))
    ).toBe(true);
  });

  test("perfil y experiencia completos", () => {
    expect(profileData.username).toBeTruthy();
    expect(profileData.email).toBeTruthy();
    expect(experience.length).toBeGreaterThan(0);
    projects.forEach((project) => {
      expect(project.title).toBeTruthy();
      expect(project.desc).toBeTruthy();
      expect(Array.isArray(project.tags)).toBe(true);
    });
  });

  test("artículos de blog completos", () => {
    expect(blogPosts.length).toBeGreaterThan(0);
    blogPosts.forEach((post) => {
      expect(post.id).toBeTruthy();
      expect(post.title).toBeTruthy();
      expect(post.excerpt).toBeTruthy();
      expect(Array.isArray(post.content)).toBe(true);
      expect(post.content.length).toBeGreaterThan(0);
      expect(Array.isArray(post.tags)).toBe(true);
    });
  });
});