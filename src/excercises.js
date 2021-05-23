const excercises = {
    benchPress: { name: 'bänkpress', RM: 55 },
    deadLift: { name: 'marklyft', RM: 40 },
    squat: { name: 'knäböj', RM: 40 },
    pullUp: { name: 'pull ups', RM: null },
    handlePress: { name: 'hantel press', RM: null },
    pushUp: { name: 'armhävningar', RM: null },
    gobletSquat: { name: 'benböj', RM: null },
    romanianDeadLift: { name: 'rak marklyft', RM: null },
}

export const weeklySchedule = [
    {
        day: 'sunday',
        dayNo: 0,
        excercises: [],
    },
    {
        day: 'monday',
        dayNo: 1,
        excercises: [
            {
                ...excercises.deadLift,
                sets: 5,
                repetitions: 3,
                weight: excercises.deadLift.RM * 0.7,
            },
            {
                ...excercises.benchPress,
                sets: 4,
                repetitions: 4,
                weight: excercises.benchPress.RM * 0.85,
            },
            {
                ...excercises.squat,
                sets: 3,
                repetitions: 10,
                weight: excercises.squat.RM * 0.7,
            },
        ],
    },
    {
        day: 'tuesday',
        dayNo: 2,
        excercises: [],
    },
    {
        day: 'wednesday',
        dayNo: 3,
        excercises: [
            {
                ...excercises.deadLift,
                sets: 3,
                repetitions: 10,
                weight: excercises.deadLift.RM * 0.65,
            },
            {
                ...excercises.benchPress,
                sets: 5,
                repetitions: 3,
                weight: excercises.benchPress.RM * 0.7,
            },
            {
                ...excercises.squat,
                sets: 4,
                repetitions: 4,
                weight: excercises.squat.RM * 0.85,
            },
        ],
    },
    {
        day: 'thursday',
        dayNo: 4,
        excercises: [],
    },
    {
        day: 'friday',
        dayNo: 5,
        excercises: [
            {
                ...excercises.deadLift,
                sets: 4,
                repetitions: 4,
                weight: excercises.deadLift.RM * 0.85,
            },
            {
                ...excercises.benchPress,
                sets: 3,
                repetitions: 10,
                weight: excercises.benchPress.RM * 0.7,
            },
            {
                ...excercises.squat,
                sets: 5,
                repetitions: 3,
                weight: excercises.squat.RM * 0.7,
            },
        ],
    },
    {
        day: 'saturday',
        dayNo: 6,
        excercises: [
            {
                ...excercises.pullUp,
                sets: 4,
                repetitions: 6,
            },
            {
                ...excercises.handlePress,
                sets: 4,
                repetitions: 6,
            },
            {
                ...excercises.romanianDeadLift,
                sets: 4,
                repetitions: 8,
            },
            {
                ...excercises.pushUp,
                sets: 3,
                repetitions: 15,
            },
            {
                ...excercises.gobletSquat,
                sets: 3,
                repetitions: 12,
            },
        ],
    },
]
