import { Priority, State } from './Enum'

export interface Todo {
  id: number,
  name: string,
  priority: Priority,
  state: State
}
