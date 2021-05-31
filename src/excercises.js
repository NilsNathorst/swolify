const excercises = {
    benchPress: { name: 'bänkpress', oneRepMax: 65 },
    deadLift: { name: 'marklyft', oneRepMax: 60 },
    squat: { name: 'knäböj', oneRepMax: 60 },
    pullUp: { name: 'pull ups', oneRepMax: null },
    handlePress: { name: 'hantel press', oneRepMax: null },
    pushUp: { name: 'aoneRepMaxhävningar', oneRepMax: null },
    gobletSquat: { name: 'benböj', oneRepMax: null },
    romanianDeadLift: { name: 'rak marklyft', oneRepMax: null },
}

const excerciseType = {
    hypertrophy: {
        sets: 3,
        repetitions: 10,
        type: { name: 'hypertrophy', icon: '📈' },
    },
    power: { sets: 5, repetitions: 3, type: { name: 'power', icon: '💥' } },
    strength: {
        sets: 4,
        repetitions: 4,
        type: { name: 'strength', icon: '💪' },
    },
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
                ...excerciseType['power'],
                weight: excercises.deadLift.oneRepMax * 0.7,
            },
            {
                ...excercises.benchPress,

                ...excerciseType['strength'],
                weight: excercises.benchPress.oneRepMax * 0.85,
            },
            {
                ...excercises.squat,
                sets: 3,
                repetitions: 10,
                ...excerciseType['hypertrophy'],
                weight: excercises.squat.oneRepMax * 0.7,
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
                ...excerciseType['hypertrophy'],
                weight: excercises.deadLift.oneRepMax * 0.65,
            },
            {
                ...excercises.benchPress,
                sets: 5,
                repetitions: 3,
                ...excerciseType['power'],
                weight: excercises.benchPress.oneRepMax * 0.7,
            },
            {
                ...excercises.squat,
                sets: 4,
                repetitions: 4,
                ...excerciseType['strength'],
                weight: excercises.squat.oneRepMax * 0.85,
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
                ...excerciseType['strength'],
                weight: excercises.deadLift.oneRepMax * 0.85,
            },
            {
                ...excercises.benchPress,
                sets: 3,
                repetitions: 10,
                ...excerciseType['hypertrophy'],
                weight: excercises.benchPress.oneRepMax * 0.7,
            },
            {
                ...excercises.squat,
                sets: 5,
                repetitions: 3,
                ...excerciseType['power'],
                weight: excercises.squat.oneRepMax * 0.7,
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
