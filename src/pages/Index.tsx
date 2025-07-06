
import React from 'react';
import { 
  BookOpen, 
  Clock, 
  TrendingUp, 
  Award, 
  Calendar, 
  CheckCircle, 
  PlayCircle, 
  FileText, 
  BarChart3,
  Users,
  Target,
  Timer
} from 'lucide-react';

const Index = () => {
  // Datos de ejemplo
  const coursesData = [
    { name: 'Matemáticas Avanzadas', progress: 78, color: '#4D44C3' },
    { name: 'Física Cuántica', progress: 65, color: '#F5A623' },
    { name: 'Programación Web', progress: 92, color: '#59C431' },
    { name: 'Historia del Arte', progress: 45, color: '#E54F4F' }
  ];

  const tasksData = [
    { task: 'Entrega proyecto final - Matemáticas', date: '2025-01-10', priority: 'alta' },
    { task: 'Examen parcial - Física', date: '2025-01-12', priority: 'media' },
    { task: 'Ensayo - Historia del Arte', date: '2025-01-15', priority: 'baja' },
    { task: 'Práctica de laboratorio', date: '2025-01-08', priority: 'alta' }
  ];

  const achievementsData = [
    { title: 'Mejor calificación del mes', icon: '🏆', date: '5 días' },
    { title: 'Racha de 7 días estudiando', icon: '🔥', date: '1 semana' },
    { title: 'Completó 3 cursos', icon: '📚', date: '2 semanas' }
  ];

  const weeklyData = [65, 78, 82, 70, 85, 90, 88];
  const maxWeekly = Math.max(...weeklyData);

  return (
    <div style={{ 
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      backgroundColor: '#F5F5F5',
      minHeight: '100vh'
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#FFFFFF',
        padding: '16px 24px',
        borderBottom: '1px solid #EEEEEE',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: 700,
            color: '#1F1F1F',
            margin: 0
          }}>
            Dashboard Estudiantil
          </h1>
          <div style={{
            width: '40px',
            height: '40px',
            backgroundColor: '#F5A623',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#FFFFFF',
            fontWeight: 600
          }}>
            JS
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '24px'
      }}>
        {/* Métricas principales */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          marginBottom: '32px'
        }}>
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
            padding: '24px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <Target size={24} color="#4D44C3" />
              <h3 style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#1F1F1F',
                margin: '0 0 0 12px'
              }}>
                Progreso General
              </h3>
            </div>
            <div style={{ fontSize: '36px', fontWeight: 700, color: '#4D44C3', marginBottom: '8px' }}>
              74%
            </div>
            <p style={{ fontSize: '14px', color: '#888888', margin: 0 }}>
              +12% desde el mes pasado
            </p>
          </div>

          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
            padding: '24px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <Timer size={24} color="#F5A623" />
              <h3 style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#1F1F1F',
                margin: '0 0 0 12px'
              }}>
                Tiempo de Estudio
              </h3>
            </div>
            <div style={{ fontSize: '36px', fontWeight: 700, color: '#F5A623', marginBottom: '8px' }}>
              28h
            </div>
            <p style={{ fontSize: '14px', color: '#888888', margin: 0 }}>
              Esta semana
            </p>
          </div>

          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
            padding: '24px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <Award size={24} color="#59C431" />
              <h3 style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#1F1F1F',
                margin: '0 0 0 12px'
              }}>
                Calificación Media
              </h3>
            </div>
            <div style={{ fontSize: '36px', fontWeight: 700, color: '#59C431', marginBottom: '8px' }}>
              8.7
            </div>
            <p style={{ fontSize: '14px', color: '#888888', margin: 0 }}>
              Últimas evaluaciones
            </p>
          </div>

          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
            padding: '24px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <CheckCircle size={24} color="#4D44C3" />
              <h3 style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#1F1F1F',
                margin: '0 0 0 12px'
              }}>
                Tareas Completadas
              </h3>
            </div>
            <div style={{ fontSize: '36px', fontWeight: 700, color: '#4D44C3', marginBottom: '8px' }}>
              23/28
            </div>
            <p style={{ fontSize: '14px', color: '#888888', margin: 0 }}>
              Este mes
            </p>
          </div>
        </div>

        {/* Botones de acceso rápido */}
        <div style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
          padding: '24px',
          marginBottom: '32px'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: 600,
            color: '#1F1F1F',
            marginBottom: '16px'
          }}>
            Acceso Rápido
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}>
            <button style={{
              backgroundColor: '#4D44C3',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '4px',
              padding: '12px 24px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'background-color 0.2s'
            }}>
              <PlayCircle size={20} />
              Ir a Clases
            </button>
            <button style={{
              backgroundColor: '#F5A623',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '4px',
              padding: '12px 24px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'background-color 0.2s'
            }}>
              <FileText size={20} />
              Entregar Tareas
            </button>
            <button style={{
              backgroundColor: '#59C431',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '4px',
              padding: '12px 24px',
              fontWeight: 600,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'background-color 0.2s'
            }}>
              <BarChart3 size={20} />
              Ver Calificaciones
            </button>
          </div>
        </div>

        {/* Layout principal con dos columnas */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
          marginBottom: '32px'
        }}>
          {/* Cursos activos */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
            padding: '24px'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#1F1F1F',
              marginBottom: '16px'
            }}>
              Cursos Activos
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {coursesData.map((course, index) => (
                <div key={index} style={{
                  padding: '16px',
                  backgroundColor: '#F5F5F5',
                  borderRadius: '8px'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '8px'
                  }}>
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#333333',
                      margin: 0
                    }}>
                      {course.name}
                    </h4>
                    <span style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      color: course.color
                    }}>
                      {course.progress}%
                    </span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '8px',
                    backgroundColor: '#EEEEEE',
                    borderRadius: '4px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${course.progress}%`,
                      height: '100%',
                      backgroundColor: course.color,
                      borderRadius: '4px',
                      transition: 'width 0.3s ease'
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Gráfico de rendimiento semanal */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
            padding: '24px'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#1F1F1F',
              marginBottom: '16px'
            }}>
              Rendimiento Semanal
            </h3>
            <div style={{
              display: 'flex',
              alignItems: 'end',
              justifyContent: 'space-between',
              height: '120px',
              gap: '8px'
            }}>
              {weeklyData.map((value, index) => (
                <div key={index} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  flex: 1
                }}>
                  <div style={{
                    width: '100%',
                    height: `${(value / maxWeekly) * 100}px`,
                    backgroundColor: '#4D44C3',
                    borderRadius: '4px 4px 0 0',
                    marginBottom: '8px'
                  }} />
                  <span style={{
                    fontSize: '12px',
                    color: '#888888'
                  }}>
                    {['L', 'M', 'X', 'J', 'V', 'S', 'D'][index]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Layout de tres columnas */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '24px'
        }}>
          {/* Tareas pendientes */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
            padding: '24px'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#1F1F1F',
              marginBottom: '16px'
            }}>
              Tareas Pendientes
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {tasksData.map((task, index) => (
                <div key={index} style={{
                  padding: '12px',
                  backgroundColor: '#F5F5F5',
                  borderRadius: '6px',
                  borderLeft: `4px solid ${
                    task.priority === 'alta' ? '#E54F4F' :
                    task.priority === 'media' ? '#F5A623' : '#59C431'
                  }`
                }}>
                  <h4 style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#333333',
                    margin: '0 0 4px 0'
                  }}>
                    {task.task}
                  </h4>
                  <p style={{
                    fontSize: '12px',
                    color: '#888888',
                    margin: 0
                  }}>
                    Vence: {task.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Logros recientes */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
            padding: '24px'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#1F1F1F',
              marginBottom: '16px'
            }}>
              Logros Recientes
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {achievementsData.map((achievement, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px'
                }}>
                  <span style={{ fontSize: '24px' }}>{achievement.icon}</span>
                  <div>
                    <h4 style={{
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#333333',
                      margin: '0 0 4px 0'
                    }}>
                      {achievement.title}
                    </h4>
                    <p style={{
                      fontSize: '12px',
                      color: '#888888',
                      margin: 0
                    }}>
                      Hace {achievement.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Análisis de tiempo */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
            padding: '24px'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: 600,
              color: '#1F1F1F',
              marginBottom: '16px'
            }}>
              Análisis de Tiempo
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: '14px',
                  color: '#333333'
                }}>
                  Matemáticas
                </span>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#4D44C3'
                }}>
                  8h
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: '14px',
                  color: '#333333'
                }}>
                  Programación
                </span>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#F5A623'
                }}>
                  12h
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: '14px',
                  color: '#333333'
                }}>
                  Física
                </span>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#59C431'
                }}>
                  6h
                </span>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span style={{
                  fontSize: '14px',
                  color: '#333333'
                }}>
                  Historia
                </span>
                <span style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#E54F4F'
                }}>
                  2h
                </span>
              </div>
              <div style={{
                marginTop: '16px',
                padding: '12px',
                backgroundColor: '#F5F5F5',
                borderRadius: '6px',
                textAlign: 'center'
              }}>
                <p style={{
                  fontSize: '12px',
                  color: '#888888',
                  margin: '0 0 4px 0'
                }}>
                  Promedio diario
                </p>
                <span style={{
                  fontSize: '18px',
                  fontWeight: 600,
                  color: '#4D44C3'
                }}>
                  4h
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Estilos responsivos inline */}
      <style>{`
        @media (max-width: 768px) {
          main > div:nth-child(3) {
            grid-template-columns: 1fr !important;
          }
          main > div:nth-child(4) {
            grid-template-columns: 1fr !important;
          }
        }
        
        button:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
      `}</style>
    </div>
  );
};

export default Index;
