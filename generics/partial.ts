/**
 * Partial<T>的作用就是将某个类型里的属性全部变为可选项？
 */

// 定义

type Partial<T> = {
  [P in keyof T]?: T[P]
};

// 示例
interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "Learn TS",
  description: "Learn TypeScript",
};

const todo2 = updateTodo(todo1, {
  description: "Learn TypeScript Enum",
});

// 在上面的方法中

interface Fields {
  title?: string | undefined;
  description?: string | undefined;
}