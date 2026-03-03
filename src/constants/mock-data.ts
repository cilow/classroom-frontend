import {Subject} from "@/types";

export const mockSubjects: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description: "Fundamental concepts of programming and computer systems.",
    createdAt: new Date("2024-01-15T10:00:00Z"),
  },
  {
    id: 2,
    code: "MATH201",
    name: "Calculus II",
    department: "Mathematics",
    description: "Integral calculus, sequences, series, and power series.",
    createdAt: new Date("2024-01-16T11:30:00Z"),
  },
  {
    id: 3,
    code: "PHY101",
    name: "General Physics I",
    department: "Physics",
    description: "Introduction to mechanics, kinematics, and dynamics.",
    createdAt: new Date("2024-01-17T09:15:00Z"),
  },
];
