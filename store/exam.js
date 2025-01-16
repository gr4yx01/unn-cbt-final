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
    examToParticipateIn: {},
    questions: [],
    selectedExamDetail: {},
    selectedExamId: '',
    participationId: '',
    setExamDetail: (exam) => set({ examDetail: exam }),
    addQuestions: (question) => set((state) => ({ questions: [...state.questions, question] })),
    clearQuestions: () => set({ questions: [] }),
    setSelectedExamDetail: (detail) => set({ selectedExamDetail: detail }),
    setSelectedExamId: (id) => set({ selectedExamId: id }),
    setExamToParticipateIn: (exam) => set({ examToParticipateIn: exam }),
    setParticipationId: (id) => set({ participationId: id })
}))

export default useExamStore