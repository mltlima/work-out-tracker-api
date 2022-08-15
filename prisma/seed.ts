import prisma from '../src/database.js';

async function main() {

    //create user
    await prisma.user.createMany({
      data: [ { name: "Top User", email: "test@mail.com", password: "012345678",
              height: 180, weight: 80, age: 25} ],
      skipDuplicates: true,
    })
    //create programs
    await prisma.program.createMany({
        data: [ { name: "PPL", end: "01/01/2023" },
                { name: "PHAT", end: "01/01/2023"  }, 
                { name: "nSuns", end: "01/01/2023"  }, ],
        skipDuplicates: true,
    })

    //create blocks
    await prisma.block.createMany({
        data: [ { name: "Pull", day: "Monday", programId: 1 }, 
                { name: "Push", day: "Wednesday", programId: 1 }, 
                { name: "Legs", day: "Friday", programId: 1 },
                { name: "Upper Body", day: "Monday", programId: 2 }, 
                { name: "Lower Body", day: "Tuesday", programId: 2 }, 
                { name: "Back and Shoulders", day: "Thursday", programId: 2 },
                { name: "Lower Body", day: "Friday", programId: 2 }, 
                { name: "Chest and Arms", day: "Saturday", programId: 2 }, 
                { name: "Chest, Arms, Back", day: "Monday", programId: 3 },
                { name: "Legs, Abs", day: "Tuesday", programId: 3 }, 
                { name: "Arms, Other", day: "Thursday", programId: 3 }, 
                { name: "Back, Abs", day: "Friday", programId: 3 },],
        skipDuplicates: true,
    })

    //create workouts
    await prisma.workout.createMany({
        data: [ {name: "Deadlift", blockId: 1, userId: 1, videoUrl: "https://www.youtube.com/watch?v=1ZXobu7JvvE", sets: 3, reps: 10},
                {name: "BB Row", blockId: 1, userId: 1, videoUrl: "https://www.youtube.com/watch?v=kBWAon7ItDw", sets: 3, reps: 10},
                {name: "Lat Pulldown", blockId: 1, userId: 1, videoUrl: "https://www.youtube.com/watch?v=CAwf7n6Luuc", sets: 3, reps: 10},
                {name: "Cable Row", blockId: 1, userId: 1, videoUrl: "https://www.youtube.com/watch?v=GZbfZ033f74", sets: 3, reps: 10},
                {name: "Face Pull", blockId: 1, userId: 1, videoUrl: "https://www.youtube.com/watch?v=rep-qVOkqgk", sets: 3, reps: 10},
                {name: "Hammer Curl", blockId: 1, userId: 1, videoUrl: "https://www.youtube.com/watch?v=QAWcrV8CAd0", sets: 3, reps: 10},
                {name: "DB Curl", blockId: 1, userId: 1, videoUrl: "https://www.youtube.com/watch?v=in7PaeYlhrM", sets: 3, reps: 10},

                {name: "Bench Press", blockId: 2, userId: 1, videoUrl: "https://www.youtube.com/watch?v=SCVCLChPQFY", sets: 3, reps: 10},
                {name: "Overhead Press", blockId: 2, userId: 1, videoUrl: "https://www.youtube.com/watch?v=_RlRDWO2jfg&t=349s", sets: 3, reps: 10},
                {name: "Incline DB", blockId: 2, userId: 1, videoUrl: "https://www.youtube.com/watch?v=uJA9dx_MMyA", sets: 3, reps: 10},
                {name: "Tricep Pushdown", blockId: 2, userId: 1, videoUrl: "https://www.youtube.com/watch?v=30owVlZZEf8", sets: 3, reps: 10},
                {name: "Overhead Tricep Ext", blockId: 2, userId: 1, videoUrl: "https://www.youtube.com/watch?v=X-iV-cG8cYs", sets: 3, reps: 10},
                {name: "Lateral Raise", blockId: 2, userId: 1, videoUrl: "https://www.youtube.com/watch?v=Wz1C8NzWg5A", sets: 3, reps: 10},

                {name: "Squat", blockId: 3, userId: 1, videoUrl: "https://www.youtube.com/watch?v=ultWZbUMPL8", sets: 3, reps: 10},
                {name: "Romanian Deadlift", blockId: 3, userId: 1, videoUrl: "https://www.youtube.com/watch?v=7j-2w4-P14I", sets: 3, reps: 10},
                {name: "Leg Press", blockId: 3, userId: 1, videoUrl: "https://www.youtube.com/watch?v=GvRgijoJ2xY", sets: 3, reps: 10},
                {name: "Calf Raise", blockId: 3, userId: 1, videoUrl: "https://www.youtube.com/watch?v=-qsRtp_PbVM", sets: 3, reps: 10},
                {name: "Leg curls", blockId: 3, userId: 1, videoUrl: "https://www.youtube.com/watch?v=0a_fVS2s4Ho", sets: 3, reps: 10},

                {name: "Bent Over Row", blockId: 4, userId: 1, videoUrl: "https://www.youtube.com/watch?v=kBWAon7ItDw", sets: 3, reps: 10},
                {name: "Weighted Pull ups", blockId: 4, userId: 1, videoUrl: "https://www.youtube.com/watch?v=5joIx-VL2XI", sets: 3, reps: 10},
                {name: "Rack chins", blockId: 4, userId: 1, videoUrl: "https://www.youtube.com/watch?v=Iq3-trU7GLQ", sets: 3, reps: 10},
                {name: "Flat dumbbell presses", blockId: 4, userId: 1, videoUrl: "https://www.youtube.com/watch?v=xphvjGDZeYE", sets: 3, reps: 10},
                {name: "Weighted dips", blockId: 4, userId: 1, videoUrl: "https://www.youtube.com/watch?v=yN6Q1UI_xkE", sets: 3, reps: 10},
                {name: "Seated dumbbell shoulder presses", blockId: 4, userId: 1, videoUrl: "https://www.youtube.com/watch?v=lfb3ffbrd4Q", sets: 3, reps: 10},
                {name: "Cambered bar curls", blockId: 4, userId: 1, videoUrl: "https://www.youtube.com/watch?v=ot87aACYlKI", sets: 3, reps: 10},
                {name: "Skull crushers", blockId: 4, userId: 1, videoUrl: "https://www.youtube.com/watch?v=d_KZxkY_0cM", sets: 3, reps: 10},

                {name: "Squat", blockId: 5, userId: 1, videoUrl: "https://www.youtube.com/watch?v=ultWZbUMPL8", sets: 3, reps: 10},
                {name: "Hack Squats", blockId: 5, userId: 1, videoUrl: "https://www.youtube.com/watch?v=0tn5K9NlCfo", sets: 3, reps: 10},
                {name: "Leg extensions", blockId: 5, userId: 1, videoUrl: "https://www.youtube.com/watch?v=ljO4jkwv8wQ", sets: 3, reps: 10},
                {name: "Stiff legged deadlifts", blockId: 5, userId: 1, videoUrl: "https://www.youtube.com/watch?v=TJwlBS1jo0Y", sets: 3, reps: 10},
                {name: "Glute ham raises", blockId: 5, userId: 1, videoUrl: "https://www.youtube.com/watch?v=w_7UaXfsbaw", sets: 3, reps: 10},
                {name: "Standing calf raise", blockId: 5, userId: 1, videoUrl: "https://www.youtube.com/watch?v=k67UjgvJdEk", sets: 3, reps: 10},
                {name: "Seated calf raise", blockId: 5, userId: 1, videoUrl: "https://www.youtube.com/watch?v=JbyjNymZOt0", sets: 3, reps: 10},

                {name: "Bent over Row", blockId: 6, userId: 1, videoUrl: "https://www.youtube.com/watch?v=kBWAon7ItDw", sets: 3, reps: 10},
                {name: "Rack chins", blockId: 6, userId: 1, videoUrl: "https://www.youtube.com/watch?v=Iq3-trU7GLQ", sets: 3, reps: 10},
                {name: " Seated cable row", blockId: 6, userId: 1, videoUrl: "https://www.youtube.com/watch?v=xQNrFHEMhI4", sets: 3, reps: 10},
                {name: "Dumbbell rows", blockId: 6, userId: 1, videoUrl: "https://www.youtube.com/watch?v=roCP6wCXPqo", sets: 3, reps: 10},
                {name: "Close grip pulldowns", blockId: 6, userId: 1, videoUrl: "https://www.youtube.com/watch?v=neP32qCyPbQ", sets: 3, reps: 10},
                {name: "Seated dumbbell presses", blockId: 6, userId: 1, videoUrl: "https://www.youtube.com/watch?v=b5JzUH8gsOg", sets: 3, reps: 10},
                {name: "Upright rows", blockId: 6, userId: 1, videoUrl: "https://www.youtube.com/watch?v=R2sVOZaSjdo", sets: 3, reps: 10},
                {name: "Side lateral raises", blockId: 6, userId: 1, videoUrl: "https://www.youtube.com/watch?v=zpUTA5i16kA", sets: 3, reps: 10},

                {name: "Squat", blockId: 7, userId: 1, videoUrl: "https://www.youtube.com/watch?v=ultWZbUMPL8", sets: 3, reps: 10},
                {name: "Hack Squats", blockId: 7, userId: 1, videoUrl: "https://www.youtube.com/watch?v=0tn5K9NlCfo", sets: 3, reps: 10},
                {name: "Leg presses", blockId: 7, userId: 1, videoUrl: "https://www.youtube.com/watch?v=GvRgijoJ2xY&t=11s", sets: 3, reps: 10},
                {name: "Leg extensions", blockId: 7, userId: 1, videoUrl: "https://www.youtube.com/watch?v=ljO4jkwv8wQ&t=18s", sets: 3, reps: 10},
                {name: "Romanian deadlifts", blockId: 7, userId: 1, videoUrl: "https://www.youtube.com/watch?v=7j-2w4-P14I", sets: 3, reps: 10},
                {name: "Lying leg curls", blockId: 7, userId: 1, videoUrl: "https://www.youtube.com/watch?v=6y_GEg3YFC0", sets: 3, reps: 10},
                {name: "Seated leg curls", blockId: 7, userId: 1, videoUrl: "https://www.youtube.com/watch?v=ELOCsoDSmrg", sets: 3, reps: 10},
                {name: "Donkey calf raises", blockId: 7, userId: 1, videoUrl: "https://www.youtube.com/watch?v=r30EoMPSNns", sets: 3, reps: 10},
                {name: "Seated calf raises", blockId: 7, userId: 1, videoUrl: "https://www.youtube.com/watch?v=JbyjNymZOt0", sets: 3, reps: 10},

                {name: "Flat dumbbell presses", blockId: 8, userId: 1, videoUrl: "https://www.youtube.com/watch?v=jRUC6IVav30", sets: 3, reps: 10},
                {name: "Incline dumbbell presses", blockId: 8, userId: 1, videoUrl: "https://www.youtube.com/watch?v=0G2_XV7slIg", sets: 3, reps: 10},
                {name: "Hammer strength chest press", blockId: 8, userId: 1, videoUrl: "https://www.youtube.com/watch?v=0CFOTfwP4CY", sets: 3, reps: 10},
                {name: "Incline cable flyes", blockId: 8, userId: 1, videoUrl: "https://www.youtube.com/watch?v=GtHNC-5GtR0", sets: 3, reps: 10},
                {name: "Cambered bar preacher curls", blockId: 8, userId: 1, videoUrl: "https://www.youtube.com/watch?v=fIWP-FRFNU0", sets: 3, reps: 10},
                {name: "Dumbbell concentration curls", blockId: 8, userId: 1, videoUrl: "https://www.youtube.com/watch?v=Jvj2wV0vOYU", sets: 3, reps: 10},
                {name: "Spider curls ", blockId: 8, userId: 1, videoUrl: "https://www.youtube.com/watch?v=-4RNtxT0LwM", sets: 3, reps: 10},
                {name: "Seated tricep extension", blockId: 8, userId: 1, videoUrl: "https://www.youtube.com/watch?v=X-iV-cG8cYs&t=15s", sets: 3, reps: 10},
                {name: "Cable pressdowns", blockId: 8, userId: 1, videoUrl: "https://www.youtube.com/watch?v=2-LAMcpzODU", sets: 3, reps: 10},
                {name: "Cable kickbacks", blockId: 8, userId: 1, videoUrl: "https://www.youtube.com/watch?v=dJa_Nf4zdik", sets: 3, reps: 10},
        ],
        skipDuplicates: true,
    })
}




main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });