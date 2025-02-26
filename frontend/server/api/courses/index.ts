import { Course } from "types/Course";
import { APIResponse } from "types/APIResponse";
import { APICollege } from "types/APICollege";
import { APICourse } from "types/APICourse";
import { APIDepartment } from "types/APIDepartment";

export default defineEventHandler(async (): Promise<Course[]> => {
  const config = useRuntimeConfig();
  const mappedCoursesData: Course[] = [];
  const departmentMap = new Map<string, string>();
  const collegeMap = new Map<string, string>();

  const [{ data: courses }, { data: colleges }, { data: departments }] =
    await Promise.all([
      await $fetch<APIResponse<APICourse[]>>(
        `${config.public.apiBaseUrl}/courses`,
      ),
      await $fetch<APIResponse<APICollege[]>>(
        `${config.public.apiBaseUrl}/colleges`,
      ),
      await $fetch<APIResponse<APIDepartment[]>>(
        `${config.public.apiBaseUrl}/departments`,
      ),
    ]);

  if (!(courses && colleges && departments))
    throw new Error("Get courses data failed");

  for (const department of departments)
    departmentMap.set(department.departmentId, department.departmentName);
  for (const college of colleges)
    collegeMap.set(college.collegeId, college.collegeName);

  for (const courseData of courses.map((course) => {
    return {
      ...course,
      collegeName: collegeMap.get(course.collegeId),
      departmentName: departmentMap.get(course.departmentId),
      classTimes: (JSON.parse(course.classTimes) as string[]).join(", "),
      teachers: (JSON.parse(course.teachers) as string[]).join(", "),
    };
  })) {
    mappedCoursesData.push(courseData as Course);
  }
  return mappedCoursesData;
});
