import { create } from 'zustand'
import { Goal } from '../types';

const useGoals = create((set) => ({
  goals: [],
  setGoals: (newGoal: Goal) => set((state: any) => ({
    goals: [...state.goals, newGoal]
  })),
  removeGoal: (oldGoal: Goal) => set((state: any) => ({
    goals: state.goals.filter((gaol: Goal) => gaol.name !== oldGoal.name)
  }))
}))

export default useGoals;