interface User {
  birthDate: string;
  city: string;
  competences: { proficiency: string; skill: string }[];
  country: string;
  department: string;
  educationLevel: string;
  employmentStatus: string;
  fullName: string;
  gender: string;
  graduationYear: string;
  identityNumber: string;
  occupation: string;
  pdf: string;
  phoneNumber: string;
  photo: string;
  projects: { projectDetails: string[]; projectName: string }[];
  schoolName: string;
}

export default User;