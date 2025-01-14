import { create } from 'zustand'

const useExamStore = create((set) => ({
    examDetail: {
        id: '',
        name: '',
        description: '',
        noOfQuestion: '',
        questionType: '',
        examType: ''
    },
    questions: [],
    selectedExamDetail: {},
    setExamDetail: (exam) => set({ examDetail: exam }),
    addQuestions: (question) => set((state) => ({ questions: [...state.questions, question] })),
    clearQuestions: () => set({ questions: [] }),
    setSelectedExamDetail: (detail) => set({ selectedExamDetail: detail })
}))

export default useExamStore