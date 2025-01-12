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
    setExamDetail: (exam) => set({ examDetail: exam }),
    addQuestions: (question) => set((state) => ({ questions: [...state.questions, question] })),
}))

export default useExamStore