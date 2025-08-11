import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  Modal,
} from 'react-native';
import { Todo } from '../types/Todo';
import { styles } from '../styles/Style';

export default function List() {
  // Estado para almacenar las tareas
  const [todos, setTodos] = useState<Todo[]>([]);
  // Estado para el texto del input
  const [inputText, setInputText] = useState<string>('');
  // Estados para el modal de edición
  const [isEditModalVisible, setIsEditModalVisible] = useState<boolean>(false);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [editText, setEditText] = useState<string>('');

  // Función para agregar una nueva tarea
  const addTodo = (): void => {
    if (inputText.trim() === '') {
      Alert.alert('Error', 'Por favor escribe una tarea');
      return;
    }

    const newTodo: Todo = {
      id: Date.now().toString(), // ID simple usando timestamp
      text: inputText.trim(),
      completed: false,
      createdAt: new Date(),
    };

    setTodos([...todos, newTodo]);
    setInputText(''); // Limpiar el input
  };

  // Función para marcar/desmarcar como completada
  const toggleTodo = (id: string): void => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Función para eliminar una tarea
  const deleteTodo = (id: string): void => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id: string, newText: string): void => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  // Función para abrir el modal de edición
  const openEditModal = (todo: Todo): void => {
    setEditingTodo(todo);
    setEditText(todo.text);
    setIsEditModalVisible(true);
  };

  // Función para guardar la edición
  const saveEdit = (): void => {
    if (editText.trim() === '') {
      Alert.alert('Error', 'Por favor escribe una tarea');
      return;
    }
    
    if (editingTodo) {
      updateTodo(editingTodo.id, editText.trim());
    }
    
    setIsEditModalVisible(false);
    setEditingTodo(null);
    setEditText('');
  };

  // Función para cancelar la edición
  const cancelEdit = (): void => {
    setIsEditModalVisible(false);
    setEditingTodo(null);
    setEditText('');
  };

  // Componente para renderizar cada tarea
  const renderTodo = ({ item }: { item: Todo }) => (
    <View style={styles.todoItem}>
      <TouchableOpacity
        style={styles.todoText}
        onPress={() => toggleTodo(item.id)}
      >
        <Text style={[
          styles.todoTextContent,
          item.completed && styles.completedText
        ]}>
          {item.text}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteTodo(item.id)}
      >
        <Text style={styles.deleteButtonText}>❌</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => openEditModal(item)}
      >
        <Text style={styles.deleteButtonText}>✏️</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mi Todo List</Text>

      {/* Input para agregar tareas */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Escribe una nueva tarea..."
          onSubmitEditing={addTodo}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de tareas */}
      <FlatList
        data={todos.sort((a, b) => {
          // Primero por estado (pendientes primero)
          if (a.completed !== b.completed) {
            return Number(a.completed) - Number(b.completed);
          }
          // Si tienen el mismo estado, ordenar por fecha (más recientes primero)
          return b.createdAt.getTime() - a.createdAt.getTime();
        })}
        renderItem={renderTodo}
        keyExtractor={(item) => item.id}
        style={styles.list}
        showsVerticalScrollIndicator={false}
      />

      {/* Contador de tareas */}
      <Text style={styles.counter}>
        Total: {todos.length} | Completadas: {todos.filter(t => t.completed).length}
      </Text>

      {/* Modal para editar tareas */}
      <Modal
        visible={isEditModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={cancelEdit}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Editar Tarea</Text>
            
            <TextInput
              style={styles.modalInput}
              value={editText}
              onChangeText={setEditText}
              placeholder="Escribe el nuevo texto..."
              multiline={true}
              autoFocus={true}
            />
            
            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={[styles.modalButton, styles.cancelButton]} 
                onPress={cancelEdit}
              >
                <Text style={styles.cancelButtonText}>Cancelar</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.modalButton, styles.saveButton]} 
                onPress={saveEdit}
              >
                <Text style={styles.saveButtonText}>Guardar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}