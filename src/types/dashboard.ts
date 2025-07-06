
export interface Course {
  name: string;
  progress: number;
  color: string;
}

export interface Task {
  id: string;
  task: string;
  date: string;
  priority: 'alta' | 'media' | 'baja';
  completed: boolean;
}

export interface Achievement {
  id: string;
  title: string;
  icon: string;
  date: string;
}

export interface TimeAnalysis {
  subject: string;
  hours: number;
  color: string;
}

export interface DashboardData {
  generalProgress: number;
  studyTime: number;
  averageGrade: number;
  completedTasks: number;
  totalTasks: number;
  courses: Course[];
  tasks: Task[];
  achievements: Achievement[];
  weeklyData: number[];
  timeAnalysis: TimeAnalysis[];
}
