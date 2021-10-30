export interface InitialState {
  id: number | null;
  firstName: string;
  lastName: string;
}

export interface ChildProps {
  user: InitialState;
}
