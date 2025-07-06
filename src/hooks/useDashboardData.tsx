
import { useLocalStorage } from './useLocalStorage';
import { DashboardData } from '../types/dashboard';

const initialData: DashboardData = {
  generalProgress: 74,
  studyTime: 28,
  averageGrade: 8.7,
  completedTasks: 23,
  totalTasks: 28,
  courses: [
    { name: 'Matemáticas Avanzadas', progress: 78, color: '#4D44C3' },
    { name: 'Física Cuántica', progress: 65, color: '#F5A623' },
    { name: 'Programación Web', progress: 92, color: '#59C431' },
    { name: 'Historia del Arte', progress: 45, color: '#E54F4F' }
  ],
  tasks: [
    { id: '1', task: 'Entrega proyecto final - Matemáticas', date: '2025-01-10', priority: 'alta', completed: false },
    { id: '2', task: 'Examen parcial - Física', date: '2025-01-12', priority: 'media', completed: false },
    { id: '3', task: 'Ensayo - Historia del Arte', date: '2025-01-15', priority: 'baja', completed: false },
    { id: '4', task: 'Práctica de laboratorio', date: '2025-01-08', priority: 'alta', completed: false }
  ],
  achievements: [
    { id: '1', title: 'Mejor calificación del mes', icon: '🏆', date: '5 días' },
    { id: '2', title: 'Racha de 7 días estudiando', icon: '🔥', date: '1 semana' },
    { id: '3', title: 'Completó 3 cursos', icon: '📚', date: '2 semanas' }
  ],
  weeklyData: [65, 78, 82, 70, 85, 90, 88],
  timeAnalysis: [
    { subject: 'Matemáticas', hours: 8, color: '#4D44C3' },
    { subject: 'Programación', hours: 12, color: '#F5A623' },
    { subject: 'Física', hours: 6, color: '#59C431' },
    { subject: 'Historia', hours: 2, color: '#E54F4F' }
  ]
};

export const useDashboardData = () => {
  const [data, setData] = useLocalStorage<DashboardData>('dashboard-data', initialData);

  const updateCourseProgress = (courseName: string, progress: number) => {
    setData(prevData => ({
      ...prevData,
      courses: prevData.courses.map(course =>
        course.name === courseName ? { ...course, progress } : course
      )
    }));
  };

  const toggleTaskCompleted = (taskId: string) => {
    setData(prevData => {
      const updatedTasks = prevData.tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      );
      const completedCount = updatedTasks.filter(task => task.completed).length;
      
      return {
        ...prevData,
        tasks: updatedTasks,
        completedTasks: completedCount
      };
    });
  };

  const addTask = (taskText: string, date: string, priority: 'alta' | 'media' | 'baja') => {
    setData(prevData => ({
      ...prevData,
      tasks: [...prevData.tasks, {
        id: Date.now().toString(),
        task: taskText,
        date,
        priority,
        completed: false
      }],
      totalTasks: prevData.totalTasks + 1
    }));
  };

  const updateStudyTime = (hours: number) => {
    setData(prevData => ({
      ...prevData,
      studyTime: hours
    }));
  };

  const updateWeeklyData = (newWeeklyData: number[]) => {
    setData(prevData => ({
      ...prevData,
      weeklyData: newWeeklyData
    }));
  };

  return {
    data,
    updateCourseProgress,
    toggleTaskCompleted,
    addTask,
    updateStudyTime,
    updateWeeklyData
  };
};
