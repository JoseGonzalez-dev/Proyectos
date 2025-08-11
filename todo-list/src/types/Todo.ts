// Definimos la estructura de una tarea
export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}